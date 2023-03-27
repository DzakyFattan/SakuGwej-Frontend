<script setup lang="ts">
import SelectionBar from "../../selection/SelectionBar.vue";
import SectionItemContainer from "../section/SectionItemContainer.vue";

import { ref, watch } from "vue";

import type { TransactionData } from "@/types.vue";

const props = defineProps<{
  transactionData: TransactionData;
  fetchData: () => void;
}>();

const transactions = ref([] as TransactionData);

const emit = defineEmits(["trigger-tambahkan"]);

const type = ref();

watch(props, () => {
  transactions.value = props.transactionData;
});

function addCatatan(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <SelectionBar @trigger-tambahkan="addCatatan" v-bind:type="type" />
  <SectionItemContainer 
    v-for="(transaction, idx) in transactions" 
    v-bind:transaction="transaction" 
    v-bind:key="idx" />
</template>
