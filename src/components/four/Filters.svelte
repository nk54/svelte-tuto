<script lang="ts">
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from "@/lib/ui/select";

  // Props reçues du parent
  type Props = {
    categories: string[];
    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
  };

  let { categories, selectedCategory, onCategoryChange }: Props = $props();

  // État local pour le select
  let selectedValue = $state<string>("");

  // Mettre à jour le parent quand la sélection change
  $effect(() => {
    const category =
      selectedValue && selectedValue !== "" ? selectedValue : null;
    onCategoryChange(category);
  });
</script>

<Select bind:value={selectedValue} type="single">
  <SelectTrigger>
    <span>
      {#if selectedCategory}
        Catégorie {selectedCategory}
      {:else}
        Toutes les catégories
      {/if}
    </span>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="">Toutes les catégories</SelectItem>
      {#each categories as category}
        <SelectItem value={category}>Catégorie {category}</SelectItem>
      {/each}
    </SelectGroup>
  </SelectContent>
</Select>
