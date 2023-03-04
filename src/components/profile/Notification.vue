<script setup lang="ts">
import { ref } from "vue";
import SettingCard from "./SettingCard.vue";

const isActive = ref(true);
</script>
<template>
    <SettingCard :title="`Notifikasi`" :desc="`Nyalakan atau matikan notifikasi`">
      <div class="mt-2">
        <label class="switch">
          <input type="checkbox" v-model="isActive">
          <span class="slider round"></span>
        </label>
        <label class="ml-2" v-if="isActive">On</label>
        <label class="ml-2" v-else>Off</label>
      </div>
    </SettingCard>
</template>