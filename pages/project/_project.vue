<template>
  <div>
    <Header />
    <section class="hero-flexi">
      <div class="hero-flexi__head">
              <h1 class="hero-flexi__title">{{ project.detailProject.titleHero }}</h1>
              <div class="nbr">0{{number_project + 1}}</div>
        </div>
          <div class="hero-flexi__container">
            <div class="hero-flexi__txt">
             <p>{{project.detailProject.txtHero}}</p>
             <p>{{project.detailProject.techno}}</p>
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
  &__head{
    @extend %flex_between;
    margin: 8rem auto 0 auto;
    width: 90%;
    border-bottom: 1.5px solid white;
     border-top: 1.5px solid white;
    @include tablet{
     padding: 0.8vw 0;
    }
    }
  &__container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include tablet{
      margin-top: 3vw;
      flex-direction: row;
    }
  }
  &__txt{
      width: 90%;
      margin: 2rem auto 0 auto;
      p{
        margin-bottom: 1.2rem;
      }
      @include tablet{
      width: 33%;
    }
  }
  &__img {
    height: 42vh;
    width: 100%;
    @include phone{
      height: 50vh;
    }
      @include tablet {
          width: 57%;
        height: 100%;
    }
  }
}
</style>