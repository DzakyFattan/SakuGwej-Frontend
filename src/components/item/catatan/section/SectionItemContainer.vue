<script setup lang="ts">
import SectionItemBar from "./SectionItemBar.vue";
import { ref, watch } from "vue";
import { parseToToday } from "@/utils/parse";

import type { Transaction } from "@/types.vue";

const props = defineProps<
  {
    transaction: {
      createdAt: Date,
      notes: Transaction[];
    };
    fetchData: () => void;
  }
>();

const transaction = ref({} as {
  createdAt: Date,
  notes: Transaction[];
});
const notes = ref(
  [] as Transaction[]
);
const createdAt = ref<Date>();

watch(props, () => {
  fetchData();
});

transaction.value = props.transaction;
createdAt.value = transaction.value.createdAt;
notes.value = transaction.value.notes;

const emit = defineEmits(["trigger-select"]);

const selectTransaction = () => {
  emit("trigger-select");
}

const fetchData = () => {
  props.fetchData();
  createdAt.value = props.transaction.createdAt;
  notes.value = props.transaction.notes;
}
</script>

<template>
  <p class="w-[75vh] h-fit self-center mt-4 mb-2 px-7" :fetch-data="fetchData">{{ parseToToday(createdAt as Date) }}</p>
  <SectionItemBar 
    v-for="(note, idx) in notes" 
    v-bind:note="note"
    v-bind:key="idx"
    @trigger-select="selectTransaction"
    :fetch-data="fetchData" />
</template>
