<script setup lang="ts">
import SelectionBar from "../../selection/SelectionBar.vue";
import HutangBar from "../bar/HutangBar.vue";
import { ref } from "vue";

const data = [
  {
    category: "Hutang",
    deadline: "1 hari",
    nominal: 10000,
  },
  {
    category: "Piutang",
    deadline: "5 hari",
    nominal: 10000,
  },
  {
    category: "Hutang",
    deadline: "1 minggu",
    nominal: 10000,
  },
  {
    category: "Hutang",
    deadline: "3 minggu",
    nominal: 10000,
  },
  {
    category: "Piutang",
    deadline: "2 bulan",
    nominal: 10000,
  },
];

const debts = ref();
const type = ref();
const count = countData();
const emit = defineEmits(["trigger-tambahkan"]);

debts.value = data.slice(0, count - 1);
type.value = "hutang";

function countData() {
  return Math.floor((window.screen.height - 200) / 80);
}

function addHutangPiutang(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <SelectionBar @trigger-tambahkan="addHutangPiutang" v-bind:type="type" />
  <HutangBar v-for="debt in debts" v-bind:debt="debt" />
</template>
