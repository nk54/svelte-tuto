<script lang="ts">
  import { setContext } from "svelte";
  import { Filters, Items } from "@/components/six";
  import type { Item } from "./types";
  import rawData from "./data.json";

  // Créer l'état local
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

  // Créer le contexte avec l'état et les méthodes
  const filterContext = {
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
    setCategory: (category: string | null) => {
      selectedCategory = category;
    },
  };

  // Injecter le contexte pour les enfants
  setContext("filterContext", filterContext);
</script>

<Filters />
<Items />
