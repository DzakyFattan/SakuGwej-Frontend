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

const selectionBar = ref<InstanceType<typeof SelectionBar>>()

const emit = defineEmits(["trigger-tambahkan", "trigger-delete", "trigger-change-page", "trigger-change-interval"]);

const type = ref("transactions");

watch(props, () => {
  transactions.value = props.transactionData;
});

const addCatatan = (arg: boolean) => {
  emit("trigger-tambahkan", arg);
}
const selectTransaction = () => {
  selectionBar.value?.checkSelected()
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
  <SelectionBar 
    @trigger-tambahkan="addCatatan" 
    @trigger-delete="deleteTransaction"
    @trigger-change-page="changePage" 
    @trigger-change-interval="changeInterval"
    v-bind:type="type"
    ref="selectionBar" />
  <SectionItemContainer 
    v-for="(transaction, idx) in transactions" 
    v-bind:transaction="transaction" 
    v-bind:key="idx"
    @trigger-select="selectTransaction" 
    :fetch-data="props.fetchData"/>
</template>
