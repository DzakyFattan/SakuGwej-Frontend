<script setup lang="ts">
import HutangBarContainer from "../item/hutang/container/HutangBarContainer.vue";

import type { DebtData } from "@/types.vue";

const emit = defineEmits(["trigger-tambahkan"]);

const props = defineProps<{
  debtData: DebtData;
  fetchData: () => void;
}>();

function addHutangPiutang(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <h3 class="ml-24 mt-6 text-xl font-bold">Hutang</h3>
    <HutangBarContainer 
      @trigger-tambahkan="addHutangPiutang"
      v-bind:debt-data="props.debtData"
      :fetch-data="props.fetchData" />
  </div>
</template>

<style scoped></style>
