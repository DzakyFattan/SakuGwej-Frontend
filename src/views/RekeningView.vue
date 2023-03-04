<template>
  <header-mobile @clicked-menu="toogleDrawer"> Rekening </header-mobile>
  <main :hidden="isHidden">
    <rekening />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/HeaderMobile.vue";
import Rekening from "@/components/Rekening.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    Rekening,
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
