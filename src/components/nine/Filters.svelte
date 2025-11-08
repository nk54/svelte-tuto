<script lang="ts">
  import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from "@/lib/ui/select";

  type Props = {
    categories: string[];
    selectedCategory: string | null;
    setCategory: (category: string | null) => void;
  };

  let { categories, selectedCategory, setCategory }: Props = $props();

  let selectedValue = $state<string>("");

  $effect(() => {
    const category =
      selectedValue && selectedValue !== "" ? selectedValue : null;
    setCategory(category);
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
