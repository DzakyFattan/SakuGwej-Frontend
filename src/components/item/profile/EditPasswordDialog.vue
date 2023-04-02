<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref, computed } from "vue";

import { backendUrl } from "@/Constants.vue";

const api = backendUrl;

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
    console.log(newPassword.value, confirmNewPassword.value);
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
};

const { theme, themeClasses } = useThemeStore();
</script>

<template>
  <v-dialog v-model="dialog" persistent width="512">
    <template v-slot:activator="{ props }">
      <button :class="themeClasses.bgMain" class="button" v-bind="props">
        Edit Password
      </button>
    </template>
    <v-card :class="themeClasses.bgSecondary" class="rounded-lg">
      <v-card-text>
        <h3 class="text-center">Edit Password</h3>
        <div
          class="bg-color-white p-4 rounded-lg flex flex-row align-center justify-between"
        >
          <v-col>
            <v-text-field
              type="password"
              label="Password Baru*"
              required
              v-model="newPassword"
            ></v-text-field>
            <v-text-field
              type="password"
              label="Konfirmasi Password Baru*"
              required
              v-model="confirmNewPassword"
            ></v-text-field>
            <p v-if="error" class="text-rose-500">{{ error }}</p>
          </v-col>
        </div>
        <!-- <small>*indicates required field</small> -->
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <button
          :class="themeClasses.bgMain"
          class="button mb-4"
          @click="dialog = false"
        >
          Batal
        </button>
        <button
          :class="themeClasses.bgMain"
          class="button mx-4 mb-4"
          @click="handleSaveButton()"
        >
          Simpan
        </button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
