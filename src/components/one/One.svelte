<script lang="ts">
  import { Filters, Items } from "@/components/one";
  import type { Item } from "./types";
  import rawData from "./data.json";

  // État local du composant parent
  let items = $state<Item[]>(rawData as Item[]);
  let selectedCategory = $state<string | null>(null);

  // Dérivation des catégories disponibles
  let categories = $derived.by(() => {
    const cats = new Set(items.map((item) => item.category));
    return Array.from(cats).sort();
  });

  // Dérivation des items filtrés
  let filteredItems = $derived.by(() => {
    if (!selectedCategory) return items;
    return items.filter((item) => item.category === selectedCategory);
  });

  // Callback pour mettre à jour la catégorie sélectionnée
  function handleCategoryChange(category: string | null) {
    selectedCategory = category;
  }
</script>

<Filters
  {categories}
  {selectedCategory}
  onCategoryChange={handleCategoryChange}
/>
<Items items={filteredItems} {selectedCategory} />
