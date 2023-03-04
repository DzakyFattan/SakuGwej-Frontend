<template>
  <HeaderMobile :isMenuPage="true" @clicked-menu="toogleDrawer"> Hutang </HeaderMobile>
  <main :hidden="isHidden">
    <Hutang />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import Hutang from "@/components/hutang/Hutang.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    Hutang,
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
