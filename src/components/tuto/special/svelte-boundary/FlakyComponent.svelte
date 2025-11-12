<script lang="ts">
  let mouse = $state({ x: 0, y: 0 });
</script>

<svelte:window
  onmousemove={(e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }}
/>

<p>{mouse.x}x{mouse.y}</p>

<button onclick={() => (mouse = null!)} class="bg-red-500 px-4 py-2 border rounded text-white">
  whatever you do, don't click this button
</button>
