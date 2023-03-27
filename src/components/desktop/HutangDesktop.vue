<script setup lang="ts">
import HutangBarContainer from "../item/hutang/container/HutangBarContainer.vue";

import type { DebtData } from "@/types.vue";

const emit = defineEmits(["trigger-tambahkan", "trigger-delete", "trigger-change-page", "trigger-change-interval"]);

const props = defineProps<{
  debtData: DebtData;
  fetchData: () => void;
}>();

const addHutangPiutang = (arg: boolean) => {
  emit("trigger-tambahkan", arg);
}
const deleteDebt = () => {
  emit("trigger-delete")
}
const changePage = (page: number) => {
  emit("trigger-change-page", page)
}
const changeInterval = (interval: string) => {
  emit("trigger-change-interval", interval)
}
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <h3 class="ml-24 mt-6 text-xl font-bold">Hutang</h3>
    <HutangBarContainer 
      @trigger-tambahkan="addHutangPiutang"
      @trigger-delete="deleteDebt"
      @trigger-change-page="changePage"
      @trigger-change-interval="changeInterval"
      v-bind:debt-data="props.debtData"
      :fetch-data="props.fetchData" />
  </div>
</template>

<style scoped></style>
