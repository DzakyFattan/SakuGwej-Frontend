<script lang="ts">
import HeaderMobile from "@/components/item/header/HeaderMobile.vue";
import NavigationBar from "@/components/item/navigation/NavigationBar.vue";
import Rekening from "@/components/item/rekening/Rekening.vue";
import RekeningDesktop from "@/components/desktop/RekeningDesktop.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HeaderMobile,
    NavigationBar,
    Rekening,
    RekeningDesktop,
  },
  props: {
    isTambahCatatan: Boolean,
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
      <HeaderMobile> Rekening </HeaderMobile>
      <Rekening />
    </div>
    <div v-else class="app-container">
      <NavigationBar />
      <RekeningDesktop />
    </div>
  </main>
</template>

<style scoped></style>
