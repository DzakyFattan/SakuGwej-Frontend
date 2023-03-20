<script setup lang="ts">
import { useThemeStore } from "@/stores/theme"
import { ref, watch } from "vue";
import type { ProfileData, NewProfileData } from "../../../../types.vue";

const props = defineProps<{
  profileData: ProfileData;
  fetchData: () => void;
}>();

const api = "http://be-sakugwejdev.ddns.net/api/v1";

const dialog = ref(false);
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


const handleSaveButton = async () => {
  let payload: NewProfileData = {
    newUsername: newUsername.value,
    newBirthDate: newBirthDate.value,
    newGender: newGender.value,
    newEmail: newEmail.value,
    newPhoneNumber: newPhoneNumber.value,
  };

  if (newUsername.value === props.profileData.username) {
    delete payload.newUsername;
  }

  if (newEmail.value === props.profileData.email) {
    delete payload.newEmail;
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

const { themeClasses } = useThemeStore();

</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <button :class="themeClasses.bgMain" class="button" v-bind="props">Edit Profil</button>
      </template>
      <v-card :class="themeClasses.bgSecondary" class="rounded-lg">
        <v-card-text>
          <h3 class="text-center">Edit Profil</h3>
          <div class="bg-color-white p-4 rounded-lg flex flex-row align-center justify-between">
            <v-col>
              <v-text-field label="Username*" v-model="newUsername" required></v-text-field>
              <v-text-field type="date" label="Tanggal Lahir" v-model="newBirthDate" ></v-text-field>
              <v-select :items="['Laki-laki', 'Perempuan']" label="Jenis Kelamin" v-model="newGender" ></v-select>
              <v-text-field label="Email*" required v-model="newEmail" ></v-text-field>
              <v-text-field label="No. HP" v-model="newPhoneNumber"></v-text-field>
            </v-col>
          </div>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button :class="themeClasses.bgMain" class="button mb-4" @click="dialog = false">
            Batal
          </button>
          <button :class="themeClasses.bgMain" class="button mx-4 mb-4" @click="{ dialog = false; handleSaveButton() }">
            Simpan
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>