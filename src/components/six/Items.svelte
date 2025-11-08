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
  import type { FilterManager } from "./FilterManager.svelte";

  // Props : instance de la classe FilterManager
  type Props = {
    manager: FilterManager;
  };

  let { manager }: Props = $props();
</script>

<Table>
  <TableCaption>
    {#if manager.selectedCategory}
      Items de la catégorie {manager.selectedCategory}
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
    {#if manager.filteredItems.length === 0}
      <TableRow>
        <TableCell colspan={3}>Aucun item trouvé</TableCell>
      </TableRow>
    {:else}
      {#each manager.filteredItems as item (item.id)}
        <TableRow>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.category}</TableCell>
        </TableRow>
      {/each}
    {/if}
  </TableBody>
</Table>
