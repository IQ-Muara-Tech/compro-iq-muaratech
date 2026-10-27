<script setup>
const highlights = [
  {
    title: "Database Terpisah per Institusi",
    description: "Setiap tenant memiliki database sendiri, menjamin isolasi dan keamanan data.",
  },
  {
    title: "Web Admin + Mobile App",
    description:
      "Panel admin berbasis web untuk manajemen, dan mobile app (Android) untuk pengguna.",
  },
  {
    title: "Geofencing & GPS Tracking",
    description: "Validasi lokasi absensi dengan radius yang dapat dikonfigurasi per lokasi.",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Sistem menu dinamis berdasarkan role, memastikan setiap pengguna hanya mengakses fitur yang relevan.",
  },
];
</script>

<template>
  <section id="product" class="py-20 lg:py-28 bg-gray-light relative overflow-hidden">
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
    ></div>
    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left - Product info -->
        <div v-scroll-animate>
          <span
            class="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-4"
            >Produk Kami</span
          >
          <h2 class="text-3xl md:text-4xl font-bold font-display text-dark mb-6 tracking-tight">
            MuaraTech, Platform <span class="text-gradient">Multi-Tenant</span> yang Scalable
          </h2>
          <p class="text-gray-600 leading-relaxed mb-8">
            Dikembangkan oleh Muara Tech Indonesia, Lokaku dibangun dengan arsitektur multi-tenant
            yang memastikan setiap institusi memiliki ruang data terpisah dan aman. Tersedia dalam
            versi web admin dan mobile app.
          </p>

          <div class="space-y-3">
            <div
              v-for="item in highlights"
              :key="item.title"
              class="flex items-start gap-4 glass rounded-2xl p-4 card-hover"
            >
              <div
                class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5 text-green-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark mb-1">{{ item.title }}</h4>
                <p class="text-sm text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Visual -->
        <div v-scroll-animate class="relative">
          <div class="glass rounded-2xl w-full overflow-hidden">
            <div class="flex items-center gap-1.5 px-4 py-3 bg-white/60 border-b border-white/70">
              <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              <span class="ml-2 text-xs text-gray-400">Lokaku</span>
            </div>
            <div class="p-5 space-y-4 bg-white/40">
              <div class="flex items-center justify-between">
                <div class="h-3 w-32 bg-gray-200 rounded"></div>
                <div class="h-6 w-6 bg-gray-200 rounded-full"></div>
              </div>
              <div class="grid grid-cols-3 gap-3">
                <div class="bg-teal-50/80 rounded-lg p-3">
                  <div class="h-2 w-12 bg-teal-200 rounded mb-2"></div>
                  <div class="h-4 w-8 bg-teal-300 rounded"></div>
                </div>
                <div class="bg-orange-50/80 rounded-lg p-3">
                  <div class="h-2 w-12 bg-orange-200 rounded mb-2"></div>
                  <div class="h-4 w-8 bg-orange-300 rounded"></div>
                </div>
                <div class="bg-blue-50/80 rounded-lg p-3">
                  <div class="h-2 w-12 bg-blue-200 rounded mb-2"></div>
                  <div class="h-4 w-8 bg-blue-300 rounded"></div>
                </div>
              </div>
              <div class="bg-white/80 rounded-lg border border-gray-100 p-4">
                <div class="flex items-end gap-2 h-20">
                  <div
                    class="flex-1 bg-teal-200 rounded-t"
                    style="height: 60%"
                  ></div>
                  <div
                    class="flex-1 bg-teal-400 rounded-t"
                    style="height: 85%"
                  ></div>
                  <div
                    class="flex-1 bg-orange-200 rounded-t"
                    style="height: 45%"
                  ></div>
                  <div
                    class="flex-1 bg-teal-300 rounded-t"
                    style="height: 70%"
                  ></div>
                  <div
                    class="flex-1 bg-teal-400 rounded-t"
                    style="height: 90%"
                  ></div>
                  <div
                    class="flex-1 bg-orange-300 rounded-t"
                    style="height: 55%"
                  ></div>
                  <div
                    class="flex-1 bg-teal-200 rounded-t"
                    style="height: 65%"
                  ></div>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-3 bg-white/70 rounded-lg p-2.5">
                  <div
                    class="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center"
                  >
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                  </div>
                  <div class="h-2 w-24 bg-gray-200 rounded"></div>
                  <div class="ml-auto h-5 w-14 bg-green-100 rounded-full"></div>
                </div>
                <div class="flex items-center gap-3 bg-white/70 rounded-lg p-2.5">
                  <div
                    class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center"
                  >
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div class="h-2 w-20 bg-gray-200 rounded"></div>
                  <div class="ml-auto h-5 w-14 bg-amber-100 rounded-full"></div>
                </div>
                <div class="flex items-center gap-3 bg-white/70 rounded-lg p-2.5">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div class="h-2 w-28 bg-gray-200 rounded"></div>
                  <div class="ml-auto h-5 w-14 bg-green-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
