<script lang="ts">
  let scoops = $state(1);
  let flavours = $state([]);
  let toppings = $state([]);

  const formatter = new Intl.ListFormat("fr", {
    style: "long",
    type: "conjunction",
  });
</script>

<h2>Taille</h2>

{#each [1, 2, 3] as number}
  <label>
    <input type="radio" name="scoops" value={number} bind:group={scoops} />
    {number}
    {number === 1 ? "boule" : "boules"}
  </label>
{/each}

<h2>Parfum</h2>

{#each ["cookies", "menthe chocolat", "framboise"] as flavour}
  <label>
    <input
      type="checkbox"
      name="flavours"
      value={flavour}
      bind:group={flavours}
    />
    {flavour}
  </label>
{/each}

<h2>Topping</h2>

<select multiple bind:value={toppings}>
  {#each ["chocolat", "m&ms", "bonbons"] as topping}
    <option>{topping}</option>
  {/each}
</select>

{#if flavours.length === 0}
  <p>Sélectionner un parfum</p>
{:else if flavours.length > scoops}
  <p>Impossible de commander plus de parfums que de boules !</p>
{:else}
  <p>
    Vous avez commandé {scoops}
    {scoops === 1 ? "boule" : "boules"}
    de {formatter.format(flavours)}
    {toppings.length > 0 ? "avec" : "sans topping"}
    {formatter.format(toppings)}
  </p>
{/if}
