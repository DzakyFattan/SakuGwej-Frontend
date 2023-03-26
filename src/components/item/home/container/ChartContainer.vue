<script setup lang="ts">
import ChartCard from "../card/ChartCard.vue";

const data = [
  {
    id: "canvas-1",
    type: "bar",
    data: [65, 59, 80, 81, 56, 55, 40],
    label: ["Januari", "February", "Maret", "April", "May", "June", "July"],
    legend: "Pemasukan",
  },
  {
    id: "canvas-2",
    type: "bar",
    data: [65, 59, 80, 81, 56, 55, 40],
    label: ["Januari", "February", "Maret", "April", "May", "June", "July"],
    legend: "Pengeluaran",
  },
  {
    id: "canvas-3",
    type: "bar",
    data: [65, 59, 80, 81, 56, 55, 40],
    label: ["Januari", "February", "Maret", "April", "May", "June", "July"],
    legend: "Utang",
  },
  {
    id: "canvas-4",
    type: "bar",
    data: [65, 59, 80, 81, 56, 55, 40],
    label: ["Januari", "February", "Maret", "April", "May", "June", "July"],
    legend: "Piutang",
  },
  {
    id: "canvas-5",
    type: "bar",
    data: [65, 59, 80, 81, 56, 55, 40],
    label: ["Januari", "February", "Maret", "April", "May", "June", "July"],
    legend: "Pendapatan",
  },
  {
    id: "canvas-6",
    type: "bar",
    data: [65, 59, 80, 81, 56, 55, 40],
    label: ["Januari", "February", "Maret", "April", "May", "June", "July"],
    legend: "Aliran Keuangan",
  },
];
const charts = data;
</script>

<template>
  <div class="flex flex-wrap mt-4 pl-6">
    <ChartCard v-for="chart in charts" v-bind:chart="chart" />
  </div>
</template>
