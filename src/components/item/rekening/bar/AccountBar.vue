<script setup lang="ts">
    import { parseNominal } from '@/utils/parse';

    const props     = defineProps(["account"])
    const account   = props.account
    const nominal   = parseNominal(account.nominal)
</script>

<template>
    <div class="flex flex-row rounded-md border-secondary-bocchi w-fit h-20 items-center self-center mx-1 my-2 px-4" >
        <img src="/src/assets/icons/cart.png" class="w-12 h-12 mr-8">
        <p class="w-16 mr-[23vh]">{{ account.name }}</p>
        <p class="w-16 ml-[23vh]">{{ nominal }}</p>
    </div>
</template>

<style scoped></style>