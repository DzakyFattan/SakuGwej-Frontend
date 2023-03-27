<script setup lang="ts">
import SectionItemBar from "./SectionItemBar.vue";
import { ref } from "vue";
import { parseToToday } from "@/utils/parse";

import type { Transaction } from "@/types.vue";

const props = defineProps<
  {
    transaction: {
      createdAt: Date,
      notes: Transaction[];
    };
  }
>();

const transactions = ref({} as {
  createdAt: Date,
  notes: Transaction[];
});

const notes = ref(
  [] as Transaction[]
);

console.log(props.transaction);

transactions.value = props.transaction;

const createdAt = transactions.value.createdAt;

</script>

<template>
  <p class="w-[75vh] h-fit self-center mt-4 mb-2 px-7">{{ parseToToday(createdAt) }}</p>
  <SectionItemBar 
    v-for="(note, idx) in transactions.notes" 
    v-bind:note="note"
    v-bind:key="idx" />
</template>
