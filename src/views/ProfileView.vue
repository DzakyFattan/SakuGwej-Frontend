<script setup lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import ProfileDesktop from "../components/desktop/ProfileDesktop.vue";
import ProfileMobile from "../components/item/profile/mobile/ProfileMobile.vue";

import { onMounted, ref, nextTick, watch } from "vue";
import type { ProfileData } from "../types.vue";
import { backendUrl } from "@/Constants.vue";

const windowWidth = ref(window.innerWidth);

onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  });
});


const api = backendUrl;

const profileData = ref<ProfileData>({
  username: "",
  birthDate: "",
  email: "",
  gender: "",
  phoneNumber: "",
});

const fetchData = async () => {
  console.log(localStorage.getItem("token"));
  const res = await fetch(`${api}/user/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();
  profileData.value = data.data;
};

fetchData();
</script>

<template>
  <main>
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Profil </HeaderMobile>
      <ProfileMobile
        v-bind:profile-data="profileData"
        :fetch-data="fetchData"
      />
    </div>
    <div v-else class="app-container">
      <NavigationBar currentPage="profile" />
      <ProfileDesktop
        v-bind:profile-data="profileData"
        :fetchData="fetchData"
      />
    </div>
  </main>
</template>
