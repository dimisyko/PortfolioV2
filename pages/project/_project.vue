<template>
  <div class="overflow-x">
    <Header />
      <Indicator/>
      <nuxt-link to="/works" class="btn-back">Retour</nuxt-link>
    <section class="hero-flexi">
      <div class="hero-flexi__content">
        <h1 v-animate-parallax:[directionX]="6" data-v="-0.25" class="hero-flexi__title">{{project.titleProject}}</h1>
        <picture class="hero-flexi__img">
          <nuxt-img
            :src="project.detailProject.imgHero"
            sizes="sm:70vw md:100vw lg:100vw"
            :alt="project.titleProject"
          />
        </picture>
      </div>
      <BtnDown/>
    </section>
    <main class="site-main w-90">
      <div class="info-project">
        <div v-if="project.detailProject.linkProject" class="info-project__content">
          <h2>{{project.titleProject}}</h2>
       <p>{{project.detailProject.txtHero}}</p>
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
              stroke="black"
              stroke-width="1.7"
            />
          </svg>
        </a>
        </div>
         <div v-else class="info-project__content">
         <p>{{project.detailProject.txtHero}}</p>
        </div>
        <div v-animate-parallax:[directionY]="4" data-v="0.2" class="nbr-project">0 {{number_project + 1}}</div>
      </div>
      <div class="list-imgs">
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
            :alt="list.altListImg"
          />
        </picture>
      </div>
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
      directionX: "translateX",
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
      const rotateX = this.posX - this.x
      this.$refs.img.style.transform = "translate3d("+this.posX+"px,"+this.posY+"px, 0px) translate(-70%, -50%) rotate(" + (rotateX / 20).toFixed(2) + "deg)"
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
.btn-back{
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translateX(-50%) rotate(-7deg);
  z-index: 9;
  font-size: 2rem;
  letter-spacing: 0.08rem;
  @include lineAfter(2px, transform 0.7s cubic-bezier(0.87, 0, 0.12, 1));
  @include phone{
    top: 5%;
  }
}
.hero-flexi {
  position: relative;
  height: 100vh;
  &__paragraph{
      margin: 1.5rem 0;
      @include phone {
         margin: 1.7rem 0;
    }
     @include tablet {
         margin: 4vw 0 2vw 0;
    }
    }
  &__content{
    @extend %centerFlex;
    flex-direction: column;
    height: 100%;
  }
  &__title{
    white-space: nowrap;
    font-size: 6.8rem;
    text-align: center;
    @include phone{
      font-size: 13rem;
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
  &__img{
    width: 50%;
    height: 55vw;
    margin: 0 auto;
    padding: 10px;
    background-color: white;
    @include tablet{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-7deg);
    width: 25%;
    height: 30vw;
    padding: 15px;
    }
  }
}
.info-project{
  margin-top: 7rem;
      display: flex;
    flex-direction: column;
    height: 15rem;
    @include tablet{
      flex-direction: row;
      justify-content: space-between;
    }
  &__content{
    .link-project {
      position: relative;
      width: fit-content;
      padding: 17px;
      @include svgHover(460);
    }
    p{
      width: 100%;
      margin-bottom: 1.5rem;
    }
    @include tablet{
     width: 45%;
    }
  }
  .nbr-project{
    font-size: 10rem;
     white-space: nowrap;
     color: transparent;
      -webkit-text-stroke: 1px #f92d2dba;
    @include phone{
      font-size: 15rem;
    }
    @include tablet{
      font-size: 25rem;
    }
    @include laptop{
    font-size: 55vw;
    }
  }
}
.list-imgs {
  margin: 12rem 0 10rem 0;
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
    width: 28%;
    height: 30vw;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    transition: clip-path 0.7s 0.1s ease;
    pointer-events: none;
    padding: 15px;
    background-color: white;
  }
}
</style>