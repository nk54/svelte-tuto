<script lang="ts">
  let { color, size } = $props();

  let canvas: HTMLCanvasElement | null = $state(null);
  let context: CanvasRenderingContext2D | null = $state(null);
  let coords = $state<Coords | null>(null);

  $effect(() => {
    if (!canvas) return;
    context = canvas.getContext("2d");
    resize();
  });

  function resize() {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  export function clear() {
    if (!canvas || !context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  type Coords = { x: number; y: number };
</script>

<svelte:window onresize={resize} />

<canvas
  bind:this={canvas}
  onpointerdown={(e: PointerEvent) => {
    if (!context) return;

    coords = { x: e.offsetX, y: e.offsetY };

    context.fillStyle = color;
    context.beginPath();
    context.arc(coords.x, coords.y, size / 2, 0, 2 * Math.PI);
    context.fill();
  }}
  onpointerleave={() => {
    coords = null;
  }}
  onpointermove={(e: PointerEvent) => {
    if (!context || !coords) return;

    const previous = coords;

    coords = { x: e.offsetX, y: e.offsetY };

    if (e.buttons === 1) {
      e.preventDefault();

      context.strokeStyle = color;
      context.lineWidth = size;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(coords.x, coords.y);
      context.stroke();
    }
  }}
></canvas>

{#if coords}
  <div
    class="this-preview"
    style="--color: {color}; --size: {size}px; --x: {coords.x}px; --y: {coords.y}px"
  ></div>
{/if}

<style>
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .this-preview {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    transform: translate(-50%, -50%);
    background: var(--color);
    border-radius: 50%;
    opacity: 0.5;
    pointer-events: none;
  }
</style>
