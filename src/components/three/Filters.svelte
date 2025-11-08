<script lang="ts">
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from "@/lib/ui/select";
  import { threeStore } from "./store.svelte";

  let selectedValue = $state<string>("");

  // Mettre à jour le store quand la sélection change
  $effect(() => {
    threeStore.selectedCategory =
      selectedValue && selectedValue !== "" ? selectedValue : null;
  });
</script>

<Select bind:value={selectedValue} type="single">
  <SelectTrigger>
    <span>
      {#if threeStore.selectedCategory}
        Catégorie {threeStore.selectedCategory}
      {:else}
        Toutes les catégories
      {/if}
    </span>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="">Toutes les catégories</SelectItem>
      {#each threeStore.categories as category}
        <SelectItem value={category}>Catégorie {category}</SelectItem>
      {/each}
    </SelectGroup>
  </SelectContent>
</Select>
