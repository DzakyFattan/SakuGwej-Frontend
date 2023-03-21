
<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import type { ProfileData } from '@/types.vue';
import EditPasswordForm from '../EditPasswordDialog.vue';
import ProfileMobileForm from './ProfileMobileDialog.vue';

const props = defineProps<{
  profileData: ProfileData;
  fetchData: () => void;
}>();

const { themeClasses } = useThemeStore();

</script>

<template>
  <div
    :class="themeClasses.bgSecondary"
    class="flex flex-col rounded-3xl my-2 py-4 px-8 h-fit mx-8"
  >
    <div class="flex flex-col mx-16 items-center">
      <img src="/src/assets/icons/user.png" alt="user" class="w-24 m-4" />
      <div class="text-center mb-2">
        <p class="font-bold"> {{ props.profileData.username }}</p>
        <p>{{ props.profileData.email }}</p>
      </div>
      <ProfileMobileForm v-bind:profile-data="props.profileData" :fetch-data="props.fetchData" class="my-1"/>
      <EditPasswordForm class="my-2"/>
    </div>
  </div>
</template>
