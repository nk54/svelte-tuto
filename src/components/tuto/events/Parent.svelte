<script lang="ts">
  let mousePosition = $state({ x: 0, y: 0 });

  function onpointermove(event: PointerEvent) {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
  }
</script>

<div {onpointermove} class="flex-1">
  The pointer is at {Math.round(mousePosition.x)} x {Math.round(
    mousePosition.y
  )}
</div>
