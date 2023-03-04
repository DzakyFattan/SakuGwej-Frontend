<template>
  <HeaderMobile :isMenuPage="false" @clicked-menu="toogleDrawer">
    Nama Rekening
  </HeaderMobile>
  <main :hidden="isHidden">
    <EditRekening />
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/item/header/HeaderMobile.vue";
import EditRekening from "@/components/item/rekening/EditRekening.vue";
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
