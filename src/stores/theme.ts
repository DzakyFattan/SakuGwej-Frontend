import { ref, computed } from "vue";
import { defineStore } from "pinia";

type ThemeClasses = {
  bgMain: string;
  bgSecondary: string;
  bgDark: string;
  textMain: string;
  textSecondary: string;
  textDark: string;
  borderMain: string;
  borderDark: string;
}

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(localStorage.getItem("theme") || "bocchi");

  const themeClasses = computed<ThemeClasses>(() => {
    switch (theme.value) {
      case "ryo":
        return {
          bgMain: "bg-color-main-ryo",
          bgSecondary: "bg-color-secondary-ryo",
          bgDark: "bg-color-dark-ryo",
          textMain: "text-color-main-ryo",
          textSecondary: "text-color-secondary-ryo",
          textDark: "text-color-dark-ryo",
          borderMain: "border-color-main-ryo",
          borderDark: "border-color-dark-ryo",
        }
      case "nijika":
        return {
          bgMain: "bg-color-main-nijika",
          bgSecondary: "bg-color-secondary-nijika",
          bgDark: "bg-color-dark-nijika",
          textMain: "text-color-main-nijika",
          textSecondary: "text-color-secondary-nijika",
          textDark: "text-color-dark-nijika",
          borderMain: "border-color-main-nijika",
          borderDark: "border-color-dark-nijika",
        }
      case "kita":
        return {
          bgMain: "bg-color-main-kita",
          bgSecondary: "bg-color-secondary-kita",
          bgDark: "bg-color-dark-kita",
          textMain: "text-color-main-kita",
          textSecondary: "text-color-secondary-kita",
          textDark: "text-color-dark-kita",
          borderMain: "border-color-main-kita",
          borderDark: "border-color-dark-kita",
        }
      default: // bocchi
        return {
          bgMain: "bg-color-main-bocchi",
          bgSecondary: "bg-color-secondary-bocchi",
          bgDark: "bg-color-dark-bocchi",
          textMain: "text-color-main-bocchi",
          textSecondary: "text-color-secondary-bocchi",
          textDark: "text-color-dark-bocchi",
          borderMain: "border-color-main-bocchi",
          borderDark: "border-color-dark-bocchi",
        }
    }
  });

  return { theme, themeClasses };
});
