<script lang="ts">
  import { Component } from "./";
  let flipped = $state(false);
</script>

<div class="flex flex-row gap-4">
  <div class="col-start-1">
    <Component />
  </div>
  <div class="col-start-2">
    <Component
      bg1="hsl(120, 100%, 50%)"
      bg2="hsl(240, 100%, 50%)"
      bg3="hsl(360, 100%, 50%)"
    />
  </div>
</div>
