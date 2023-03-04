<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <div class="d-flex flex-wrap justify-space-evenly mb-6 align-center">
      <v-sheet
        v-for="wallet in listWallet"
        :key="wallet.id"
        class="ma-2 pa-2 bg-color-main-kita rounded-md text-white"
      >
        <v-row class="mt-1 ml-px p-0 m-0">
          <img
            class="m-4"
            src="/src/assets/icons/wallet_alt_fill_white.png"
            alt="wallet_alt_fill_white"
          />
          <v-column class="mt-1">
            <v-card-text class="pa-0"> {{ wallet.nama }} </v-card-text>
            <v-card-text class="pa-0"> {{ wallet.uang }} </v-card-text>
          </v-column>
        </v-row>
      </v-sheet>
      <v-btn
        class="text-color-secondary-bocchi ma-2 pa-2 v-btn__content"
        variant="outlined"
      >
        <img class="m-4" src="/src/assets/icons/add.png" />
        <p class="p-0">Tambah akun</p>
      </v-btn>
    </div>
  </v-container>
  <div class="d-flex flex-column justify-space-evenly mb-6 align-center">
    <div class="bg-color-secondary-bocchi w-9/12 h-fit mx-32">
      <h3 class="p-4">Pemasukan</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/pie_chart_2.png" />
    </div>
  </div>
  <div class="d-flex flex-column justify-space-evenly mb-6 align-center">
    <div class="bg-color-secondary-bocchi w-9/12 h-fit mx-32">
      <h3 class="p-4">Pengeluaran</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/pie_chart.png" />
    </div>
  </div>
  <div class="d-flex flex-column justify-space-evenly mb-6 align-center">
    <div class="bg-color-secondary-bocchi w-9/12 h-fit mx-32">
      <h3 class="p-4">Arus Kas</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/bar_chart.png" />
    </div>
  </div>
  <div class="d-flex flex-column justify-space-evenly mb-6 align-center">
    <div class="bg-color-secondary-bocchi w-9/12 h-fit mx-32">
      <h3 class="p-4">Saldo per Mata Uang</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/bar_chart.png" />
    </div>
  </div>
  <div class="d-flex flex-column justify-space-evenly mb-6 align-center">
    <div class="bg-color-secondary-bocchi w-9/12 h-fit mx-32">
      <h3 class="p-4">Saldo per Akun</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/bar_chart.png" />
    </div>
  </div>
  <div class="d-flex flex-column justify-space-evenly mb-6 align-center">
    <div class="bg-color-secondary-bocchi w-9/12 h-fit mx-32">
      <h3 class="p-4">Pendapatan</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/bar_chart _2.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      listWallet: [
        {
          id: 1,
          nama: "Cash",
          uang: "Rp.10.000",
        },
        {
          id: 2,
          nama: "Simb",
          uang: "Rp.10.000",
        },
        {
          id: 3,
          nama: "Cash",
          uang: "Rp.10.000",
        },
        {
          id: 4,
          nama: "Baca",
          uang: "Rp.10.000",
        },
        {
          id: 5,
          nama: "Beri",
          uang: "Rp.10.000",
        },
      ],
    };
  },
});
</script>
<style scoped>
.v-btn__content {
  white-space: normal;
  width: fit-content;
}
.v-btn {
  min-height: 52px;
  height: 100% !important;
}
</style>
