<script lang="ts">
  let count: number = $state<number>(0);
</script>

<button onclick={() => count++} class="hover:bg-amber-200 border">
  Count is {count}
</button>
