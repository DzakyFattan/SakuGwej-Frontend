<script setup lang="ts">
import { ref } from "vue";
import { useThemeStore } from "@/stores/theme";
import { parseNominal, parseToDueDate } from "@/utils/parse";

import type { Debt } from "@/types.vue";

const { themeClasses } = useThemeStore();
const themeClass = themeClasses;

const props = defineProps<{
  debt: Debt;
}>();

const emit = defineEmits(["trigger-select"]);

const debt = ref({} as Debt);

debt.value = props.debt;

const dueDate = debt.value.dueDate;

const selectOne = () => {
  emit("trigger-select");
};
</script>

<template>
  <div
    :class="themeClass.borderMain"
    class="flex flex-row rounded-md w-fit h-20 items-center self-center mx-1 my-2 px-4"
  >
    <input type="checkbox" class="select mr-4 w-6 h-6" :id="debt._id" name="debts" @change="selectOne"/>
    <img src="/src/assets/icons/hutang.png" class="w-12 h-12 mr-3" />
    <p class="w-20">{{ debt.type == "credit" ? "Piutang" : "Hutang" }}</p>
    <p class="w-20 ml-[8rem] mr-[12.5rem]">{{ parseToDueDate(dueDate) }}</p>
    <p class="w-20">{{ parseNominal(debt.amount) }}</p>
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
