<template>
  <HeaderMobile @clicked-menu="toogleDrawer">
    Pemasukan/Pengeluaran
  </HeaderMobile>
  <main :hidden="isHidden">
    <div v-if="isTambahPemasukan">
      <TambahPemasukan @pilihan-tambah="changePage" />
    </div>
    <div v-else>
      <TambahPengeluaran @pilihan-tambah="changePage" />
    </div>
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import TambahPemasukan from "@/components/catatan/TambahPemasukan.vue";
import TambahPengeluaran from "@/components/catatan/TambahPengeluaran.vue";
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
