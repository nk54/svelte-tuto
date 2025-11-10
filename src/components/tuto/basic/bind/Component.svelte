<script lang="ts">
  let { label }: { label: string } = $props();
  let number: number = $state(10);
</script>

<label>
  {label} Number:
  <input type="number" bind:value={number} min="0" max="100" />
  <input type="range" bind:value={number} min="0" max="100" />
</label>

<style>
  @reference "@/styles/global.css";
  input {
    @apply border;
  }
</style>
