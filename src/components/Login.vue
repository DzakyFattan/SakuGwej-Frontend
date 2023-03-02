<script setup lang="ts"></script>

<template>
  <div class="form-bg h-screen flex">
    <div class="form-container flex flex-col place-items-center m-auto">
      <h1 class="blue text-center mb-title-form">Login</h1>
      <div class="flex flex-col place-items-center">
        <input
          class="input-field mb-field-form"
          v-model="username"
          placeholder="Username"
        />
        <input
          class="input-field mb-field-form"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <p class="text-center mb-24">
        Belum punya Akun? <a href="/register">Register</a> di sini!
      </p>
      <button class="mx-auto">Login</button>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  width: 380px;
  height: 365px;
  padding: 32px;
}
</style>
