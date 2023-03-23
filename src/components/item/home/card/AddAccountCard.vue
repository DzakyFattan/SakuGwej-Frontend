<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme';

const { themeClasses } = useThemeStore();

</script>

<template>
    <div :class="themeClasses.borderMain" class="flex flex-row rounded-md w-fit h-20 items-center mx-1 my-2 px-4">
        <img src="/src/assets/icons/add-gotoh.png" class="w-12 h-12 mr-3">
        <p :class="themeClasses.textDark" class="w-20">Tambah Akun</p>
    </div>
</template>