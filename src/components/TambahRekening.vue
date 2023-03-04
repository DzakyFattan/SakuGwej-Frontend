<template>
  <v-container class="mt-8 color-icon">
    <v-text-field
      label="Nama Rekening"
      class="text-color-main-bocchi mx-36"
      variant="outlined"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6" src="/src/assets/icons/wallet_alt_fill_black.png" />
      </template>
    </v-text-field>
    <v-text-field
      class="text-color-main-bocchi mx-36"
      variant="outlined"
      label="Nominal Awal"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" />
      </template>
    </v-text-field>

    <v-text-field
      class="text-color-main-bocchi mx-36"
      variant="outlined"
      label="Gambar"
      readonly
    >
      <template v-slot:prepend-inner>
        <img class="mr-6" src="/src/assets/icons/image.png" />
      </template>
      <template v-slot:append-inner>
        <img class="mr-6" src="/src/assets/icons/rectangle.png" />
      </template>
    </v-text-field>
    <v-textarea
      label="Deskripsi"
      class="text-color-main-bocchi mx-36"
      auto-grow
      variant="outlined"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6" src="/src/assets/icons/book_open_alt_fill.png" />
      </template>
    </v-textarea>
  </v-container>
  <v-container>
    <v-row class="justify-center mt-2"
      ><a href="/rekening"
        ><v-btn class="bg-color-main-bocchi text-xs">Buat</v-btn></a
      ></v-row
    >
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    pilihHutang() {
      this.$emit("pilihan-tambah", false);
    },
    chooseWallet() {
      console.log("choose wallet");
    },
  },
});
</script>
<style scoped>
.color-icon .v-icon {
  color: black;
}
</style>
