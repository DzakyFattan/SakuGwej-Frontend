<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <v-btn
        variant="outlined"
        @click="pilihHutang"
        class="text-color-main-bocchi text-xs"
        >Hutang</v-btn
      >
      <v-btn class="bg-color-main-bocchi text-xs">Piutang</v-btn>
    </v-row>
  </v-container>
  <v-container class="mt-8 color-icon">
    <v-text-field
      label="Jumlah Piutang"
      class="text-color-main-bocchi mx-32"
      variant="outlined"
      v-model="jumlahPiutang"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" alt="book" />
      </template>
    </v-text-field>
    <v-text-field
      class="text-color-main-bocchi mx-32"
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
      class="text-color-main-bocchi mx-32"
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
      class="text-color-main-bocchi mx-32"
      variant="outlined"
      label="Tanggal Jatuh Tempo"
      readonly
      v-model="calendar"
    >
      <template v-slot:prepend-inner>
        <img
          @click="onCalendarClick"
          class="mr-6"
          src="/src/assets/icons/date_range_fill.png"
          alt="book"
        />
      </template>
    </v-text-field>
  </v-container>
  <v-container>
    <v-row class="justify-center mt-2"
      ><a href="/hutang"
        ><v-btn class="bg-color-main-bocchi text-xs">Tambahkan</v-btn></a
      ></v-row
    >
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      jumlahPiutang: "",
      namaPelanggan: "",
      deskripsi: "",
      calendar: "",
    };
  },
  methods: {
    pilihHutang() {
      this.$emit("pilihan-tambah", true);
    },
    onCalendarClick() {
      console.log("calendar clicked");
    },
  },
});
</script>
<style scoped>
.color-icon .v-icon {
  color: black;
}
</style>
