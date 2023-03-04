<template>
  <v-toolbar fixed class="bg-color-main-bocchi" dark>
    <v-toolbar-title>
      <h3>
        <slot>Tidak ada slot yang di definisikan </slot>
      </h3></v-toolbar-title
    >

    <v-btn @click="toggleDrawer" icon>
      <img src="/src/assets/icons/menu.png" alt="menu" />
    </v-btn>
  </v-toolbar>
  <div :hidden="!drawer">
    <navigation-bar />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./NavigationBar.vue";

export default defineComponent({
  components: { NavigationBar },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      this.$emit("clicked-menu", this.drawer);
    },
  },
});
</script>
<style scoped></style>
