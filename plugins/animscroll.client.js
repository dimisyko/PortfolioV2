import Vue from "vue";

Vue.directive("animate-parallax", {

  bind: (el, bind) => {

    const parallaxScroll = function () {
      const pos = el.getBoundingClientRect().top - window.innerHeight / bind.value;
      const data = el.getAttribute("data-v");
      const newPos = data * pos;
      if (pos > window.innerHeight || -pos > window.innerHeight) return;

      bind.arg == "translateX" ? el.style.transform = "translate3d(" + newPos + "px, 0px, 0px)" : el.style.transform = "translate3d(0px," + newPos + "px, 0px)"
    };

    function raf(){
      parallaxScroll()
      if (window.innerWidth >= 1024) {
        requestAnimationFrame(raf)
      } else {
       cancelAnimationFrame(raf)
       el.removeAttribute('style')
      }
    }
    raf()
    window.addEventListener("resize", raf);
  },
});
