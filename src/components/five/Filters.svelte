<script lang="ts">
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from "@/lib/ui/select";
  import type { useFilters } from "./useFilters.svelte";

  type Props = {
    filters: ReturnType<typeof useFilters>;
  };

  let { filters }: Props = $props();

  let selectedValue = $state<string>("");

  $effect(() => {
    const category =
      selectedValue && selectedValue !== "" ? selectedValue : null;
    filters.setCategory(category);
  });
</script>

<Select bind:value={selectedValue} type="single">
  <SelectTrigger>
    <span>
      {#if filters.selectedCategory}
        Catégorie {filters.selectedCategory}
      {:else}
        Toutes les catégories
      {/if}
    </span>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="">Toutes les catégories</SelectItem>
      {#each filters.categories as category}
        <SelectItem value={category}>Catégorie {category}</SelectItem>
      {/each}
    </SelectGroup>
  </SelectContent>
</Select>
