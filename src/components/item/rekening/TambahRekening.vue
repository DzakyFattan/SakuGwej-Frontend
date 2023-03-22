<template>
  <v-container class="mt-8 color-icon">
    <v-text-field
      v-model="namaRekening"
      label="Nama Rekening"
      class="text-color-main-bocchi mx-24"
      variant="outlined"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6" src="/src/assets/icons/wallet_alt_fill_black.png" />
      </template>
    </v-text-field>
    <v-text-field
      v-model="nominalAwal"
      class="text-color-main-bocchi mx-24"
      variant="outlined"
      label="Nominal Awal"
      type="number"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" />
      </template>
    </v-text-field>
    <v-file-input
      v-model="gambar"
      accept="image/*"
      class="text-color-main-bocchi ml-14 mr-24"
      variant="outlined"
      label="Gambar"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6" src="/src/assets/icons/image.png" />
      </template>
    </v-file-input>
    <v-textarea
      v-model="deskripsi"
      label="Deskripsi"
      class="text-color-main-bocchi mx-24"
      auto-grow
      variant="outlined"
    >
      <template v-slot:prepend-inner>
        <img class="mr-6" src="/src/assets/icons/book_open_alt_fill.png" />
      </template>
    </v-textarea>
  </v-container>
  <v-container>
    <v-row class="justify-center mt-2">
      <v-spacer></v-spacer
      ><v-btn @click="cancelClick" class="bg-color-main-bocchi text-xs mr-2"
        >Kembali</v-btn
      >
      <v-btn @click="tambahkanRekening" class="bg-color-main-bocchi text-xs"
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
      namaRekening: "",
      nominalAwal: "",
      gambar: undefined,
      deskripsi: "",
    };
  },
  methods: {
    cancelClick() {
      console.log(this.gambar);
      this.$emit("cancel", false);
    },
    tambahkanRekening() {
      this.$emit("tambahkan-rekening", {
        namaRekening: this.namaRekening,
        nominalAwal: this.nominalAwal,
        gambar: this.gambar,
        deskripsi: this.deskripsi,
      });
    },
  },
});
</script>
<style scoped>
.color-icon .v-icon {
  color: black;
}
</style>
