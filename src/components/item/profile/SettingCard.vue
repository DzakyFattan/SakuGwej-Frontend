<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const props = defineProps({
  title: String,
  desc: String,
});

const { theme, themeClasses } = useThemeStore();

</script>
<template>
  <div
    class="flex flex-row rounded-3xl my-2 p-4 h-fit mx-8"
    :class="themeClasses.bgSecondary"
  >
    <div class="px-8 py-3 w-full">
      <p class="font-bold text-xl">{{ props.title }}</p>
      <div class="mt-2 flex-1 grow"></div>
      <div v-if="desc">{{ props.desc }}</div>
      <slot>
        <p>SettingCard</p>
      </slot>
    </div>
  </div>
</template>
