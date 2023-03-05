<script setup lang="ts">
    import { parseNominal } from '@/utils/parse';

    const props     = defineProps(["account"])
    const account   = props.account
    const nominal   = parseNominal(account.nominal)
</script>

<template>
    <a class="flex flex-row rounded-md border-secondary-bocchi w-fit h-20 items-center self-center mx-1 my-2 px-4" 
        :class="account.bg_color" 
        :href="'/rekening/'+account.id+'/detail-rekening/'">
        <img src="/src/assets/icons/cart-gray.png" alt="cart" class="w-12 h-12 mr-8">
        <p class="w-16 mr-[23vh] text-color-tertiary-gray">{{ account.name }}</p>
        <p class="w-16 ml-[23vh] text-color-tertiary-gray">{{ nominal }}</p>
    </a>
</template>

<style scoped></style>