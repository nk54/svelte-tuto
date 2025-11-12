<script lang="ts">
  import { AudioPlayer, pauseAll, tracks } from "./";
</script>

<div class="centered">
  {#each tracks as track}
    <AudioPlayer {...track} />
  {/each}
  <button onclick={pauseAll} class="place-self-center bg-amber-400 p-2 border">
    Pause playing track
  </button>
</div>

<style>
  .centered {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    gap: 0.5em;
    max-width: 40em;
    margin: 0 auto;
  }
</style>
