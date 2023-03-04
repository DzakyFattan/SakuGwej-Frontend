<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row class="justify-center mt-2">
      <v-btn icon variant="flat"
        ><img src="/src/assets/icons/arrow_left.png" alt="arrow_left"
      /></v-btn>
      <div class="text-xs bg-color-secondary-bocchi h-12 w-32 rounded-md">
        <v-row class="justify-center align-center mt-px">
          <p class="ml-2 my-4">{{ filter }}</p>
          <v-btn icon variant="flat" size="x-small"
            ><img
              src="/src/assets/icons/arrow_drop_down.png"
              alt="arrow_drop_down"
          /></v-btn>
        </v-row>
      </div>
      <v-btn icon variant="flat"
        ><img src="/src/assets/icons/arrow_right.png" alt="arrow_right"
      /></v-btn>
      <div class="justify-end bg-color-secondary-bocchi rounded-md h-8 mt-2">
        <v-btn icon variant="flat" size="x-small"
          ><img src="/src/assets/icons/sort_list.png" alt="sort_list"
        /></v-btn>
      </div>
    </v-row>
  </v-container>
  <p class="ml-8 mt-4">Hari ini</p>
  <div v-for="catatan in listCatatan" class="m-8" :key="catatan.id">
    <v-card class="mx-auto bg-color-secondary-bocchi" width="300" height="60">
      <v-row class="mt-1 ml-px">
        <img class="m-4" src="/src/assets/icons/fastfood.png" alt="fastfood" />
        <v-column class="mt-1">
          <v-card-text class="pa-0"> {{ catatan.nama }} </v-card-text>
          <v-card-text class="pa-0"> {{ catatan.harga }} </v-card-text>
        </v-column>
        <v-btn icon variant="flat" size="x-small" class="ml-28 mt-2"
          ><img src="/src/assets/icons/more_vert.png" alt="more_vert"
        /></v-btn>
      </v-row>
    </v-card>
  </div>
  <p class="ml-8 mt-4">Kemarin</p>
  <div v-for="catatan in listCatatan" class="m-8" :key="catatan.id">
    <v-card class="mx-auto bg-color-secondary-bocchi" width="300" height="60">
      <v-row class="mt-1 ml-px">
        <img class="m-4" src="/src/assets/icons/fastfood.png" alt="fastfood" />
        <v-column class="mt-1">
          <v-card-text class="pa-0"> {{ catatan.nama }} </v-card-text>
          <v-card-text class="pa-0"> {{ catatan.harga }} </v-card-text>
        </v-column>
        <v-btn icon variant="flat" size="x-small" class="ml-28 mt-2"
          ><img src="/src/assets/icons/more_vert.png" alt="more_vert"
        /></v-btn>
      </v-row>
    </v-card>
  </div>
  <v-container>
    <v-row class="justify-center mt-2"
      ><v-btn
        @click="$router.push('tambah-catatan')"
        class="bg-color-main-bocchi text-xs"
        >Tambahkan</v-btn
      ></v-row
    >
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      filter: "30 Hari Terakhir",
      listCatatan: [
        {
          id: 1,
          nama: "Makanan 1",
          harga: "Rp.10.000",
        },
        {
          id: 2,
          nama: "Makanan 2",
          harga: "Rp.10.000",
        },
      ],
    };
  },
});
</script>
<style scoped></style>
