<script setup lang="ts">
import { ref, computed, watch, getCurrentInstance } from "vue";
import type { ProfileData } from "../../../types.vue";

const props = defineProps<{
  profileData: ProfileData;
  fetchData: () => void;
}>();

const api = "http://be-sakugwejdev.ddns.net/api/v1";

const isEditingName = ref(false);
const isEditingBirthdate = ref(false);
const isEditingGender = ref(false);
const isEditingEmail = ref(false);
const isEditingPhone = ref(false);

const newUsername = ref(props.profileData.username);
const newBirthDate = ref(props.profileData.birthDate.slice(0, 10));
const newGender = ref(props.profileData.gender);
const newEmail = ref(props.profileData.email);
const newPhoneNumber = ref(props.profileData.phoneNumber);

watch(props, () => {
  newUsername.value = props.profileData.username;
  newBirthDate.value = props.profileData.birthDate.slice(0, 10);
  newGender.value = props.profileData.gender;
  newEmail.value = props.profileData.email;
  newPhoneNumber.value = props.profileData.phoneNumber;
});

const isEditing = computed(() => {
  return (
    isEditingName.value ||
    isEditingBirthdate.value ||
    isEditingGender.value ||
    isEditingEmail.value ||
    isEditingPhone.value
  );
});

const handleEditButton = (field: String) => {
  switch (field) {
    case "name":
      isEditingName.value = true;
      break;
    case "birthdate":
      isEditingBirthdate.value = true;
      break;
    case "gender":
      isEditingGender.value = true;
      break;
    case "email":
      isEditingEmail.value = true;
      break;
    case "phone":
      isEditingPhone.value = true;
      break;
    default:
      break;
  }
};

const handleSaveButton = async (field: String) => {
  let payload = {};
  switch (field) {
    case "name":
      isEditingName.value = false;
      if (newUsername.value === props.profileData.username) {
        return;
      }
      payload = { newUsername: newUsername.value };
      // props.profileData.value.username = newProfileData.value.newUsername;
      break;
    case "birthdate":
      isEditingBirthdate.value = false;
      payload = { newBirthDate: newBirthDate.value };
      // props.profileData.value.birthDate = newBirthDate.value;
      break;
    case "gender":
      isEditingGender.value = false;
      payload = { newGender: newGender.value };
      // props.profileData.value.gender = newProfileData.value.newGender;
      break;
    case "email":
      isEditingEmail.value = false;
      if (newEmail.value === props.profileData.email) {
        return;
      }
      payload = { newEmail: newEmail.value };
      // props.profileData.value.email = newProfileData.value.newEmail;
      break;
    case "phone":
      isEditingPhone.value = false;
      payload = { newPhoneNumber: newPhoneNumber.value };
      // props.profileData.value.phoneNumber = newProfileData.value.newPhoneNumber;
      break;
    default:
      break;
  }
  const res = await fetch(`${api}/user/change-profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  props.fetchData();
};
</script>

<template>
  <div
    class="flex flex-row rounded-3xl bg-color-secondary-bocchi my-2 p-4 h-fit mx-8"
  >
    <div class="flex flex-col mx-16 mb-2 items-center">
      <img src="/src/assets/icons/user.png" alt="user" class="w-24 m-4" />
      <button class="bg-color-main-bocchi button mb-3">Ubah Foto Profil</button>
      <button class="bg-color-main-bocchi button">Ubah Kata Sandi</button>
    </div>
    <div class="my-3 flex flex-col">
      <div>
        <p class="font-bold text-xl">Biodata Diri</p>
        <div class="mt-1 mb-4">
          <div class="flex flex-row">
            <p class="text-base w-40">Username</p>
            <p class="text-base" v-if="!isEditingName">
              : {{ props.profileData.username }}
            </p>
            <input type="text" v-model="newUsername" v-else />
            <button
              class="ml-2 text-color-kita-main"
              v-if="!isEditing && !isEditingName"
              @click="handleEditButton('name')"
            >
              Ubah
            </button>
            <button
              class="ml-2 text-color-kita-main"
              @click="handleSaveButton('name')"
              v-if="isEditingName"
            >
              Simpan
            </button>
          </div>
          <div class="flex flex-row">
            <p class="text-base w-40">Tanggal lahir</p>
            <p class="text-base" v-if="!isEditingBirthdate">
              : {{ props.profileData.birthDate.slice(0, 10) }}
            </p>
            <input type="date" v-model="newBirthDate" v-else />
            <button
              class="ml-2 text-color-kita-main"
              v-if="!isEditing && !isEditingBirthdate"
              @click="handleEditButton('birthdate')"
            >
              Ubah
            </button>
            <button
              class="ml-2 text-color-kita-main"
              @click="handleSaveButton('birthdate')"
              v-if="isEditingBirthdate"
            >
              Simpan
            </button>
          </div>
          <div class="flex flex-row">
            <p class="text-base w-40">Jenis kelamin</p>
            <p class="text-base" v-if="!isEditingGender">
              : {{ props.profileData.gender }}
            </p>
            <select v-model="newGender" v-else>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <button
              class="ml-2 text-color-kita-main"
              v-if="!isEditing && !isEditingGender"
              @click="handleEditButton('gender')"
            >
              Ubah
            </button>
            <button
              class="ml-2 text-color-kita-main"
              @click="handleSaveButton('gender')"
              v-if="isEditingGender"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
      <div>
        <p class="font-bold text-xl">Akun</p>
        <div class="mt-1 mb-4">
          <div class="flex flex-row">
            <p class="text-base w-40">Email</p>
            <p class="text-base" v-if="!isEditingEmail">
              : {{ props.profileData.email }}
            </p>
            <input type="email" v-model="newEmail" v-else />
            <button
              class="ml-2 text-color-kita-main"
              v-if="!isEditing && !isEditingEmail"
              @click="handleEditButton('email')"
            >
              Ubah
            </button>
            <button
              class="ml-2 text-color-kita-main"
              @click="handleSaveButton('email')"
              v-if="isEditingEmail"
            >
              Simpan
            </button>
          </div>
          <div class="flex flex-row">
            <p class="text-base w-40">No. HP</p>
            <p class="text-base" v-if="!isEditingPhone">
              : {{ props.profileData.phoneNumber }}
            </p>
            <input type="text" v-model="newPhoneNumber" v-else />
            <button
              class="ml-2 text-color-kita-main"
              v-if="!isEditing && !isEditingPhone"
              @click="handleEditButton('phone')"
            >
              Ubah
            </button>
            <button
              class="ml-2 text-color-kita-main"
              @click="handleSaveButton('phone')"
              v-if="isEditingPhone"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  background-color: white;
  border-radius: 8px;
}
select {
  appearance: auto;
  background-color: white;
  width: 300px;
  border-radius: 8px;
}

option {
  border-radius: 8px;
}
</style>
