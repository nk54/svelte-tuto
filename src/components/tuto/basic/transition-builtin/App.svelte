<script lang="ts">
  import { fade, fly } from "svelte/transition";
  let visible = $state(true);
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

<div class="grid grid-cols-3">
  <div>
    {#if visible}
      <p transition:fade>Fades in and out</p>
    {/if}
  </div>
  <div>
    {#if visible}
      <p transition:fly={{ y: 200, duration: 2000 }}>Flies in and out</p>
    {/if}
  </div>
  <div>
    {#if visible}
      <p in:fly={{ y: 200, duration: 1000 }} out:fade>Flies in, fade out</p>
    {/if}
  </div>
</div>
