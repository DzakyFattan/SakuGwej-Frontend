<script setup lang="ts">
import SelectionBar from "../../selection/SelectionBar.vue";
import HutangBar from "../bar/HutangBar.vue";

import { ref, watch } from "vue";

import type { Debt, DebtData } from "@/types.vue";

const props = defineProps<{
  debtData: DebtData;
  fetchData: () => void;
}>();

const debts = ref(
  [] as Debt[]
);

const selectionBar = ref<InstanceType<typeof SelectionBar>>()

const emit = defineEmits(["trigger-tambahkan", "trigger-delete", "trigger-change-page", "trigger-change-interval"]);

const type = "debts";

watch(props, () => {
  debts.value = props.debtData;
});

const addHutangPiutang = (arg: boolean) => {
  emit("trigger-tambahkan", arg);
}
const selectDebt = () => {
  console.log("selectDebt")
  selectionBar.value?.checkSelected()
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
  <SelectionBar 
    @trigger-tambahkan="addHutangPiutang" 
    @trigger-delete="deleteDebt"
    @trigger-change-page="changePage"
    @trigger-change-interval="changeInterval"
    ref="selectionBar"  
    v-bind:type="type" />
  <HutangBar 
    v-for="(debt, idx) in debts" 
    v-bind:debt="debt" 
    v-bind:key="idx" 
    @trigger-select="selectDebt"/>
</template>
