<template>
  <HeaderMobile :isMenuPage="false" @clicked-menu="toogleDrawer">
    Hutang/Piutang
  </HeaderMobile>
  <main :hidden="isHidden">
    <div v-if="isTambahHutang">
      <TambahHutang @pilihan-tambah="changePage" />
    </div>
    <div v-else>
      <TambahPiutang @pilihan-tambah="changePage" />
    </div>
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import TambahHutang from "@/components/hutang/TambahHutang.vue";
import TambahPiutang from "@/components/hutang/TambahPiutang.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderMobile,
    TambahHutang,
    TambahPiutang,
  },
  data() {
    return {
      isHidden: false,
      isTambahHutang: true,
    };
  },
  methods: {
    toogleDrawer(isToggleOn: boolean) {
      this.isHidden = isToggleOn;
    },
    changePage(isTambahHutang: boolean) {
      this.isTambahHutang = isTambahHutang;
    },
  },
});
</script>
<style scoped></style>
