<script lang="ts">
  import { setContext } from "svelte";
  import { SvelteSet } from "svelte/reactivity";
  import { type CanvasContext, type CanvasDelegate } from "./";

  let { width = 100, height = 100, children } = $props();

  let canvas: HTMLCanvasElement;
  let items = new SvelteSet<CanvasDelegate>();

  setContext<CanvasContext>("canvas", { addItem });

  function addItem(fn: CanvasDelegate): void {
    $effect(() => {
      items.add(fn);
      return () => items.delete(fn);
    });
  }

  $effect(() => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    items.forEach((fn) => fn(ctx));
  });
</script>

<canvas bind:this={canvas} {width} {height}>
  {@render children()}
</canvas>

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
