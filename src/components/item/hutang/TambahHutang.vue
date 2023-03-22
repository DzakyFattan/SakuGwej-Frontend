<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <v-btn :class="themeClass.bgMain" class="text-xs">Hutang</v-btn>
      <v-btn
        variant="outlined"
        @click="pilihPiutang"
        class="text-xs"
        :class="themeClass.textMain"
        >Piutang</v-btn
      >
    </v-row>
  </v-container>
  <h3 class="text-center">Tambah Hutang</h3>
  <div
    class="bg-color-white p-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container class="mt-8 color-icon">
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
        >Batal</v-btn
      >
      <v-btn
        @click="tambahkanHutang"
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
      jumlahHutang: "",
      namaPelanggan: "",
      deskripsi: "",
      calendar: "",
      themeClass: themeClasses,
    };
  },
  methods: {
    pilihPiutang() {
      this.$emit("pilihan-tambah", false);
    },
    cancelClick() {
      this.$emit("cancel", false);
    },
    tambahkanHutang() {
      this.$emit("tambahkan-hutang", true);
    },
  },
});
</script>
<style scoped></style>
