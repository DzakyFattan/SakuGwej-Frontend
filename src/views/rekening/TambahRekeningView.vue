<template>
  <HeaderMobile :isMenuPage="false" @clicked-menu="toogleDrawer">
    Buat Rekening Baru
  </HeaderMobile>
  <main :hidden="isHidden">
    <TambahRekening />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import TambahRekening from "@/components/rekening/TambahRekening.vue";
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
