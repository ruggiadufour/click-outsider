<template>
  <div v-bind="$attrs" ref="elementRef">
    <slot />
  </div>
</template>
<script setup lang="ts">
import ClickOutsider from "click-outsider";
import { onUnmounted, onMounted, ref } from "vue";

const emit = defineEmits<{
  (e: "on-click-outside"): void;
}>();

const elementRef = ref();

onMounted(() =>
  ClickOutsider.add(elementRef.value, () => emit("on-click-outside"))
);

onUnmounted(() => ClickOutsider.remove(elementRef.value));
</script>
