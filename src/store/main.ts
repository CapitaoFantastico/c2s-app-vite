import { defineStore } from "pinia";

export type RootState = {
  darkMode: boolean;

  /* fullScreen - tela em fullscreen */
  estaEmTelaCheia: boolean,

  /* Menu */
  menuAberto: boolean,
  corMenu: string
  imagemMenu: string

};

export const useMainStore = defineStore("main", {
  state: () => ({
    menuAberto: false,
    darkMode: true,
    estaEmTelaCheia: false,
    corMenu: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    imagemMenu: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
  } as RootState),
  getters: {},
  actions: {
    menuToggle() {
      this.$patch({
        menuAberto: !this.menuAberto
      })
    },
    temaDarkToggle() {
      const value = !this.darkMode;

      localStorage.setItem(darkModeKey, value ? '1' : '0')

      this.$patch({
        darkMode: value
      })
    },
    telaCheiaToggle(value: boolean) {
      this.$patch({
        estaEmTelaCheia: value
      });
    }
  },
});
