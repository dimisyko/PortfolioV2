<template>
  <div>
    <Header />
      <Indicator/>
      <main class="site-main container-height" ref="containerHeight">
        <div class="container-project" ref="container">
          <h1 class="container-project__title">Mes travaux réalisés de 2020 - 2022</h1>
      <section class="project" v-for="(project, index) in works.projectsPage" :key="index">
        <nuxt-link 
        :class="`project__link ${index % 2 === 0 ? `odd` : `even`}`" :to="`project/${project.url}`">
          <h2 class="project__title">{{project.titleProject}}</h2>
          <picture class="project__img">
            <nuxt-img :src="project.imgProject" :alt="project.titleProject"/>
          </picture>    
        </nuxt-link>
      </section>
        </div>
      </main>
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
    mounted() {
    window.addEventListener('scroll', this.scrollHorizontal)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.scrollHorizontal)
  },
  methods: {
    scrollHorizontal(){
            const containerWidth = this.$refs.container.scrollWidth - this.$refs.container.offsetWidth
            this.$refs.container.scrollLeft = window.pageYOffset / (this.$refs.containerHeight.offsetHeight - window.innerHeight) * containerWidth
    },
  },
};
</script>

<style lang="scss">
.container-height{
  height: 300vh;
  .container-project{
  position: sticky;
  top: 0;
  display: flex;
  overflow: hidden;
  &__title{
   @include centerObs(absolute, 50%, 50%, 0%, -50%);
   white-space: nowrap;
  font-size: 12rem;
    @include phone{
      font-size: 20rem;
    }
    @include tablet{
    display: flex;
    justify-content: center;
    align-content: center;
    height: auto;
      font-size: 17rem;
    }
    @include laptop{
    font-size: 28vw;
    }
  }
}
.project {
  flex-shrink: 0;
  position: relative;
  height: 100vh;
  width: 100%;
  @extend %centerFlex;
  @include tablet{
    width: 70%;
  }
&__link{
  position: relative;
  width: 60%;
  height: 75vw;
 margin: 2rem 0;
 @include phone{
   height: 65vw; 
 }
  @include tablet{
    width: 41%;
    height: 33vw;
  }
}
.even{
  transform: rotate(7deg)
}
.odd{
  transform: rotate(-7deg)
}
&__title{
  @include centerObs(absolute, 50%, 50%, -50%, -50%);
  z-index: 2;
  line-height: 0.8;
  color: white;
}
 &__img{
  position: relative;
  height: 100%;
    &::after{
    @include after(0, 0);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    }
    &::before{
    @include after(50%, 50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: white;
    transform: translate(-50%, -50%);
    padding: 15px;
    }
 }
}
}
</style>