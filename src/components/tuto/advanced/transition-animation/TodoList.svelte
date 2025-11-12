<script lang="ts">
  import { flip } from "svelte/animate";
  import { type TodoItem, send, receive } from "./";
  let {
    todos,
    remove,
  }: { todos: TodoItem[]; remove: (todo: TodoItem) => void } = $props();
</script>

<ul class="todos">
  {#each todos as todo (todo.id)}
    <li
      class={todo.done ? "done" : "todo"}
      in:receive={{ key: todo.id }}
      out:send={{ key: todo.id }}
      animate:flip={{ duration: 1000 }}
    >
      <label>
        <input type="checkbox" bind:checked={todo.done} />
        <span>{todo.description}</span>
        <button onclick={() => remove(todo)} aria-label="Remove"></button>
      </label>
    </li>
  {/each}
</ul>

<style>
  label {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 0.5rem;
  }

  span {
    flex: 1;
  }

  button {
    background-image: url(./remove.svg);
  }
  .todo {
    color: red;
  }
  .done {
    color: green;
  }
</style>
