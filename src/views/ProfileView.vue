<script setup lang="ts">
import ProfileDesktop from "../components/ProfileDesktop.vue";
import ProfileMobile from "../components/ProfileMobile.vue";
import NavigationBar from "../components/NavigationBar.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";
import { onMounted, ref, nextTick } from "vue";

const windowWidth = ref(window.innerWidth);
const isHidden = ref(false);

const toggleDrawer = (isToggleOn: boolean) => {
  isHidden.value = isToggleOn;
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
      <HeaderMobile @clicked-menu="toggleDrawer"> Profile </HeaderMobile>
      <ProfileMobile :hidden="isHidden" />
    </div>
    <div v-else class="app-container">
      <NavigationBar />
      <ProfileDesktop />
    </div>
  </main>
</template>
