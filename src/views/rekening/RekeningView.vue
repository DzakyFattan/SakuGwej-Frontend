<template>
  <HeaderMobile :isMenuPage="true" @clicked-menu="toogleDrawer">
    Rekening
  </HeaderMobile>
  <main :hidden="isHidden">
    <Rekening />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import Rekening from "@/components/rekening/Rekening.vue";
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
