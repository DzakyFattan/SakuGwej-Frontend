<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { parseNominal } from "@/utils/parse";

const props = defineProps(["debt"]);
const debt = props.debt;

const nominal = parseNominal(debt.nominal);

const { themeClasses } = useThemeStore();
</script>

<template>
  <div
    :class="themeClasses.borderMain"
    class="flex flex-row rounded-md w-fit h-20 items-center self-center mx-1 my-2 px-4"
  >
    <input type="checkbox" class="select mr-4 w-6 h-6" />
    <img src="/src/assets/icons/hutang.png" class="w-12 h-12 mr-3" />
    <p class="w-20">{{ debt.category }}</p>
    <p class="w-20 ml-[13vh] mr-[16vh]">{{ debt.deadline }}</p>
    <p class="w-20">{{ nominal }}</p>
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
</style>
