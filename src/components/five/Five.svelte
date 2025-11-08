<script lang="ts">
  import { Filters, Items, FilterManager } from "@/components/five";

  // Instancier la classe qui gère toute la logique
  const manager = new FilterManager();
</script>

<Filters {manager} />
<Items {manager} />
