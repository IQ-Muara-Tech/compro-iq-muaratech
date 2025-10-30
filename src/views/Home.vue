<script setup>
import { ref, useAttrs } from "vue";

import DefaultLayout from "../layouts/DefaultLayout.vue";

const isActive = ref(false);
const navMenu = ref(false);
const hideAccordion1 = ref(true);
const hideAccordion2 = ref(true);
const hideAccordion3 = ref(true);
const attributes = useAttrs();

const formEmail = defineModel({
  // type: Object,
  required: false,
  default: () => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  }),
});

function toggleMenu() {
  isActive.value = !isActive.value;
  navMenu.value = !navMenu.value;
}

function clickAccordion1() {
  hideAccordion1.value = !hideAccordion1.value;
  hideAccordion2.value = true;
  hideAccordion3.value = true;
}

function clickAccordion2() {
  hideAccordion2.value = !hideAccordion2.value;
  hideAccordion1.value = true;
  hideAccordion3.value = true;
}

function clickAccordion3() {
  hideAccordion3.value = !hideAccordion3.value;
  hideAccordion1.value = true;
  hideAccordion2.value = true;
}

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

function submitSendMessage() {
  const subject = encodeURIComponent(`Pesan dari ${formEmail.firstName}`);
  const body = encodeURIComponent(
    `Email: ${formEmail.email}\n\nPesan:\n${formEmail.message}`
  );
  const mailto = `mailto:project.saya99@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
}
</script>

<template>
  <!-- <DefaultLayout>
    <template #default> <h1>Home</h1> </template>
  </DefaultLayout> -->
  <div>
    <!-- Header Start -->
    <header
      class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
    >
      <div class="container mx-auto">
        <div class="flex items-center justify-between relative">
          <div class="px-4">
            <img
              src="/src/assets/images/logo-text-black.png"
              alt="logo-text"
              width="180"
              class="block py-2"
            />
          </div>
          <div class="flex items-center px-4">
            <button
              id="hamburger"
              type="button"
              class="block absolute right-4 lg:hidden hover:cursor-pointer"
              :class="{ hamburgerActive: isActive }"
              @click="toggleMenu"
            >
              <span
                class="hamburger-line transition duration-300 ease-in-out origin-top-left"
              ></span>
              <span
                class="hamburger-line transition duration-300 ease-in-out"
              ></span>
              <span
                class="hamburger-line transition duration-300 ease-in-out origin-top-left"
              ></span>
            </button>

            <nav
              id="nav-menu"
              class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              :class="{ hidden: !navMenu }"
            >
              <ul class="block lg:flex">
                <li class="group">
                  <a
                    href="#home"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >Beranda</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#services"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >Layanan Kami</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#about"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >Tentang Saya</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#portofolio"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >Portofolio</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#contact"
                    class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >Hubungi Kami</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->

    <!-- Hero Section Start -->
    <section
      id="home"
      class="pt-36 pb-40 relative bg-[url(/src/assets/images/bg-home.png)] bg-no-repeat bg-cover"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full self-center px-4 lg:w-1/2">
            <h1
              v-scroll-animate="'animate-fade-up'"
              class="text-base font-semibold text-slate-900 md:text-xl"
            >
              Selamat Datang 👋🏻, di
              <span
                class="block font-bold text-primary text-4xl mt-1 lg:text-5xl"
                >IQ Muara Technology</span
              >
            </h1>
            <h2
              v-scroll-animate="'animate-fade-up'"
              class="font-medium text-slate-500 text-lg mb-5 lg:text-2xl"
            >
              Jasa Pembuatan Web & Mobile Apps
            </h2>
            <p
              v-scroll-animate="'animate-fade-up'"
              class="font-medium text-slate-400 mb-10 leading-relaxed"
            >
              Kami berfokus pada layanan pembuatan website, aplikasi, dan desain
              grafis untuk berbagai kebutuhan digital. Dengan solusi inovatif
              dan tim kreatif yang berpengalaman, kami membantu mewujudkan ide
              anda menjadi produk teknologi yang fungsional dan menarik
            </p>
            <div class="mt-10">
              <a href="#contact" type="button">
                <button
                  class="py-4 px-8 items-center justify-center rounded-full bg-primary hover:bg-[#112a57] hover:cursor-pointer hover:-translate-y-2 hover:scale-105 transition duration-500 hover:shadow-xl text-white"
                >
                  Hubungi Kami
                </button>
              </a>
            </div>
          </div>

          <div class="w-full self-end px-4 lg:w-1/2">
            <div class="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src="/src/assets/images/home-phone.png"
                alt="img-home-phone"
                class="max-w-full mx-auto"
                width="600"
                height="600"
              />
              <!-- <span
                class="absolute bottom-0 -z-10 left-1/2 -right-0 -translate-x-1/2 sm:scale-130 lg:scale-110 xl:scale-155 md:-translate-x-1/2 xl:-translate-x-1/5"
              >
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#315BA6"
                    d="M56.7,-51.8C65.3,-34.5,58.4,-11.4,53.4,12.9C48.5,37.2,45.5,62.7,31.4,72.2C17.3,81.6,-7.9,75.1,-22,62C-36.1,48.9,-39.2,29.3,-46.6,7.5C-54.1,-14.3,-66,-38.2,-59,-55.2C-52,-72.1,-26,-82,-1,-81.2C24.1,-80.5,48.2,-69,56.7,-51.8Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- Services Section Start -->
    <section id="services" class="pt-20 pb-32">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-4">
            <h4
              v-scroll-animate="'animate-fade-up'"
              class="font-semibold uppercase text-sm text-primary mb-3 text-center"
            >
              Layanan kami
            </h4>
            <h2
              v-scroll-animate="'animate-fade-up'"
              class="mb-20 font-bold text-2xl font-sans text-center text-slate-800"
            >
              Industri IT yang kami <span class="text-primary">Tawarkan</span>
            </h2>
            <div
              v-scroll-animate="'animate-fade-up'"
              class="grid lg:grid-cols-3 md:grid-cols-1 gap-0"
            >
              <!-- Web Development -->
              <div
                class="rounded-2xl flex justify-start items-start p-5 hover:shadow-md hover:-translate-y-2 hover:scale-105 hover:border hover:border-primary transition duration-500"
              >
                <div class="pr-6 border-r border-primary max-[480px]:hidden">
                  <h6
                    class="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-primary 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50"
                  >
                    01
                  </h6>
                </div>
                <div class="pl-6 border-l border-l-slate-200">
                  <div class="flex">
                    <img
                      src="/src/assets/images/web-dev.png"
                      alt="service-2"
                      width="50"
                    />
                  </div>
                  <h4 class="text-[20px] pt-6 font-bold text-slate-800">
                    Web Development
                  </h4>
                  <p class="pt-2 text-slate-500 text-[15px] leading-[28px]">
                    Kami membangun website yang bukan hanya menarik dilihat,
                    tapi juga cepat, responsif, dan mudah digunakan. Dari
                    Company Profile hingga Sistem Berbasis Web, kami bantu
                    wujudkan platform digital yang siap mendukung perkembangan
                    bisnismu.
                  </p>
                </div>
              </div>
              <!-- Mobile Development -->
              <div
                class="rounded-2xl flex justify-start items-start p-5 hover:shadow-md hover:-translate-y-2 hover:scale-105 hover:border hover:border-primary transition duration-500"
              >
                <div class="pr-6 border-r border-primary max-[480px]:hidden">
                  <h6
                    class="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-primary 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50"
                  >
                    02
                  </h6>
                </div>
                <div class="pl-6 border-l border-l-slate-200">
                  <div class="flex">
                    <img
                      src="/src/assets/images/mobile-dev.png"
                      alt="service-2"
                      width="50"
                    />
                  </div>
                  <h4 class="text-[20px] pt-6 font-bold text-slate-800">
                    Mobile Development
                  </h4>
                  <p class="pt-2 text-slate-500 text-[15px] leading-[28px]">
                    Kami mengembangkan aplikasi mobile yang responsif dan
                    memiliki performa optimal di berbagai perangkat. Meliputi
                    sistem Point of Sale (PoS), aplikasi Absensi, dan aplikasi
                    HR, dan masih banyak yang lainnya untuk mendukung
                    operasional yang lebih efisien dan mudah diakses kapan saja.
                  </p>
                </div>
              </div>
              <!-- Graphics Design -->
              <div
                class="rounded-2xl flex justify-start items-start p-5 hover:shadow-md hover:-translate-y-2 hover:scale-105 hover:border hover:border-primary transition duration-500"
              >
                <div class="pr-6 border-r border-primary max-[480px]:hidden">
                  <h6
                    class="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-primary 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50"
                  >
                    03
                  </h6>
                </div>
                <div class="pl-6 border-l border-l-slate-200">
                  <div class="flex">
                    <img
                      src="/src/assets/images/graphics-design.png"
                      alt="service-1"
                      width="50"
                    />
                  </div>
                  <h4 class="text-[20px] pt-6 font-bold text-slate-800">
                    Graphics design
                  </h4>
                  <p class="pt-2 text-slate-500 text-[15px] leading-[28px]">
                    Kami menyediakan layanan desain visual yang mencakup
                    pembuatan logo, identitas brand, materi promosi, dan desain
                    media digital. Setiap desain dibuat dengan tampilan modern
                    dan fresh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Service Section End -->

    <div
      class="border-b border-slate-100 mx-auto items-center justify-center max-w-11/12"
    ></div>

    <!-- About Section Start -->
    <section id="about" class="pt-20 pb-32">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div
            v-scroll-animate="'animate-fade-up'"
            class="w-full md:w-1/2 xl:w-1/3 px-4 mb-10"
          >
            <div
              class="w-full h-90 border border-slate-300 bg-slate-50 rounded-2xl flex items-center justify-center"
            >
              <div class="text-slate-400">Masukkan foto disini</div>
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/2 px-4">
            <h4
              v-scroll-animate="'animate-fade-up'"
              class="font-semibold text-sm uppercase text-primary mb-3"
            >
              Tentang Kami
            </h4>
            <h2
              v-scroll-animate="'animate-fade-up'"
              class="mb-3 font-bold text-2xl text-slate-800"
            >
              Membangun Solusi Digital Bagi Bisnis Anda
            </h2>
            <p
              v-scroll-animate="'animate-fade-up'"
              class="font-normal text-base text-slate-500"
            >
              IQ Muara Technology berfokus pada pengembangan solusi digital yang
              membantu bisnis beradaptasi di era modern.Kami menyediakan layanan
              pembuatan website, aplikasi mobile, serta desain visual yang
              dikembangkan untuk mendukung kinerja digital bisnis anda.
            </p>
            <div
              v-scroll-animate="'animate-fade-up'"
              class="flex flex-wrap mt-5"
            >
              <div class="flex flex-col items-start justify-start">
                <div
                  class="rounded-full w-18 h-18 bg-green-100 flex items-center justify-center"
                >
                  <img
                    src="/src/assets/images/flexibility.png"
                    alt=""
                    srcset=""
                    width="40"
                  />
                </div>
                <div class="mt-3">
                  <h1 class="text-md font-bold text-slate-800">Inovation</h1>
                  <p class="text-[12px] max-w-40 text-slate-500 mt-1">
                    Selalu menghadirkan ide dan teknologi baru untuk menciptakan
                    solusi digital yang relevan dan berdampak
                  </p>
                </div>
              </div>
              <div class="ml-5">
                <div
                  class="rounded-full w-18 h-18 bg-amber-100 flex items-center justify-center"
                >
                  <img
                    src="/src/assets/images/responsibility.png"
                    alt=""
                    srcset=""
                    width="40"
                  />
                </div>
                <div class="mt-3">
                  <h1 class="text-md font-bold text-slate-800">Reliability</h1>
                  <p class="text-[12px] max-w-40 text-slate-500 mt-1">
                    Menjaga kepercayaan klien dengan hasil kerja yang konsisten,
                    tepat waktu, dan dapat diandalkan
                  </p>
                </div>
              </div>
              <div class="ml-5">
                <div
                  class="rounded-full w-18 h-18 bg-pink-100 flex items-center justify-center"
                >
                  <img
                    src="/src/assets/images/collaboration.png"
                    alt=""
                    srcset=""
                    width="40"
                  />
                </div>
                <div class="mt-3">
                  <h1 class="text-md font-bold text-slate-800">
                    Collaboration
                  </h1>
                  <p class="text-[12px] max-w-40 text-slate-500 mt-1">
                    Membangun kerja sama yang terbuka dan produktif untuk
                    mencapai hasil terbaik bersama
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section End -->

    <!-- Portofolio Section Start -->
    <section id="portofolio" class="mt-20 pb-32 bg-[#e1f8ff] relative">
      <div class="relative pt-[60px]">
        <img
          src="/src/assets/images/bg-shape.png"
          alt="bg-shape"
          class="absolute top-0 left-0 right-0 w-full bg-center bg-cover"
        />

        <div class="container mx-auto lg:mt-30 mt-10">
          <div class="flex flex-wrap xl:px-20">
            <div class="w-full text-center">
              <h4
                v-scroll-animate="'animate-fade-up'"
                class="font-semibold uppercase text-sm text-primary mb-3"
              >
                Portofolio
              </h4>
              <h2
                v-scroll-animate="'animate-fade-up'"
                class="mb-20 font-bold text-2xl font-sans text-slate-800"
              >
                <span class="text-primary">Portofolio</span> Kami
              </h2>
            </div>

            <!-- Grid Portofolio -->
            <div
              class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5"
            >
              <div
                v-for="e in 10"
                :key="e"
                v-scroll-animate="'animate-fade-up'"
                class="shadow-md rounded-2xl bg-white hover:shadow-md hover:-translate-y-2 hover:scale-105 hover:border hover:border-primary transition duration-500"
              >
                <div class="w-full">
                  <img
                    src="/src/assets/images/img-2.jpg"
                    alt=""
                    class="rounded-2xl rounded-b-none w-full h-60 xl:h-80 object-cover"
                  />
                  <div class="p-5">
                    <h1 class="text-xl font-bold text-slate-800 pb-2">
                      Lorem ipsum
                    </h1>
                    <p class="text-sm text-slate-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nesciunt, accusamus earum perferendis veniam odit ab
                      rem in consectetur, necessitatibus omnis laborum adipisci
                      sequi est facilis reprehenderit? Dicta, in dignissimos?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Grid -->
          </div>
        </div>
      </div>
    </section>

    <!-- Portofolio Section End -->

    <!-- FAQS Section Start -->
    <section id="FAQs" class="pt-20 pb-20">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full px-4">
            <h4
              v-scroll-animate="'animate-fade-up'"
              class="font-semibold uppercase text-sm text-primary mb-3 text-center"
            >
              FAQs
            </h4>
            <h2
              v-scroll-animate="'animate-fade-up'"
              class="mb-5 font-bold text-2xl font-sans text-center text-slate-800"
            >
              Pertanyaan yang <span class="text-primary">sering</span> diajukan
            </h2>
          </div>
          <div class="w-full lg:mx-50 mx-5">
            <div
              v-scroll-animate="'animate-fade-up'"
              id="accordion-collapse"
              data-accordion="collapse"
              class="md:gap-[30px] mt-14 bg-white rounded-xl border border-slate-200"
            >
              <div class="hs-accordion-group divide-y divide-gray-200">
                <div class="relative overflow-hidden">
                  <h2
                    class="text-base font-semibold"
                    id="accordion-collapse-heading-1"
                  >
                    <button
                      type="button"
                      class="flex justify-between items-center px-5 py-4 w-full font-semibold text-lg text-start text-dark"
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="false"
                      aria-controls="accordion-collapse-body-1"
                      @click="clickAccordion1"
                    >
                      <span>Berapa harga biaya pembuatan aplikasi?</span>
                      <svg
                        data-accordion-icon=""
                        class="size-4 shrink-0 transition duration-300 rotate-0 ease-in-out"
                        :class="{
                          'transition duration-300 rotate-180 ease-in-out':
                            !hideAccordion1,
                        }"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-1"
                    aria-labelledby="accordion-collapse-heading-1"
                    :class="{ hidden: hideAccordion1 }"
                  >
                    <div class="px-5 pb-5">
                      <p class="text-muted text-base font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde itaque dolor eaque doloremque rem eius neque,
                        voluptate eligendi blanditiis consequuntur similique
                        minus vitae placeat quo libero quidem earum saepe
                        maiores?
                      </p>
                    </div>
                  </div>
                </div>

                <div class="relative overflow-hidden">
                  <h2
                    class="text-base font-semibold"
                    id="accordion-collapse-heading-2"
                  >
                    <button
                      type="button"
                      class="flex justify-between items-center px-5 py-4 w-full font-semibold text-lg text-start text-dark"
                      data-accordion-target="#accordion-collapse-body-2"
                      aria-expanded="false"
                      aria-controls="accordion-collapse-body-2"
                      @click="clickAccordion2"
                    >
                      <span>Berapa lama pengerjaan pembuatan aplikasi?</span>
                      <svg
                        data-accordion-icon=""
                        class="size-4 shrink-0 transition duration-300 rotate-0 ease-in-out"
                        :class="{
                          'transition duration-300 rotate-180 ease-in-out':
                            !hideAccordion2,
                        }"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-1"
                    aria-labelledby="accordion-collapse-heading-1"
                    :class="{ hidden: hideAccordion2 }"
                  >
                    <div class="px-5 pb-5">
                      <p class="text-muted text-base font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex tempora quaerat itaque reiciendis exercitationem
                        atque voluptatum. Et dolorem aspernatur, quos ipsum
                        cupiditate expedita modi odit numquam, labore quis
                        molestias quibusdam.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="relative overflow-hidden">
                  <h2
                    class="text-base font-semibold"
                    id="accordion-collapse-heading-3"
                  >
                    <button
                      type="button"
                      class="flex justify-between items-center px-5 py-4 w-full font-semibold text-lg text-start text-dark"
                      data-accordion-target="#accordion-collapse-body-3"
                      aria-expanded="false"
                      aria-controls="accordion-collapse-body-3"
                      @click="clickAccordion3"
                    >
                      <span
                        >Benefit apa saja yang diperoleh saat menggunakan jasa
                        muara tech?</span
                      >
                      <svg
                        data-accordion-icon=""
                        class="size-4 shrink-0 transition duration-300 rotate-0 ease-in-out"
                        :class="{
                          'transition duration-300 rotate-180 ease-in-out':
                            !hideAccordion3,
                        }"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-3"
                    aria-labelledby="accordion-collapse-heading-3"
                    :class="{ hidden: hideAccordion3 }"
                  >
                    <div class="px-5 pb-5">
                      <p class="text-muted text-base font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde totam ipsum maxime repudiandae autem, omnis,
                        accusamus recusandae ipsam velit obcaecati rem assumenda
                        cumque, cupiditate consectetur deleniti minus in
                        asperiores? Quos?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- FAQS Section End -->

    <!-- Contact Section Start -->
    <section id="contact" class="pt-20 pb-20 bg-slate-50">
      <div class="container mx-auto">
        <div class="flex flex-wrap lg:mx-5 2xl:mx-35">
          <div class="w-full lg:w-1/2 px-4">
            <h4
              v-scroll-animate="'animate-fade-up'"
              class="font-semibold text-sm uppercase text-primary mb-3"
            >
              Hubungi Kami
            </h4>
            <h2
              v-scroll-animate="'animate-fade-up'"
              class="mb-3 font-bold text-2xl text-slate-800"
            >
              Kami terbuka untuk berbicara.
            </h2>
            <div
              v-scroll-animate="'animate-fade-up'"
              class="flex flex-wrap items-center justify-start mt-10"
            >
              <div
                class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="map-pin"
                  class="lucide lucide-map-pin text-2xl text-primary"
                >
                  <path
                    d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-slate-500 font-base text-lg">
                  Menganti, Gresik, Jawa Timur, Indonesia
                </p>
              </div>
            </div>
            <div
              v-scroll-animate="'animate-fade-up'"
              class="flex flex-wrap items-center justify-start mt-10"
            >
              <div
                class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="mail"
                  class="lucide lucide-mail text-2xl text-primary"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-slate-500 font-base text-lg">
                  iqmuaratech@gmail.com
                </p>
              </div>
            </div>
            <div
              v-scroll-animate="'animate-fade-up'"
              class="flex flex-wrap items-center justify-start mt-10"
            >
              <div
                class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="smartphone"
                  class="lucide lucide-smartphone text-2xl text-primary"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-slate-500 font-base text-lg">+6285733573927</p>
              </div>
            </div>
          </div>
          <div
            v-scroll-animate="'animate-fade-up'"
            class="w-full lg:w-1/2 px-4 mt-10 lg:mt-0 relative h-64 sm:h-80 lg:h-96"
          >
            <iframe
              class="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d989.3745621494176!2d112.5590999327614!3d-7.269815743101144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1761047731484!5m2!1sid!2sid"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section End -->

    <footer id="footer" class="bg-primary">
      <div class="container mx-auto py-5">
        <div class="flex justify-between items-center">
          <p class="text-base text-white">2025© IQ Muara Tech</p>

          <div>
            <a
              class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-white hover:bg-primary transition-all duration-300"
              href="#"
            >
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                ></path>
              </svg>
            </a>
            <a
              class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-white hover:bg-primary transition-all duration-300"
              href="#"
            >
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                ></path>
              </svg>
            </a>
            <a
              class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-white hover:bg-primary transition-all duration-300"
              href="#"
            >
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                ></path>
              </svg>
            </a>
            <a
              class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-white hover:bg-primary transition-all duration-300"
              href="#"
            >
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
            <a
              class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-white hover:bg-primary transition-all duration-300"
              href="#"
            >
              <svg
                class="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>

<!-- <div class="w-full shadow-lg bg-white p-10 rounded-2xl">
      <form action="">
        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              for="firstName"
              class="block text-sm/normal font-semibold text-slate-800 mb-2"
              >First Name</label
            >
            <input
              type="text"
              class="block w-full text-sm rounded-md py-3 px-4 border-slate-200 focus:border-primary focus:ring-transparent"
              placeholder="Enter First name"
              v-model="formEmail.firstName"
            />
          </div>
          <div>
            <label
              for="lastName"
              class="block text-sm/normal font-semibold text-slate-800 mb-2"
              >Last Name</label
            >
            <input
              type="text"
              class="block w-full text-sm rounded-md py-3 px-4 border-slate-200 focus:border-primary focus:ring-transparent"
              placeholder="Enter Last name"
              v-model="formEmail.lastName"
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-sm/normal font-semibold text-slate-800 mb-2"
              >Email Address</label
            >
            <input
              type="text"
              class="block w-full text-sm rounded-md py-3 px-4 border-slate-200 focus:border-primary focus:ring-transparent"
              placeholder="Enter Email Address"
              v-model="formEmail.email"
            />
          </div>
          <div>
            <label
              for="phone"
              class="block text-sm/normal font-semibold text-slate-800 mb-2"
              >Phone Number</label
            >
            <input
              type="text"
              class="block w-full text-sm rounded-md py-3 px-4 border-slate-200 focus:border-primary focus:ring-transparent"
              placeholder="Enter Phone Number"
              v-model="formEmail.phone"
            />
          </div>
        </div>
        <div class="sm:col-span-2 mt-6">
          <div class="mb-4">
            <label
              for="message"
              class="block text-sm/normal font-semibold text-black mb-2"
              >Messages</label
            >
            <textarea
              class="block w-full text-sm rounded-md py-3 px-4 border-slate-200 focus:border-primary focus:ring-transparent"
              rows="4"
              placeholder="Type messages..."
              required=""
              v-model="formEmail.message"
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          class="flex items-center justify-center w-full rounded-md bg-primary hover:bg-[#112a57] hover:cursor-pointer hover:-translate-y-2 hover:scale-105 transition duration-500 hover:shadow-xl py-3 px-8 text-white"
          v-on:click.prevent="submitSendMessage"
        >
          Send Message &nbsp;
          <svg
            width="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </form>
    </div> -->
