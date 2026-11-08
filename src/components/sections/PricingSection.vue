<script setup>
import { ref, computed } from "vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";

const proModules = ref([
  {
    id: "hr",
    label: "HR (Absensi GPS, Cuti, Reimb, Tugas, Pengumuman)",
    price: 150000,
    checked: true,
    required: true,
  },
  {
    id: "ppdb",
    label: "+ PPDB & Pembayaran (Inden, Formulir, Angsuran, Approval)",
    price: 150000,
    checked: false,
  },
  {
    id: "lms",
    label: "+ LMS (Ruang Kelas, Materi S3, Tugas & Grading, Diskusi)",
    price: 150000,
    checked: false,
  },
  {
    id: "exam",
    label: "+ Ujian Online / CBT (Bank Soal, Jadwal & Koreksi)",
    price: 150000,
    checked: false,
  },
]);

const enterpriseBenefits = [
  { label: "Semua fitur dalam paket Pro", color: "green" },
  { label: "Server terisolasi (dedicated)", color: "blue" },
  { label: "Custom domain", color: "violet" },
  { label: "Prioritas support", color: "amber" },
];

const benefitColors = {
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600",
  violet: "bg-violet-100 text-violet-600",
  amber: "bg-amber-100 text-amber-600",
};

const proTotal = computed(() => {
  return proModules.value.reduce((sum, m) => (m.checked ? sum + m.price : sum), 0);
});

function formatRupiah(num) {
  return new Intl.NumberFormat("id-ID").format(num);
}

function toggleModule(id) {
  const mod = proModules.value.find((m) => m.id === id);
  if (mod && !mod.required) mod.checked = !mod.checked;
}
</script>

<template>
  <section id="pricing" class="py-20 lg:py-28 bg-gray-light">
    <div class="container mx-auto px-4 lg:px-8">
      <SectionHeading
        pill="Harga"
        description="Mulai dengan modul HR dan tambahkan sesuai kebutuhan institusi Anda."
      >
        <template #title>
          Pilih Paket yang <span class="text-gradient">Tepat</span>
        </template>
      </SectionHeading>

      <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <!-- Pro Card -->
        <div v-scroll-animate class="relative">
          <div class="glass rounded-2xl overflow-hidden card-hover">
            <div class="px-6 py-5 border-b border-white/70">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-bold font-display text-dark">Pro</h3>
                  <p class="text-sm text-gray-500">Untuk institusi yang sedang berkembang</p>
                </div>
                <span class="text-2xl font-bold text-primary"
                  >{{ formatRupiah(proTotal)
                  }}<span class="text-sm font-normal text-gray-400">/bln</span></span
                >
              </div>
            </div>
            <div class="p-6 space-y-1">
              <div
                v-for="mod in proModules"
                :key="mod.id"
                class="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl"
                :class="{
                  'bg-primary-25/80': mod.checked && !mod.required,
                  'hover:bg-white/70': !mod.required,
                }"
              >
                <div class="flex items-center gap-3 min-w-0">
                  <input
                    type="checkbox"
                    :checked="mod.checked"
                    :disabled="mod.required"
                    @change="toggleModule(mod.id)"
                    class="w-4 h-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer disabled:cursor-default"
                    :class="{ 'opacity-60': mod.required }"
                  />
                  <span class="text-sm text-gray-800" :class="{ 'font-semibold': mod.required }">{{
                    mod.label
                  }}</span>
                </div>
                <span class="text-sm font-medium text-gray-600 whitespace-nowrap ml-2"
                  >+Rp {{ formatRupiah(mod.price) }}</span
                >
              </div>
            </div>

            <div class="px-6 py-4 border-t border-white/70">
              <a
                href="#contact"
                class="block w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-center transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Ajukan Demo
              </a>
              <p class="text-xs text-gray-400 text-center mt-2">
                HR wajib dipilih, tambah modul lain sesuai kebutuhan
              </p>
            </div>
          </div>
        </div>

        <!-- Enterprise Card -->
        <div v-scroll-animate class="relative">
          <div class="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
            <span
              class="inline-flex items-center px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-sm"
              >Rekomendasi</span
            >
          </div>
          <div
            class="glass rounded-2xl overflow-hidden card-hover ring-2 ring-primary/20 pt-3"
          >
            <div class="px-6 py-5 border-b border-white/70">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-bold font-display text-dark">Enterprise</h3>
                  <p class="text-sm text-gray-500">Untuk institusi dengan kebutuhan khusus</p>
                </div>
                <span class="text-2xl font-bold text-primary"
                  >1.000.000<span class="text-sm font-normal text-gray-400">/bln</span></span
                >
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-4">
                <li
                  v-for="benefit in enterpriseBenefits"
                  :key="benefit.label"
                  class="flex items-start gap-3"
                >
                  <div
                    class="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    :class="benefitColors[benefit.color]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-3 h-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span class="text-sm text-gray-700">{{ benefit.label }}</span>
                </li>
              </ul>
            </div>

            <div class="px-6 py-4 border-t border-white/70">
              <a
                href="#contact"
                class="block w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl text-center transition-all hover:shadow-lg"
              >
                Ajukan Demo
              </a>
              <p class="text-xs text-gray-400 text-center mt-2">Harga tetap untuk semua fitur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
