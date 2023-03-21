<script setup lang="ts">
import AccountContainer from "../item/home/container/AccountCardContainer.vue";
import ChartContainer from "../item/home/container/ChartContainer.vue"
</script>

<template>
  <div class="w-full h-screen flex flex-col overflow-auto">
    <h3 class="ml-24 mt-6 text-xl font-bold">
      Home
    </h3>
    <AccountContainer />
    <ChartContainer />
  </div>
</template>

<style scoped>
</style>
