import create from "zustand";

interface MenuState {
  activeMenu: { label: string; href: string }[];
  setActiveMenu: (menu: { label: string; href: string }) => void;
  removeActiveMenu: (menu: { label: string; href: string }) => void;
  resetMenu: () => void;
}

const useMenuStore = create<MenuState>((set) => ({
  activeMenu: [],

  setActiveMenu: (menu) =>
    set((state) => ({
      activeMenu: state.activeMenu.find((item) => item.href === menu.href)
        ? state.activeMenu
        : [...state.activeMenu, menu],
    })),

  removeActiveMenu: (menu) =>
    set((state) => ({
      activeMenu: state.activeMenu.filter((item) => item.href !== menu.href),
    })),

  resetMenu: () => set({ activeMenu: [] }),
}));

export default useMenuStore;
