<script lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import Catatan from "../components/item/catatan/Catatan.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import CatatanDesktop from "../components/desktop/CatatanDesktop.vue";
import TambahCatatan from "../components/item/catatan/TambahCatatan.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HeaderMobile,
    NavigationBar,
    Catatan,
    CatatanDesktop,
    TambahCatatan,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    activateDialog(dialog: boolean) {
      (this.$refs.tambahCatatan as any).activateDialog(dialog);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },
});
</script>

<template>
  <main>
    <TambahCatatan ref="tambahCatatan" />
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Catatan </HeaderMobile>
      <Catatan @trigger-tambahkan="activateDialog" />
    </div>
    <div v-else class="app-container">
      <NavigationBar currentPage="catatan" />
      <CatatanDesktop @trigger-tambahkan="activateDialog" />
    </div>
  </main>
</template>

<style scoped></style>
