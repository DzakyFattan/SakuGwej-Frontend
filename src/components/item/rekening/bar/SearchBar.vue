<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

const sort = ["A-Z", "Z-A", "Saldo Terendah", "Saldo Tetinggi"];
const emit = defineEmits(["trigger-tambahkan"]);
const onAddClicked = () => {
  emit("trigger-tambahkan", true);
};
const { themeClasses } = useThemeStore();
</script>

<template>
  <v-container class="h-fit w-[70vh] mb-3">
    <v-row class="justify-center items-center">
      <v-btn icon variant="flat" size="x-small" @click="onAddClicked">
        <img :class="themeClasses.icon" src="/src/assets/icons/add-ring.png" alt="add" />
      </v-btn>
      <v-text-field
        :class="themeClasses.textMain"
        class="mx-4"
        variant="outlined"
        label="Search"
        hide-details
      >
      </v-text-field>
      <v-btn id="sort-menu" icon variant="flat" size="x-small">
        <img :class="themeClasses.icon" src="/src/assets/icons/sort-gotoh.png" alt="sort" />
      </v-btn>
      <v-menu activator="#sort-menu">
        <v-list>
          <v-list-item v-for="item in sort" :value="item">
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
