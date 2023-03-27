<script setup lang="ts">
import SearchBar from "../bar/SearchBar.vue";
import AccountBar from "../bar/AccountBar.vue";

import { ref, watch } from "vue";

import type { Account, AccountData } from "@/types.vue";

const props = defineProps<{
  accountData: AccountData;
  fetchData: () => void;
}>();

const accounts = ref(
  [] as Account[]
);


watch(props, () => {
  accounts.value = props.accountData;
});



const emit = defineEmits(["trigger-tambahkan"]);


function addRekening(arg: boolean) {
  emit("trigger-tambahkan", arg);
}
</script>

<template>
  <SearchBar @trigger-tambahkan="addRekening" />
  <AccountBar v-for="(account, idx) in accounts" v-bind:account="account" v-bind:key="idx" />
</template>
