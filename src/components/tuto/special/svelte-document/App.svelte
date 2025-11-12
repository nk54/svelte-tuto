<script lang="ts">
  let selection = $state("");

  const onselectionchange = (e: Event) => {
    selection =
      document.getSelection()?.toString() ?? "aucun texte selectionné";
  };
</script>

<svelte:document {onselectionchange} />

<h2>Select a part of this text to fire events.</h2>
<p>Text selected: {selection}</p>

<p class="italic">
  Avoid mouseenter and mouseleave handlers on this element, as these events are
  not fired on document in all browsers. Use {"<svelte:body>"} instead.
</p>
