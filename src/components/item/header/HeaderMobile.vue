<template>
  <v-toolbar :class="themeStore.themeClasses.bgMain" fixed dark>
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
    <MobileNavigationBar />
  </div>
</template>
<script lang="ts">
import { useThemeStore } from "@/stores/theme";
import { defineComponent } from "vue";
import MobileNavigationBar from "../navigation/MobileNavigationBar.vue";
import { mapStores } from "pinia";

export default defineComponent({
  components: { MobileNavigationBar },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
  computed: {
    ...mapStores(useThemeStore),
  },
});
</script>
<style scoped></style>
