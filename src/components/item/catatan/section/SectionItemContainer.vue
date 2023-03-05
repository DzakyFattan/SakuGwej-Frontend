<script setup lang="ts">
  import SectionItemBar from "./SectionItemBar.vue";
  import { ref  } from "vue";

  const props     = defineProps(["note"])
  const note      = props.note
  
  const time      = note.time
  const items     = ref()

  items.value     = note.catatan
</script>

<template>
  <p class="w-[75vh] h-fit self-center mt-4 mb-2 px-7">{{ time }}</p>
  <SectionItemBar v-for="item in items" v-bind:item="item"/>
</template>