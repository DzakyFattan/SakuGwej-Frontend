<script setup lang="ts">
import CatatanBarContainer from "../item/catatan/container/CatatanBarContainer.vue";
import { ref } from "vue";

import type { TransactionData } from "@/types.vue";

const emit = defineEmits(["trigger-tambahkan", "trigger-delete", "trigger-change-page", "trigger-change-interval"]);

const props = defineProps<{
  transactionData: TransactionData;
  fetchData: () => void;
}>();

const type = ref("transactions")

const addCatatan = (arg: boolean) => {
  emit("trigger-tambahkan", arg);
}
const deleteTransaction = () => {
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
    <h3 class="ml-24 mt-6 text-xl font-bold">Catatan</h3>
    <CatatanBarContainer 
      @trigger-delete="deleteTransaction"
      @trigger-tambahkan="addCatatan"
      @trigger-change-page="changePage"
      @trigger-change-interval="changeInterval"
      v-bind:transaction-data="transactionData"
      :fetch-data="props.fetchData" />
  </div>
</template>

<style scoped></style>
