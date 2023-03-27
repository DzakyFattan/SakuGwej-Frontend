<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";
import { parseNominal } from "@/utils/parse";

import type { Transaction } from "@/types.vue";

const props = defineProps<{
  note: Transaction
  fetchData: () => void;
}>();

const emit = defineEmits(["trigger-select"]);

const note = ref({} as Transaction);

note.value = props.note;

const { themeClasses } = useThemeStore();

const selectOne = () => {
  emit("trigger-select");
}
</script>

<template>
  <div
    :class="themeClasses.borderMain"
    class="flex flex-row rounded-md w-fit h-20 items-center self-center mx-1 my-2 px-4"
  >
    <input type="checkbox" class="select mr-4 w-6 h-6" :id="note._id" name="transactions" @change="selectOne"/>
    <img
      v-if="note.category === 'Makanan'"
      src="/src/assets/icons/food.png"
      class="w-12 h-12 mr-6"
    />
    <img
      v-if="note.category === 'Minuman'"
      src="/src/assets/icons/drink.png"
      class="w-12 h-12 mr-6"
    />
    <img
      v-if="note.category === 'Makanan Ringan'"
      src="/src/assets/icons/snack.png"
      class="w-12 h-12 mr-6"
    />
    <p class="w-20">{{ note.category }}</p>
    <p class="w-20 ml-[10rem] mr-[10rem]">{{ note.description }}</p>
    <p class="w-20">{{ parseNominal(note.amount) }}</p>
    <img src="/src/assets/icons/more.png" class="w-6 h-6 ml-3" />
  </div>
</template>

<style scoped>
.select {
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  border: 1px solid var(--bocchi);
  border-radius: 2px;
}
.select:checked {
  background-color: var(--bocchi);
}
</style>
