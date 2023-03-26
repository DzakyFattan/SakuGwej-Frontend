<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
</script>
<template>
  <div class="mobile-navigation-bar">
    <div class="flex flex-col justify-between h-full">
      <div class="mobile-navigation-bar-items flex flex-col">
        <a href="/home" class="mobile-navigation-bar-item">Home</a>
        <a href="/rekening" class="mobile-navigation-bar-item">Rekening</a>
        <a href="/catatan" class="mobile-navigation-bar-item">Catatan</a>
        <a href="/hutang" class="mobile-navigation-bar-item">Hutang</a>
        <a href="/profile" class="mobile-navigation-bar-item">Pengaturan</a>
        <button
          @click="handleLogout"
          class="mobile-navigation-bar-item text-left mb-8"
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
