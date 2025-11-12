<script lang="ts">
  let y = $state(0);
</script>

<svelte:window bind:scrollY={y} />

<span>depth: {y.toFixed(2)}px</span>

<style>
  :global(body) {
    height: 400vw;
    background: url("./tall-image.webp");
    background-size: cover;
  }

  span {
    position: fixed;
    right: 4rem;
    font-size: 2em;
    color: white;
    font-variant: tabular-nums;
  }
</style>
