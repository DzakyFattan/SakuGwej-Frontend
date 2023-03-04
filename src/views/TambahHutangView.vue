<template>
  <header-mobile @clicked-menu="toogleDrawer"> Hutang/Piutang </header-mobile>
  <main :hidden="isHidden">
    <div v-if="isTambahHutang">
      <tambah-hutang @pilihan-tambah="changePage" />
    </div>
    <div v-else>
      <tambah-piutang @pilihan-tambah="changePage" />
    </div>
  </main>
</template>
<script lang="ts">
import HeaderMobile from "@/components/HeaderMobile.vue";
import TambahHutang from "@/components/TambahHutang.vue";
import TambahPiutang from "@/components/TambahPiutang.vue";
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
