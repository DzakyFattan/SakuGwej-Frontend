<script setup lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import ProfileDesktop from "../components/desktop/ProfileDesktop.vue";
import ProfileMobile from "../components/mobile/ProfileMobile.vue";

import { onMounted, ref, nextTick } from "vue";

const windowWidth = ref(window.innerWidth);
const isHidden = ref(false);


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
      <HeaderMobile> Profil </HeaderMobile>
      <ProfileMobile />
    </div>
    <div v-else class="app-container">
      <NavigationBar />
      <ProfileDesktop />
    </div>
  </main>
</template>

