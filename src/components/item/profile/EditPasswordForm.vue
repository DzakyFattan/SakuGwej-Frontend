<script setup lang="ts">
import { ref, computed, watch, getCurrentInstance } from "vue";
import type { ProfileData, NewProfileData } from "../../../types.vue";

const api = "http://be-sakugwejdev.ddns.net/api/v1";

const dialog = ref(false);
const newPassword = ref("");
const confirmNewPassword = ref("");
const isEdited = computed(() => {
  return newPassword.value !== "" || confirmNewPassword.value !== "";
});
const error = ref("");

const handleSaveButton = async () => {
  if (!isEdited.value) {
    dialog.value = false; 
    return;
  }
  if (newPassword.value !== confirmNewPassword.value) {
    console.log(newPassword.value, confirmNewPassword.value)
    error.value = "Password tidak sama";
    return;
  }
  error.value = "";
  const res = await fetch(`${api}/user/change-profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      newPassword: newPassword.value,
    }),
  });
  dialog.value = false; 
  newPassword.value = "";
  confirmNewPassword.value = "";
}

</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <button class="bg-color-main-bocchi button" v-bind="props">Edit Password</button>
      </template>
      <v-card class="bg-color-secondary-bocchi">
        <v-card-text>
          <h3 class="text-center">Edit Password</h3>
          <v-col>
            <v-text-field type="password" label="Password Baru*" required v-model="newPassword" ></v-text-field>
            <v-text-field type="password" label="Konfirmasi Password Baru*" required v-model="confirmNewPassword"></v-text-field>
            <p v-if="error" class="text-rose-500"> {{ error }}</p>
          </v-col>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="bg-color-main-bocchi button mb-4" @click="dialog = false">
            Close
          </button>
          <button class="bg-color-main-bocchi button mx-4 mb-4" @click="handleSaveButton()">
            Save
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>