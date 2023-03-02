<template>
  <div
    class="flex flex-row rounded-3xl bg-color-secondary-bocchi my-4 p-4 w-full h-fit mx-8"
  >
    <div class="flex flex-col mx-16 mb-2 items-center">
      <img src="/src/assets/icons/user.png" alt="user" class="w-24 m-4" />
      <button class="bg-color-main-bocchi rounded-md p-2 text-black mb-3">
        Ubah Foto Profil
      </button>
      <button class="bg-color-main-bocchi rounded-md p-2 text-black">
        Ubah Kata Sandi
      </button>
    </div>
    <div class="my-3 flex flex-col">
      <div>
        <p class="font-bold text-2xl">Biodata Diri</p>
        <div class="mt-1 mb-4">
          <div class="flex flex-row">
            <p class="text-base w-40">Nama</p>
            <p class="text-base">: Hitori Gotoh</p>
            <button class="ml-2 text-color-kita-main">Ubah</button>
          </div>
          <div class="flex flex-row">
            <p class="text-base w-40">Tanggal lahir</p>
            <p class="text-base">: 12 Februari 2005</p>
            <button class="ml-2 text-color-kita-main">Ubah</button>
          </div>
          <div class="flex flex-row">
            <p class="text-base w-40">Jenis kelamin</p>
            <p class="text-base">: Perempuan</p>
            <button class="ml-2 text-color-kita-main">Ubah</button>
          </div>
        </div>
      </div>
      <div>
        <p class="font-bold text-2xl">Akun</p>
        <div class="mt-1 mb-4">
          <div class="flex flex-row">
            <p class="text-base w-40">Email</p>
            <p class="text-base">: bocchi@gmail.com</p>
            <button class="ml-2 text-color-kita-main">Ubah</button>
          </div>
          <div class="flex flex-row">
            <p class="text-base w-40">No. HP</p>
            <p class="text-base">: 081122334455</p>
            <button class="ml-2 text-color-kita-main">Ubah</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
