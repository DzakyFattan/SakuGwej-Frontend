<script setup lang="ts">
import { ref } from "vue";
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const emptyInput = ref("");

const api = "http://be-sakugwejdev.ddns.net/api/v1";

const checkEmail = () => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  console.log(email.value);
  return emailRegex.test(email.value) || email.value === "";
};

const checkPassword = () => {
  if (password.value !== confirmPassword.value) {
    throw new Error("Password tidak sama");
  }
};

const checkEmpty = () => {
  if (
    username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    emptyInput.value = "Semua input harus diisi";
    throw new Error("Semua input harus diisi");
  } else {
    emptyInput.value = "";
  }
};

const login = () => {
  window.location.href = "/login";
};

const register = async () => {
  try {
    checkEmpty();
    checkPassword();
    const response = await fetch(`${api}/user/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      }),
    });
    if (response.status !== 201) {
      throw new Error("Username atau Password salah");
    } else {
      clearInput();
      login();
    }
  } catch (error: any) {
    if (error.message === "Password tidak sama") {
      alert(error.message);
    } else {
      console.error(error.message);
    }
  }
};

const clearInput = () => {
  username.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
};
</script>

<template>
  <div class="form-bg w-full h-screen flex">
    <div class="form-container flex flex-col place-items-center m-auto">
      <h1 class="blue text-center">Mulai Atur</h1>
      <h2 class="blue text-center mb-title-form">Keuangan Anda!</h2>
      <input
        class="input-field mb-field-form"
        v-model="username"
        placeholder="Username"
      />
      <input
        class="input-field mb-field-form"
        v-model="email"
        placeholder="Email"
        @change="checkEmail"
      />
      <p class="input-check" v-if="!checkEmail()">Email tidak valid</p>
      <input
        class="input-field mb-field-form"
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <input
        class="input-field mb-field-form"
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <p class="text-center mb-24">
        Sudah punya Akun? <a href="/login">Login</a> di sini!
      </p>
      <button class="mx-auto auth-button" @click="register">Register</button>
      <p class="input-check">{{ emptyInput }}</p>
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
