<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="form-container flex flex-column">
    <h1 class="blue text-center mb-title-form">Login</h1>
    <div class="flex flex-column">
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
    <button class="">Login</button>
  </div>
</template>

<style scoped>
.form-container {
  width: 380px;
  height: 365px;
  padding: 32px;
}
</style>
