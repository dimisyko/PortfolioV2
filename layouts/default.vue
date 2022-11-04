<template>
<div>
     <div class="bg-transition">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path class="bg" fill="#F92E2D" d="M 0 100 Q 50 100 100 100 V 0 Q 50 0 0 0 Z" />
      </svg>
     </div>
    <Nuxt/>
</div>
</template>
<script>
import gsap from "gsap"
export default {
  mounted(){
    this.animLoad()
  },
    methods:{
    animLoad(){
      const tl = gsap.timeline()
       tl.set(".bg", {
        attr: { d: 'M 0 100 Q 50 100 100 100 V 0 Q 50 0 0 0 Z' },
    })
    tl.to(".bg",{
        attr : {'d' : "M 0 80 Q 50 0 100 80 V 0 Q 50 0 0 0 Z"},
        duration: 0.7,
        ease: 'power4.in',
    })
    tl.to(".bg",{
        attr : {'d' : "M 0 0 Q 50 0 100 0 V 0 Q 50 0 0 0 Z"},
        duration: 0.4,
        ease: 'power2',
    })
    tl.set(".bg-transition",{
      zIndex : 0
  })
    }
  }
}
</script>