<script lang="ts">
  import { marked } from "marked";

  let value = $state(
    `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`
  );
</script>

<div class="gap-4 grid grid-cols-[5em_1fr] grid-rows-2 h-full">
  input
  <textarea bind:value></textarea>

  output
  <div class="prose">{@html marked(value)}</div>
</div>
