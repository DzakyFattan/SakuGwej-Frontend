<script setup lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import Catatan from "../components/item/catatan/Catatan.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import CatatanDesktop from "../components/desktop/CatatanDesktop.vue";
import TambahCatatan from "../components/item/catatan/TambahCatatan.vue";

import { onMounted, nextTick, ref } from "vue";

import type { TransactionData, Transaction } from "../types.vue";

const windowWidth = ref(window.innerWidth)

const tambahCatatan = ref<InstanceType<typeof TambahCatatan>>()

const transactionData = ref<TransactionData>([]);

onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  });
});

// const testlocalapi = "http://localhost:3001/api/v1";
const api = "http://be-sakugwejdev.ddns.net/api/v1";

const activatedDialog = (_dialog: boolean) => {
  tambahCatatan.value?.activatedDialog(_dialog);
};

const deactivatedDialog = (_insert: boolean) => {
  if (_insert) fetchData();
};

const fetchData = async () => {
  try {
    const res = await fetch(`${api}/transactions`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    transactionData.value = data.data;
    transactionData.value = transactionData.value.slice(0, 2);
  } catch (error: any) {
    console.log(error.message);
  }
};

fetchData();

// function countData() {
//   return Math.floor((window.screen.height - 200) / 80);
// }
</script>

<template>
  <main>
    <TambahCatatan ref="tambahCatatan" @close="deactivatedDialog" />
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Catatan </HeaderMobile>
      <Catatan @trigger-tambahkan="activatedDialog" />
    </div>
    <div v-else class="app-container">
      <NavigationBar currentPage="catatan" />
      <CatatanDesktop 
        @trigger-tambahkan="activatedDialog"
        v-bind:transaction-data="transactionData"
        :fetch-data="fetchData" />
    </div>
  </main>
</template>

<style scoped></style>
