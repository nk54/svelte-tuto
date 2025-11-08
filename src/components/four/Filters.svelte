<script lang="ts">
  import { getContext } from "svelte";
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from "@/lib/ui/select";

  // Récupérer le contexte (pas de props nécessaires !)
  const context = getContext<{
    categories: string[];
    selectedCategory: string | null;
    setCategory: (category: string | null) => void;
  }>("filterContext");

  let selectedValue = $state<string>("");

  $effect(() => {
    const category =
      selectedValue && selectedValue !== "" ? selectedValue : null;
    context.setCategory(category);
  });
</script>

<Select bind:value={selectedValue} type="single">
  <SelectTrigger>
    <span>
      {#if context.selectedCategory}
        Catégorie {context.selectedCategory}
      {:else}
        Toutes les catégories
      {/if}
    </span>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="">Toutes les catégories</SelectItem>
      {#each context.categories as category}
        <SelectItem value={category}>Catégorie {category}</SelectItem>
      {/each}
    </SelectGroup>
  </SelectContent>
</Select>
