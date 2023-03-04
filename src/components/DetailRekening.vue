<template>
  <v-container class="mt-8">
    <div class="h-8 ml-96 mr-20 mb-8">
      <a href="/rekening/edit-rekening"
        ><v-btn icon variant="flat" size="x-small"
          ><img src="/src/assets/icons/edit.png" alt="edit" /></v-btn
      ></a>
    </div>
    <v-row class="mx-16 align-center">
      <img class="h-12 mt-1" src="/src/assets/icons/cart_big.png" alt="cart" />
      <v-column class="ml-auto">
        <h2>Unpay</h2>
        <h3>IDR 40.000</h3>
      </v-column>
    </v-row>
    <v-textarea
      v-model="textField"
      class="mx-32 mt-8"
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
      textField:
        "Deskripsi yang ditulis lorem ipsum dolor sit amet kurang tahu lanjutannya apa",
    };
  },
  methods: {
    pilihHutang() {
      this.$emit("pilihan-tambah", false);
    },
    chooseWallet() {
      console.log("choose wallet");
    },
  },
});
</script>
<style scoped></style>
