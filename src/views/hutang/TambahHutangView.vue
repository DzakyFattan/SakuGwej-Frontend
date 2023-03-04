<template>
  <HeaderMobile :isMenuPage="false"> Catat Hutang/Piutang </HeaderMobile>
  <main>
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
      isTambahHutang: true,
    };
  },
  methods: {
    changePage(isTambahHutang: boolean) {
      this.isTambahHutang = isTambahHutang;
    },
  },
});
</script>
<style scoped></style>
