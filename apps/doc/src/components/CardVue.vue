<template>
  <click-outsider-wrapper
    @on-click-outside="handleClickOutside"
    style="background-color: red"
    class="la re puta de tu vieja"
  >
    Hola mundo Vue
  </click-outsider-wrapper>
</template>

<script setup lang="ts">
import ClickOutsiderWrapper from "click-outsider-vue";

function handleClickOutside() {
  console.log("Outside Vue");
}
</script>
