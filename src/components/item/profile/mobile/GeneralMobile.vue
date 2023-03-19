
<script setup lang="ts">
import type { ProfileData } from '@/types.vue';
import type ChangePasswordForm from '../ChangePasswordForm.vue';
import ProfileMobileForm from './ProfileMobileForm.vue';

const props = defineProps<{
  profileData: ProfileData;
  fetchData: () => void;
}>();


</script>

<template>
  <div
    class="flex flex-col rounded-3xl bg-color-secondary-bocchi my-2 py-4 px-8 h-fit mx-8"
  >
    <div class="flex flex-col mx-16 items-center">
      <img src="/src/assets/icons/user.png" alt="user" class="w-24 m-4" />
      <div class="text-center mb-2">
        <p class="font-bold"> {{ props.profileData.username }}</p>
        <p>{{ props.profileData.email }}</p>
      </div>
      <ProfileMobileForm v-bind:profile-data="props.profileData" :fetch-data="props.fetchData" class="my-1"/>
      <ChangePasswordForm class="my-1"/>
    </div>
  </div>
</template>
