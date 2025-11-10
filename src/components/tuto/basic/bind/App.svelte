<script lang="ts">
  import { Component } from "./";
  let firstNumber = $state(0);
  let secondNumber = $state(0);
</script>

<label>
  First Number:
  <input type="number" bind:value={firstNumber} min="0" max="100" />
  <input type="range" bind:value={firstNumber} min="0" max="100" />
</label>

<label>
  Second Number:
  <input type="number" bind:value={secondNumber} min="0" max="100" />
  <input type="range" bind:value={secondNumber} min="0" max="100" />
</label>

<Component label={"Third"} />

<style>
  @reference "@/styles/global.css";
  input {
    @apply border;
  }
</style>
