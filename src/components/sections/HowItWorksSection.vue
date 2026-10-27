<script setup>
import SectionHeading from "@/components/ui/SectionHeading.vue";

const steps = [
  {
    title: "Daftarkan Institusi",
    description:
      "Registrasi institusi Anda dan dapatkan akses ke dashboard admin dalam hitungan menit.",
    gradient: "from-primary to-primary-light",
    shadow: "shadow-primary/25",
    lineFrom: "from-primary/30",
    lineTo: "to-secondary/30",
    showLine: true,
  },
  {
    title: "Konfigurasi",
    description: "Atur lokasi, jadwal, karyawan, dan kebijakan sesuai kebutuhan institusi Anda.",
    gradient: "from-secondary to-secondary-light",
    shadow: "shadow-secondary/25",
    lineFrom: "from-secondary/30",
    lineTo: "to-accent/30",
    showLine: true,
  },
  {
    title: "Mulai Gunakan",
    description:
      "Undang tim Anda, download mobile app, dan mulai kelola operasional secara digital.",
    gradient: "from-accent to-accent-light",
    shadow: "shadow-accent/25",
    showLine: false,
  },
];
</script>

<template>
  <section id="steps" class="py-20 lg:py-28 bg-white relative bg-ambient">
    <div class="container mx-auto px-4 lg:px-8">
      <SectionHeading
        pill="Cara Kerja"
        tone="secondary"
        description="Setup cepat tanpa instalasi rumit. Institusi Anda bisa langsung beroperasi digital."
      >
        <template #title>
          Mulai dalam <span class="text-gradient-orange">3 Langkah</span> Mudah
        </template>
      </SectionHeading>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="index"
          v-scroll-animate
          class="text-center relative"
        >
          <!-- Connector line -->
          <div
            v-if="step.showLine"
            class="hidden md:block absolute top-8 left-1/2 w-[calc(100%+2rem)] h-[2px] bg-gradient-to-r z-0"
            :class="[step.lineFrom, step.lineTo]"
          ></div>
          <div
            class="w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10"
            :class="[step.gradient, step.shadow]"
          >
            <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3 font-display">{{ step.title }}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
