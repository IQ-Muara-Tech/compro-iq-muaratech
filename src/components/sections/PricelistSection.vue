<script setup>
import SectionHeading from "@/components/ui/SectionHeading.vue";

const moduleDetails = {
  hr: [
    "Manajemen Absensi",
    "Manajemen Cuti & Approval",
    "Reimbursement",
    "Manajemen Tugas",
    "Pengumuman",
    "Dashboard HR",
  ],
  siakad: [
    "PPDB Online",
    "Inden / Waiting List",
    "Daftar Ulang",
    "Kenaikan Kelas",
    "Pembayaran Tagihan (SPP, billing)",
    "Manajemen Tahun Ajaran",
    { label: "Penilaian Siswa", upcoming: true },
    "Dashboard SIAKAD",
  ],
  exam: [
    { label: "Ujian Online / CBT", upcoming: true },
    "Bank Soal & Kategori",
    "Jadwal Ujian",
    "Analisis Hasil",
    "Try Out",
  ],
};

const modules = [
  {
    key: "hr",
    name: "HR",
    price: "150",
    description: "Manajemen SDM & operasional harian",
    features: moduleDetails.hr,
    muted: false,
    comingSoon: false,
  },
  {
    key: "siakad",
    name: "SIAKAD",
    price: "200",
    description: "Sistem akademik & administrasi siswa",
    features: moduleDetails.siakad,
    muted: false,
    comingSoon: false,
  },
  {
    key: "exam",
    name: "Ujian Online / CBT",
    price: "150",
    description: "Computer Based Test & manajemen ujian",
    features: moduleDetails.exam,
    muted: true,
    comingSoon: true,
  },
];
</script>

<template>
  <section id="pricelist" class="py-20 lg:py-28 bg-white relative bg-ambient">
    <div class="container mx-auto px-4 lg:px-8">
      <SectionHeading
        pill="Pricelist"
        description="Pilih modul yang dibutuhkan, kombinasikan sesuai kebutuhan institusi Anda."
      >
        <template #title> Harga Modul <span class="text-gradient">Lokaku</span> </template>
      </SectionHeading>

      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          v-for="mod in modules"
          :key="mod.key"
          v-scroll-animate
          class="glass rounded-2xl overflow-hidden relative card-hover"
          :class="{ 'opacity-75': mod.muted }"
        >
          <div
            v-if="mod.comingSoon"
            class="absolute top-3 right-3 z-10"
          >
            <span
              class="inline-flex items-center px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-semibold rounded-full"
              >Coming Soon</span
            >
          </div>
          <div class="px-6 pt-6 pb-4 border-b border-white/70">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-lg font-bold font-display text-dark">{{ mod.name }}</h3>
              <span
                class="text-xl font-bold"
                :class="mod.muted ? 'text-gray-400' : 'text-primary'"
                >{{ mod.price }}<span
                  class="text-sm font-normal"
                  :class="mod.muted ? 'text-gray-300' : 'text-gray-400'"
                  >rb/bln</span
                ></span
              >
            </div>
            <p class="text-sm text-gray-500">{{ mod.description }}</p>
          </div>
          <div class="px-6 py-4 space-y-2.5">
            <div
              v-for="(f, i) in mod.features"
              :key="i"
              class="flex items-start gap-2.5"
            >
              <svg
                class="w-4 h-4 shrink-0 mt-0.5"
                :class="mod.muted ? 'text-gray-300' : 'text-green-500'"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <template v-if="typeof f === 'string'">
                <span class="text-sm" :class="mod.muted ? 'text-gray-400' : 'text-gray-600'">{{
                  f
                }}</span>
              </template>
              <template v-else>
                <span class="text-sm" :class="mod.muted ? 'text-gray-400' : 'text-gray-600'">{{
                  f.label
                }}</span>
                <span
                  v-if="!mod.muted"
                  class="inline-flex items-center px-1.5 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-semibold rounded"
                  >Coming Soon</span
                >
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
