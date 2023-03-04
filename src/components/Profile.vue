<script setup lang="ts">
import General from "./profile/General.vue";
import ExportImport from "./profile/ExportImport.vue";
import Notification from "./profile/Notification.vue";
import Theme from "./profile/Theme.vue";
</script>

<template>
  <div class="h-screen flex flex-col grow my-2">
    <General />
    <ExportImport />
    <Notification />
    <Theme />
  </div>
</template>

<style scoped></style>
