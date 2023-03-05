<script setup lang="ts">
  import SelectionBar from "../../selection/SelectionBar.vue";
  import SectionItemContainer from "../section/SectionItemContainer.vue";
  import { ref  } from "vue";

  const data     = [
    {
      time: "Hari ini",
      catatan: [
        {
          category: "Makanan",
          description: "Cash",
          nominal: 10000,
        },
        {
          category: "Makanan",
          description: "Cash",
          nominal: 10000,
        },
        {
          category: "Minuman",
          description: "Cash",
          nominal: 10000,
        },
      ]
    },
    {
      time: "Kemarin",
      catatan: [
        {
          category: "Makanan",
          description: "Cash",
          nominal: 10000,
        },
        {
          category: "Minuman",
          description: "Cash",
          nominal: 10000,
        },
      ]
    },
  ] 

  const notes     = ref()
  const type      = ref()
  const count     = countData()

  notes.value     = data.slice(0, count-1)
  type.value      = "catatan"

  function countData() {
    return Math.floor((window.screen.height-200)/80)
  }
  
</script>

<template>
    <SelectionBar v-bind:type="type" />
    <SectionItemContainer v-for="note in notes" v-bind:note="note"/>
</template>