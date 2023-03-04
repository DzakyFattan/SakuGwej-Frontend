<template>
  <header-mobile @clicked-menu="toogleDrawer">
    Pemasukan/Pengeluaran
  </header-mobile>
  <main :hidden="isHidden">
    <div v-if="isTambahPemasukan">
      <tambah-pemasukan @pilihan-tambah="changePage" />
    </div>
    <div v-else>
      <tambah-pengeluaran @pilihan-tambah="changePage" />
    </div>
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/HeaderMobile.vue";
import TambahPemasukan from "@/components/TambahPemasukan.vue";
import TambahPengeluaran from "@/components/TambahPengeluaran.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    TambahPemasukan,
    TambahPengeluaran,
  },
  data() {
    return {
      isHidden: false,
      isTambahPemasukan: true,
    };
  },
  methods: {
    toogleDrawer(isToggleOn: boolean) {
      this.isHidden = isToggleOn;
    },
    changePage(isTambahPemasukan: boolean) {
      this.isTambahPemasukan = isTambahPemasukan;
    },
  },
});
</script>
<style scoped></style>
