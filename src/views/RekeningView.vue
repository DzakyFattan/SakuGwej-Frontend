<script lang="ts">
import HeaderMobile from "@/components/item/header/HeaderMobile.vue";
import NavigationBar from "@/components/item/navigation/NavigationBar.vue";
import Rekening from "@/components/item/rekening/Rekening.vue";
import RekeningDesktop from "@/components/desktop/RekeningDesktop.vue";
import TambahRekening from "@/components/item/rekening/TambahRekening.vue";

import { defineComponent } from "vue";
import { useThemeStore } from "@/stores/theme";
const { theme, themeClasses } = useThemeStore();
export default defineComponent({
  components: {
    HeaderMobile,
    NavigationBar,
    Rekening,
    RekeningDesktop,
    TambahRekening,
  },
  props: {
    isTambahCatatan: Boolean,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      dialog: false,
      themeClass: themeClasses,
    };
  },
  methods: {
    activateDialog(dialog: boolean) {
      this.dialog = dialog;
    },
    cancelTambahkan() {
      this.dialog = false;
    },
    tambahkanRekening() {
      // kirim ke database
      this.dialog = false;
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
    <v-dialog v-model="dialog" persistent width="512">
      <v-card :class="themeClass.bgSecondary" class="rounded-lg">
        <div class="mb-4">
          <TambahRekening
            @cancel="cancelTambahkan"
            @tambahkan-rekening="tambahkanRekening"
          />
        </div>
      </v-card>
    </v-dialog>
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Rekening </HeaderMobile>
      <Rekening @trigger-tambahkan="activateDialog" />
    </div>
    <div v-else class="app-container">
      <NavigationBar currentPage="rekening" />
      <RekeningDesktop @trigger-tambahkan="activateDialog" />
    </div>
  </main>
</template>

<style scoped></style>
