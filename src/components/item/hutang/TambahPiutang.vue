<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <v-btn
        variant="outlined"
        @click="pilihHutang"
        class="text-xs"
        :class="themeClass.textMain"
        >Hutang</v-btn
      >
      <v-btn :class="themeClass.bgMain" class="text-xs">Piutang</v-btn>
    </v-row>
  </v-container>
  <h3 class="text-center">Tambah Piutang</h3>
  <div
    class="bg-color-white p-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container class="mt-8 color-icon">
      <v-text-field
        label="Jumlah Piutang"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
        v-model="jumlahPiutang"
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
        label="Tanggal Jatuh Tempo"
        v-model="calendar"
        ><template v-slot:prepend-inner>
          <img
            class="mr-6"
            src="/src/assets/icons/date_range_fill.png"
            alt="date"
          /> </template
      ></v-text-field>
    </v-container>
  </div>
  <v-container>
    <v-row class="justify-center mt-2">
      <v-spacer></v-spacer
      ><v-btn
        @click="cancelClick"
        class="text-xs mr-2"
        :class="themeClass.bgMain"
        >Batal</v-btn
      >

      <v-btn
        @click="tambahkanPiutang"
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
      jumlahPiutang: "",
      namaPelanggan: "",
      deskripsi: "",
      calendar: "",
      themeClass: themeClasses,
    };
  },
  methods: {
    tambahkanPiutang() {
      this.$emit("tambahkan-piutang", {
        jumlahPiutang: this.jumlahPiutang,
        namaPelanggan: this.namaPelanggan,
        deskripsi: this.deskripsi,
        calendar: this.calendar,
      });
    },
    pilihHutang() {
      this.$emit("pilihan-tambah", true);
    },
    cancelClick() {
      this.$emit("cancel", false);
    },
  },
});
</script>
<style scoped></style>
