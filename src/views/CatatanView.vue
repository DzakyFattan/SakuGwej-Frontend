<template>
  <header-mobile @clicked-menu="toogleDrawer"> Catatan </header-mobile>
  <main :hidden="isHidden">
    <catatan />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/HeaderMobile.vue";
import Catatan from "@/components/Catatan.vue";
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
