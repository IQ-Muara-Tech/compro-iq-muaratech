<script setup>
defineProps({
  pill: { type: String, required: true },
  tone: { type: String, default: "primary" },
  description: { type: String, default: "" },
  align: { type: String, default: "center" },
});

const tones = {
  primary: "bg-primary-50 text-primary",
  secondary: "bg-secondary-50 text-secondary-600",
  amber: "bg-amber-50 text-amber-600",
};
</script>

<template>
  <div
    v-scroll-animate
    class="mb-12 lg:mb-16"
    :class="align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'"
  >
    <span
      class="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
      :class="tones[tone]"
    >
      {{ pill }}
    </span>
    <h2
      class="text-3xl md:text-4xl font-bold font-display text-dark mb-4 tracking-tight"
      :class="align === 'center' && !description && !$slots.description ? 'mb-0' : ''"
    >
      <slot name="title" />
    </h2>
    <p
      v-if="description || $slots.description"
      class="text-gray-600 leading-relaxed"
      :class="align === 'center' ? '' : 'mb-6'"
    >
      <slot name="description">{{ description }}</slot>
    </p>
    <slot />
  </div>
</template>
