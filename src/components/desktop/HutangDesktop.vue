<script setup lang="ts">
import HutangBarContainerVue from "../item/hutang/container/HutangBarContainer.vue";

const emit = defineEmits(["trigger-tambahkan"]);

function addHutangPiutang(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <h3 class="ml-24 mt-6 text-xl font-bold">Hutang</h3>
    <HutangBarContainerVue @trigger-tambahkan="addHutangPiutang" />
  </div>
</template>

<style scoped></style>
