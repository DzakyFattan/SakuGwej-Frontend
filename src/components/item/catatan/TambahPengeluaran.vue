<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <v-btn
        variant="outlined"
        @click="pilihPemasukan"
        class="text-color-main-bocchi text-xs"
        >Pemasukan</v-btn
      >
      <v-btn class="bg-color-main-bocchi text-xs">Pengeluaran</v-btn>
    </v-row>
  </v-container>
  <v-container class="mt-8">
    <v-text-field
      v-model="jumlahPengeluaran"
      label="Jumlah Pengeluaran"
      class="text-color-main-bocchi mx-24"
      variant="outlined"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" alt="rp" />
      </template>
    </v-text-field>
    <v-select
      variant="outlined"
      class="text-color-main-bocchi mx-24"
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
      class="text-color-main-bocchi mx-24"
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
  <v-container>
    <v-row class="justify-center mt-2">
      <v-spacer></v-spacer
      ><v-btn @click="cancelClick" class="bg-color-main-bocchi text-xs mr-2"
        >Kembali</v-btn
      >

      <v-btn @click="tambahkanPengeluaran" class="bg-color-main-bocchi text-xs"
        >Tambahkan</v-btn
      ><v-spacer></v-spacer
    ></v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      jumlahPengeluaran: "",
      jenisPengeluaran: "",
      sumberDana: "",
      listRekening: ["BCA", "BNI", "BRI", "Mandiri"],
    };
  },
  methods: {
    tambahkanPengeluaran() {
      this.$emit("tambahkan-pengeluaran", {
        jumlahPengeluaran: this.jumlahPengeluaran,
        jenisPengeluaran: this.jenisPengeluaran,
        sumberDana: this.sumberDana,
      });
    },
    pilihPemasukan() {
      this.$emit("pilihan-tambah", true);
    },
    chooseOptionPengeluaran() {
      console.log("choose option pengeluaran");
    },
    chooseOptionRekening() {
      console.log("choose option rekening");
    },
    cancelClick() {
      this.$emit("cancel", false);
    },
  },
});
</script>
<style scoped></style>
