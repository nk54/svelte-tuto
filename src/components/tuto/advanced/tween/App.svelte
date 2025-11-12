<script lang="ts">
  import { Tween } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  let tweenedProgress = new Tween(0);
  let easedProgress = new Tween(0, {
    duration: 1000,
    easing: cubicInOut,
  });
</script>

<p>Simple tween : linear</p>
<progress value={tweenedProgress.current}></progress>
<div class="flex flex-row gap-2">
  <button onclick={() => (tweenedProgress.target = 0)}> 0% </button>
  <button onclick={() => (tweenedProgress.target = 0.25)}> 25% </button>
  <button onclick={() => (tweenedProgress.target = 0.5)}> 50% </button>
  <button onclick={() => (tweenedProgress.target = 0.75)}> 75% </button>
  <button onclick={() => (tweenedProgress.target = 1)}> 100% </button>
</div>

<p>Eased tween : cubic in out</p>
<progress value={easedProgress.current}></progress>
<div class="flex flex-row gap-2">
  <button onclick={() => (easedProgress.target = 0)}> 0% </button>
  <button onclick={() => (easedProgress.target = 0.25)}> 25% </button>
  <button onclick={() => (easedProgress.target = 0.5)}> 50% </button>
  <button onclick={() => (easedProgress.target = 0.75)}> 75% </button>
  <button onclick={() => (easedProgress.target = 1)}> 100% </button>
</div>

<style>
  progress {
    display: block;
    width: 100%;
  }

  button {
    border: 1px solid;
    padding: 1rem;
  }
</style>
