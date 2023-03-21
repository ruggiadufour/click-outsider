<script>
  import ClickOutsiderWrapper from "click-outsider-svelte";

  function handleClickOutside() {
    console.log("Outside Svelte");
  }
</script>

<ClickOutsiderWrapper
  on:click-outside={handleClickOutside}
  style="background-color: red"
  class="la re puta de tu vieja"
>
  Hola mundo Svelte
</ClickOutsiderWrapper>
