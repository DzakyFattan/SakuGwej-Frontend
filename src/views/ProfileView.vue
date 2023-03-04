<script setup lang="ts">
import ProfileDesktop from "../components/ProfileDesktop.vue";
import ProfileMobile from "../components/ProfileMobile.vue";
import NavigationBar from "../components/NavigationBar.vue";
import HeaderMobile from "@/components/header/HeaderMobile.vue";
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
      <HeaderMobile :isMenuPage="true" @clicked-menu="toggleDrawer">
        Profile
      </HeaderMobile>
      <ProfileMobile v-if="!isHidden" />
    </div>
    <div v-else class="app-container">
      <NavigationBar />
      <ProfileDesktop />
    </div>
  </main>
</template>
