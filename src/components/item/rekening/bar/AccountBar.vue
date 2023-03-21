<script setup lang="ts">
    import { parseNominal } from '@/utils/parse';
    import { useThemeStore } from '@/stores/theme';

    const props     = defineProps(["account"])
    const account   = props.account
    const nominal   = parseNominal(account.nominal)

    const { themeClasses } = useThemeStore()
</script>

<template>
    <a class="flex flex-row rounded-md w-fit h-20 items-center self-center mx-1 my-2 px-4" 
        :class="[account.bg_color, themeClasses.borderMain]" 
        :href="'/rekening/'+account.id+'/detail-rekening/'">
        <img src="/src/assets/icons/cart-gray.png" alt="cart" class="w-12 h-12 mr-8">
        <p class="w-16 mr-[23vh] text-color-tertiary-gray">{{ account.name }}</p>
        <p class="w-16 ml-[23vh] text-color-tertiary-gray">{{ nominal }}</p>
    </a>
</template>

<style scoped></style>