<script lang="ts">
  import { getContext } from "svelte";
  import {
    Table,
    TableCaption,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "@/lib/ui/table";
  import type { Item } from "./types";

  // Récupérer le contexte (pas de props nécessaires !)
  const context = getContext<{
    filteredItems: Item[];
    selectedCategory: string | null;
  }>("filterContext");
</script>

<Table>
  <TableCaption>
    {#if context.selectedCategory}
      Items de la catégorie {context.selectedCategory}
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
    {#if context.filteredItems.length === 0}
      <TableRow>
        <TableCell colspan={3}>Aucun item trouvé</TableCell>
      </TableRow>
    {:else}
      {#each context.filteredItems as item (item.id)}
        <TableRow>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
          <TableCell>{item.category}</TableCell>
        </TableRow>
      {/each}
    {/if}
  </TableBody>
</Table>
