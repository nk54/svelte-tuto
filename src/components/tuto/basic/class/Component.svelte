<script lang="ts">
  let {
    bg1 = "hsl(0, 0%, 60%)",
    bg2 = "hsl(0, 0%, 30%)",
    bg3 = "hsl(0, 0%, 40%)",
  } = $props<{
    classNames?: string;
    bg1?: string;
    bg2?: string;
    bg3?: string;
  }>();
  let flipped = $state(false);
</script>

<div
  class="flex flex-col items-center gap-2 p-8 border this-container"
  style:--bg-1={bg1}
  style:--bg-2={bg2}
  style:--bg-3={bg3}
>
  Retourner la carte
  <button
    class="this-card {flipped ? 'this-flipped' : ''}"
    onclick={() => (flipped = !flipped)}
  >
    <div class="this-front">
      <span class="this-symbol">♠</span>
    </div>
    <div class="this-back">
      <div class="this-pattern"></div>
    </div>
  </button>
</div>

<style>
  .this-card {
    position: relative;
    aspect-ratio: 2.5 / 3.5;
    font-size: min(1vh, 0.25rem);
    height: 80em;
    background: var(--bg-1);
    border-radius: 2em;
    transform: rotateY(180deg);
    transition: transform 0.4s;
    transform-style: preserve-3d;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }

  .this-card.this-flipped {
    transform: rotateY(0);
  }

  .this-front,
  .this-back {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    border-radius: 2em;
    border: 1px solid var(--fg-2);
    box-sizing: border-box;
    padding: 2em;
  }

  .this-front {
    background:
      url(/favicon.svg) no-repeat 5em 5em,
      url(/favicon.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
    background-size:
      8em 8em,
      8em 8em;
  }

  .this-back {
    transform: rotateY(180deg);
  }

  .this-symbol {
    font-size: 30em;
    color: var(--fg-1);
  }

  .this-pattern {
    width: 100%;
    height: 100%;
    background-color: var(--bg-2);
    /* pattern from https://projects.verou.me/css3patterns/#marrakesh */
    background-image: radial-gradient(var(--bg-3) 0.9em, transparent 1em),
      repeating-radial-gradient(
        var(--bg-3) 0,
        var(--bg-3) 0.4em,
        transparent 0.5em,
        transparent 2em,
        var(--bg-3) 2.1em,
        var(--bg-3) 2.5em,
        transparent 2.6em,
        transparent 5em
      );
    background-size:
      3em 3em,
      9em 9em;
    background-position: 0 0;
    border-radius: 1em;
  }
</style>
