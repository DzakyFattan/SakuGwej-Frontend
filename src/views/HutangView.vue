<script lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import Hutang from "../components/item/hutang/Hutang.vue";
import HutangDesktop from "../components/desktop/HutangDesktop.vue";
import TambahHutangPiutang from "../components/item/hutang/TambahHutangPiutang.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HeaderMobile,
    NavigationBar,
    Hutang,
    HutangDesktop,
    TambahHutangPiutang,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    activateDialog(dialog: boolean) {
      (this.$refs.tambahHutangPiutang as any).activateDialog(dialog);
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
    <TambahHutangPiutang ref="tambahHutangPiutang" />
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Hutang </HeaderMobile>
      <Hutang @trigger-tambahkan="activateDialog" />
    </div>
    <div v-else class="app-container">
      <NavigationBar currentPage="hutang" />
      <HutangDesktop @trigger-tambahkan="activateDialog" />
    </div>
  </main>
</template>
