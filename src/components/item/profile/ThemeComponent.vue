<script setup lang="ts">
import SettingCard from "./SettingCard.vue";
import ThemeDialog from "./ThemeDialog.vue";
</script>
<template>
  <SettingCard :title="`Tema`" :desc="`Pilih tema yang diinginkan`">
    <div class="mt-2">
      <ThemeDialog />
    </div>
  </SettingCard>
</template>
