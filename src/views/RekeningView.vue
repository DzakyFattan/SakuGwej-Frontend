<script setup lang="ts">
import HeaderMobile from "@/components/item/header/HeaderMobile.vue";
import NavigationBar from "@/components/item/navigation/NavigationBar.vue";
import Rekening from "@/components/item/rekening/Rekening.vue";
import RekeningDesktop from "@/components/desktop/RekeningDesktop.vue";
import { onMounted, ref, nextTick } from "vue";

const windowWidth = ref(window.innerWidth);


onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  });
});
</script>

<template>
  <main>
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Rekening </HeaderMobile>
      <Rekening v-if="!isHidden"/>
    </div>
    <div v-else class="app-container">
      <NavigationBar />
      <RekeningDesktop />
    </div>
  </main>
</template>

<style scoped></style>
