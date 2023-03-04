<script setup lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import Catatan from "../components/item/catatan/Catatan.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import CatatanDesktop from "../components/desktop/CatatanDesktop.vue";

import { onMounted, ref, nextTick } from "vue";

const windowWidth = ref(window.innerWidth);
const isHidden = ref(false);

const toggleDrawer = () => {
  console.log(isHidden.value);
  isHidden.value = !isHidden.value;
};

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
      <HeaderMobile @clicked-menu="toggleDrawer"> Catatan </HeaderMobile>
      <Catatan v-if="!isHidden" />
    </div>
    <div v-else class="app-container">
      <NavigationBar />
      <CatatanDesktop />
    </div>
  </main>
</template>

<style scoped></style>

