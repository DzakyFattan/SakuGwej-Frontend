<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { ref } from "vue";

const api = "http://be-sakugwejdev.ddns.net/api/v1";

const dialog = ref(false);

const { themeClasses } = useThemeStore();

const handleSelectButton = async (theme: string) => {
  localStorage.setItem("theme", theme);
  window.location.reload();
};
</script>

<template>
  <v-dialog v-model="dialog" persistent width="512">
    <template v-slot:activator="{ props }">
      <button :class="themeClasses.bgMain" class="button" v-bind="props">
        Pilih Tema
      </button>
    </template>
    <v-card :class="themeClasses.bgSecondary" class="rounded-lg">
      <v-card-text>
        <h3 class="text-center">Pilih Tema</h3>
        <v-col class="space-y-2">
          <div
            class="bg-color-white p-4 rounded-lg flex flex-row align-center justify-between"
          >
            <div>
              <p>Pink</p>
              <div class="flex flex-row space-x-1">
                <div
                  class="bg-color-dark-bocchi rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <div
                  class="bg-color-main-bocchi rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <div
                  class="bg-color-secondary-bocchi rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <!-- <p class="text-color-dark-bocchi">Bocchi</p> -->
              </div>
            </div>
            <div>
              <button
                class="bg-color-main-bocchi button"
                @click="handleSelectButton('bocchi')"
              >
                Pilih
              </button>
            </div>
          </div>
          <div
            class="bg-color-white p-4 rounded-lg flex flex-row align-center justify-between"
          >
            <div>
              <p>Blue</p>
              <div class="flex flex-row space-x-1">
                <div
                  class="bg-color-dark-ryo rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <div
                  class="bg-color-main-ryo rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <div
                  class="bg-color-secondary-ryo rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <!-- <p class="text-color-dark-ryo">Ryo</p> -->
              </div>
            </div>
            <div>
              <button
                class="bg-color-main-ryo button"
                @click="handleSelectButton('ryo')"
              >
                Pilih
              </button>
            </div>
          </div>
          <div
            class="bg-color-white p-4 rounded-lg flex flex-row align-center justify-between"
          >
            <div>
              <p>Yellow</p>
              <div class="flex flex-row space-x-1">
                <div
                  class="bg-color-dark-nijika rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <div
                  class="bg-color-main-nijika rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <div
                  class="bg-color-secondary-nijika rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <!-- <p class="text-color-dark-nijika">Nijika</p> -->
              </div>
            </div>
            <div>
              <button
                class="bg-color-main-nijika button"
                @click="handleSelectButton('nijika')"
              >
                Pilih
              </button>
            </div>
          </div>
          <div
            class="bg-color-white p-4 rounded-lg flex flex-row align-center justify-between"
          >
            <div>
              <p>Red</p>
              <div class="flex flex-row space-x-1">
                <div
                  class="bg-color-dark-kita rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <div
                  class="bg-color-main-kita rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <div
                  class="bg-color-secondary-kita rounded-lg"
                  style="width: 25px; height: 25px"
                ></div>
                <!-- <p class="text-color-dark-kita">Kita</p> -->
              </div>
            </div>
            <div>
              <button
                class="bg-color-main-kita button"
                @click="handleSelectButton('kita')"
              >
                Pilih
              </button>
            </div>
          </div>
        </v-col>
      </v-card-text>
      <v-card-actions class="pl-10">
        <button
          :class="themeClasses.bgMain"
          class="button mb-4"
          @click="dialog = false"
        >
          Batal
        </button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
