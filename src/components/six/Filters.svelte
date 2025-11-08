<script lang="ts">
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from "@/lib/ui/select";
  import type { FilterManager } from "./FilterManager.svelte";

  // Props : instance de la classe FilterManager
  type Props = {
    manager: FilterManager;
  };

  let { manager }: Props = $props();

  // État local pour le select
  let selectedValue = $state<string>("");

  // Mettre à jour la classe quand la sélection change
  $effect(() => {
    const category = selectedValue && selectedValue !== "" ? selectedValue : null;
    manager.setCategory(category);
  });
</script>

<Select bind:value={selectedValue} type="single">
  <SelectTrigger>
    <span>
      {#if manager.selectedCategory}
        Catégorie {manager.selectedCategory}
      {:else}
        Toutes les catégories
      {/if}
    </span>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="">Toutes les catégories</SelectItem>
      {#each manager.categories as category}
        <SelectItem value={category}>Catégorie {category}</SelectItem>
      {/each}
    </SelectGroup>
  </SelectContent>
</Select>
