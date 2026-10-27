<script setup>
const stats = [
  { value: "Web + Mobile", label: "Platform" },
  { value: "GPS", label: "Absensi Terlokasi" },
  { value: "1 DB", label: "per Institusi" },
  { value: "24/7", label: "Support" },
];
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 bg-grid-pattern opacity-40"></div>
    <div class="absolute top-20 right-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-teal-700/20 rounded-full blur-3xl"></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-3xl"
    ></div>

    <div class="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left content -->
        <div v-scroll-animate class="text-white">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span class="text-sm font-medium">Muara Technology Indonesia</span>
          </div>
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-6"
          >
            Solusi Digital untuk
            <span class="text-orange-300">Institusi Modern</span>
          </h1>
          <p class="text-lg text-teal-100 mb-8 max-w-lg leading-relaxed">
            Kami menghadirkan <strong class="text-white">Lokaku</strong>, platform SaaS all-in-one
            yang mengintegrasikan absensi, manajemen SDM, dan sistem akademik dalam satu ekosistem
            digital.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#features"
              class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Jelajahi Fitur
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
            <a
              href="#contact"
              class="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Minta Demo
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
          </div>

          <!-- Stats -->
          <div
            class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center sm:text-left"
            >
              <div class="text-xl sm:text-2xl font-bold text-white">{{ stat.value }}</div>
              <div class="text-sm text-teal-200">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right content - Dashboard mockup -->
        <div v-scroll-animate class="hidden lg:block">
          <div class="relative">
            <!-- Main dashboard card -->
            <div class="glass-strong rounded-3xl p-6 animate-float">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
                <span class="ml-3 text-xs text-white/60">Lokaku</span>
              </div>
              <div class="space-y-4">
                <!-- Mock header -->
                <div class="flex items-center justify-between">
                  <div class="h-4 w-32 bg-white/20 rounded"></div>
                  <div class="h-8 w-8 bg-white/20 rounded-full"></div>
                </div>
                <!-- Mock stats row -->
                <div class="grid grid-cols-3 gap-3">
                  <div class="bg-white/10 rounded-xl p-3">
                    <div class="h-3 w-12 bg-teal-300/40 rounded mb-2"></div>
                    <div class="h-5 w-8 bg-white/30 rounded"></div>
                  </div>
                  <div class="bg-white/10 rounded-xl p-3">
                    <div class="h-3 w-12 bg-orange-400/40 rounded mb-2"></div>
                    <div class="h-5 w-8 bg-white/30 rounded"></div>
                  </div>
                  <div class="bg-white/10 rounded-xl p-3">
                    <div class="h-3 w-12 bg-sky-400/40 rounded mb-2"></div>
                    <div class="h-5 w-8 bg-white/30 rounded"></div>
                  </div>
                </div>
                <!-- Mock chart -->
                <div class="bg-white/10 rounded-xl p-4">
                  <div class="h-3 w-24 bg-white/20 rounded mb-4"></div>
                  <div class="flex items-end gap-2 h-24">
                    <div
                      class="flex-1 bg-teal-300/30 rounded-t"
                      style="height: 60%"
                    ></div>
                    <div
                      class="flex-1 bg-teal-300/40 rounded-t"
                      style="height: 80%"
                    ></div>
                    <div
                      class="flex-1 bg-teal-300/50 rounded-t"
                      style="height: 45%"
                    ></div>
                    <div
                      class="flex-1 bg-orange-400/50 rounded-t"
                      style="height: 90%"
                    ></div>
                    <div
                      class="flex-1 bg-teal-300/50 rounded-t"
                      style="height: 70%"
                    ></div>
                    <div
                      class="flex-1 bg-teal-300/40 rounded-t"
                      style="height: 55%"
                    ></div>
                    <div
                      class="flex-1 bg-orange-400/40 rounded-t"
                      style="height: 85%"
                    ></div>
                  </div>
                </div>
                <!-- Mock table -->
                <div class="space-y-2">
                  <div class="flex items-center gap-3 bg-white/5 rounded-lg p-2">
                    <div class="w-6 h-6 bg-teal-400/30 rounded-full"></div>
                    <div class="h-3 w-24 bg-white/20 rounded"></div>
                    <div class="ml-auto h-5 w-16 bg-green-400/20 rounded-full"></div>
                  </div>
                  <div class="flex items-center gap-3 bg-white/5 rounded-lg p-2">
                    <div class="w-6 h-6 bg-orange-400/30 rounded-full"></div>
                    <div class="h-3 w-20 bg-white/20 rounded"></div>
                    <div class="ml-auto h-5 w-16 bg-orange-300/20 rounded-full"></div>
                  </div>
                  <div class="flex items-center gap-3 bg-white/5 rounded-lg p-2">
                    <div class="w-6 h-6 bg-sky-400/30 rounded-full"></div>
                    <div class="h-3 w-28 bg-white/20 rounded"></div>
                    <div class="ml-auto h-5 w-16 bg-green-400/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
