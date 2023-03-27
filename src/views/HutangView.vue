<script setup lang="ts">
import HeaderMobile from "../components/item/header/HeaderMobile.vue";
import NavigationBar from "../components/item/navigation/NavigationBar.vue";
import Hutang from "../components/item/hutang/Hutang.vue";
import HutangDesktop from "../components/desktop/HutangDesktop.vue";
import TambahHutangPiutang from "../components/item/hutang/TambahHutangPiutang.vue";

import { onMounted, nextTick, ref } from "vue";

import type { DebtData } from "../types.vue";

const windowWidth = ref(window.innerWidth);

const tambahHutangPiutang = ref<InstanceType<typeof TambahHutangPiutang>>();

const debtData = ref<DebtData>([]);

// const testlocalapi = "http://localhost:3001/api/v1";
const api = "http://be-sakugwejdev.ddns.net/api/v1";

onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = window.innerWidth;
    });
  });
});

const activatedDialog = (_dialog: boolean) => {
  tambahHutangPiutang.value?.activatedDialog(_dialog);
};

const deactivatedDialog = (_insert: boolean) => {
  if (_insert) fetchData();
};

const fetchData = async () => {
  try {
    const limit = countData();
    const res = await fetch(`${api}/debts?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "GET",
    });
    const data = await res.json();
    debtData.value = data.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

fetchData();

function countData() {
  return Math.floor((window.screen.height - 200) / 80);
}
</script>

<template>
  <main>
    <TambahHutangPiutang ref="tambahHutangPiutang" @close="deactivatedDialog" />
    <div v-if="windowWidth < 1024">
      <HeaderMobile> Hutang </HeaderMobile>
      <Hutang @trigger-tambahkan="activatedDialog" @close="deactivatedDialog" />
    </div>
    <div v-else class="app-container">
      <NavigationBar currentPage="hutang" />
      <HutangDesktop 
      @trigger-tambahkan="activatedDialog" 
      @trigger-delete="fetchData"
      v-bind:debt-data="debtData"
      :fetch-data="fetchData" />
    </div>

  </main>
</template>
