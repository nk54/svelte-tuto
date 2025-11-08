import type { Item } from "./types";
import rawData from "./data.json";

// Fonction pour créer le store avec les runes Svelte 5
function createThreeStore() {
  // Données depuis le JSON
  let items = $state<Item[]>(rawData as Item[]);

  // Catégorie sélectionnée (null = toutes les catégories)
  let selectedCategory = $state<string | null>(null);

  // Liste unique des catégories disponibles
  let categories = $derived.by(() => {
    const cats = new Set(items.map((item) => item.category));
    return Array.from(cats).sort();
  });

  // Items filtrés selon la catégorie sélectionnée
  let filteredItems = $derived.by(() => {
    if (!selectedCategory) return items;
    return items.filter((item) => item.category === selectedCategory);
  });

  return {
    get items() {
      return items;
    },
    get selectedCategory() {
      return selectedCategory;
    },
    set selectedCategory(value: string | null) {
      selectedCategory = value;
    },
    get categories() {
      return categories;
    },
    get filteredItems() {
      return filteredItems;
    },
  };
}

export const threeStore = createThreeStore();
