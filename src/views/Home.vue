<script setup>
import SiteHeader from "@/components/layout/SiteHeader.vue";
import SiteFooter from "@/components/layout/SiteFooter.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";
import ProductSection from "@/components/sections/ProductSection.vue";
import PricelistSection from "@/components/sections/PricelistSection.vue";
import PricingSection from "@/components/sections/PricingSection.vue";
import HowItWorksSection from "@/components/sections/HowItWorksSection.vue";
import RoadmapSection from "@/components/sections/RoadmapSection.vue";
import FaqSection from "@/components/sections/FaqSection.vue";
import CtaSection from "@/components/sections/CtaSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
</script>

<template>
  <div class="overflow-x-hidden">
    <SiteHeader />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <ProductSection />
    <PricelistSection />
    <PricingSection />
    <HowItWorksSection />
    <RoadmapSection />
    <FaqSection />
    <CtaSection />
    <ContactSection />
    <SiteFooter />
  </div>
</template>
