<script lang="ts">
  import Child from "./Child.svelte";

  let total = $state(0);

  function handleTotalChange(newTotal: number) {
    total = newTotal;
  }
</script>

<Child onTotalChange={handleTotalChange} />

<p class="mt-6">Total from child: {total}</p>
