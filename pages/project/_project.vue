<template>
  <div class="overflow-x">
    <Header />
    <section class="hero-flexi">
      <div v-if="project.detailProject.linkProject" class="hero-flexi__txt">
         <CutTitle classNameTitle="hero-flexi__title" classNameSpan="hero-flexi__span" :value="project.titleProject"/>
        <p class="hero-flexi__paragraph">{{ project.detailProject.txtHero }}</p>
        <a
          class="link-project"
          :href="project.detailProject.linkProject"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="link-val">Voir le projet</div>
          <svg
            v-for="svg in 2"
            :key="svg"
            width="140"
            height="50"
            viewBox="0 0 181 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="180"
              height="58"
              rx="29"
              stroke="white"
              stroke-width="1.7"
            />
          </svg>
        </a>
      </div>
       <div v-else class="hero-flexi__txt">
       <CutTitle classNameTitle="hero-flexi__title" classNameSpan="home__split" :value="project.titleProject"/>
        <p class="hero-flexi__paragraph">{{ project.detailProject.txtHero }}</p>
      </div>
      <div class="hero-flexi__left">
        <picture class="hero-flexi__img" v>
          <nuxt-img
            :src="project.detailProject.imgHero"
            sizes="sm:70vw md:100vw lg:100vw"
            :alt="project.titleProject"
          />
        </picture>
      </div>
    </section>
    <main class="site-main w-90">
      <section class="list-imgs">
        <picture
          v-for="(list, i) in project.detailMain"
          :key="i"
          class="list-imgs__project hide"
        >
          <nuxt-img
            v-animate-parallax:[directionY]="6"
            :src="list.imgMain"
            sizes="sm:70vw md:100vw lg:100vw"
            data-v="-0.16"
            class="parallax"
            :alt="list.altMain"
          />
        </picture>
      </section>
      <section class="next-project">
        <div class="next-project__container">
          <p>Projet suivant</p>
          <nuxt-link
          @mousemove.native="moveImg($event)"
            :to="data.projectsPage[nextProject(number_project + 1)].url"
            class="next-project__wrapper"
          >
            <Marquee
              :value="
                data.projectsPage[nextProject(number_project + 1)].titleProject
              "
            />
          </nuxt-link>
            <picture class="next-project__img" ref="img">
            <nuxt-img
              :src="data.projectsPage[nextProject(number_project + 1)].detailProject.imgHero"
              sizes="sm:70vw md:100vw lg:100vw"
              :alt="data.projectsPage[nextProject(number_project + 1)].titleProject"/>
          </picture>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import data from "@/data/data.json";
export default {
  name: "Detail",
  data() {
    return {
      project: {},
      number_project: 0,
      directionY: "translateY",
      x : 0,
      y : 0,
      posX : 0,
      posY : 0,
      ease : 15,
      raf : undefined
    };
  },
  asyncData({ params }) {
    return { data };
  },
  head() {
    return {
      title: this.project.titleProject + " - Portfolio",
    };
  },
  created() {
    this.loop();
  },
  mounted(){
    this.fncRaf()
  },
  beforeDestroy(){
    cancelAnimationFrame(this.raf)
  },
  methods: {
    loop() {
      this.project = this.data.projectsPage.find((data) => data.url === this.$route.params.project)
      this.number_project = this.data.projectsPage.indexOf(this.project);
    },
    moveImg(e){
      this.x = e.clientX 
      this.y = e.clientY 
    },
    fncRaf(){
      this.posX += (this.x - this.posX) / this.ease
      this.posY += (this.y - this.posY) / this.ease
      this.$refs.img.style.transform = "translate3d("+this.posX+"px,"+this.posY+"px, 0px) translate(-70%, -50%)"
      this.raf = requestAnimationFrame(this.fncRaf)
    },
    nextProject(index_project) {
      if (index_project < 0) {
        return this.data.projectsPage.length - 1;
      } else if (index_project > this.data.projectsPage.length - 1) {
        return 0;
      } else {
        return index_project;
      }
    },
  },
};
</script>

<style lang="scss">
.hero-flexi {
  display: flex;
  flex-direction: column;
  height: 100vh;
  @include tablet {
    flex-direction: row;
  }
  &__txt {
    height: 100%;
    width: 90%;
    margin: auto;
    padding: 8rem 0 2rem 0;
    @include phone {
      height: 55%;
      padding: 10rem 0 0 0;
    }
    @include tablet {
      padding: 0;
      width: 40%;
    }
    .link-project {
      position: relative;
      width: fit-content;
      padding: 17px;
      @include svgHover(460);
    }
  }
  &__span{
    @include tablet{
    &:nth-child(2){
      align-self: flex-end;
    }
    }
  }
  &__paragraph{
      margin: 1.5rem 0;
      @include phone {
         margin: 1.7rem 0;
    }
     @include tablet {
         margin: 4vw 0 2vw 0;
    }
    }
  &__left {
    width: 100%;
    height: 50vh;
    @include tablet {
      width: 50%;
      height: 100%
    }
  }
  &__img {
    overflow: hidden;
    height: 100%;
        @extend %centerFlex;
  }
}
.list-imgs {
  margin: 8rem 0;
  display: grid;
  @include tablet {
    margin: 15rem 0;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(11, 1fr);
  }
  &__project {
    margin-bottom: 3rem;
    @extend %centerFlex;
    @include phone {
      margin-bottom: 6rem;
    }
    @include tablet {
      margin-bottom: 0rem;
      &:first-child {
        grid-area: 1/1/4/7;
      }
      &:nth-child(2) {
        grid-area: 3/8/5/13;
      }
      &:nth-child(3) {
        grid-area: 6/5/9/12;
      }
      &:nth-child(4) {
        grid-area: 10/1/12/5;
      }
      &:nth-child(5) {
        grid-area: 10/6/12/10;
      }
    }
  }
}
.next-project {
  position: relative;
  height: 100vh;
  @extend %centerFlex;
  &__container {
    width: 100%;
    p {
      text-align: center;
      margin-bottom: 3rem;
      @include laptop {
        margin-bottom: 4vw;
      }
    }
    .next-project__wrapper{
    &:hover + {
      .next-project__img {
        clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
      }
    }
    }
  }
  &__img {
    position: absolute;
    top: 0;
    width: 30%;
    height: 30vw;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    transition: clip-path 0.7s 0.1s ease;
    pointer-events: none;
  }
}
</style>