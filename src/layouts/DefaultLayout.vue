<script setup>
import { onMounted } from "vue";
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
</script>

<template>
  <!-- <Header /> -->
  <slot name="default" />
  <Footer />
</template>

<style scoped></style>
