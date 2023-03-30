<script setup lang="ts">
import TambahPemasukan from "@/components/item/catatan/TambahPemasukan.vue";
import TambahPengeluaran from "@/components/item/catatan/TambahPengeluaran.vue";
import { useThemeStore } from "@/stores/theme";

import { ref } from "vue";

import type { AccountData } from "@/types.vue";

const { themeClasses } = useThemeStore();
const themeClass = themeClasses;

const isTambahPemasukan = ref(true);
const dialog = ref(false);

const emit = defineEmits(["close", "pilihan-tambah"]);
const props = defineProps<{
  accountData: AccountData;
  fetchData: () => void;
}>();

const changePage = (_isTambahPemasukan: boolean) => {
  isTambahPemasukan.value = _isTambahPemasukan;
};

const deactivatedDialog = (args: boolean) => {
  dialog.value = false;
  emit("close", args);
};

const activatedDialog = (_dialog: boolean) => {
  dialog.value = _dialog;
};

defineExpose({
  activatedDialog,
});
</script>

<template>
  <v-dialog v-model="dialog" persistent width="512">
    <v-card :class="themeClass.bgSecondary" class="rounded-lg">
      <div class="mb-4" v-if="isTambahPemasukan">
        <TambahPemasukan
          @close="deactivatedDialog"
          @pilihan-tambah="changePage"
          v-bind:account-data="accountData"
          :fetch-data="props.fetchData"
        />
      </div>
      <div class="mb-4" v-else>
        <TambahPengeluaran
          @close="deactivatedDialog"
          @pilihan-tambah="changePage"
          v-bind:account-data="accountData"
          :fetch-data="props.fetchData"
        />
      </div>
    </v-card>
  </v-dialog>
</template>
<style scoped></style>
