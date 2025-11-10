<script lang="ts">
  let elapsed = $state(0);
  let interval = $state(1000);

  $effect(() => {
    const id = setInterval(() => {
      elapsed += 1;
    }, interval);

    return () => {
      clearInterval(id);
    };
  });
</script>

<button onclick={() => (interval /= 2)}>speed up</button>
<button onclick={() => (interval *= 2)}>slow down</button>

<p>interval: {interval}</p>
<p>elapsed: {elapsed}</p>

<style>
  @reference "@/styles/global.css";
  button {
    @apply bg-amber-200 m-2 p-2 border;
  }
</style>
