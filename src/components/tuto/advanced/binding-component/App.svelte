<script lang="ts">
  import { Keypad } from "./";

  let pin = $state("");

  let view = $derived(
    pin ? pin.toString().replace(/\d(?!$)/g, "•") : "enter your pin"
  );

  function onsubmit() {
    alert(`submitted ${pin}`);
  }
</script>

<h1 style="opacity: {pin ? 1 : 0.4}">
  {view}
</h1>

<Keypad bind:value={pin} {onsubmit} />
