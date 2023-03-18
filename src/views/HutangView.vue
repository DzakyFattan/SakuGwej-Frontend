<script setup lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import Hutang from "../components/item/hutang/Hutang.vue";
import HutangDesktop from "../components/desktop/HutangDesktop.vue";

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
      <HeaderMobile> Hutang </HeaderMobile>
      <Hutang />
    </div>
    <div v-else class="app-container">
      <NavigationBar/>
      <HutangDesktop/>
    </div>
  </main>
</template>

