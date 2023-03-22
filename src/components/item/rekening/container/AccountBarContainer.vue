<script setup lang="ts">
import SearchBar from "../bar/SearchBar.vue";
import AccountBar from "../bar/AccountBar.vue";
import { ref } from "vue";

const data = [
  {
    id: 1,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-iris-80",
  },
  {
    id: 2,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-ryo",
  },
  {
    id: 3,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-bocchi",
  },
  {
    id: 1,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-secondary-ryo",
  },
  {
    id: 2,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-nijika",
  },
  {
    id: 3,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-kita",
  },
  {
    id: 1,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-iris-80",
  },
  {
    id: 2,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-ryo",
  },
  {
    id: 3,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-bocchi",
  },
  {
    id: 1,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-secondary-ryo",
  },
  {
    id: 2,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-nijika",
  },
  {
    id: 3,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-kita",
  },
  {
    id: 1,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-iris-80",
  },
  {
    id: 2,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-ryo",
  },
  {
    id: 3,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-bocchi",
  },
  {
    id: 1,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-secondary-ryo",
  },
  {
    id: 2,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-nijika",
  },
  {
    id: 3,
    name: "Unpay",
    nominal: 10000,
    bg_color: "bg-color-main-kita",
  },
];

const accounts = ref();
const count = countData();
const emit = defineEmits(["trigger-tambahkan"]);

accounts.value = data.slice(0, count - 1);

function countData() {
  return Math.floor((window.screen.height - 200) / 80);
}
function addRekening(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <SearchBar @trigger-tambahkan="addRekening" />
  <AccountBar v-for="account in accounts" v-bind:account="account" />
</template>
