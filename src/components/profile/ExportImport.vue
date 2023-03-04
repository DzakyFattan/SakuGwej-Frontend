<script setup lang="ts">
import SettingCard from "./SettingCard.vue";
</script>
<template>
    <SettingCard :title="`Export/Import`">
      <div class="flex flex-row space-x-4">
        <div class="flex-1 border-r pr-2 border-gray-400">
            <p>Export transaksi dalam file csv</p>
            <button class="button bg-color-main-bocchi mt-2">Export</button>
          </div>
          <div class="flex-1">
            <p>Import transaksi dari file csv</p>
            <button class="button bg-color-main-bocchi mt-2">Import</button>
          </div>
        </div>
    </SettingCard>
</template>