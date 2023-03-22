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
<script lang="ts">
import { useThemeStore } from "@/stores/theme";
import { defineComponent } from "vue";
const { theme, themeClasses } = useThemeStore();

export default defineComponent({
  data() {
    return {
      jumlahPengeluaran: "",
      jenisPengeluaran: "",
      sumberDana: "",
      listRekening: ["BCA", "BNI", "BRI", "Mandiri"],
      themeClass: themeClasses,
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
