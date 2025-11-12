<script lang="ts">
  import { getContext } from "svelte";
  import { type CanvasContext } from "./";

  let {
    x,
    y,
    size,
    rotate,
  }: { x: number; y: number; size: number; rotate: number } = $props();

  const canvas = getContext<CanvasContext>("canvas");

  canvas.addItem(draw);

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(rotate);

    ctx.strokeStyle = "black";
    ctx.strokeRect(-size / 2, -size / 2, size, size);

    ctx.restore();
  }
</script>
