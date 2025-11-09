<script lang="ts">
  let numbers = $state([1, 2, 3, 4]);
  let total = $derived(numbers.reduce((a, b) => a + b, 0));

  function addNumber() {
    numbers.push(numbers.length + 1);
  }
</script>

<p>{numbers.join(" + ")} = {total}</p>

<button onclick={addNumber} class="place-self-center bg-amber-200 p-3 border"
  >Add a number</button
>
