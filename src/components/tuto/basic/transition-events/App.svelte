<script lang="ts">
  import { fly } from "svelte/transition";

  let visible = $state(true);
  let status = $state("waiting...");
</script>

<p>Animation status: <span class="font-bold">{status}</span></p>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p
    transition:fly={{ y: 200, duration: 1000 }}
    onintrostart={() => (status = "intro - started")}
    onintroend={() => (status = "intro - ended")}
    onoutrostart={() => (status = "outro - started")}
    onoutroend={() => (status = "outro - ended")}
  >
    Flies in and out
  </p>
{/if}
