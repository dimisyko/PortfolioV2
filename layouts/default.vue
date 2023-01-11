<template>
  <div class="nuxtContent">
    <Header />
    <div class="indicator" ref="indicator"></div>
    <div class="bg-transition">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          class="bg"
          fill="#F92E2D"
          d="M 0 100 Q 50 100 100 100 V 0 Q 50 0 0 0 Z"
        />
      </svg>
    </div>
    <Nuxt />
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  mounted() {
    this.animLoad();
    this.indicator();
  },
  methods: {
    indicator() {
      const heightDoc =
        window.pageYOffset /
        (document.documentElement.scrollHeight - window.innerHeight);
      this.$refs.indicator.style.transform = "scaleY(" + heightDoc + ")";
      requestAnimationFrame(this.indicator);
    },
    animLoad() {
      const tl = gsap.timeline();
      tl.set(".bg", {
        attr: { d: "M 0 100 Q 50 100 100 100 V 0 Q 50 0 0 0 Z" },
      });
      tl.to(".bg", {
        attr: { d: "M 0 80 Q 50 0 100 80 V 0 Q 50 0 0 0 Z" },
        duration: 0.7,
        ease: "power4.in",
      });
      tl.to(".bg", {
        attr: { d: "M 0 0 Q 50 0 100 0 V 0 Q 50 0 0 0 Z" },
        duration: 0.4,
        ease: "power2",
      });
      tl.set(".bg-transition", {
        zIndex: 0,
      });
    },
  },
};
</script>

<style lang="scss">
.indicator {
  position: fixed;
  right: 0;
  height: 100vh;
  width: 5px;
  background-color: #f92e2d;
  z-index: 1;
  transform: scaleY(0);
}
</style>