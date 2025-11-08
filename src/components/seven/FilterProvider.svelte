<script lang="ts">
  import type { Item } from "./types";
  import type { Snippet } from "svelte";
  import rawData from "./data.json";

  type Props = {
    children: Snippet<
      [
        {
          items: Item[];
          filteredItems: Item[];
          categories: string[];
          selectedCategory: string | null;
          setCategory: (category: string | null) => void;
        },
      ]
    >;
  };

  let { children }: Props = $props();

  // État local
  let items = $state<Item[]>(rawData as Item[]);
  let selectedCategory = $state<string | null>(null);

  // Dérivations
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
</script>

{@render children({
  items,
  filteredItems,
  categories,
  selectedCategory,
  setCategory,
})}
