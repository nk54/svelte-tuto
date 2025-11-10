<script lang="ts">
  import { Component } from "./";
  let value = $state(0);

  function increment() {
    value++;
  }

  function decrement() {
    value--;
  }
</script>

<p>The current value is {value}</p>

<Component {increment} {decrement} />
<Component {increment} {decrement} />
