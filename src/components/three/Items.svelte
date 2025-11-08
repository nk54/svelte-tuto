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
  import { threeStore } from "./store.svelte";
</script>

<Table>
  <TableCaption>
    {#if threeStore.selectedCategory}
      Items de la catégorie {threeStore.selectedCategory}
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
    {#if threeStore.filteredItems.length === 0}
      <TableRow>
        <TableCell colspan={3}>Aucun item trouvé</TableCell>
      </TableRow>
    {:else}
      {#each threeStore.filteredItems as item (item.id)}
        <TableRow>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.category}</TableCell>
        </TableRow>
      {/each}
    {/if}
  </TableBody>
</Table>
