<script setup lang="ts">
import { ref, computed } from "vue";

const isEditingName = ref(false);
const isEditingBirthdate = ref(false);
const isEditingGender = ref(false);
const isEditingEmail = ref(false);
const isEditingPhone = ref(false);
const profileData = ref({
  username: "",
  birthDate: "",
  email: "",
  gender: "",
  phoneNumber: "",
});

const newUsername = ref("");
const newBirthDate = ref("");
const newGender = ref("");
const newEmail = ref("");
const newPhoneNumber = ref("");

const api = "http://be-sakugwejdev.ddns.net/api/v1";

const fetchData = async () => {
  console.log(localStorage.getItem("token"));
  const res = await fetch(`${api}/user/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();
  profileData.value = data.data;
  newUsername.value = data.data.username;
  newBirthDate.value = data.data.birthDate;
  newGender.value = data.data.gender;
  newEmail.value = data.data.email;
  newPhoneNumber.value = data.data.phoneNumber;
  console.log(data.data.username);
};

fetchData();

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
      payload = { newUsername: newUsername.value };
      // profileData.value.username = newUsername.value;
      break;
    case "birthdate":
      isEditingBirthdate.value = false;
      payload = { newBirthDate: newBirthDate.value };
      // profileData.value.birthDate = newBirthDate.value;
      break;
    case "gender":
      isEditingGender.value = false;
      payload = { newGender: newGender.value };
      // profileData.value.gender = newGender.value;
      break;
    case "email":
      isEditingEmail.value = false;
      payload = { newEmail: newEmail.value };
      // profileData.value.email = newEmail.value;
      break;
    case "phone":
      isEditingPhone.value = false;
      payload = { newPhoneNumber: newPhoneNumber.value };
      // profileData.value.phoneNumber = newPhoneNumber.value;
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
  console.log(data);
  fetchData();
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
              : {{ profileData.username }}
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
              : {{ profileData.birthDate.slice(0, 10) }}
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
              : {{ profileData.gender }}
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
              : {{ profileData.email }}
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
              : {{ profileData.phoneNumber }}
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
