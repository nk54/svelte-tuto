<script lang="ts">
  const themes = ["green", "red"];
  let selected = $state(themes[0]);
  // <link rel="stylesheet" href="/css/style-{selected}.css" />
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="/src/components/tuto/special/svelte-head/style-{selected}.css"
  />
</svelte:head>

<h2>Welcome to my site!</h2>

<select bind:value={selected} class="border">
  <option disabled>Choisir un style</option>

  {#each themes as theme}
    <option>{theme}</option>
  {/each}
</select>

<p class="italic">
  In server-side rendering (SSR) mode, contents of {"<svelte:head>"} are returned
  separately from the rest of your HTML.
</p>
