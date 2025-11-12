<script lang="ts">
  import { FlakyComponent } from "./";
</script>

<svelte:boundary onerror={(e: unknown) => console.error(e)}>
  <FlakyComponent />
  {#snippet failed(error: unknown, reset: () => void)}
    <p>Oops! {error instanceof Error ? error.message : String(error)}</p>
    <button onclick={reset} class="border">Reset</button>
  {/snippet}
</svelte:boundary>
