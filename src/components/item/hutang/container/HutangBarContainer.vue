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

const emit = defineEmits(["trigger-tambahkan"]);

const type = ref();

watch(props, () => {
  debts.value = props.debtData;
});

function addHutangPiutang(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <SelectionBar @trigger-tambahkan="addHutangPiutang" v-bind:type="type" />
  <HutangBar v-for="(debt, idx) in debts" v-bind:debt="debt" v-bind:key="idx" />
</template>
