<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";

const { themeClasses } = useThemeStore();
const themeClass = themeClasses;

const jumlahHutang = ref("");
const namaPelanggan = ref("");
const deskripsi = ref("");
const calendar = ref("");

const emit = defineEmits(["close", "pilihan-tambah", "trigger-tambahkan"]);

const api = "http://be-sakugwejdev.ddns.net/api/v1";
// const localapi = "http://localhost:3001/api/v1";

const pilihPiutang = () => {
  emit("pilihan-tambah", false);
};

const cancelClick = () => {
  emit("close", false);
};

const tambahkanHutang = async () => {
  try {
    if (
      jumlahHutang.value === "" ||
      namaPelanggan.value === "" ||
      deskripsi.value === "" ||
      calendar.value === ""
    )
      throw new Error("Semua field harus diisi");

    let utc = new Date()
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Jakarta",
      })
      .split("/");
    let today = `${utc[2]}-${utc[0]}-${utc[1]}`;

    if (calendar.value <= today)
      throw new Error("Tanggal harus lebih dari hari ini");

    const response = await fetch(`${api}/debts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: "debit",
        amount: parseInt(jumlahHutang.value),
        name: namaPelanggan.value,
        description: deskripsi.value,
        dueDate: calendar.value,
      }),
    });
    const data = await response.json();

    if (response.status !== 201) throw new Error(data.message);

    emit("close", true);
  } catch (error: any) {
    console.log(error.message);
  }
};
</script>

<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <v-btn 
      :class="themeClass.bgMain" 
      class="text-xs"
      variant="flat"
      rounded="0"
      >Hutang</v-btn>
      <v-btn
        @click="pilihPiutang"
        class="text-xs"
        :class="themeClass.textMain"
        variant="outlined"
        rounded="0"
        >Piutang</v-btn
      >
    </v-row>
  </v-container>
  <h3 class="text-center">Tambah Hutang</h3>
  <div
    class="bg-color-white px-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container class="mt-6 color-icon">
      <v-text-field
        label="Jumlah Hutang"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
        v-model="jumlahHutang"
        type="number"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" alt="book" />
        </template>
      </v-text-field>
      <v-text-field
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
        label="Nama Pelanggan"
        v-model="namaPelanggan"
      >
        <template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/User_alt_fill.png"
            alt="book"
          />
        </template>
      </v-text-field>
      <v-textarea
        label="Deskripsi"
        class="mx-16"
        :class="themeClass.textMain"
        auto-grow
        rows="3"
        variant="outlined"
        v-model="deskripsi"
      >
        <template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/book_open_alt_fill.png"
            alt="book"
          />
        </template>
      </v-textarea>
      <v-text-field
        variant="outlined"
        class="mx-16"
        :class="themeClass.textMain"
        type="date"
        label="Tanggal Mulai Hutang"
        v-model="calendar"
        ><template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/date_range_fill.png"
            alt="book"
          /> </template
      ></v-text-field>
      <v-text-field
        variant="outlined"
        class="mx-16"
        :class="themeClass.textMain"
        type="date"
        label="Tanggal Jatuh Tempo"
        v-model="calendar"
        ><template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/date_range_fill.png"
            alt="book"
          /> </template
      ></v-text-field>
    </v-container>
  </div>
  <v-container>
    <v-row class="justify-center mt-2">
      <v-spacer></v-spacer
      ><v-btn
        :class="themeClass.bgMain"
        @click="cancelClick"
        class="text-xs mr-2"
        variant="flat"
        >Batal</v-btn
      >
      <v-btn
        @click="tambahkanHutang"
        class="text-xs mr-8"
        :class="themeClass.bgMain"
        variant="flat"
        >Tambahkan</v-btn
      ></v-row
    >
  </v-container>
</template>

<style scoped></style>
