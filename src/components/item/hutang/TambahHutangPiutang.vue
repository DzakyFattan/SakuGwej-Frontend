<script setup lang="ts">
import TambahHutang from "@/components/item/hutang/TambahHutang.vue";
import TambahPiutang from "@/components/item/hutang/TambahPiutang.vue";

import { useThemeStore } from "@/stores/theme";
import { defineComponent, ref } from "vue";

const { theme, themeClasses } = useThemeStore();
const themeClass = themeClasses;

const isTambahHutang = ref(true);
const dialog = ref(false);

const emit = defineEmits(["close", "pilihan-tambah"]);

const changePage = (_isTambahHutang: boolean) => {
  isTambahHutang.value = _isTambahHutang;
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
      <div class="mb-4" v-if="isTambahHutang">
        <TambahHutang 
          @close="deactivatedDialog" 
          @pilihan-tambah="changePage" />
      </div>
      <div class="mb-4" v-else>
        <TambahPiutang 
          @close="deactivatedDialog" 
          @pilihan-tambah="changePage" />
      </div>
    </v-card>
  </v-dialog>
</template>


<style scoped></style>
