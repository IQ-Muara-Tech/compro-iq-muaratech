<script setup>
import { contact } from "@/config/site";
</script>

<template>
  <section id="cta" class="py-20 lg:py-28 bg-gradient-cta relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
    <div class="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <div v-scroll-animate class="text-center max-w-3xl mx-auto">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6 tracking-tight"
        >
          Siap Transformasi Digital Institusi Anda?
        </h2>
        <p class="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Hubungi Muara Tech Indonesia dan mulai gunakan Lokaku untuk mengelola operasional
          institusi Anda secara efisien.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            Mulai Sekarang
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            :href="contact.whatsappUrl"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              />
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 0 0 .917.918l4.462-1.494A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.512-.664-6.36-1.813l-.444-.267-3.07 1.027 1.027-3.069-.267-.444A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
              />
            </svg>
            Chat WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
