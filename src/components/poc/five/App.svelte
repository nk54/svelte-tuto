<script lang="ts">
  import { Filters, Items } from "@/components/poc/five";
  import { useFilters } from "./useFilters.svelte";
  import rawData from "./data.json";
  import type { Item } from "./types";

  // Utiliser le composable/hook
  const filters = useFilters(rawData as Item[]);
</script>

<Filters {filters} />
<Items {filters} />
