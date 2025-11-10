<div onkeydown={(e) => alert(`<div> ${e.key}`)} role="presentation">
  <span>From child to parent (input > div) : onkeydown</span>
  <input onkeydown={(e) => alert(`<input> ${e.key}`)} />
</div>

<div onkeydowncapture={(e) => alert(`<div> ${e.key}`)} role="presentation">
  <span>From parent to child (div > parent) : onkeydowncapture</span>
  <input onkeydowncapture={(e) => alert(`<input> ${e.key}`)} />
</div>

<style>
  @reference "@/styles/global.css";
  div {
    @apply flex flex-col gap-2 mb-4;
  }
  input {
    @apply border;
  }
</style>
