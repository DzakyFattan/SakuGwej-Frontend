<template>
  <HeaderMobile @clicked-menu="toogleDrawer"> Home </HeaderMobile>
  <main :hidden="isHidden">
    <Home />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import Home from "@/components/home/Home.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    Home,
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
