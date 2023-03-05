<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row class="justify-center mt-2">
      <v-text-field
        class="text-color-main-bocchi mx-28"
        variant="outlined"
        label="Search"
      >
        <template v-slot:prepend
          ><div class="bg-color-secondary-bocchi rounded-md h-8">
            <a href="/rekening/tambah-rekening"
              ><v-btn icon variant="flat" size="x-small"
                ><img
                  src="/src/assets/icons/add_ring_fill.png"
                  alt="sort_list" /></v-btn
            ></a>
          </div>
        </template>
        <template v-slot:append>
          <div class="bg-color-secondary-bocchi rounded-md h-8">
            <v-btn
              id="sort-menu"
              icon
              variant="flat"
              size="x-small"
              @click="onSortClick"
              ><img
                src="/src/assets/icons/sort_list.png"
                alt="sort_list" /></v-btn
            ><v-menu activator="#sort-menu">
              <v-list>
                <v-list-item
                  v-for="(item, index) in listSort"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div></template
        >
      </v-text-field>
    </v-row>
  </v-container>
  <div v-for="bayaran in listItem" class="m-8" :key="bayaran.id">
    <a href="/rekening/{{ bayaran.id }}/detail-rekening/"
      ><v-card class="mx-auto" width="300" height="60">
        <v-row class="mt-1 ml-px">
          <img class="m-3" src="/src/assets/icons/cart.png" alt="cart" />
          <v-card-text> {{ bayaran.nama }} </v-card-text>
          <v-card-text> {{ bayaran.harga }} </v-card-text>
        </v-row>
      </v-card></a
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      listItem: [
        {
          id: 1,
          nama: "Unpay",
          harga: "IDR 10.000",
        },
        {
          id: 2,
          nama: "Depay",
          harga: "IDR 10.000",
        },
        {
          id: 3,
          nama: "Repay",
          harga: "IDR 10.000",
        },
      ],
      listSort: ["A-Z", "Z-A", "Lowest Balance", "Highest Balance"],
    };
  },
  methods: {
    onSortClick() {
      console.log("sort");
    },
  },
});
</script>
<style scoped></style>
