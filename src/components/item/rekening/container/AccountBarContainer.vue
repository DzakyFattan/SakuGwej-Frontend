<script setup lang="ts">
  import SearchBar from "../bar/SearchBar.vue";
  import AccountBar from "../bar/AccountBar.vue";
  import { ref  } from "vue";

  const data      = [
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-iris-80"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-ryo"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-bocchi"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-secondary-ryo"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-nijika"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-kita"
      },
            {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-iris-80"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-ryo"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-bocchi"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-secondary-ryo"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-nijika"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-kita"
      },
            {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-iris-80"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-ryo"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-bocchi"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-secondary-ryo"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-nijika"
      },
      {
        name: "Cash",
        nominal: 10000,
        bg_color: "bg-color-main-kita"
      },
  ] 

  const accounts  = ref()
  const count     = countData()

  accounts.value = data.slice(0, count-1)

  function countData() {
    return Math.floor((window.screen.height-200)/80)
  }
  
</script>

<template>
    <SearchBar />
    <AccountBar v-for="account in accounts" v-bind:account="account"/>
</template>