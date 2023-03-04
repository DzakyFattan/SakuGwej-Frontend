<template>
  <v-card class="mx-auto bg-color-secondary-bocchi" width="320" height="60">
    <v-row class="mt-1 ml-px">
      <img class="m-4" src="/src/assets/icons/fastfood.png" alt="fastfood" />
      <v-column class="mt-1">
        <v-card-text class="pa-0"> {{ nama }} </v-card-text>
        <v-card-text class="pa-0"> {{ harga }} </v-card-text>
      </v-column>
      <v-spacer></v-spacer>
      <v-btn
        icon
        variant="flat"
        size="x-small"
        class="mr-8 mt-2"
        @click="onOptionClick"
        ><img src="/src/assets/icons/more_vert.png" alt="more_vert"
      /></v-btn>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["nama", "harga"],
  methods: {
    onOptionClick() {
      this.$emit("clicked-item", this.nama);
    },
  },
});
</script>
<style lang=""></style>
