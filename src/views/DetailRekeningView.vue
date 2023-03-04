<template>
  <header-mobile @clicked-menu="toogleDrawer"> Nama Rekening </header-mobile>
  <main :hidden="isHidden">
    <detail-rekening />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/HeaderMobile.vue";
import DetailRekening from "@/components/DetailRekening.vue";
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
