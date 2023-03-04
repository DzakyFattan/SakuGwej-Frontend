<script setup lang="ts">
import GeneralMobile from "./profile/GeneralMobile.vue";
import ExportImport from "./profile/ExportImport.vue";
import Notification from "./profile/Notification.vue";
import Theme from "./profile/Theme.vue";
</script>

<template>
  <div class="h-[98vh] flex flex-col grow my-2 overflow-y-auto">
    <GeneralMobile />
    <ExportImport />
    <Notification />
    <Theme />
  </div>
</template>

<style scoped></style>
