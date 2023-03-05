<script setup lang="ts">
import GeneralMobile from "../item/profile/GeneralMobile.vue";
import ExportImport from "../item/profile/ExportImport.vue";
import Notification from "../item/profile/NotificationComponent.vue";
import Theme from "../item/profile/ThemeComponent.vue";
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
