<template>
  <v-dialog v-model="dialog" persistent width="480">
    <v-card>
      <div class="mb-4" v-if="isTambahPemasukan">
        <TambahPemasukan
          @cancel="cancelTambahkan"
          @pilihan-tambah="changePage"
          @tambahkan-pemasukan="tambahkanPemasukan"
        />
      </div>
      <div class="mb-4" v-else>
        <TambahPengeluaran
          @cancel="cancelTambahkan"
          @pilihan-tambah="changePage"
          @tambahkan-pengeluaran="tambahkanPengeluaran"
        />
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import TambahPemasukan from "@/components/item/catatan/TambahPemasukan.vue";
import TambahPengeluaran from "@/components/item/catatan/TambahPengeluaran.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TambahPemasukan,
    TambahPengeluaran,
  },
  data() {
    return {
      isHidden: false,
      isTambahPemasukan: true,
      dialog: false,
    };
  },

  methods: {
    changePage(isTambahPemasukan: boolean) {
      this.isTambahPemasukan = isTambahPemasukan;
    },
    tambahkanPemasukan(pemasukan: object) {
      // kirim ke database
      this.dialog = false;
    },
    tambahkanPengeluaran(pengeluaran: object) {
      // kirim ke database
      this.dialog = false;
    },
    cancelTambahkan(dialog: boolean) {
      this.$emit("selesai-tambah", dialog);
      this.dialog = dialog;
    },
    activateDialog(dialog: boolean) {
      this.dialog = dialog;
    },
  },
});
</script>
<style scoped></style>
