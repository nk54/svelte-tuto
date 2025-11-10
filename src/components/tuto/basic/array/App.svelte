<script lang="ts">
  import Component from "./Component.svelte";

  let total = $state(0);

  function handleTotalChange(newTotal: number) {
    total = newTotal;
  }
</script>

<Component onTotalChange={handleTotalChange} />

<p class="mt-6">Total from child: {total}</p>
