<script lang="ts">
  import Canvas from "./Canvas.svelte";
  import { trapFocus } from "./actions.svelte.js";

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "white",
    "black",
  ];

  let selected = $state(colors[0]);
  let size = $state(10);
  let showMenu = $state(true);
  let canvas: Canvas;
</script>

<div class="this-container">
  <Canvas bind:this={canvas} color={selected} {size} />

  {#if showMenu}
    <div
      role="presentation"
      class="this-modal-background"
      onclick={(event) => {
        if (event.target === event.currentTarget) {
          showMenu = false;
        }
      }}
      onkeydown={(e) => {
        if (e.key === "Escape") {
          showMenu = false;
        }
      }}
    >
      <div class="this-menu" use:trapFocus>
        <div class="this-colors">
          {#each colors as color}
            <button
              class="this-color"
              aria-label={color}
              aria-current={selected === color}
              style="--color: {color}"
              onclick={() => {
                selected = color;
              }}
            ></button>
          {/each}
        </div>

        <label>
          small
          <input type="range" bind:value={size} min="1" max="50" />
          large
        </label>
      </div>
    </div>
  {/if}

  <div class="this-controls">
    <button
      class="this-border border-4 this-show-menu"
      onclick={() => (showMenu = !showMenu)}
    >
      {showMenu ? "close" : "menu"}
    </button>
    <button
      class="this-border border-4 this-show-menu"
      onclick={() => canvas.clear()}
    >
      clear
    </button>
  </div>
</div>

<style>
  .this-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .this-controls {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1em;
  }

  .this-show-menu {
    width: 5em;
  }

  .this-modal-background {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
  }

  .this-menu {
    position: relative;
    background: pink;
    width: calc(100% - 2em);
    max-width: 28em;
    padding: 1em 1em 0.5em 1em;
    border-radius: 1em;
    box-sizing: border-box;
    user-select: none;
  }

  .this-colors {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 0.5em;
  }

  .this-color {
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--color, #fff);
    transform: none;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
    transition: all 0.1s;
  }

  .this-color[aria-current="true"] {
    transform: translate(1px, 1px);
    filter: none;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
  }

  .this-menu label {
    display: flex;
    width: 100%;
    margin: 1em 0 0 0;
  }

  .this-menu input {
    flex: 1;
  }
</style>
