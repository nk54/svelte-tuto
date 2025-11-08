import { writable, derived } from "svelte/store";
import type { Item } from "./types";
import rawData from "./data.json";

// Store writable pour les items
export const items = writable<Item[]>(rawData as Item[]);

// Store writable pour la catégorie sélectionnée
export const selectedCategory = writable<string | null>(null);

// Store dérivé pour les catégories disponibles
export const categories = derived(items, ($items) => {
  const cats = new Set($items.map((item) => item.category));
  return Array.from(cats).sort();
});

// Store dérivé pour les items filtrés
export const filteredItems = derived(
  [items, selectedCategory],
  ([$items, $selectedCategory]) => {
    if (!$selectedCategory) return $items;
    return $items.filter((item) => item.category === $selectedCategory);
  }
);

// Fonction helper pour mettre à jour la catégorie
export function setCategory(category: string | null) {
  selectedCategory.set(category);
}

// Fonction helper pour réinitialiser le filtre
export function resetFilter() {
  selectedCategory.set(null);
}
