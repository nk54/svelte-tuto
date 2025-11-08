<script lang="ts">
  import { Button } from "@/lib/ui/button";
  let count: number = $state<number>(0);
</script>

<Button onclick={() => count++}>
  Count is {count}
</Button>
