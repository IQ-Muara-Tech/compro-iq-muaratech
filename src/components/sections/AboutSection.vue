<script setup>
const aboutMisi = [
  {
    title: "Digitalisasi Administrasi Terpadu",
    description:
      "Menyediakan solusi teknologi berbasis SaaS yang komprehensif untuk menyederhanakan alur kerja manual sekolah, mulai dari manajemen kepegawaian, penerimaan peserta didik baru, hingga tata kelola keuangan.",
  },
  {
    title: "Optimalisasi Produktivitas Pendidik",
    description:
      "Memangkas beban kerja administratif tata usaha dan guru melalui otomatisasi sistem, sehingga institusi dapat memfokuskan energi secara penuh pada peningkatan kualitas pembelajaran siswa.",
  },
  {
    title: "Infrastruktur Andal dan Terukur",
    description:
      "Menghadirkan teknologi peladen yang tangguh, aman, dan fleksibel, yang dirancang khusus untuk memenuhi standar privasi dan kapabilitas data dari berbagai skala institusi pendidikan.",
  },
  {
    title: "Kemitraan Strategis Berkelanjutan",
    description:
      "Menjalin sinergi jangka panjang dengan mitra pendidikan melalui pendampingan teknologi, evaluasi sistem rutin, dan pembaruan fitur yang berkesinambungan demi memastikan adopsi digital berjalan tanpa hambatan.",
  },
];
</script>

<template>
  <section id="about" class="py-20 lg:py-28 bg-white relative bg-ambient">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left: Visi -->
        <div v-scroll-animate>
          <span
            class="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-4"
            >Tentang Kami</span
          >
          <h2
            class="text-3xl md:text-4xl font-bold font-display text-dark mb-6 tracking-tight"
          >
            Transformasi Digital <span class="text-gradient">Pendidikan Indonesia</span>
          </h2>
          <p class="text-gray-600 leading-relaxed mb-8">
            Muara Tech Indonesia hadir sebagai katalisator transformasi digital di sektor pendidikan.
            Kami membangun solusi SaaS yang komprehensif untuk menyederhanakan operasional sekolah,
            dari manajemen kepegawaian, penerimaan peserta didik baru, hingga tata kelola keuangan,
            agar pendidik dapat fokus pada yang paling penting: kualitas pembelajaran siswa.
          </p>

          <!-- Visi Card -->
          <div class="glass rounded-2xl p-6 relative card-hover">
            <svg
              class="absolute top-4 left-4 w-8 h-8 text-primary/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
            <h3 class="text-lg font-bold text-dark mb-3 font-display pl-8">Visi</h3>
            <p class="text-gray-700 leading-relaxed italic pl-8">
              "Menjadi katalisator transformasi digital pendidikan terdepan yang mewujudkan ekosistem
              sekolah yang efisien, transparan, dan terintegrasi."
            </p>
          </div>
        </div>

        <!-- Right: Misi -->
        <div v-scroll-animate>
          <h3 class="text-xl font-bold text-dark mb-6 font-display">Misi Kami</h3>
          <div class="space-y-4">
            <div
              v-for="(item, index) in aboutMisi"
              :key="index"
              class="flex gap-4 glass rounded-2xl p-4 card-hover"
            >
              <div
                class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white font-bold text-sm"
              >
                {{ index + 1 }}
              </div>
              <div>
                <h4 class="font-bold text-dark mb-1">{{ item.title }}</h4>
                <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
