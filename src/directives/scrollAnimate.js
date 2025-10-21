export default {
  mounted(el, binding) {
    const animation = binding.value || "animate-fade-up";

    // Tambahkan state awal (belum kelihatan)
    el.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700",
      "ease-out"
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Saat elemen masuk viewport → jalankan animasi
          el.classList.remove("opacity-0", "translate-y-8");
          el.classList.add(animation);
        } else {
          // Saat elemen keluar viewport → reset agar bisa animasi lagi nanti
          el.classList.remove(animation);
          el.classList.add("opacity-0", "translate-y-8");
        }
      },
      {
        threshold: 0.2, // mulai animasi saat 20% bagian elemen kelihatan
      }
    );

    observer.observe(el);
  },

  // mounted(el, binding) {
  //   const animation = binding.value || "animate-fade-up";

  //   el.classList.add(
  //     "opacity-0",
  //     "translate-y-8",
  //     "transition-all",
  //     "duration-700",
  //     "ease-out"
  //   );

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         el.classList.remove("opacity-0", "translate-y-8");
  //         el.classList.add(animation);
  //         observer.unobserve(el);
  //       }
  //     },
  //     { threshold: 0.2 }
  //   );

  //   observer.observe(el);
  // },
};
