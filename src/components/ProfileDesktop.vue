<script setup lang="ts">
import GeneralDesktop from "./profile/GeneralDesktop.vue";
import ExportImport from "./profile/ExportImport.vue";
import Notification from "./profile/NotificationComponent.vue";
import Theme from "./profile/ThemeComponent.vue";
</script>

<template>
  <div class="h-[98vh] flex flex-col grow my-2 overflow-y-auto">
    <GeneralDesktop />
    <ExportImport />
    <Notification />
    <Theme />
  </div>
</template>

<style scoped></style>
