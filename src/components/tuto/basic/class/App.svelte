<script lang="ts">
  import { Card } from "./";
  import Box from "./Box.svelte";
  let flipped = $state(false);
</script>

<div class="flex flex-row gap-4">
  <Card />
  <Card
    bg1="hsl(120, 100%, 50%)"
    bg2="hsl(240, 100%, 50%)"
    bg3="hsl(360, 100%, 50%)"
  />
</div>

<div class="flex flex-row gap-4">
  <Box />
  <Box --color="red" />
  <Box --color="blue" />
</div>
