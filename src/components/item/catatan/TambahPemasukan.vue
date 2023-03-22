<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <v-btn :class="themeClass.bgMain" class="text-xs">Pemasukan</v-btn>
      <v-btn
        variant="outlined"
        @click="pilihPengeluaran"
        class="text-xs"
        :class="themeClass.textMain"
        >Pengeluaran</v-btn
      >
    </v-row>
  </v-container>
  <h3 class="text-center">Tambah Pemasukan</h3>
  <div
    class="bg-color-white p-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container>
      <v-text-field
        v-model="jumlahPemasukan"
        label="Jumlah Pemasukan"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" alt="rp" />
        </template>
      </v-text-field>
      <v-select
        variant="outlined"
        class="mx-16"
        :class="themeClass.textMain"
        :items="['Makanan', 'Barang']"
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
      </v-select>
      <v-select
        variant="outlined"
        class="mx-16"
        :items="listRekening"
        label="Rekening"
        v-model="rekening"
        :class="themeClass.textMain"
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
        @click="tambahkanPemasukan"
        class="text-xs mr-8"
        :class="themeClass.bgMain"
        >Tambahkan</v-btn
      ></v-row
    >
  </v-container>
</template>
<script lang="ts">
import { useThemeStore } from "@/stores/theme";
import { defineComponent } from "vue";
const { theme, themeClasses } = useThemeStore();

export default defineComponent({
  data() {
    return {
      jumlahPemasukan: "",
      jenisPemasukan: "",
      rekening: "",
      listRekening: ["BCA", "BNI", "BRI", "Mandiri"],
      themeClass: themeClasses,
    };
  },
  methods: {
    tambahkanPemasukan() {
      this.$emit("tambahkan-pemasukan", {
        jumlahPemasukan: this.jumlahPemasukan,
        jenisPemasukan: this.jenisPemasukan,
        rekening: this.rekening,
      });
    },
    pilihPengeluaran() {
      this.$emit("pilihan-tambah", false);
    },
    cancelClick() {
      this.$emit("cancel", false);
    },
  },
});
</script>
<style scoped></style>
