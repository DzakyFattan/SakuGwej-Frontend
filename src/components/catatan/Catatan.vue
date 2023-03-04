<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row class="justify-center mt-2">
      <v-btn icon variant="flat" @click="onLeftArrowClick"
        ><img src="/src/assets/icons/arrow_left.png" alt="arrow_left"
      /></v-btn>
      <div class="text-xs mt-2 bg-color-secondary-bocchi h-8 w-32 rounded-md">
        <v-row class="justify-center align-center mt-[-0.5rem]">
          <p class="ml-2 my-4">{{ filter }}</p>
          <v-btn icon variant="flat" size="x-small" @click="onDropDownClick"
            ><img
              src="/src/assets/icons/arrow_drop_down.png"
              alt="arrow_drop_down"
          /></v-btn>
        </v-row>
      </div>
      <v-btn icon variant="flat" @click="onRightArrowClick"
        ><img src="/src/assets/icons/arrow_right.png" alt="arrow_right"
      /></v-btn>
      <div class="justify-end bg-color-secondary-bocchi rounded-md h-8 mt-2">
        <v-btn icon variant="flat" size="x-small" @click="onSortClick"
          ><img src="/src/assets/icons/sort_list.png" alt="sort_list"
        /></v-btn>
      </div>
    </v-row>
  </v-container>
  <p class="ml-8 mt-4">Hari ini</p>
  <div v-for="catatan in listCatatanHariIni" class="m-8" :key="catatan.id">
    <CatatanItem
      :nama="catatan.nama"
      :harga="catatan.harga"
      @clicked-item="onItemClicked"
    />
  </div>
  <p class="ml-8 mt-4">Kemarin</p>
  <div v-for="catatan in listCatatanKemarin" class="m-8" :key="catatan.id">
    <CatatanItem
      :nama="catatan.nama"
      :harga="catatan.harga"
      @clicked-item="onItemClicked"
    />
  </div>
  <v-container>
    <v-row class="justify-center mt-2 mb-4"
      ><a href="/catatan/tambah-catatan"
        ><v-btn class="bg-color-main-bocchi text-xs">Tambahkan</v-btn></a
      ></v-row
    >
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CatatanItem from "./CatatanItem.vue";
export default defineComponent({
  components: {
    CatatanItem,
  },
  data() {
    return {
      filter: "30 Hari Terakhir",
      listCatatanHariIni: [
        {
          id: 1,
          nama: "Makanan 1",
          harga: "Rp.10.000",
        },
        {
          id: 2,
          nama: "Makanan 2",
          harga: "Rp.5.000.000",
        },
      ],
      listCatatanKemarin: [
        {
          id: 1,
          nama: "Makanan 1",
          harga: "Rp.100.000",
        },
        {
          id: 2,
          nama: "Makanan 2",
          harga: "Rp.2.000",
        },
      ],
    };
  },
  methods: {
    onRightArrowClick() {
      console.log("right arrow clicked");
    },
    onLeftArrowClick() {
      console.log("left arrow clicked");
    },
    onDropDownClick() {
      console.log("drop down clicked");
    },
    onSortClick() {
      console.log("sort clicked");
    },
    onItemClicked(item: String) {
      console.log(item + " clicked");
    },
  },
});
</script>
<style scoped></style>
