import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const themes = {
    light: 'light',
    dark: 'dark',
  }
  const theme = ref(themes.light);


  function setTheme(value) {
    theme.value = value;
    const body = document.getElementsByTagName('body')[0];

    body.setAttribute('data-bs-theme', value);
    localStorage.setItem('tablerTheme', theme.value);

  }

  function getTheme() {
    return theme.value;
  }


  return {
    theme,
    setTheme,
    getTheme,
  };
});
