<script lang="ts">
  import {
    Table,
    TableCaption,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "@/lib/ui/table";
  import type { useFilters } from "./useFilters.svelte";

  type Props = {
    filters: ReturnType<typeof useFilters>;
  };

  let { filters }: Props = $props();
</script>

<Table>
  <TableCaption>
    {#if filters.selectedCategory}
      Items de la catégorie {filters.selectedCategory}
    {:else}
      Liste de tous les items
    {/if}
  </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Item</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Catégorie</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {#if filters.filteredItems.length === 0}
      <TableRow>
        <TableCell colspan={3}>Aucun item trouvé</TableCell>
      </TableRow>
    {:else}
      {#each filters.filteredItems as item (item.id)}
        <TableRow>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.category}</TableCell>
        </TableRow>
      {/each}
    {/if}
  </TableBody>
</Table>
