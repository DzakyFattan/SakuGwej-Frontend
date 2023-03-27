<script setup lang="ts">
import CatatanBarContainer from "../item/catatan/container/CatatanBarContainer.vue";

import type { TransactionData } from "@/types.vue";

const emit = defineEmits(["trigger-tambahkan"]);

const props = defineProps<{
  transactionData: TransactionData;
  fetchData: () => void;
}>();

function addCatatan(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <h3 class="ml-24 mt-6 text-xl font-bold">Catatan</h3>
    <CatatanBarContainer 
      @trigger-tambahkan="addCatatan"
      v-bind:transaction-data="transactionData"
      :fetch-data="props.fetchData" />
  </div>
</template>

<style scoped></style>
