<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";

const { themeClasses } = useThemeStore();
const themeClass = themeClasses;

const namaRekening = ref("");
const nomorRekening = ref("");
const nominalAwal = ref("");
const listGambar = [
    {
      name: "Uang Tunai",
      image: "/src/assets/icons/pay.png",
    },
    {
      name: "Valuta Asing",
      image: "/src/assets/icons/paid.png",
    },
    {
      name: "Uang Belanja",
      image: "/src/assets/icons/shopping.png",
    },
    {
      name: "Kartu Kredit/ Debit",
      image: "/src/assets/icons/card.png",
    },
    {
      name: "ATM",
      image: "/src/assets/icons/local_atm.png",
    },
    {
      name: "Tabungan",
      image: "/src/assets/icons/savings.png",
    },
    {
      name: "Dompet",
      image: "/src/assets/icons/wallet.png",
    },

    {
      name: "Kopun",
      image: "/src/assets/icons/redeem.png",
    },
  ];

const gambar = ref(
  {
  name: "Uang Tunai",
  image: "/src/assets/icons/pay.png",
});
const deskripsi = ref("");

const emit = defineEmits(["close"]);

const api = "http://be-sakugwejdev.ddns.net/api/v1";
// const testlocalapi = "http://localhost:3001/api/v1";

const cancelClick = () => {
  emit("close", false);
};

const tambahkanRekening = async () => {
  try {
    if (
      namaRekening.value === "" ||
      nominalAwal.value === "" ||
      gambar.value.image === "" ||
      deskripsi.value === ""
    )
      throw new Error("Semua field harus diisi");
    const response = await fetch(`${api}/accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: namaRekening.value,
        number: nomorRekening.value,
        amount: nominalAwal.value,
        image: gambar.value.image,
        description: deskripsi.value,
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
  <h3 class="text-center">Tambah Rekening</h3>
  <div
    class="bg-color-white px-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container class="mt-6 color-icon">
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
        v-model="nomorRekening"
        label="Nomor Rekening (Opsional)"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
        type="number"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6" src="/src/assets/icons/credit_card.png" />
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
        <template v-slot:selection="{ item }">
          <img :src="item.value.image" class="mr-2 h-6 w-6" :class="themeClass.icon"> {{ item.value.name }}
        </template>
        <template v-slot:item="{ item, props }">
          <v-list-item v-bind="props" :title="props.title.name" :value="props.value.name">
            <template #title>
              <div class="flex flex-row">
                <img :src="item.value.image" class="mr-2 ml-6 h-6 w-6" :class="themeClass.icon"> {{ item.value.name }}
              </div>
            </template>
          </v-list-item>
        </template> 
      </v-select>
      <v-textarea
        v-model="deskripsi"
        label="Deskripsi"
        class="mx-16"
        :class="themeClass.textMain"
        auto-grow
        rows="3"
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
        variant="flat"
        >Batal</v-btn
      >
      <v-btn
        @click="tambahkanRekening"
        class="text-xs mr-8"
        :class="themeClass.bgMain"
        variant="flat"
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
