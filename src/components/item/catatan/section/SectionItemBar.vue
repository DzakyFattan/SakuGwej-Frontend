<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";
import { parseNominal } from "@/utils/parse";

import type { Transaction } from "@/types.vue";

const props = defineProps<{
  note: Transaction
  fetchData: () => void;
}>();

const emit = defineEmits(["trigger-select"]);

const note = ref({} as Transaction);
const desc = ref("");
const nominal = ref("");

note.value = props.note;

desc.value = note.value.description.slice(0, 24) + "...";
nominal.value = parseNominal(note.value.amount).slice(0, 12) + "...";

const { themeClasses } = useThemeStore();

const selectOne = () => {
  emit("trigger-select");
}
</script>

<template>
  <div
    :class="themeClasses.borderMain"
    class="flex flex-row rounded-md w-fit h-20 items-center self-center mx-1 my-2 px-4"
  >
    <input type="checkbox" class="select mr-4 w-6 h-6" :id="note._id" name="transactions" @change="selectOne"/>
    <img
      :src="note.category.image"
      class="w-12 h-12 mr-6"
      :class="themeClasses.icon"
    />
    <p class="w-20">{{ note.category.name }}</p>
    <p class="w-52 ml-[5rem] mr-[5rem]">{{ desc }}</p>
    <p class="w-24">{{ parseNominal(note.amount) }}</p>
    <img src="/src/assets/icons/more.png" class="w-6 h-6 ml-3" />
  </div>
</template>

<style scoped>
.select {
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  border: 1px solid var(--bocchi);
  border-radius: 2px;
}
.select:checked {
  background-color: var(--bocchi);
}
</style>
