<script setup lang="ts">
    import { parseNominal } from '@/utils/parse';
    
    const props     = defineProps(["account"])
    const account   = props.account
    const nominal   = parseNominal(account.nominal)
</script>

<template>
    <div class="flex flex-row rounded-md w-fit h-20 items-center mx-1 my-2 px-4" :class="account.bg_color">
        <img src="/src/assets/icons/cash.png" class="w-12 h-9 mr-3">
        <div class="h-fit">
            <p class="text-color-tertiary-gray w-20">{{ account.name    }}</p>
            <p class="text-color-tertiary-gray w-20">{{ nominal         }}</p>
        </div>
    </div>
</template>