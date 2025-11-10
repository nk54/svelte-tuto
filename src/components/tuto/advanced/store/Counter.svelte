<script lang="ts">
  import { count } from "./";
</script>

<button
  onclick={() => $count++}
  class="place-self-center bg-blue-500 p-2 border rounded text-white"
>
  clicks: {$count}
</button>
