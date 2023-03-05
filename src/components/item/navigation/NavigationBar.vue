<script setup lang="ts">
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
</script>
<template>
  <div class="navigation-bar">
    <p class="font-bold text-center text-xl">SakuGwej</p>
    <div class="flex flex-col justify-between h-full">
      <div class="navigation-bar-items flex flex-col">
        <a href="/home" class="navigation-bar-item">Home</a>
        <a href="/rekening" class="navigation-bar-item">Rekening</a>
        <a href="/catatan" class="navigation-bar-item">Catatan</a>
        <a href="/hutang" class="navigation-bar-item">Hutang</a>
      </div>
      <div class="navigation-bar-items flex flex-col">
        <a href="/profile" class="navigation-bar-item">Pengaturan</a>
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
