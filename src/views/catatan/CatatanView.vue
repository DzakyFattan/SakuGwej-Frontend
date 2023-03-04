<template>
  <HeaderMobile @clicked-menu="toogleDrawer"> Catatan </HeaderMobile>
  <main :hidden="isHidden">
    <Catatan />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import Catatan from "@/components/catatan/Catatan.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    Catatan,
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
