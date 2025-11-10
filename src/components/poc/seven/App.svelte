<script lang="ts">
  import { FilterProvider, Filters, Items } from "@/components/poc/seven";
</script>

<FilterProvider>
  {#snippet children({ filteredItems, categories, selectedCategory, setCategory })}
    <Filters {categories} {selectedCategory} {setCategory} />
    <Items items={filteredItems} {selectedCategory} />
  {/snippet}
</FilterProvider>
