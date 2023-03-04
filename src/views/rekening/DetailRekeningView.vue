<template>
  <HeaderMobile :isMenuPage="false" @clicked-menu="toogleDrawer">
    Nama Rekening
  </HeaderMobile>
  <main :hidden="isHidden">
    <DetailRekening />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import DetailRekening from "@/components/rekening/DetailRekening.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    DetailRekening,
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
