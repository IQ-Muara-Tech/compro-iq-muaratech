<script setup>
import SectionHeading from "@/components/ui/SectionHeading.vue";

const upcomingFeatures = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /></svg>`,
    title: "Ujian Online / CBT",
    description:
      "Computer Based Test mandiri untuk ulangan harian, ujian semester, dan try out dengan bank soal dinamis, token akses, timer, serta analisis butir soal otomatis.",
  },
];
</script>

<template>
  <section id="roadmap" class="py-20 lg:py-28 bg-gray-light relative">
    <div class="absolute inset-0 bg-grid-pattern-dark opacity-70"></div>
    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        pill="Segera Hadir"
        tone="amber"
        description="Kami terus berinovasi untuk menghadirkan solusi lengkap bagi institusi pendidikan di Indonesia."
      >
        <template #title>
          Fitur yang Sedang <span class="text-gradient">Dikembangkan</span>
        </template>
      </SectionHeading>

      <div class="max-w-xl mx-auto">
        <div
          v-for="(item, index) in upcomingFeatures"
          :key="index"
          v-scroll-animate
          class="glass rounded-2xl p-6 lg:p-8 card-hover relative overflow-hidden group"
        >
          <!-- Coming soon badge -->
          <div class="absolute top-4 right-4">
            <span
              class="inline-flex items-center px-3 py-1 bg-amber-50/90 text-amber-600 text-xs font-semibold rounded-full border border-amber-200"
            >
              Coming Soon
            </span>
          </div>
          <div
            class="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform"
          >
            <div v-html="item.icon"></div>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3 font-display">{{ item.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
