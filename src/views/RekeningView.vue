<script setup lang="ts">
import HeaderMobile from "@/components/item/header/HeaderMobile.vue";
import NavigationBar from "@/components/item/navigation/NavigationBar.vue";
import Rekening from "@/components/item/rekening/Rekening.vue";
import RekeningDesktop from "@/components/desktop/RekeningDesktop.vue";
import TambahRekening from "@/components/item/rekening/TambahRekening.vue";

import { onMounted, ref, nextTick } from "vue";
import { useThemeStore } from "@/stores/theme";

import type { AccountData, Account } from "@/types.vue";


const { theme, themeClasses } = useThemeStore();
const themeClass = themeClasses;

const accountData = ref<AccountData>([]);

const windowWidth = ref(window.innerWidth);

const dialog = ref(false);

const api = "http://be-sakugwejdev.ddns.net/api/v1";
// const testlocalapi = "http://localhost:3001/api/v1";

onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  });
});

const activatedDialog = (_dialog: boolean) => {
  dialog.value = _dialog;
};

const deactivatedDialog = (_insert: boolean) => {
  if (_insert) fetchData();
  dialog.value = false;
};

const fetchData = async () => {
  try {
    const limit = countData();
    const res = await fetch(`${api}/accounts?limit${limit}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    });
    const data = await res.json();
    console.log(data.data);
    accountData.value = data.data;
    console.log(accountData.value);
  } catch (error: any) {
    console.log(error.message);
  }
};

fetchData();

// for limit fecth data
function countData() {
  return Math.floor((window.screen.height - 200) / 80);
}
</script>

<template>
  <main>
    <v-dialog v-model="dialog" persistent width="512">
      <v-card :class="themeClass.bgSecondary" class="rounded-lg">
        <div class="mb-4">
          <TambahRekening
            @close="deactivatedDialog"
          />
        </div>
      </v-card>
    </v-dialog>
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Rekening </HeaderMobile>
      <Rekening @trigger-tambahkan="activatedDialog" />
    </div>
    <div v-else class="app-container">
      <NavigationBar currentPage="rekening" />
      <RekeningDesktop 
        @trigger-tambahkan="activatedDialog" 
        v-bind:account-data="accountData" 
        :fetch-data="fetchData"/>
    </div>
  </main>
</template>

<style scoped></style>
