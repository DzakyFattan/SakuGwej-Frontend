<script setup lang="ts">
import CatatanBarContainer from "../item/catatan/container/CatatanBarContainer.vue";

import type { TransactionData } from "@/types.vue";

const emit = defineEmits(["trigger-tambahkan", "trigger-delete"]);

const props = defineProps<{
  transactionData: TransactionData;
  fetchData: () => void;
}>();

const addCatatan = (arg: boolean) => {
  emit("trigger-tambahkan", arg);
}
const deleteTransaction = () => {
  emit("trigger-delete")
}
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <h3 class="ml-24 mt-6 text-xl font-bold">Catatan</h3>
    <CatatanBarContainer 
      @trigger-delete="deleteTransaction"
      @trigger-tambahkan="addCatatan"
      v-bind:transaction-data="transactionData"
      :fetch-data="props.fetchData" />
  </div>
</template>

<style scoped></style>
