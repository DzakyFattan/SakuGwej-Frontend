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
      label="Jumlah Pemasukan"
      class="text-color-main-bocchi mx-36"
      variant="outlined"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" alt="rp" />
      </template>
    </v-text-field>
    <v-text-field
      class="text-color-main-bocchi mx-36"
      variant="outlined"
      label="Jenis Pengeluaran"
      readonly
    >
      <template v-slot:prepend-inner>
        <img
          class="mr-6"
          src="/src/assets/icons/setting_fill.png"
          alt="setting"
        />
      </template>
      <template v-slot:append-inner>
        <img
          class="mr-6"
          src="/src/assets/icons/sort.png"
          alt="sort"
        /> </template
    ></v-text-field>
    <v-text-field
      class="text-color-main-bocchi mx-36"
      variant="outlined"
      label="Sumber Dana"
      readonly
    >
      <template v-slot:prepend-inner>
        <img
          class="mr-6"
          src="/src/assets/icons/wallet_alt_fill.png"
          alt="setting"
        />
      </template>
      <template v-slot:append-inner>
        <img class="mr-6" src="/src/assets/icons/sort.png" alt="sort" />
      </template>
    </v-text-field>
  </v-container>
  <v-container>
    <v-row class="justify-center mt-2"
      ><a href="/catatan"
        ><v-btn class="bg-color-main-bocchi text-xs">Tambahkan</v-btn></a
      ></v-row
    >
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    pilihPemasukan() {
      this.$emit("pilihan-tambah", true);
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
