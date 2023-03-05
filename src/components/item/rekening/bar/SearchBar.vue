<script setup lang="ts">
    const sort = ["A-Z", "Z-A", "Saldo Terendah", "Saldo Tetinggi"]
</script>

<template>
  <v-container class="h-fit w-[70vh] mb-3">
    <v-row class="justify-center items-center">
      <a href="/rekening/tambah-rekening">
        <v-btn icon variant="flat" size="x-small">
            <img src="/src/assets/icons/add-ring.png" alt="add"/>
        </v-btn>
      </a>
      <v-text-field
        class="text-color-main-bocchi mx-4"
        variant="outlined"
        label="Search"
        hide-details>
      </v-text-field>
      <v-btn id="sort-menu"
             icon
             variant="flat"
             size="x-small">
            <img src="/src/assets/icons/sort-gotoh.png" alt="sort" />
      </v-btn>
      <v-menu activator="#sort-menu">
        <v-list>
          <v-list-item
            v-for="item in sort"
            :value="item">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-btn {
    width: 3rem;
    height: 3rem;
  }
</style>