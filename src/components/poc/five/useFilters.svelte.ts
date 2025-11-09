import type { Item } from "./types";

/**
 * Hook/Composable pour gérer le filtrage des items
 * Pattern similaire aux React hooks ou Vue composables
 */
export function useFilters(initialData: Item[]) {
  let items = $state<Item[]>(initialData);
  let selectedCategory = $state<string | null>(null);

  let categories = $derived.by(() => {
    const cats = new Set(items.map((item) => item.category));
    return Array.from(cats).sort();
  });

  let filteredItems = $derived.by(() => {
    if (!selectedCategory) return items;
    return items.filter((item) => item.category === selectedCategory);
  });

  function setCategory(category: string | null) {
    selectedCategory = category;
  }

  function resetFilter() {
    selectedCategory = null;
  }

  return {
    get items() {
      return items;
    },
    get categories() {
      return categories;
    },
    get filteredItems() {
      return filteredItems;
    },
    get selectedCategory() {
      return selectedCategory;
    },
    setCategory,
    resetFilter,
  };
}
