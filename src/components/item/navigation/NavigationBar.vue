<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

type Page = "home" | "rekening" | "catatan" | "hutang" | "profile";

const props = defineProps<{
  currentPage: Page;
}>();

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const { themeClasses } = useThemeStore();
</script>
<template>
  <div class="navigation-bar" :class="themeClasses.bgMain">
    <p class="font-bold text-center text-xl">SakuGwej</p>
    <div class="flex flex-col justify-between h-full">
      <div class="navigation-bar-items flex flex-col">
        <a
          href="/home"
          :class="{ 'font-bold': currentPage === 'home' }"
          class="navigation-bar-item"
          >Home</a
        >
        <a
          href="/rekening"
          :class="{ 'font-bold': currentPage === 'rekening' }"
          class="navigation-bar-item"
          >Rekening</a
        >
        <a
          href="/catatan"
          :class="{ 'font-bold': currentPage === 'catatan' }"
          class="navigation-bar-item"
          >Catatan</a
        >
        <a
          href="/hutang"
          :class="{ 'font-bold': currentPage === 'hutang' }"
          class="navigation-bar-item"
          >Hutang</a
        >
      </div>
      <div class="navigation-bar-items flex flex-col">
        <a
          href="/profile"
          :class="{ 'font-bold': currentPage === 'profile' }"
          class="navigation-bar-item"
          >Pengaturan</a
        >
        <button
          @click="handleLogout"
          class="navigation-bar-item text-left mb-8"
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #000;
}
</style>
