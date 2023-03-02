<template>
  <div
    class="flex flex-row rounded-3xl bg-color-secondary-bocchi my-4 p-4 h-fit mx-8"
  >
    <div class="px-8 py-3 w-full">
      <p class="font-bold text-2xl">Export dan Import Data</p>
      <div class="mt-2 flex flex-row space-x-4 flex-1 grow">
        <div class="flex-1 border-r pr-2 border-gray-400">
          <p>Export transaksi dalam file csv</p>
          <button class="button bg-color-main-bocchi mt-2">Export</button>
        </div>
        <div class="flex-1">
          <p>Import transaksi dari file csv</p>
          <button class="button bg-color-main-bocchi mt-2">Import</button>
        </div>
      </div>
    </div>
  </div>
</template>