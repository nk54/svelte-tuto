<script lang="ts">
  import { typewriter, messages } from "./";

  let i = $state(-1);
  let speed = $state(10);

  $effect(() => {
    const interval = setInterval(() => {
      i += 1;
      i %= messages.length;
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<h2>loading...</h2>

<label>
  <input type="range" bind:value={speed} min="1" max="20" />
</label>

{#key i}
  <p in:typewriter={{ speed }}>
    {messages[i] || ""}
  </p>
{/key}
