<script setup lang="ts">
import { ref } from "vue";
const username = ref("");
const password = ref("");

const api = "http://be-sakugwejdev.ddns.net";
// const localapitest = "http://localhost:3001";

const login = async () => {
  try {
    const response = await fetch(`${api}/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
    if (response.status !== 200) {
      throw new Error("Username atau Password salah");
    }
    const data = await response.json();
    clearInput();
    console.log(data);
  } catch (error: any) {
    console.error(error.message);
  }
};

const clearInput = () => {
  username.value = "";
  password.value = "";
};
</script>

<template>
  <div class="form-bg h-screen flex">
    <div class="form-container flex flex-col place-items-center m-auto">
      <h1 class="blue text-center mb-title-form">Login</h1>
      <input
        class="input-field mb-field-form"
        v-model="username"
        placeholder="Username"
      />
      <input
        class="input-field mb-field-form"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <p class="text-center mb-24">
        Belum punya Akun? <a href="/register">Register</a> di sini!
      </p>
      <button class="mx-auto auth-button" @click="login">Login</button>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  width: 360px;
  min-height: fit-content;
  padding: 32px;
}
</style>
