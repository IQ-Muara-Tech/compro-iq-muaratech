<script setup>
import SectionHeading from "@/components/ui/SectionHeading.vue";

const moduleDetails = {
  hr: [
    "Presensi Online GPS & Geofencing",
    "Manajemen Cuti & Approval Multi-level",
    "Klaim Reimbursement Digital",
    "Manajemen Tugas & Proyek Kanban",
    "Broadcast Pengumuman Internal",
    "Dashboard Ringkasan HR",
  ],
  ppdb: [
    "Inden & Booking Kursi Siswa Baru",
    "Formulir PPDB Online & Cetak PDF",
    "Verifikasi Berkas Calon Siswa (Admin)",
    "Portal Tagihan & Daftar Ulang Siswa",
    "Skema Angsuran / Pembayaran Bertahap",
    "Upload Bukti Bayar & Konfirmasi Status",
    "Approval Pembayaran & Mutasi (Admin)",
    "Generate Otomatis Akun Siswa Baru",
    "Rekapitulasi Keuangan & Laporan PPDB",
  ],
  lms: [
    "Ruang Belajar Dinamis (Room LMS)",
    "Kode Join Room Instan untuk Siswa",
    "Topik & Bab Materi Multimedia",
    "Embed Video (YouTube/Drive) & Cloud S3",
    "Tracking Baca Siswa (View Counter)",
    "Tugas & Soal (Passing Score/KKM, Deadline)",
    "Pengumpulan Tugas Teks, Link & File",
    "Hapus File Lampiran Mandiri (Revisi & Edit)",
    "Penilaian Skor (0-100) & Return for Revision",
    "Forum Diskusi Interaktif & Thread Balasan",
    "Rekap Nilai Tugas & Ketuntasan Siswa",
  ],
  exam: [
    { label: "Ujian Online / CBT", upcoming: true },
    "Bank Soal & Kategori Mapel",
    "Jadwal Ujian & Token Akses",
    "Timer & Acak Soal / Opsi",
    "Analisis Butir & Koreksi Otomatis",
  ],
};

const modules = [
  {
    key: "hr",
    name: "HR & Operasional",
    price: "150",
    description: "Manajemen SDM, absensi GPS & operasional institusi",
    features: moduleDetails.hr,
    muted: false,
    comingSoon: false,
  },
  {
    key: "ppdb",
    name: "PPDB & Pembayaran",
    price: "150",
    description: "Inden, formulir online, angsuran biaya & approval pembayaran",
    features: moduleDetails.ppdb,
    muted: false,
    comingSoon: false,
  },
  {
    key: "lms",
    name: "LMS (Ruang Belajar)",
    price: "150",
    description: "Materi multimedia, tugas, revisi mandiri, grading & diskusi",
    features: moduleDetails.lms,
    muted: false,
    comingSoon: false,
  },
  {
    key: "exam",
    name: "Ujian Online / CBT",
    price: "150",
    description: "Computer Based Test & manajemen evaluasi terpisah",
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

      <div class="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
