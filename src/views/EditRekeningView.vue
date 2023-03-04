<template>
  <header-mobile @clicked-menu="toogleDrawer"> Nama Rekening </header-mobile>
  <main :hidden="isHidden">
    <edit-rekening />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/HeaderMobile.vue";
import EditRekening from "@/components/EditRekening.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    EditRekening,
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
