<template>
  <header-mobile @clicked-menu="toogleDrawer">
    Buat Rekening Baru
  </header-mobile>
  <main :hidden="isHidden">
    <tambah-rekening />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/HeaderMobile.vue";
import TambahRekening from "@/components/TambahRekening.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    TambahRekening,
  },
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    toogleDrawer(isToggleOn: boolean) {
      this.isHidden = isToggleOn;
    },
  },
});
</script>
<style scoped></style>
