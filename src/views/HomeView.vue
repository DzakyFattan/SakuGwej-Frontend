<script lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import Home from "../components/item/home/Home.vue";
import HomeDesktop from "../components/desktop/HomeDesktop.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HeaderMobile,
    NavigationBar,
    Home,
    HomeDesktop,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },
});
</script>

<template>
  <main>
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Home </HeaderMobile>
      <Home />
    </div>
    <div v-else class="app-container">
      <NavigationBar />
      <HomeDesktop />
    </div>
  </main>
</template>

<style scoped></style>
