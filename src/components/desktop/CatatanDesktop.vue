<script setup lang="ts">
import CatatanBarContainer from "../item/catatan/container/CatatanBarContainer.vue";

const emit = defineEmits(["trigger-tambahkan"]);

function addCatatan(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <h3 class="ml-24 mt-6 text-xl font-bold">Catatan</h3>
    <CatatanBarContainer @trigger-tambahkan="addCatatan" />
  </div>
</template>

<style scoped></style>
