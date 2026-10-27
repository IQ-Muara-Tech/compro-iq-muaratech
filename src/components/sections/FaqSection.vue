<script setup>
import { ref } from "vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";

const activeAccordion = ref(null);

const faqs = [
  {
    question: "Apa itu Lokaku?",
    answer:
      "Lokaku adalah platform SaaS (Software as a Service) all-in-one yang dirancang untuk membantu sekolah dan institusi mengelola operasional harian secara digital. Mulai dari absensi, manajemen cuti, reimbursement, hingga manajemen tugas - semua dalam satu platform terintegrasi.",
  },
  {
    question: "Apakah Lokaku bisa digunakan di mobile?",
    answer:
      "Ya! Lokaku tersedia dalam versi web (admin panel) dan mobile app (Android) untuk karyawan/guru. Absensi bisa dilakukan langsung dari smartphone dengan validasi GPS dan selfie.",
  },
  {
    question: "Bagaimana sistem multi-tenant bekerja?",
    answer:
      "Setiap institusi mendapatkan database terpisah yang terisolasi, menjamin keamanan dan privasi data. Satu akun bisa terhubung ke beberapa institusi sekaligus dengan mudah berpindah antar tenant.",
  },
  {
    question: "Apakah data kami aman?",
    answer:
      "Keamanan data adalah prioritas utama kami. Lokaku menggunakan database terpisah per institusi yang menjamin isolasi data, sistem autentikasi berlapis, dan penyimpanan file di cloud storage yang aman.",
  },
  {
    question: "Berapa biaya berlangganan Lokaku?",
    answer:
      "Lokaku menawarkan model berlangganan yang fleksibel sesuai kebutuhan institusi Anda. Hubungi tim kami untuk mendapatkan penawaran terbaik yang disesuaikan dengan jumlah pengguna dan fitur yang dibutuhkan.",
  },
];

function toggleAccordion(index) {
  activeAccordion.value = activeAccordion.value === index ? null : index;
}
</script>

<template>
  <section id="faq" class="py-20 lg:py-28 bg-white relative bg-ambient">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Left -->
        <div v-scroll-animate>
          <SectionHeading
            pill="FAQ"
            align="left"
            description="Temukan jawaban untuk pertanyaan umum tentang Lokaku. Jika tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami."
          >
            <template #title>
              Pertanyaan yang <span class="text-gradient">Sering Ditanyakan</span>
            </template>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Hubungi Tim Kami
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </SectionHeading>
        </div>

        <!-- Right - Accordion -->
        <div v-scroll-animate class="space-y-3">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="glass rounded-xl overflow-hidden transition-all"
            :class="{ '!border-primary/30 !shadow-soft': activeAccordion === index }"
          >
            <button
              @click="toggleAccordion(index)"
              class="w-full flex items-center justify-between p-5 text-left hover:bg-white/50 transition-colors cursor-pointer"
            >
              <span class="font-semibold text-dark pr-4">{{ faq.question }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300"
                :class="{ 'rotate-180 text-primary': activeAccordion === index }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              class="grid transition-all duration-300"
              :class="
                activeAccordion === index
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              "
            >
              <div class="overflow-hidden">
                <p class="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
