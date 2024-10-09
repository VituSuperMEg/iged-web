import create from "zustand";

// Define the type for the store
interface MenuState {
  activeMenu: string[]; // Array of active menu items
  setActiveMenu: (menu: string) => void; // Add a menu item
  removeActiveMenu: (menu: string) => void; // Remove a menu item
  resetMenu: () => void; // Reset the menu state
}

// Create the Zustand store with types
const useMenuStore = create<MenuState>((set) => ({
  activeMenu: [], // Start with an empty array

  // Function to add a menu item to the array, only if it's not already present
  setActiveMenu: (menu: string) =>
    set((state) => ({
      activeMenu: state.activeMenu.includes(menu)
        ? state.activeMenu
        : [...state.activeMenu, menu],
    })),

  // Function to remove a menu item from the array
  removeActiveMenu: (menu: string) =>
    set((state) => ({
      activeMenu: state.activeMenu.filter((item) => item !== menu),
    })),

  // Function to reset the menu state
  resetMenu: () => set({ activeMenu: [] }),
}));

export default useMenuStore;
