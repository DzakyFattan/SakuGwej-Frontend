<script setup lang="ts">
import { ref } from "vue";
const email = ref("");
const password = ref("");

const api = "http://be-sakugwejdev.ddns.net/api/v1";
// const localapitest = "http://localhost:3001";

const login = async () => {
  try {
    const response = await fetch(`${api}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    if (response.status !== 200) {
      throw new Error("Email atau Password salah");
    }
    if (response.status === 200) {
      const data = await response.json();
      clearInput();
      console.log(data);
      localStorage.setItem("token", data.token);
      window.location.href = "/home";
    }
  } catch (error: any) {
    console.error(error.message);
  }
};

const clearInput = () => {
  email.value = "";
  password.value = "";
};
</script>

<template>
  <div class="form-bg h-screen flex">
    <div class="form-container flex flex-col place-items-center m-auto">
      <h1 class="blue text-center mb-title-form">Login</h1>
      <input
        class="input-field mb-field-form"
        v-model="email"
        placeholder="Email"
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
