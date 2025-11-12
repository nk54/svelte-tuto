<script lang="ts">
  import type { Color, ColorFramework } from "./";
  import type { Snippet } from "svelte";

  let {
    data,
    field,
    children,
    row,
  }: {
    data: ColorFramework[];
    field: keyof ColorFramework;
    children: Snippet;
    row: Snippet<[ColorFramework]>;
  } = $props();

  let search = $state("");

  let filtered = $derived.by(() => {
    if (search === "") return data;

    const regex = new RegExp(search, "i");
    return data.filter((d: ColorFramework) => regex.test(d[field]));
  });
</script>

<div class="list">
  <label>
    Filtrer sur le nom : <input bind:value={search} class="border" />
  </label>

  <div class="header">
    {@render children()}
  </div>

  <div class="content">
    {#each filtered as d}
      {@render row(d)}
    {/each}
  </div>
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    border-top: 1px solid var(--bg-2);
    padding: 0.2em 0;
  }

  .content {
    flex: 1;
    overflow: auto;
    padding-top: 0.5em;
    border-top: 1px solid var(--bg-2);
  }
</style>
