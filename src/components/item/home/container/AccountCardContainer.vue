<script setup lang="ts">
import AccountCard from "../card/AccountCard.vue";
import AddAccountCard from "../card/AddAccountCard.vue";
import { ref, onMounted } from "vue";

const data = [
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-iris-80",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-ryo",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-bocchi",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-secondary-ryo",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-nijika",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-kita",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-iris-80",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-ryo",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-bocchi",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-secondary-ryo",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-nijika",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-kita",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-iris-80",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-ryo",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-bocchi",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-secondary-ryo",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-nijika",
  },
  {
    name: "Cash",
    nominal: 10000,
    bg_color: "bg-color-main-kita",
  },
];

const accounts = ref();
const count = countData();

accounts.value = data.slice(0, count - 1);

onMounted(() => {
  window.addEventListener("resize", function () {
    const count = countData();
    accounts.value = data.slice(0, count - 1);
  });
});

function countData() {
  return Math.floor((window.screen.width - 200) / 190);
}
</script>

<template>
  <div class="flex flex-wrap mt-4 mx-3 px-6">
    <AccountCard v-for="account in accounts" v-bind:account="account" />
    <AddAccountCard />
  </div>
</template>
