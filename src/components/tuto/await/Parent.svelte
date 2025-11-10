<script lang="ts">
  import { roll } from "./service";

  let promise = $state(roll());
</script>

<button onclick={() => (promise = roll())} class="place-self-center p-4 border">
  roll the dice
</button>

{#await promise}
  <p>...rolling</p>
{:then number}
  <p>you rolled a {number}!</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
