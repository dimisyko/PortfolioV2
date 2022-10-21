<template>
  <div class="overflow-x">
    <Header />
      <Indicator/>
      <section class="project w-90">
        <div class="project__container">
          <h2 class="project__title">{{works.projectsPage[project_nbr].titleProject}}</h2>
        <nuxt-link class="project__link" :to="`project/${works.projectsPage[project_nbr].url}`">
          <picture class="project__img">
            <nuxt-img :src="works.projectsPage[project_nbr].imgProject"/>
          </picture>    
        </nuxt-link>
        <div class="project__nbr">0{{project_nbr + 1}} / 0{{works.projectsPage.length}}</div>
        <div class="scroll-down">Défiler</div>
        </div>
      </section>
  </div>
</template>

<script>
import works from "@/data/data.json";
import gsap from "gsap";
export default {
  name: "Works",
  data(){
    return{
      project_nbr : 0,
      touchMove : 0,
      touchStart : 0,
      boo : true,
      tlGsap : gsap.timeline()
    }
  },
  asyncData({ params }) {
    return { works };
  },
  head() {
    return {
      title: "Travaux - Portfolio",
    };
  },
  mounted(){
    window.addEventListener('wheel', this.wheelScroll)
    document.addEventListener('touchstart', (e) =>{
        this.touchStart = e.targetTouches[0].clientY
        document.addEventListener('touchmove', this.touchMoveScreen)
    })
  },
  beforeDestroy(){
 window.removeEventListener('wheel', this.wheelScroll)
  },
  computed :{
    lengthProject(){
      return works.projectsPage.length - 1
    }
  },
  methods:{
    nextProject(){
    this.project_nbr < this.lengthProject ? this.project_nbr++ : this.project_nbr = 0
    },
    prevProject(){
    this.project_nbr > 0 ? this.project_nbr-- : this.project_nbr = this.lengthProject
    },
    touchMoveScreen(e){
        const touchMove = e.targetTouches[0].clientY
        this.touchMove = this.touchStart - touchMove
        this.wheelScroll(e)
        this.touchStart = touchMove
    },
    animProject(){
      this.tlGsap.to('.project__title', {
        opacity : 0,
        y : "-100%",
        duration : 0.7
      })
      this.tlGsap.to('.project__link', {
        y : "-100%",
        duration : 2,
        ease : "Expo.easeInOut"
      })
      this.tlGsap.add(() => this.nextProject())
       this.tlGsap.set('.project__title, .project__link', {
        y : "100%"
      })
      this.tlGsap.to('.project__link', {
        y : "0%",
        duration : 2,
        ease :"Expo.easeInOut"
      })
       this.tlGsap.to('.project__title', {
        opacity : 1,
        y : "0%",
        duration : 0.7
      })
     
    },
    boolean(){
        this.boo = false
        this.animProject()
        setTimeout(() => {
          this.boo = true 
        }, 1000);
    },
    wheelScroll(e){
    if(this.boo){
      const direction = e.deltaY || this.touchMove
      if(direction > 10){
        this.boolean()
      }
    }
    }
  }
};
</script>

<style lang="scss">
.project {
  position: relative;
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  @extend %centerFlex;
&__container{
    @include tablet{
    width: 100%;
    height: 100%;
    }
}
&__link{
  width: 100%;
  height: 85vw;
 margin: 2rem 0;
 @include phone{
   height: 65vw; 
 }
  @include tablet{
    overflow: hidden;
    @include centerObs(absolute, 50%, 50%, -50%, -50%);
    width: 35%;
    height: 35vw;
  }

}
 &__img{
  position: relative;
  height: 100%;
  transition: 0.5s;
    &:hover{
      transform: scale(1.1);
    }

  &::after{
  @include after(0, 0);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.253);
  z-index: 1;

  }
 }
  &__title{
  line-height: 0.9;
  pointer-events: none;
  @include tablet{
     @include centerObs(absolute, 50%, 50%, -50%, -50%);
     white-space: nowrap;
     z-index: 1;
  }
 }
 &__nbr{
  @include tablet{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  }
 }
 .scroll-down{
  @include centerObs(absolute, 90%, 50%, -50%, 0);
 }
}
</style>