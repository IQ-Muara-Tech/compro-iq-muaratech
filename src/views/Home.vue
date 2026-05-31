<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const isActive = ref(false);
const navMenu = ref(false);
const activeAccordion = ref(null);
const isScrolled = ref(false);
const activeSection = ref("home");
const currentYear = new Date().getFullYear();

const sections = ["home", "features", "product", "roadmap", "faq", "contact"];

function toggleMenu() {
  isActive.value = !isActive.value;
  navMenu.value = !navMenu.value;
}

function closeMenu() {
  isActive.value = false;
  navMenu.value = false;
}

function toggleAccordion(index) {
  activeAccordion.value = activeAccordion.value === index ? null : index;
}

function handleScroll() {
  const header = document.querySelector("header");
  if (header) {
    if (window.pageYOffset > 50) {
      header.classList.add("navbar-fixed");
      isScrolled.value = true;
    } else {
      header.classList.remove("navbar-fixed");
      isScrolled.value = false;
    }
  }

  // Scroll spy - detect active section
  const scrollPos = window.pageYOffset + 120;
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = sections[i];
      break;
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
    title: "Absensi Online GPS",
    description: "Absensi real-time dengan validasi lokasi GPS dan selfie. Geofencing otomatis memastikan tepat lokasi.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>`,
    title: "Manajemen Cuti",
    description: "Pengajuan cuti digital dengan approval multi-level, tracking saldo, dan delegasi tugas otomatis.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>`,
    title: "Reimbursement",
    description: "Klaim pengeluaran digital dengan lampiran bukti, approval per-item, dan status real-time.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg>`,
    title: "Manajemen Tugas",
    description: "Kelola proyek dengan Kanban board, prioritas, deadline, dan kolaborasi tim yang efektif.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
    title: "PPDB Online",
    description: "Penerimaan Peserta Didik Baru secara digital, dari pendaftaran, seleksi, hingga pengumuman.",
  },
];

const upcomingFeatures = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`,
    title: "Payment",
    description: "Pembayaran registrasi, SPP, dan biaya lainnya terintegrasi dengan berbagai metode pembayaran.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`,
    title: "Sistem Akademik",
    description: "Manajemen kurikulum, jadwal pelajaran, nilai, rapor, dan data akademik lengkap.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /></svg>`,
    title: "Ujian Online / CBT",
    description: "Computer Based Test untuk ulangan, ujian, try out dengan bank soal dan analisis hasil otomatis.",
  },
];

const faqs = [
  {
    question: "Apa itu Lokaku?",
    answer: "Lokaku adalah platform SaaS (Software as a Service) all-in-one yang dirancang untuk membantu sekolah dan institusi mengelola operasional harian secara digital. Mulai dari absensi, manajemen cuti, reimbursement, hingga manajemen tugas - semua dalam satu platform terintegrasi.",
  },
  {
    question: "Apakah Lokaku bisa digunakan di mobile?",
    answer: "Ya! Lokaku tersedia dalam versi web (admin panel) dan mobile app (Android & iOS) untuk karyawan/guru. Absensi bisa dilakukan langsung dari smartphone dengan validasi GPS dan selfie.",
  },
  {
    question: "Bagaimana sistem multi-tenant bekerja?",
    answer: "Setiap institusi mendapatkan database terpisah yang terisolasi, menjamin keamanan dan privasi data. Satu akun bisa terhubung ke beberapa institusi sekaligus dengan mudah berpindah antar tenant.",
  },
  {
    question: "Apakah data kami aman?",
    answer: "Keamanan data adalah prioritas utama kami. Lokaku menggunakan database terpisah per institusi yang menjamin isolasi data, sistem autentikasi berlapis, dan penyimpanan file di cloud storage yang aman.",
  },
  {
    question: "Berapa biaya berlangganan Lokaku?",
    answer: "Lokaku menawarkan model berlangganan yang fleksibel sesuai kebutuhan institusi Anda. Hubungi tim kami untuk mendapatkan penawaran terbaik yang disesuaikan dengan jumlah pengguna dan fitur yang dibutuhkan.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "< 1s", label: "Response Time" },
  { value: "Multi", label: "Tenant" },
  { value: "24/7", label: "Support" },
];

const proModules = ref([
  { id: "hr", label: "HR (Absensi, Cuti, Reimb, Tugas, Pengumuman)", price: 200000, checked: true, required: true },
  { id: "ppdb", label: "+ PPDB & Payment", price: 100000, checked: false },
  { id: "exam", label: "+ Ujian Online / CBT", price: 150000, checked: false },
  { id: "siakad", label: "+ SIAKAD", price: 150000, checked: false },
]);

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
  <div class="overflow-x-hidden">
    <!-- Header / Navbar -->
    <header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between py-4">
          <!-- Logo -->
          <a href="#home" class="flex items-center gap-1.5">
            <span class="text-xl font-bold font-display transition-colors duration-400" :class="isScrolled ? 'text-dark' : 'text-white'">Muara<span :class="isScrolled ? 'text-gradient' : 'text-secondary-300'">Tech</span></span>
            <span class="text-sm font-medium transition-colors duration-400" :class="isScrolled ? 'text-gray-500' : 'text-white/70'">Indonesia</span>
          </a>

          <!-- Hamburger -->
          <button
            type="button"
            class="block lg:hidden hover:cursor-pointer p-2"
            :class="{ hamburgerActive: isActive }"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>

          <!-- Navigation -->
          <nav
            class="absolute py-4 px-6 bg-white shadow-xl rounded-2xl w-[calc(100%-2rem)] right-4 top-full lg:block lg:static lg:bg-transparent lg:shadow-none lg:rounded-none lg:w-auto lg:p-0 transition-all duration-300"
            :class="{ hidden: !navMenu }"
          >
            <ul class="block lg:flex lg:items-center lg:gap-1">
              <li>
                <a href="#home" @click="closeMenu" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors" :class="[
                  isScrolled
                    ? activeSection === 'home' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-primary-25 lg:hover:bg-transparent'
                    : activeSection === 'home' ? 'text-white font-semibold' : 'text-white/70 hover:text-white lg:hover:bg-white/10'
                ]">Beranda</a>
              </li>
              <li>
                <a href="#features" @click="closeMenu" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors" :class="[
                  isScrolled
                    ? activeSection === 'features' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-primary-25 lg:hover:bg-transparent'
                    : activeSection === 'features' ? 'text-white font-semibold' : 'text-white/70 hover:text-white lg:hover:bg-white/10'
                ]">Fitur</a>
              </li>
              <li>
                <a href="#product" @click="closeMenu" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors" :class="[
                  isScrolled
                    ? activeSection === 'product' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-primary-25 lg:hover:bg-transparent'
                    : activeSection === 'product' ? 'text-white font-semibold' : 'text-white/70 hover:text-white lg:hover:bg-white/10'
                ]">Produk</a>
              </li>
              <li>
                <a href="#roadmap" @click="closeMenu" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors" :class="[
                  isScrolled
                    ? activeSection === 'roadmap' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-primary-25 lg:hover:bg-transparent'
                    : activeSection === 'roadmap' ? 'text-white font-semibold' : 'text-white/70 hover:text-white lg:hover:bg-white/10'
                ]">Roadmap</a>
              </li>
              <li>
                <a href="#faq" @click="closeMenu" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors" :class="[
                  isScrolled
                    ? activeSection === 'faq' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-primary-25 lg:hover:bg-transparent'
                    : activeSection === 'faq' ? 'text-white font-semibold' : 'text-white/70 hover:text-white lg:hover:bg-white/10'
                ]">FAQ</a>
              </li>
              <li>
                <a href="#contact" @click="closeMenu" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors" :class="[
                  isScrolled
                    ? activeSection === 'contact' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-primary-25 lg:hover:bg-transparent'
                    : activeSection === 'contact' ? 'text-white font-semibold' : 'text-white/70 hover:text-white lg:hover:bg-white/10'
                ]">Kontak</a>
              </li>
              <li class="mt-3 lg:mt-0 lg:ml-4">
                <a href="#contact" @click="closeMenu" class="block py-2.5 px-5 text-sm font-semibold rounded-full transition-all hover:shadow-lg text-center" :class="isScrolled ? 'text-white bg-primary hover:bg-primary-dark hover:shadow-primary/25' : 'text-primary-dark bg-white hover:bg-gray-100 hover:shadow-white/25'">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div class="absolute top-20 right-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-teal-700/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left content -->
          <div v-scroll-animate class="text-white">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium">Muara Tech Indonesia</span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              Solusi Digital untuk
              <span class="text-orange-300">Institusi Modern</span>
            </h1>
            <p class="text-lg text-teal-100 mb-8 max-w-lg leading-relaxed">
              Kami menghadirkan <strong class="text-white">Lokaku</strong> — platform SaaS all-in-one yang mengintegrasikan absensi, manajemen SDM, dan sistem akademik dalam satu ekosistem digital.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#features" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-0.5">
                Jelajahi Fitur
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
              <a href="#contact" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
                Minta Demo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
              <div v-for="stat in stats" :key="stat.label" class="text-center sm:text-left">
                <div class="text-2xl font-bold text-white">{{ stat.value }}</div>
                <div class="text-sm text-teal-200">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Right content - Dashboard mockup -->
          <div v-scroll-animate class="hidden lg:block">
            <div class="relative">
              <!-- Main dashboard card -->
              <div class="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 shadow-2xl">
                <div class="flex items-center gap-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-400"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                  <span class="ml-3 text-xs text-white/60">dashboard.lokaku.id</span>
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
                      <div class="flex-1 bg-teal-300/30 rounded-t" style="height: 60%"></div>
                      <div class="flex-1 bg-teal-300/40 rounded-t" style="height: 80%"></div>
                      <div class="flex-1 bg-teal-300/50 rounded-t" style="height: 45%"></div>
                      <div class="flex-1 bg-orange-400/50 rounded-t" style="height: 90%"></div>
                      <div class="flex-1 bg-teal-300/50 rounded-t" style="height: 70%"></div>
                      <div class="flex-1 bg-teal-300/40 rounded-t" style="height: 55%"></div>
                      <div class="flex-1 bg-orange-400/40 rounded-t" style="height: 85%"></div>
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

    <!-- Features Section -->
    <section id="features" class="py-20 lg:py-28 bg-white relative">
      <div class="absolute inset-0 bg-dot-pattern"></div>
      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <!-- Section header -->
        <div v-scroll-animate class="text-center max-w-2xl mx-auto mb-16">
          <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-4">Fitur Unggulan</span>
          <h2 class="text-3xl md:text-4xl font-bold font-display text-dark mb-4">
            Semua yang Anda Butuhkan dalam <span class="text-gradient">Satu Platform</span>
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Lokaku menyediakan fitur lengkap untuk mengelola operasional institusi Anda secara efisien dan modern.
          </p>
        </div>

        <!-- Feature cards -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          <div
            v-for="(feature, index) in features"
            :key="index"
            v-scroll-animate
            class="group relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 card-hover"
          >
            <div :class="[feature.bgColor]" class="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <div :class="[feature.iconColor]" v-html="feature.icon"></div>
            </div>
            <h3 class="text-lg font-bold text-dark mb-3 font-display">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Section -->
    <section id="product" class="py-20 lg:py-28 bg-gray-light relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left - Product info -->
          <div v-scroll-animate>
            <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-4">Produk Kami</span>
            <h2 class="text-3xl md:text-4xl font-bold font-display text-dark mb-6">
              Lokaku — Platform <span class="text-gradient">Multi-Tenant</span> yang Scalable
            </h2>
            <p class="text-gray-600 leading-relaxed mb-8">
              Dikembangkan oleh Muara Tech Indonesia, Lokaku dibangun dengan arsitektur multi-tenant yang memastikan setiap institusi memiliki ruang data terpisah dan aman. Tersedia dalam versi web admin dan mobile app.
            </p>

            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark mb-1">Database Terpisah per Institusi</h4>
                  <p class="text-sm text-gray-600">Setiap tenant memiliki database sendiri, menjamin isolasi dan keamanan data.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark mb-1">Web Admin + Mobile App</h4>
                  <p class="text-sm text-gray-600">Panel admin berbasis web untuk manajemen, dan mobile app (Android & iOS) untuk pengguna.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark mb-1">Geofencing & GPS Tracking</h4>
                  <p class="text-sm text-gray-600">Validasi lokasi absensi dengan radius yang dapat dikonfigurasi per lokasi.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark mb-1">Role-Based Access Control</h4>
                  <p class="text-sm text-gray-600">Sistem menu dinamis berdasarkan role, memastikan setiap pengguna hanya mengakses fitur yang relevan.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right - Visual -->
          <div v-scroll-animate class="relative">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 w-full overflow-hidden">
              <div class="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-200">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <span class="ml-2 text-xs text-gray-400">dashboard.lokaku.id</span>
              </div>
              <div class="p-5 space-y-4">
                <div class="flex items-center justify-between">
                  <div class="h-3 w-32 bg-gray-200 rounded"></div>
                  <div class="h-6 w-6 bg-gray-200 rounded-full"></div>
                </div>
                <div class="grid grid-cols-3 gap-3">
                  <div class="bg-teal-50 rounded-lg p-3">
                    <div class="h-2 w-12 bg-teal-200 rounded mb-2"></div>
                    <div class="h-4 w-8 bg-teal-300 rounded"></div>
                  </div>
                  <div class="bg-orange-50 rounded-lg p-3">
                    <div class="h-2 w-12 bg-orange-200 rounded mb-2"></div>
                    <div class="h-4 w-8 bg-orange-300 rounded"></div>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-3">
                    <div class="h-2 w-12 bg-blue-200 rounded mb-2"></div>
                    <div class="h-4 w-8 bg-blue-300 rounded"></div>
                  </div>
                </div>
                <div class="bg-white rounded-lg border border-gray-100 p-4">
                  <div class="flex items-end gap-2 h-20">
                    <div class="flex-1 bg-teal-200 rounded-t" style="height: 60%"></div>
                    <div class="flex-1 bg-teal-400 rounded-t" style="height: 85%"></div>
                    <div class="flex-1 bg-orange-200 rounded-t" style="height: 45%"></div>
                    <div class="flex-1 bg-teal-300 rounded-t" style="height: 70%"></div>
                    <div class="flex-1 bg-teal-400 rounded-t" style="height: 90%"></div>
                    <div class="flex-1 bg-orange-300 rounded-t" style="height: 55%"></div>
                    <div class="flex-1 bg-teal-200 rounded-t" style="height: 65%"></div>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-3 bg-gray-50 rounded-lg p-2.5">
                    <div class="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <div class="h-2 w-24 bg-gray-200 rounded"></div>
                    <div class="ml-auto h-5 w-14 bg-green-100 rounded-full"></div>
                  </div>
                  <div class="flex items-center gap-3 bg-gray-50 rounded-lg p-2.5">
                    <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <div class="h-2 w-20 bg-gray-200 rounded"></div>
                    <div class="ml-auto h-5 w-14 bg-amber-100 rounded-full"></div>
                  </div>
                  <div class="flex items-center gap-3 bg-gray-50 rounded-lg p-2.5">
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

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 lg:py-28 bg-gray-light">
      <div class="container mx-auto px-4 lg:px-8">
        <div v-scroll-animate class="text-center max-w-2xl mx-auto mb-12">
          <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-4">Harga</span>
          <h2 class="text-3xl md:text-4xl font-bold font-display text-dark mb-4">
            Pilih Paket yang <span class="text-gradient">Tepat</span>
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Mulai dengan modul HR dan tambahkan sesuai kebutuhan institusi Anda.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <!-- Pro Card -->
          <div v-scroll-animate class="relative">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div class="px-6 py-5 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-lg font-bold font-display text-dark">Pro</h3>
                    <p class="text-sm text-gray-500">Untuk institusi yang sedang berkembang</p>
                  </div>
                  <span class="text-2xl font-bold text-primary">{{ formatRupiah(proTotal) }}<span class="text-sm font-normal text-gray-400">/bln</span></span>
                </div>
              </div>
              <div class="p-6 space-y-1">
                <div
                  v-for="mod in proModules"
                  :key="mod.id"
                  class="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl"
                  :class="{ 'bg-primary-25': mod.checked && !mod.required, 'hover:bg-gray-50': !mod.required }"
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
                    <span class="text-sm text-gray-800" :class="{ 'font-semibold': mod.required }">{{ mod.label }}</span>
                  </div>
                  <span class="text-sm font-medium text-gray-600 whitespace-nowrap ml-2">+Rp {{ formatRupiah(mod.price) }}</span>
                </div>
              </div>

              <div class="px-6 py-4 border-t border-gray-100 bg-white">
                <a href="#contact" class="block w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-center transition-all hover:shadow-lg">
                  Ajukan Demo
                </a>
                <p class="text-xs text-gray-400 text-center mt-2">HR wajib dipilih, tambah modul lain sesuai kebutuhan</p>
              </div>
            </div>
          </div>

          <!-- Enterprise Card -->
          <div v-scroll-animate class="relative">
            <div class="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
              <span class="inline-flex items-center px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-sm">Rekomendasi</span>
            </div>
            <div class="bg-white rounded-2xl shadow-md border-2 border-primary/20 overflow-hidden pt-3">
              <div class="px-6 py-5 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-lg font-bold font-display text-dark">Enterprise</h3>
                    <p class="text-sm text-gray-500">Untuk institusi dengan kebutuhan khusus</p>
                  </div>
                  <span class="text-2xl font-bold text-primary">1.000.000<span class="text-sm font-normal text-gray-400">/bln</span></span>
                </div>
              </div>
              <div class="p-6">
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <div class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 text-green-600"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    </div>
                    <span class="text-sm text-gray-700">Semua fitur dalam paket Pro</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 text-blue-600"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    </div>
                    <span class="text-sm text-gray-700">Server terisolasi (dedicated)</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 text-violet-600"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    </div>
                    <span class="text-sm text-gray-700">Custom domain</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <div class="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 text-amber-600"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    </div>
                    <span class="text-sm text-gray-700">Prioritas support</span>
                  </li>
                </ul>
              </div>

              <div class="px-6 py-4 border-t border-gray-100 bg-gray-50">
                <a href="#contact" class="block w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl text-center transition-all hover:shadow-lg">
                  Ajukan Demo
                </a>
                <p class="text-xs text-gray-400 text-center mt-2">Harga tetap untuk semua fitur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 lg:py-28 bg-gray-light">
      <div class="container mx-auto px-4 lg:px-8">
        <div v-scroll-animate class="text-center max-w-2xl mx-auto mb-16">
          <span class="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-600 text-sm font-semibold rounded-full mb-4">Cara Kerja</span>
          <h2 class="text-3xl md:text-4xl font-bold font-display text-dark mb-4">
            Mulai dalam <span class="text-gradient-orange">3 Langkah</span> Mudah
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Setup cepat tanpa instalasi rumit. Institusi Anda bisa langsung beroperasi digital.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div v-scroll-animate class="text-center relative">
            <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
              <span class="text-2xl font-bold text-white">1</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3 font-display">Daftarkan Institusi</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Registrasi institusi Anda dan dapatkan akses ke dashboard admin dalam hitungan menit.</p>
            <!-- Connector line -->
            <div class="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-secondary/30"></div>
          </div>
          <!-- Step 2 -->
          <div v-scroll-animate class="text-center relative">
            <div class="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary/25">
              <span class="text-2xl font-bold text-white">2</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3 font-display">Konfigurasi</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Atur lokasi, jadwal, karyawan, dan kebijakan sesuai kebutuhan institusi Anda.</p>
            <!-- Connector line -->
            <div class="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-secondary/30 to-accent/30"></div>
          </div>
          <!-- Step 3 -->
          <div v-scroll-animate class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/25">
              <span class="text-2xl font-bold text-white">3</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3 font-display">Mulai Gunakan</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Undang tim Anda, download mobile app, dan mulai kelola operasional secara digital.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap / Coming Soon -->
    <section id="roadmap" class="py-20 lg:py-28 bg-gray-light relative">
      <div class="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div v-scroll-animate class="text-center max-w-2xl mx-auto mb-16">
          <span class="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 text-sm font-semibold rounded-full mb-4">Segera Hadir</span>
          <h2 class="text-3xl md:text-4xl font-bold font-display text-dark mb-4">
            Fitur yang Sedang <span class="text-gradient">Dikembangkan</span>
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Kami terus berinovasi untuk menghadirkan solusi lengkap bagi institusi pendidikan di Indonesia.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(item, index) in upcomingFeatures"
            :key="index"
            v-scroll-animate
            class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover relative overflow-hidden group"
          >
            <!-- Coming soon badge -->
            <div class="absolute top-4 right-4">
              <span class="inline-flex items-center px-2.5 py-1 bg-amber-50 text-amber-600 text-xs font-semibold rounded-full">
                Coming Soon
              </span>
            </div>
            <div class="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <div v-html="item.icon"></div>
            </div>
            <h3 class="text-lg font-bold text-dark mb-2 font-display">{{ item.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Left -->
          <div v-scroll-animate>
            <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-4">FAQ</span>
            <h2 class="text-3xl md:text-4xl font-bold font-display text-dark mb-4">
              Pertanyaan yang <span class="text-gradient">Sering Ditanyakan</span>
            </h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              Temukan jawaban untuk pertanyaan umum tentang Lokaku. Jika tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami.
            </p>
            <a href="#contact" class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Hubungi Tim Kami
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <!-- Right - Accordion -->
          <div v-scroll-animate class="space-y-3">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="border border-gray-200 rounded-xl overflow-hidden transition-all"
              :class="{ 'border-primary/30 shadow-sm': activeAccordion === index }"
            >
              <button
                @click="toggleAccordion(index)"
                class="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
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
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                class="overflow-hidden transition-all duration-300"
                :class="activeAccordion === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'"
              >
                <p class="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 lg:py-28 bg-gradient-cta relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div v-scroll-animate class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Siap Transformasi Digital Institusi Anda?
          </h2>
          <p class="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hubungi Muara Tech Indonesia dan mulai gunakan Lokaku untuk mengelola operasional institusi Anda secara efisien.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg">
              Mulai Sekarang
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 0 0 .917.918l4.462-1.494A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.512-.664-6.36-1.813l-.444-.267-3.07 1.027 1.027-3.069-.267-.444A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div v-scroll-animate class="text-center max-w-2xl mx-auto mb-16">
          <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary text-sm font-semibold rounded-full mb-4">Kontak</span>
          <h2 class="text-3xl md:text-4xl font-bold font-display text-dark mb-4">
            Hubungi <span class="text-gradient">Kami</span>
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Tertarik menggunakan Lokaku? Hubungi kami untuk konsultasi dan demo gratis.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Contact cards -->
          <div v-scroll-animate class="bg-gray-light rounded-2xl p-6 text-center card-hover border border-gray-100">
            <div class="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 class="font-bold text-dark mb-2">Email</h3>
            <a href="mailto:iqmuaratech@gmail.com" class="text-sm text-gray-600 hover:text-primary transition-colors">iqmuaratech@gmail.com</a>
          </div>

          <div v-scroll-animate class="bg-gray-light rounded-2xl p-6 text-center card-hover border border-gray-100">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <h3 class="font-bold text-dark mb-2">WhatsApp</h3>
            <a href="https://wa.me/6285733573927" target="_blank" class="text-sm text-gray-600 hover:text-green-600 transition-colors">+62 857-3357-3927</a>
          </div>

          <div v-scroll-animate class="bg-gray-light rounded-2xl p-6 text-center card-hover border border-gray-100">
            <div class="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-secondary-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 class="font-bold text-dark mb-2">Lokasi</h3>
            <p class="text-sm text-gray-600">Hunian Akmal Mandiri E68, Boteng, Kec. Menganti, Kabupaten Gresik</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-16">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-4">
              <span class="text-xl font-bold font-display">Muara<span class="text-primary-300">Tech</span></span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk institusi pendidikan melalui produk unggulan kami, Lokaku.
            </p>
            <div class="flex items-center gap-3">
              <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h4 class="font-bold font-display mb-4">Lokaku</h4>
            <ul class="space-y-3">
              <li><a href="#features" class="text-sm text-gray-400 hover:text-white transition-colors">Fitur</a></li>
              <li><a href="#roadmap" class="text-sm text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#faq" class="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Dokumentasi</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold font-display mb-4">Perusahaan</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#contact" class="text-sm text-gray-400 hover:text-white transition-colors">Kontak</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom -->
        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-400">
            &copy; {{ currentYear }} Muara Tech Indonesia. All rights reserved.
          </p>
          <p class="text-sm text-gray-500">
            Dibuat dengan dedikasi untuk pendidikan Indonesia.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
