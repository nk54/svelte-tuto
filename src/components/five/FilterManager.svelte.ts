import type { Item } from "./types";
import rawData from "./data.json";

/**
 * Classe qui encapsule la logique de filtrage des items par catégorie
 * Utilise les runes Svelte 5 pour la réactivité
 */
export class FilterManager {
  // État réactif des items
  items = $state<Item[]>(rawData as Item[]);
  
  // Catégorie sélectionnée (null = toutes les catégories)
  selectedCategory = $state<string | null>(null);
  
  // Liste unique des catégories disponibles (dérivée)
  categories = $derived.by(() => {
    const cats = new Set(this.items.map((item) => item.category));
    return Array.from(cats).sort();
  });
  
  // Items filtrés selon la catégorie sélectionnée (dérivé)
  filteredItems = $derived.by(() => {
    if (!this.selectedCategory) return this.items;
    return this.items.filter((item) => item.category === this.selectedCategory);
  });
  
  /**
   * Met à jour la catégorie sélectionnée
   * @param category - La catégorie à sélectionner, ou null pour tout afficher
   */
  setCategory(category: string | null) {
    this.selectedCategory = category;
  }
  
  /**
   * Réinitialise le filtre (affiche toutes les catégories)
   */
  resetFilter() {
    this.selectedCategory = null;
  }
  
  /**
   * Ajoute un nouvel item (exemple de méthode supplémentaire)
   */
  addItem(item: Item) {
    this.items.push(item);
  }
}
