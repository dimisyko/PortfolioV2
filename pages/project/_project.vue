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
    <main class="site-main">

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
      number_project: 0,
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
  },
};
</script>

<style lang="scss">
.hero-flexi {
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__head {
    @extend %flex_between;
    margin: 7rem auto 0 auto;
    width: 90%;
    @include phone{
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
      @include svgHover(460)
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
    height: 40vh;
    width: 100%;
    @include phone {
      height: 50vh;
    }
    @include tablet {
      width: 57%;
      height: 100%;
    }
  }
}
</style>