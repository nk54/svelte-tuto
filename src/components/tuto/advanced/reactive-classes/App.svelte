<script lang="ts">
  import { Box } from "./";

  const box = new Box(100, 100, 200);
</script>

<label>
  <input type="range" min={0} max={box.maxSize} bind:value={box.width} />
  width ({box.width}px)
</label>

<label>
  <input type="range" min={0} max={box.maxSize} bind:value={box.height} />
  height ({box.height}px)
</label>

<button onclick={() => box.embiggen(10)} class="border">embiggen</button>

<hr class="border-b" />
<div style:width="{box.width}px" style:height="{box.height}px" class="box">
  {box.area}px²
</div>

<style>
  label {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  hr {
    margin: 1em 0;
    border: none;
    border-bottom: 1px solid #888;
  }

  .box {
    background: radial-gradient(
      at 0% 50%,
      hsl(15, 97%, 48%),
      hsl(15, 97%, 66%)
    );
    border-radius: 2px;
    filter: drop-shadow(0 0 10px hsl(15 100 50 / 0.3));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>
