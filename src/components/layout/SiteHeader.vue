<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { navLinks, scrollSpySections } from "@/config/site";

const isActive = ref(false);
const navMenu = ref(false);
const isScrolled = ref(false);
const activeSection = ref("home");
const headerEl = ref(null);

function toggleMenu() {
  isActive.value = !isActive.value;
  navMenu.value = !navMenu.value;
}

function closeMenu() {
  isActive.value = false;
  navMenu.value = false;
}

function handleScroll() {
  if (window.pageYOffset > 50) {
    headerEl.value?.classList.add("navbar-fixed");
    isScrolled.value = true;
  } else {
    headerEl.value?.classList.remove("navbar-fixed");
    isScrolled.value = false;
  }

  const scrollPos = window.pageYOffset + 120;
  for (let i = scrollSpySections.length - 1; i >= 0; i--) {
    const section = document.getElementById(scrollSpySections[i]);
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = scrollSpySections[i];
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
</script>

<template>
  <header ref="headerEl" class="absolute top-0 left-0 w-full flex items-center z-50">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-1.5">
          <span
            class="text-xl font-bold font-display transition-colors duration-400"
            :class="isScrolled ? 'text-dark' : 'text-white'"
          >
            Muara<span :class="isScrolled ? 'text-gradient' : 'text-secondary-300'">Tech</span>
          </span>
          <span
            class="text-sm font-medium transition-colors duration-400"
            :class="isScrolled ? 'text-gray-500' : 'text-white/70'"
          >
            Indonesia
          </span>
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
            <li v-for="link in navLinks" :key="link.id">
              <a
                :href="`#${link.id}`"
                @click="closeMenu"
                class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors"
                :class="
                  isScrolled
                    ? activeSection === link.id
                      ? 'text-primary font-semibold'
                      : 'text-gray-700 hover:text-primary hover:bg-primary-25 lg:hover:bg-transparent'
                    : activeSection === link.id
                      ? 'text-primary font-semibold lg:text-white'
                      : 'text-gray-700 hover:text-primary hover:bg-primary-25 lg:text-white/70 lg:hover:text-white lg:hover:bg-white/10'
                "
              >
                {{ link.label }}
              </a>
            </li>
            <li class="mt-3 lg:mt-0 lg:ml-4">
              <a
                href="#contact"
                @click="closeMenu"
                class="block py-2.5 px-5 text-sm font-semibold rounded-full transition-all hover:shadow-lg text-center"
                :class="
                  isScrolled
                    ? 'text-white bg-primary hover:bg-primary-dark hover:shadow-primary/25'
                    : 'text-primary-dark bg-white hover:bg-gray-100 hover:shadow-white/25'
                "
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
