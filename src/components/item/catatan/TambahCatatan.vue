<template>
  <v-dialog v-model="dialog" persistent width="512">
    <v-card :class="themeClass.bgSecondary" class="rounded-lg">
      <div class="mb-4" v-if="isTambahPemasukan">
        <TambahPemasukan
          @close="deactivateDialog"
          @pilihan-tambah="changePage"
        />
      </div>
      <div class="mb-4" v-else>
        <TambahPengeluaran
          @close="deactivateDialog"
          @pilihan-tambah="changePage"
        />
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import TambahPemasukan from "@/components/item/catatan/TambahPemasukan.vue";
import TambahPengeluaran from "@/components/item/catatan/TambahPengeluaran.vue";
import { useThemeStore } from "@/stores/theme";
import { defineComponent } from "vue";
const { theme, themeClasses } = useThemeStore();

export default defineComponent({
  components: {
    TambahPemasukan,
    TambahPengeluaran,
  },
  data() {
    return {
      isTambahPemasukan: true,
      dialog: false,
      themeClass: themeClasses,
    };
  },

  methods: {
    changePage(isTambahPemasukan: boolean) {
      this.isTambahPemasukan = isTambahPemasukan;
    },
    deactivateDialog() {
      this.dialog = false;
    },
    activateDialog(dialog: boolean) {
      this.dialog = dialog;
    },
  },
});
</script>
<style scoped></style>
