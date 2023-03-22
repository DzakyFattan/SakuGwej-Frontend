<template>
  <v-dialog v-model="dialog" persistent width="480">
    <v-card>
      <div class="mb-4" v-if="isTambahHutang">
        <TambahHutang
          @cancel="cancelTambahkan"
          @pilihan-tambah="changePage"
          @tambahkan-hutang="tambahkanHutang"
        />
      </div>
      <div class="mb-4" v-else>
        <TambahPiutang
          @cancel="cancelTambahkan"
          @pilihan-tambah="changePage"
          @tambahkan-piutang="tambahkanPiutang"
        />
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import TambahHutang from "@/components/item/hutang/TambahHutang.vue";
import TambahPiutang from "@/components/item/hutang/TambahPiutang.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TambahHutang,
    TambahPiutang,
  },
  data() {
    return {
      isTambahHutang: true,
      dialog: false,
    };
  },
  methods: {
    changePage(isTambahHutang: boolean) {
      this.isTambahHutang = isTambahHutang;
    },
    tambahkanHutang(hutang: object) {
      // kirim ke database
      this.dialog = false;
    },
    tambahkanPiutang(piutang: object) {
      // kirim ke database
      this.dialog = false;
    },
    cancelTambahkan(dialog: boolean) {
      this.dialog = dialog;
    },
    activateDialog(dialog: boolean) {
      this.dialog = dialog;
    },
  },
});
</script>
<style scoped></style>
