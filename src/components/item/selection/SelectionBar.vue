<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";
const emit = defineEmits(["trigger-tambahkan", "trigger-delete"]);

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

const isCheck = ref(false);
const checkboxAll = ref(false);

const testlocalapi = "http://localhost:3001/api/v1";
// const api = "http://be-sakugwejdev.ddns.net/api/v1"; 

const selectAll = () => {
  checkboxAll.value = !checkboxAll.value;
  isCheck.value = checkboxAll.value;
  document.querySelectorAll(".select").forEach((el) => {
    (el as HTMLInputElement).checked = checkboxAll.value;
  });
}

const checkSelected = () => {
  const selected = document.querySelectorAll(".select:checked");
  console.log(selected.length);
  if (selected.length > 0) {
    isCheck.value = true;
  } else {
    isCheck.value = false;
  }
}

const deleteSelected = async () => {
  const selected = document.querySelectorAll(".select:checked");
  selected.forEach(async (el) => {
    (el as HTMLInputElement).checked = false;
    try {
      const id = (el as HTMLInputElement).id;
      const name = (el as HTMLInputElement).name
      console.log(name);
      console.log(id);
      const res = await fetch(`${testlocalapi}/${name}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "DELETE",
      });
      if (res.status === 200) {
        const data = await res.json();
        emit("trigger-delete");
        console.log(data);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  });
}

defineExpose({
  checkSelected
})
</script>

<template>
  <v-container class="h-fit w-[50rem]">
    <v-row class="justify-center items-center">
    <div class="flex flex-row items-center w-fit mt-4 mb-2">
        <v-btn icon variant="flat" size="x-small" @click="onAddClicked">
          <img
            :class="themeClasses.icon"
            src="/src/assets/icons/add-ring.png"
            alt="add"
          />
        </v-btn>

        <v-btn icon variant="flat" size="x-small" class="arrow ml-[9rem]">
          <img
            :class="themeClasses.icon"
            src="/src/assets/icons/arrow-left.png"
          />
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
        <v-btn icon variant="flat" size="x-small" class="arrow mr-[9rem]">
          <img
            :class="themeClasses.icon"
            src="/src/assets/icons/arrow-right.png"
          />
        </v-btn>
        <v-btn id="sort-menu" icon variant="flat" size="x-small">
          <img
            :class="themeClasses.icon"
            src="/src/assets/icons/sort-gotoh.png"
            alt="sort"
          />
        </v-btn>
        <v-menu activator="#sort-menu">
          <v-list>
            <v-list-item v-for="item in sort" :value="item">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="flex flex-row items-center w-[46.5rem] h-[3rem] mt-4 mb-2">
        <input
          type="checkbox"
          :class="themeClasses.borderMain"
          class="select-all mr-4 ml-5 w-6 h-6"
          v-model="checkboxAll"
          @click="selectAll"
        /><label>Pilih Semua</label>
          <v-btn 
            v-if="isCheck" 
            icon variant="flat" 
            class="ml-[34rem]" 
            @click="deleteSelected">
          <img
            :class="themeClasses.icon"
            src="/src/assets/icons/delete.png"
            alt="trash"
          />
        </v-btn>
        <!-- <v-btn icon variant="flat">
          <img
            :class="themeClasses.icon"
            src="/src/assets/icons/edit-gotoh.png"
            alt="edit"
          />
        </v-btn> -->
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
  border: 1px solid var(--bocchi);
  border-radius: 2px;
}
.select-all:checked {
  background-color: var(--bocchi);
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
