<script setup lang="ts">
import AccountBarContainer from "../item/rekening/container/AccountBarContainer.vue";

import type { AccountData } from "@/types.vue";

const emit = defineEmits(["trigger-tambahkan"]);

const props = defineProps<{
  accountData: AccountData;
  fetchData: () => void;
}>();

function addRekening(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <h3 class="ml-24 mt-6 text-xl font-bold">Rekening</h3>
    <AccountBarContainer 
      @trigger-tambahkan="addRekening"
      v-bind:account-data="props.accountData"
      :fetch-data="props.fetchData" />
  </div>
</template>

<style scoped></style>
