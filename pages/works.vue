<template>
  <div class="overflow-x">
    <Header />
      <Indicator/>
      <section class="project w-90" v-for="(project, index) in works.projectsPage" :key="index">
        <div class="project__container">
          <h2 class="project__title">{{project.titleProject}}</h2>
        <nuxt-link 
        v-animate-parallax:[directionX]="5"
         :data-v="`${index % 2 === 0 ? `0.4` : `-0.4`}`"
        class="project__link" :to="`project/${project.url}`">
          <picture class="project__img">
            <nuxt-img :src="project.imgProject"/>
          </picture>    
        </nuxt-link>
        </div>
      </section>
  </div>
</template>

<script>
import works from "@/data/data.json";
export default {
  name: "Works",
  data(){
    return{
      directionX: "translateX",
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
};
</script>

<style lang="scss">
.project {
  position: relative;
  height: 100vh;
  @extend %centerFlex;
   @include tablet{
    margin-bottom: 10%;
  }
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
  overflow: hidden;
 @include phone{
   height: 65vw; 
 }
  @include tablet{
    @include centerObs(absolute, 15%, 30%, -50%, -50%);
    width: 35%;
    height: 35vw;
    will-change: transform;
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
}
</style>