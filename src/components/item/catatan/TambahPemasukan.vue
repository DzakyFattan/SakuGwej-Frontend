<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";

import type { AccountData } from "@/types.vue";

const { themeClasses } = useThemeStore();
const themeClass = themeClasses;

const props = defineProps<{
  accountData: AccountData;
  fetchData: () => void;
}>();

const jumlahPemasukan = ref("");
const jenisPemasukan = ref({
    name: "Gaji",
    image: "/src/assets/icons/pay.png",
  },);
const listJenisPemasukan = ref([
  {
    name: "Gaji",
    image: "/src/assets/icons/wages.png",
  },
  {
    name: "Bonus",
    image: "/src/assets/icons/bonus.png",
  },
  {
    name: "Hadiah",
    image: "/src/assets/icons/gift.png",
  },
  {
    name: "Saham",
    image: "/src/assets/icons/stock.png",
  },
  {
    name: "Penjualan",
    image: "/src/assets/icons/sell.png",
  },
  {
    name: "Lainnya",
    image: "/src/assets/icons/more_horiz.png",
  }
]);
const account = ref(props.accountData[0]);
const listAccount = ref(props.accountData);
const description = ref("");
const calendar = ref("");

console.log();

const emit = defineEmits(["close", "pilihan-tambah"]);

const api = "http://be-sakugwejdev.ddns.net/api/v1";
// const testlocalapi = "http://localhost:3001/api/v1";

// const account = "641f1f5014244df4be5c5f12";

const pilihPengeluaran = () => {
  emit("pilihan-tambah", false);
};

const cancelClick = () => {
  emit("close");
};

const tambahkanPemasukan = async () => {
  try {
    if (
      jumlahPemasukan.value === "" ||
      jenisPemasukan.value.name === "" ||
      account.value._id === ""
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
        type: "credit",
        amount: jumlahPemasukan.value,
        category: jenisPemasukan.value,
        accountId: account.value._id,
        description: description.value,
        createdAt: calendar.value === "" ? today : calendar.value,
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
        >Pemasukan</v-btn>
      <v-btn
        class="text-xs"
        :class="themeClass.textMain"
        variant="outlined"
        rounded="0"
        @click="pilihPengeluaran"
        >Pengeluaran</v-btn
      >
    </v-row>
  </v-container>
  <h3 class="text-center">Tambah Pemasukan</h3>
  <div
    class="bg-color-white px-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container class="mt-6 color-icon">
      <v-text-field
        v-model="jumlahPemasukan"
        label="Jumlah Pemasukan"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
        type="number"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" alt="rp" />
        </template>
      </v-text-field>
      <v-select
        variant="outlined"
        class="mx-16"
        :class="themeClass.textMain"
        :items="listJenisPemasukan"
        label="Jenis Pemasukan"
        v-model="jenisPemasukan"
      >
        <template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/setting_fill.png"
            alt="setting"
          />
        </template>
        <template v-slot:selection="{ item }">
          <img :src="item.value.image" class="mr-2 h-6 w-6" :class="themeClass.icon"> {{ item.value.name }}
        </template>
        <template v-slot:item="{ item, props }">
            <v-list-item v-bind:="props" :title="props.value.name" :value="props.value.name" >
              <template #title>
              <div class="flex flex-row">
                <img :src="item.value.image" class="mr-2 ml-6 h-6 w-6" :class="themeClass.icon"> {{ item.value.name }}
              </div>
            </template>
            </v-list-item>
        </template>
      </v-select>
      <v-select
        variant="outlined"
        class="mx-16"
        :items="listAccount"
        label="Rekening"
        v-model="account"
        :class="themeClass.textMain"
      >
        <template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/wallet_alt_fill_black.png"
            alt="wallet"
          />
        </template>
        <template v-slot:selection="{ item }">
          <img :src="item.value.image" class="mr-2 h-6 w-6" :class="themeClass.icon"> {{ item.value.name }}
        </template>
        <template v-slot:item="{ item, props }">
            <v-list-item v-bind:="props" :title="props.value._id" :value="props.value._id" >
              <template #title>
              <div class="flex flex-row">
                <img :src="item.value.image" class="mr-2 ml-6 h-6 w-6" :class="themeClass.icon"> {{ item.value.name }}
              </div>
            </template>
            </v-list-item>
        </template>
      </v-select>
      <v-textarea
        label="Deskripsi"
        class="mx-16"
        :class="themeClass.textMain"
        auto-grow
        rows="3"
        variant="outlined"
        v-model="description"
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
        label="Tanggal"
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
        @click="tambahkanPemasukan"
        class="text-xs mr-8"
        :class="themeClass.bgMain"
        variant="flat"
        >Tambahkan</v-btn
      ></v-row
    >
  </v-container>
</template>

<style scoped></style>
