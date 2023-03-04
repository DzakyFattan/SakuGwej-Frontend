<template>
  <header-mobile @clicked-menu="toogleDrawer"> Hutang </header-mobile>
  <main :hidden="isHidden">
    <hutang />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/HeaderMobile.vue";
import Hutang from "@/components/Hutang.vue";
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
