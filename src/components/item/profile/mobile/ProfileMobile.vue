<script setup lang="ts">
import GeneralMobile from "./GeneralMobile.vue";
import ExportImport from "../../../item/profile/ExportImport.vue";
import Notification from "../../../item/profile/NotificationComponent.vue";
import Theme from "../../../item/profile/ThemeComponent.vue";
import type { ProfileData } from "../../../../types.vue";

const props = defineProps<{
  profileData: ProfileData;
  fetchData: () => void;
}>();

</script>

<template>
  <div class="h-[98vh] flex flex-col grow my-2 overflow-y-auto">
    <GeneralMobile v-bind:profile-data="props.profileData" :fetch-data="props.fetchData" />
    <ExportImport />
    <Notification />
    <Theme />
  </div>
</template>

<style scoped></style>
