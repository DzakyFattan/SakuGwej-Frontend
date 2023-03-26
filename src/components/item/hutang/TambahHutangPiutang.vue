<template>
  <v-dialog v-model="dialog" persistent width="512">
    <v-card :class="themeClass.bgSecondary" class="rounded-lg">
      <div class="mb-4" v-if="isTambahHutang">
        <TambahHutang
          @close="deactivateDialog"
          @pilihan-tambah="changePage"
        />
      </div>
      <div class="mb-4" v-else>
        <TambahPiutang
          @close="deactivateDialog"
          @pilihan-tambah="changePage"
        />
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import TambahHutang from "@/components/item/hutang/TambahHutang.vue";
import TambahPiutang from "@/components/item/hutang/TambahPiutang.vue";
import { useThemeStore } from "@/stores/theme";
import { defineComponent } from "vue";
const { theme, themeClasses } = useThemeStore();

export default defineComponent({
  components: {
    TambahHutang,
    TambahPiutang,
  },
  data() {
    return {
      isTambahHutang: true,
      dialog: false,
      themeClass: themeClasses,
    };
  },
  methods: {
    changePage(isTambahHutang: boolean) {
      this.isTambahHutang = isTambahHutang;
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
