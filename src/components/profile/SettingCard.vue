<script setup lang="ts">
const props = defineProps({
  title: String,
  desc: String
})
</script>
<template>
    <div
      class="flex flex-row rounded-3xl bg-color-secondary-bocchi my-2 p-4 h-fit mx-8"
    >
      <div class="px-8 py-3 w-full">
        <p class="font-bold text-2xl">{{ props.title }}</p>
        <div class="mt-2 flex-1 grow">
          </div>
            <div v-if="desc">{{ props.desc }}</div>
            <slot>
                <p>SettingCard</p>
            </slot>
      </div>
    </div>
  </template>