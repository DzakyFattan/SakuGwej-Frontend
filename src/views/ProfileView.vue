<script setup lang="ts">
import ProfileDesktop from "../components/ProfileDesktop.vue";
import ProfileMobile from "../components/ProfileMobile.vue";
import NavigationBar from "../components/NavigationBar.vue";
import { onMounted, ref, nextTick } from "vue";

const windowWidth = ref(window.innerWidth);


onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  })
});

</script>

<template>
  <main>
    <div v-if="windowWidth < 1024">
      <ProfileMobile />
    </div>
    <div v-else class="app-container">
      <NavigationBar />
      <ProfileDesktop />
    </div>
  </main>
</template>
