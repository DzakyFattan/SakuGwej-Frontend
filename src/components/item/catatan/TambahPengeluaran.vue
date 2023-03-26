<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";

const { themeClasses } = useThemeStore();
const themeClass = themeClasses;

const jumlahPengeluaran = ref("");
const jenisPengeluaran = ref("");
const sumberDana = ref("");
const listRekening = ["BCA", "BNI", "BRI", "Mandiri"];

const emit = defineEmits(["close", "pilihan-tambah"]);

const api = "http://be-sakugwejdev.ddns.net/api/v1";

const pilihPemasukan = () => {
  emit("pilihan-tambah", true);
};

const cancelClick = () => {
  emit("close");
};

const account = "641f1f5014244df4be5c5f12";
// const chooseOptionRekening = () => {
//   console.log("choose option rekening");
// };

const tambahkanPengeluaran = async () => {
  try {
    if (
      jumlahPengeluaran.value === "" ||
      jenisPengeluaran.value === "" ||
      sumberDana.value === ""
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

    const response = await fetch(`${api}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: "debit",
        amount: parseInt(jumlahPengeluaran.value),
        category: jenisPengeluaran.value,
        accountId: account,
        createdAt: today,
      }),
    });
    const data = await response.json();

    if (response.status !== 201) throw new Error(data.message);

    emit("close");
  } catch (error: any) {
    console.log(error.message);
  }
};
</script>

<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <v-btn
        variant="outlined"
        @click="pilihPemasukan"
        class="text-xs"
        :class="themeClass.textMain"
        >Pemasukan</v-btn
      >
      <v-btn :class="themeClass.bgMain" class="text-xs">Pengeluaran</v-btn>
    </v-row>
  </v-container>
  <h3 class="text-center">Tambah Pengeluaran</h3>
  <div
    class="bg-color-white p-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container>
      <v-text-field
        v-model="jumlahPengeluaran"
        label="Jumlah Pengeluaran"
        class="text-color-main-bocchi mx-16"
        variant="outlined"
        :class="themeClass.textMain"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" alt="rp" />
        </template>
      </v-text-field>
      <v-select
        variant="outlined"
        :class="themeClass.textMain"
        class="text-color-main-bocchi mx-16"
        :items="['Makanan', 'Barang']"
        label="Jenis Pengeluaran"
        v-model="jenisPengeluaran"
      >
        <template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/setting_fill.png"
            alt="setting"
          />
        </template>
      </v-select>
      <v-select
        variant="outlined"
        :class="themeClass.textMain"
        class="text-color-main-bocchi mx-16"
        :items="listRekening"
        label="Sumber Dana"
        v-model="sumberDana"
      >
        <template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/wallet_alt_fill_black.png"
            alt="wallet"
          />
        </template>
      </v-select>
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
        @click="tambahkanPengeluaran"
        class="text-xs mr-8"
        :class="themeClass.bgMain"
        >Tambahkan</v-btn
      ></v-row
    >
  </v-container>
</template>

<style scoped></style>
