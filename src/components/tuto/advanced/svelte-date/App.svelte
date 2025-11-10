<script lang="ts">
  import { SvelteDate } from "svelte/reactivity";

  let dateOne = new SvelteDate();
  let dateTwo = $state(new Date());

  const pad = (n: number) => (n < 10 ? "0" + n : n);

  $effect(() => {
    const interval = setInterval(() => {
      dateOne.setTime(Date.now());
      dateTwo = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<p>
  SvelteDate : {dateOne.getHours()}:{pad(dateOne.getMinutes())}:{pad(
    dateOne.getSeconds()
  )} => setTime/setHours/etc fonctionne de manière réactive
</p>

<p>
  Date native réactive : {dateTwo.getHours()}:{pad(dateTwo.getMinutes())}:{pad(
    dateTwo.getSeconds()
  )} => pas de mutation interne, nécessite de réassigner la variable
</p>

<p>
  Il existe d'autres classes réactives fournies par Svelte, telles que
  SvelteMap/SvelteSet/SvelteURL/URLSearchParams, qui fonctionnent de manière réactive.
</p>
