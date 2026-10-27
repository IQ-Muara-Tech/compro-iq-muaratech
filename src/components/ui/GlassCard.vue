<script setup>
defineProps({
  as: { type: String, default: "div" },
  hover: { type: Boolean, default: true },
  rounded: { type: String, default: "rounded-2xl" },
});
</script>

<template>
  <component :is="as" class="glass" :class="[rounded, hover && 'card-hover']">
    <slot />
  </component>
</template>
