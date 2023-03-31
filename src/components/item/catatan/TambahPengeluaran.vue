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

const jumlahPengeluaran = ref("");
const jenisPengeluaran = ref({
  name: "Makanan",
  image: "/src/assets/icons/lunch_dining.png",
});
const listJenisPengeluaran = ref([
  {
    name: "Makanan",
    image: "/src/assets/icons/lunch_dining.png",
  },
  {
    name: "Minuman",
    image: "/src/assets/icons/local_cafe.png",
  },
  {
    name: "Transportasi",
    image: "/src/assets/icons/directions_subway.png",
  },
  {
    name: "Pendidikan",
    image: "/src/assets/icons/school.png",
  },
  {
    name: "Internet",
    image: "/src/assets/icons/nest_remote_comfort_sensor.png",
  },
  {
    name: "Kesehatan",
    image: "/src/assets/icons/home_health.png",
  },
  {
    name: "Listrik",
    image: "/src/assets/icons/electric_bolt.png",
  },
  {
    name: "Perabot",
    image: "/src/assets/icons/shelves.png",
  },
  {
    name: "Keperluan Dapur",
    image: "/src/assets/icons/microwave.png",
  },
  {
    name: "Alat Elektronik",
    image: "/src/assets/icons/tv_gen.png",
  },
  {
    name: "Pakaian",
    image: "/src/assets/icons/styler.png",
  },
  {
    name: "Kesehatan",
    image: "/src/assets/icons/home_health.png",
  },
  {
    name: "Lainnya",
    image: "/src/assets/icons/more_horiz.png",
  }
])
const account = ref(props.accountData[0]);
const listAccount = ref(props.accountData);
const description = ref("");
const calendar = ref("");

const emit = defineEmits(["close", "pilihan-tambah"]);

const api = "http://be-sakugwejdev.ddns.net/api/v1";
// const testlocalapi = "http://localhost:3001/api/v1";

const pilihPemasukan = () => {
  emit("pilihan-tambah", true);
};

const cancelClick = () => {
  emit("close");
};

const tambahkanPengeluaran = async () => {
  try {
    if (
      jumlahPengeluaran.value === "" ||
      jenisPengeluaran.value.name === "" ||
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
        type: "debit",
        amount: jumlahPengeluaran.value,
        category: jenisPengeluaran.value,
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
  <v-container >
    <v-row class="justify-center mt-4">
      <v-btn
        class="text-xs"
        :class="themeClass.textMain"
        variant="outlined"
        rounded="0"
        @click="pilihPemasukan"
        >Pemasukan</v-btn
      >
      <v-btn 
      :class="themeClass.bgMain" 
      class="text-xs"
      variant="flat"
      rounded="0"
      >Pengeluaran</v-btn>
    </v-row>
  </v-container>
  <h3 class="text-center">Tambah Pengeluaran</h3>
  <div
    class="bg-color-white px-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container class="mt-6 color-icon">
      <v-text-field
        v-model="jumlahPengeluaran"
        label="Jumlah Pengeluaran"
        class="text-color-main-bocchi mx-16"
        variant="outlined"
        :class="themeClass.textMain"
        type="number"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" alt="rp" />
        </template>
      </v-text-field>
      <v-select
        variant="outlined"
        :class="themeClass.textMain"
        class="text-color-main-bocchi mx-16"
        :items="listJenisPengeluaran"
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
        :class="themeClass.textMain"
        class="text-color-main-bocchi mx-16"
        :items="listAccount"
        label="Sumber Dana"
        v-model="account"
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
        @click="tambahkanPengeluaran"
        class="text-xs mr-8"
        :class="themeClass.bgMain"
        variant="flat"
        >Tambahkan</v-btn
      ></v-row
    >
  </v-container>
</template>

<style scoped></style>
