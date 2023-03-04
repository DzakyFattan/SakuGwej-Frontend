<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <div class="d-flex flex-wrap justify-space-evenly mb-6 align-center">
      <v-sheet
        v-for="wallet in listWallet"
        :key="wallet.id"
        v-bind:class="getClassWallet(wallet.id)"
      >
        <v-row class="mt-1 p-0 m-0">
          <img
            class="m-4"
            src="/src/assets/icons/wallet_alt_fill_white.png"
            alt="wallet_alt_fill_white"
          />
          <v-column class="mt-1">
            <v-card-text class="p-0"> {{ wallet.nama }} </v-card-text>
            <v-card-text class="p-0"> {{ wallet.uang }} </v-card-text>
          </v-column>
        </v-row>
      </v-sheet>
      <a href="/rekening/tambah-rekening"
        ><v-btn
          class="text-color-secondary-bocchi text-left p-2 v-btn__content"
          variant="outlined"
        >
          <v-row class="align-center h-20">
            <img class="m-4" src="/src/assets/icons/add.png" />
            <v-column>
              <p class="p-0">Tambah</p>
              <p class="p-0">Rekening</p>
            </v-column>
          </v-row>
        </v-btn></a
      >
    </div>
  </v-container>
  <div
    class="d-flex flex-column justify-space-evenly mb-8 gap-y-8 align-center"
  >
    <div class="bg-color-secondary-bocchi w-9/12">
      <h3 class="p-4">Pemasukan</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/pie_chart_2.png" />
    </div>
    <div class="bg-color-secondary-bocchi w-9/12">
      <h3 class="p-4">Pengeluaran</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/pie_chart.png" />
    </div>
    <div class="bg-color-secondary-bocchi w-9/12">
      <h3 class="p-4">Arus Kas</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/bar_chart.png" />
    </div>
    <div class="bg-color-secondary-bocchi w-9/12">
      <h3 class="p-4">Saldo per Mata Uang</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/bar_chart.png" />
    </div>
    <div class="bg-color-secondary-bocchi w-9/12">
      <h3 class="p-4">Saldo per Akun</h3>
      <img class="mx-auto mb-4" src="/src/assets/icons/bar_chart.png" />
    </div>
    <div class="bg-color-secondary-bocchi w-9/12">
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
          nama: "Bayar",
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
  methods: {
    getClassWallet(id: number) {
      if (id % 4 == 0) {
        return "ma-2 pa-2 bg-color-main-kita rounded-md text-white";
      } else if (id % 4 == 1) {
        return "ma-2 pa-2 bg-color-main-ryo rounded-md text-white";
      } else if (id % 4 == 2) {
        return "ma-2 pa-2 bg-color-main-nijika rounded-md text-white";
      } else {
        return "ma-2 pa-2 bg-color-main-bocchi rounded-md text-white";
      }
    },
  },
});
</script>
<style scoped>
.v-btn__content {
  width: 140px;
  height: 100% !important;
}
</style>
