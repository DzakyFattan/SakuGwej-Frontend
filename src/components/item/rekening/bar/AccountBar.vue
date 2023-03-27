<script setup lang="ts">
import { ref } from "vue";
import { parseNominal } from "@/utils/parse";
import { useThemeStore } from "@/stores/theme";

import type { Account } from "@/types.vue";

const { themeClasses } = useThemeStore();
const themeClass = themeClasses;

const props = defineProps<{
  account: Account;
}>();

const account = ref({} as Account)

account.value = props.account;
</script>

<template>
  <a
    class="flex flex-row rounded-md w-fit h-20 items-center self-center mx-1 my-2 px-4 text-black"
    :class="themeClass.borderMain"
    :href="'/rekening/' + account._id + '/detail-rekening/'"
  >
    <img
      src="/src/assets/icons/cart.png"
      alt="cart"
      class="w-12 h-12 mr-8"
    />
    <div>
      <p class="w-16 mr-[23vh]">{{ account.accountName }}</p>
      <p class="w-16 mr-[23vh]">{{ account.accountNumber }}</p>
    </div>
    <p class="w-16 ml-[23vh]">{{ parseNominal(account.nominal) }}</p>
    <img src="/src/assets/icons/more.png" class="w-6 h-6 ml-3" />
  </a>
</template>

<style scoped></style>
