<template>
  <v-toolbar fixed class="bg-color-main-bocchi" dark>
    <v-toolbar-title>
      <h3>
        <slot>Tidak ada slot yang di definisikan </slot>
      </h3></v-toolbar-title
    >
    <div v-if="isMenuPage">
      <v-btn @click="toggleDrawer" icon>
        <img src="/src/assets/icons/menu.png" alt="menu" />
      </v-btn>
    </div>
    <div v-else>
      <v-btn @click="$router.go(-1)" icon>
        <img src="/src/assets/icons/Dell_fill.png" alt="back" />
      </v-btn>
    </div>
  </v-toolbar>
  <div :hidden="!drawer">
    <navigation-bar />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "../navigation/NavigationBar.vue";

export default defineComponent({
  components: { NavigationBar },
  props: ["isMenuPage"],
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
