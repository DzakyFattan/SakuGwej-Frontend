<script setup lang="ts">
import { useThemeStore } from "@/stores/theme"
import SettingCard from "./SettingCard.vue";

const { theme, themeClasses } = useThemeStore();

</script>
<template>
  <SettingCard :title="`Export/Import`">
    <div class="flex flex-row space-x-4">
      <div class="flex-1 border-r pr-2 border-gray-400">
        <p>Export transaksi ke file csv</p>
        <button class="button mt-2" :class="themeClasses.bgMain">Export</button>
      </div>
      <div class="flex-1">
        <p>Import transaksi dari file csv</p>
        <button class="button mt-2" :class="themeClasses.bgMain">Import</button>
      </div>
    </div>
  </SettingCard>
</template>
