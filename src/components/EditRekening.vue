<template>
  <v-container class="mt-8">
    <v-row class="mx-16 align-center">
      <v-btn icon variant="outlined" size="x-large">
        <img class="h-12 mt-1" src="/src/assets/icons/cart_big.png" alt="cart"
      /></v-btn>
      <v-column class="ml-auto">
        <v-text-field
          v-model="textNama"
          class="w-24"
          variant="underlined"
        ></v-text-field>
        <v-text-field
          v-model="textUang"
          class="w-24"
          variant="underlined"
        ></v-text-field>
      </v-column>
    </v-row>
    <v-textarea
      v-model="textDeskripsi"
      class="mx-32 mt-8"
      auto-grow
      variant="outlined"
    >
    </v-textarea>
  </v-container>
  <v-container>
    <v-row class="justify-center mt-2"
      ><a href="/hutang"
        ><v-btn class="bg-color-main-bocchi text-xs">Simpan</v-btn></a
      ></v-row
    >
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      textDeskripsi:
        "Deskripsi yang ditulis lorem ipsum dolor sit amet kurang tahu lanjutannya apa",
      textNama: "Unpay",
      textUang: "40.000",
    };
  },
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
<style scoped></style>
