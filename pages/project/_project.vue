<template>
  <div class="overflow-x">
    <Header />
    <section class="hero-flexi">
      <div class="hero-flexi__head">
        <h1 class="hero-flexi__title">{{ project.detailProject.titleHero }}</h1>
        <div class="nbr">0{{ number_project + 1 }}</div>
      </div>
      <div class="hero-flexi__container">
        <div v-if="project.detailProject.linkProject" class="hero-flexi__txt">
          <p>{{ project.detailProject.txtHero }}</p>
          <p>{{ project.detailProject.techno }}</p>
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
          <p>{{ project.detailProject.txtHero }}</p>
          <p>{{ project.detailProject.techno }}</p>
        </div>
        <picture class="hero-flexi__img">
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
          class="list-imgs__project"
        >
          <nuxt-img
            :src="list.imgMain"
            sizes="sm:70vw md:100vw lg:100vw"
            :alt="list.altMain"
          />
          <div class="nbr-images">0{{ i + 1 }}</div>
        </picture>
      </section>
      <section class="next-project">
          <h1>{{data.projectsPage[nextProject(number_project + 1)].titleProject}}</h1>
      </section>
    </main>
  </div>
</template>

<script>
import data from "@/data/works.json";
export default {
  name: "Detail",
  data() {
    return {
      project: {},
      number_project: 0
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
  methods: {
    loop() {
      this.data.projectsPage.forEach((el, index) => {
        if (el.url === this.$route.params.project) {
          this.project = el;
          this.number_project = index;
        }
      });
    },
     nextProject(index_project){
      if(index_project < 0){
        return this.data.projectsPage.length - 1
      }else if(index_project > this.data.projectsPage.length - 1){
        return 0
      }else{
        return index_project
      }
    },
  },
};
</script>

<style lang="scss">
.hero-flexi {
  display: flex;
  flex-direction: column;
  &__head {
    @extend %flex_between;
    margin: 7rem auto 0 auto;
    width: 90%;
    @include phone {
      margin: 9rem auto 0 auto;
    }
    @include tablet {
      padding: 0.8vw 0;
      border-bottom: 1.5px solid white;
      border-top: 1.5px solid white;
    }
  }
  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include tablet {
      margin-top: 3vw;
      flex-direction: row;
    }
    .link-project {
      position: relative;
      width: fit-content;
      padding: 17px;
      @include svgHover(460);
    }
  }
  &__txt {
    width: 90%;
    margin: 2.5rem auto;
    p {
      margin-bottom: 1.7rem;
    }
    @include tablet {
      width: 33%;
      margin: 0 auto;
    }
  }
  &__img {
    width: 100%;
    @include tablet {
      width: 57%;
      height: 100%;
    }
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
  .nbr-images{
    margin-top: 1rem;
    text-align: right;
  }
  &__project {
    margin-bottom: 3rem;
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
.next-project{
  height: 100vh;
}
</style>