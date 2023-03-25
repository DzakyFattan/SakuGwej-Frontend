<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";

const { themeClasses } = useThemeStore();
const themeClass = themeClasses;

const namaRekening = ref("");
const nominalAwal = ref("");
const listGambar = ref(["gambar1", "gambar2", "gambar3"]);
const gambar = ref("");
const deskripsi = ref("");

const emit = defineEmits(["close"]);

const api = "http://be-sakugwejdev.ddns.net/api/v1";

const cancelClick = () => {
  emit("close", false);
};

const tambahkanRekening = async () => {
  try {
    if (
      namaRekening.value === "" ||
      nominalAwal.value === "" ||
      // gambar.value === "" ||
      deskripsi.value === ""
    ) throw new Error("Semua field harus diisi");

    const response = await fetch(`${api}/accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        account_name: namaRekening.value,
        account_number: parseInt(nominalAwal.value),
        // gambar: gambar.value,
        account_description: deskripsi.value,
      }),
    });
    const data = await response.json();

    if (response.status !== 201) 
      throw new Error(data.message);

    emit("close");
  } catch (error: any) {
    console.log(error.message);
  }
  
};
</script>

<template>
  <h3 class="text-center">Tambah Rekening</h3>
  <div
    class="bg-color-white p-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container class="mt-8 color-icon">
      <v-text-field
        v-model="namaRekening"
        label="Nama Rekening"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6" src="/src/assets/icons/wallet_alt_fill_black.png" />
        </template>
      </v-text-field>
      <v-text-field
        v-model="nominalAwal"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
        label="Nominal Awal"
        type="number"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" />
        </template>
      </v-text-field>
      <v-select
        variant="outlined"
        class="mx-16"
        :class="themeClass.textMain"
        :items="listGambar"
        label="Gambar"
        v-model="gambar"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6" src="/src/assets/icons/image.png" />
        </template>
      </v-select>
      <v-textarea
        v-model="deskripsi"
        label="Deskripsi"
        class="mx-16"
        :class="themeClass.textMain"
        auto-grow
        variant="outlined"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6" src="/src/assets/icons/book_open_alt_fill.png" />
        </template>
      </v-textarea>
    </v-container>
  </div>
  <v-container>
    <v-row class="justify-center mt-2">
      <v-spacer></v-spacer
      ><v-btn
        :class="themeClass.bgMain"
        @click="cancelClick"
        class="text-xs mr-2"
        >Batal</v-btn
      >
      <v-btn
        @click="tambahkanRekening"
        class="text-xs mr-8"
        :class="themeClass.bgMain"
        >Tambahkan</v-btn
      ></v-row
    >
  </v-container>
</template>

<style scoped>
.color-icon .v-icon {
  color: black;
}
</style>
