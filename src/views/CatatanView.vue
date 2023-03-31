<script setup lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import Catatan from "../components/item/catatan/Catatan.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import CatatanDesktop from "../components/desktop/CatatanDesktop.vue";
import TambahCatatan from "../components/item/catatan/TambahCatatan.vue";

import { onMounted, nextTick, ref } from "vue";

import type { TransactionData, AccountData } from "../types.vue";

const windowWidth = ref(window.innerWidth)
const tambahCatatan = ref<InstanceType<typeof TambahCatatan>>()
const transactionData = ref<TransactionData>([]);
const accountData = ref<AccountData>([]);
const page = ref(0);

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

const fetchData = async (_until: string = "") => {
  try {
    const limit = countData();
    const response = await fetch(`${api}/transactions/daily?limit=${limit}&skip=${limit*page.value}&until=${_until}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "GET",
    });
    const data = await response.json();
    if (response.status !== 200) throw new Error(data.message);

    if (transactionData.value.length !== 0 && data.data.length === 0) {
      page.value -= 1;
      return;
    }
    transactionData.value = data.data;

  } catch (error: any) {
    console.log(error.message);
  }
};

const fetchAccount = async () => {
  try { 
    const response = await fetch(`${api}/accounts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "GET",
    });
    const data = await response.json();
    if (response.status !== 200) throw new Error(data.message);

    accountData.value = data.data;

  } catch (error: any) {
    console.log(error.message);
  }
}

const changePage = (_page: number) => {
  console.log(page.value + _page);
  if (page.value + _page < 0) return;
  page.value += _page;
  fetchData();
}

const countData = () => {
  return Math.floor((window.screen.height - 200) / 80) - 4;
}

fetchData();
fetchAccount();
</script>

<template>
  <main>
    <TambahCatatan 
      ref="tambahCatatan" 
      @close="deactivatedDialog"
      v-bind:account-data="accountData"
      :fetch-data="fetchAccount" />
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Catatan </HeaderMobile>
      <Catatan @trigger-tambahkan="activatedDialog" />
    </div>
    <div v-else class="app-container">
      <NavigationBar currentPage="catatan" />
      <CatatanDesktop 
        @trigger-tambahkan="activatedDialog"
        @trigger-delete="fetchData"
        @trigger-change-page="changePage"
        @trigger-change-interval="fetchData"
        v-bind:transaction-data="transactionData"
        :fetch-data="fetchData" />
    </div>
  </main>
</template>

<style scoped></style>
