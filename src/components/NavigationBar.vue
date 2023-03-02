<script setup lang="ts"></script>

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
      <a href="/profile" class="mb-8">Pengaturan</a>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #000;
}
</style>
