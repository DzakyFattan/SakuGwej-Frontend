<template>
  <v-container class="mt-8">
    <v-row class="mx-16 align-center">
      <img class="h-12 mt-1" src="/src/assets/icons/cart_big.png" alt="cart" />
      <v-column class="ml-auto">
        <a href="/rekening/{{id}}/edit-rekening"
          ><v-btn icon variant="flat" size="x-small"
            ><img src="/src/assets/icons/edit.png" alt="edit" /></v-btn
        ></a>
        <h2>{{ nama }}</h2>
        <h3>{{ uang }}</h3>
      </v-column>
    </v-row>
    <v-textarea
      v-model="deskripsi"
      class="mx-24 mt-8"
      auto-grow
      variant="outlined"
      readonly
    >
    </v-textarea>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      id: 1,
      deskripsi:
        "Deskripsi yang ditulis lorem ipsum dolor sit amet kurang tahu lanjutannya apa",
      nama: "Unpay",
      uang: "IDR 40.000",
    };
  },
});
</script>
<style scoped></style>
