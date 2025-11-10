<script lang="ts">
  import { type Option, getOptions } from "./";
  let questions = getOptions();
  let selected = $state<Option>();
  let answer = $state("");

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!selected) return;
    alert(
      `answered question ${selected.id} (${selected.text}) with "${answer}"`
    );
  }
</script>

<form onsubmit={handleSubmit}>
  <select bind:value={selected} onchange={() => (answer = "")}>
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>

  <input bind:value={answer} />

  <button disabled={!answer} type="submit"> Submit </button>
</form>

<p>
  selected question {selected ? selected.id : "[waiting...]"}
</p>

<style>
  @reference "@/styles/global.css";
  select,
  input,
  button {
    @apply p-2 border;
  }
</style>
