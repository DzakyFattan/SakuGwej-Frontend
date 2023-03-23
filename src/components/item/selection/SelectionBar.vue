<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
const emit = defineEmits(["trigger-tambahkan"]);

const selected = "30 Hari Teakhir";
const intervals = [
  "30 Hari Teakhir",
  "21 Hari Teakhir",
  "14 Hari Teakhir",
  " 7 Hari Teakhir",
];
const sort = ["A-Z", "Z-A", "Saldo Terendah", "Saldo Tetinggi"];

const props = defineProps(["type"]);
const type = props.type;

const onAddClicked = () => {
  emit("trigger-tambahkan", true);
};

const { themeClasses } = useThemeStore();

let checkbox = false;
</script>

<template>
  <v-container class="h-fit w-[74vh]">
    <v-row class="justify-center items-center">
      <v-btn icon variant="flat" size="x-small" @click="onAddClicked">
        <img :class="themeClasses.icon" src="/src/assets/icons/add-ring.png" alt="add" />
      </v-btn>

      <v-btn icon variant="flat" size="x-small" class="arrow ml-[10vh]">
        <img :class="themeClasses.icon" src="/src/assets/icons/arrow-left.png" />
      </v-btn>
      <v-select
        :items="intervals"
        :label="selected"
        single-line
        hide-details
        variant="filled"
        bg-color="white"
        :class="themeClasses.borderMain"
        class="interval w-[22vh] h-12 rounded-md"
      >
      </v-select>
      <v-btn icon variant="flat" size="x-small" class="arrow mr-[10vh]">
        <img :class="themeClasses.icon" src="/src/assets/icons/arrow-right.png" />
      </v-btn>
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
      <div class="flex flex-row items-center w-[75vh] mt-4 mb-2 px-5">
        <input type="checkbox" :class="themeClasses.borderMain" class="select-all mr-4 w-6 h-6" /><label
          >Pilih Semua</label
        >
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.interval {
  height: fit-content;
}
.select-all {
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  border-radius: 2px;
}

.v-btn {
  width: 3rem;
  height: 3rem;
}
.arrow {
  width: 4rem;
  height: 4rem;
}
</style>
