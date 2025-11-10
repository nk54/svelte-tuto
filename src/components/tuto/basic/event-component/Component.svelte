<script lang="ts">
  let {
    increment,
    decrement,
  }: { increment: () => void; decrement: () => void } = $props();
</script>

<div class="grid-rows-2">
  <button onclick={decrement}>-1</button>
  <button onclick={increment}>+1</button>
</div>

<style>
  @reference "@/styles/global.css";
  button {
    @apply mx-auto p-4 border;
  }
</style>
