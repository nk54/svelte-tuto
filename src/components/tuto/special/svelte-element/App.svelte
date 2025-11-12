<script lang="ts">
  const options = ["h1", "h2", "p", "b"];
  let selected = $state(options[0]);
</script>

<select bind:value={selected} class="border">
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>

<p>With if else if else if</p>
{#if selected === "h1"}
  <h1>I'm a <code>&lt;h1&gt;</code> element</h1>
{:else if selected === "h2"}
  <h2>I'm a <code>&lt;h2&gt;</code> element</h2>
{:else if selected === "h3"}
  <h3>I'm a <code>&lt;h3&gt;</code> element</h3>
{:else if selected === "p"}
  <p>I'm a <code>&lt;p&gt;</code> element</p>
{:else if selected === "b"}
  <b>I'm a <code>&lt;b&gt;</code> element</b>
{/if}

<p>With svelte:element</p>
<svelte:element this={selected}>
  I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>
