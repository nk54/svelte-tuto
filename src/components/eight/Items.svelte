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
  import { filteredItems, selectedCategory } from "./stores";
</script>

<Table>
  <TableCaption>
    {#if $selectedCategory}
      Items de la catégorie {$selectedCategory}
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
    {#if $filteredItems.length === 0}
      <TableRow>
        <TableCell colspan={3}>Aucun item trouvé</TableCell>
      </TableRow>
    {:else}
      {#each $filteredItems as item (item.id)}
        <TableRow>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.category}</TableCell>
        </TableRow>
      {/each}
    {/if}
  </TableBody>
</Table>
