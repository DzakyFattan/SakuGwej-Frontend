<template>
  <h3 class="text-center">Tambah Rekening</h3>
  <div
    class="bg-color-white p-4 mx-4 rounded-lg flex flex-row align-center justify-between"
  >
    <v-container class="mt-8 color-icon">
      <v-text-field
        v-model="namaRekening"
        label="Nama Rekening"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6" src="/src/assets/icons/wallet_alt_fill_black.png" />
        </template>
      </v-text-field>
      <v-text-field
        v-model="nominalAwal"
        class="mx-16"
        :class="themeClass.textMain"
        variant="outlined"
        label="Nominal Awal"
        type="number"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6 mt-1" src="/src/assets/icons/rp.png" />
        </template>
      </v-text-field>
      <v-select
        variant="outlined"
        class="mx-16"
        :class="themeClass.textMain"
        :items="listGambar"
        label="Gambar"
        v-model="gambar"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6" src="/src/assets/icons/image.png" />
        </template>
      </v-select>
      <v-textarea
        v-model="deskripsi"
        label="Deskripsi"
        class="mx-16"
        :class="themeClass.textMain"
        auto-grow
        variant="outlined"
      >
        <template v-slot:prepend-inner>
          <img class="mr-6" src="/src/assets/icons/book_open_alt_fill.png" />
        </template>
      </v-textarea>
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
        @click="tambahkanRekening"
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
      namaRekening: "",
      nominalAwal: "",
      listGambar: ["gambar1", "gambar2", "gambar3"],
      gambar: "",
      deskripsi: "",
      themeClass: themeClasses,
    };
  },
  methods: {
    cancelClick() {
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
