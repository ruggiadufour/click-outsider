<script>
  import ClickOutsider from "click-outsider";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let elementRef;

  onMount(() => ClickOutsider.add(elementRef, () => dispatch("click-outside")));

  onDestroy(() => ClickOutsider.remove(elementRef));
  console.log($$props);
</script>

<div bind:this={elementRef} {...$$props}>
  <slot />
</div>
