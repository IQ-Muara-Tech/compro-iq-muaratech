<script setup>
import SectionHeading from "@/components/ui/SectionHeading.vue";

const upcomingFeatures = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
    title: "Penilaian Siswa",
    description: "Input nilai, rapor digital, analisis capaian siswa, dan laporan akademik lengkap.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /></svg>`,
    title: "Ujian Online / CBT",
    description:
      "Computer Based Test untuk ulangan, ujian, try out dengan bank soal dan analisis hasil otomatis.",
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

      <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div
          v-for="(item, index) in upcomingFeatures"
          :key="index"
          v-scroll-animate
          class="glass rounded-2xl p-6 card-hover relative overflow-hidden group"
        >
          <!-- Coming soon badge -->
          <div class="absolute top-4 right-4">
            <span
              class="inline-flex items-center px-2.5 py-1 bg-amber-50/90 text-amber-600 text-xs font-semibold rounded-full"
            >
              Coming Soon
            </span>
          </div>
          <div
            class="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform"
          >
            <div v-html="item.icon"></div>
          </div>
          <h3 class="text-lg font-bold text-dark mb-2 font-display">{{ item.title }}</h3>
          <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
