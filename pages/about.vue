<template>
  <div class="overflow-x">
    <Header />
    <Indicator />
    <section class="hero-about">
      <CutTitle
        classNameTitle="hero-about__title title-primary"
        classNameSpan="hero-about__span"
        value="Sykovaris Dimitrios  developpeur  designer"
        data_left="-0.2"
        data_right="0.2"
      />
      <span class="hero-about__big">
          About
      </span>
      <span class="hero-about__big">
          me
      </span>
      <BtnDown/>
    </section>
    <main class="site-main">
      <section class="bio">
        <div class="bio__content">
        <h2 v-animate-parallax:[directionY]="4" data-v="0.25" class="bio__title">Ma bio</h2>
        <p class="bio__paragraph">
          Front-end developpeur junior et web designer de 23 ans fraichement diplomé d'un bachelier en haute école avec une mention distinction depuis septembre 2022.
          Principalement orienté front-end, j'ai de bonnes connaissances dans les technologies modernes du web comme Vue.js / Nuxt.js ainsi que le CMS Wordpress.
        </p>
        </div>
        <svg ref="svgRotate" class="svg-star" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0L11.9211 5.36212L17.0711 2.92893L14.6379 8.07893L20 10L14.6379 11.9211L17.0711 17.0711L11.9211 14.6379L10 20L8.07893 14.6379L2.92893 17.0711L5.36212 11.9211L0 10L5.36212 8.07893L2.92893 2.92893L8.07893 5.36212L10 0Z" fill="#F92E2D"/>
        </svg>
      </section>
      <section class="skills marquee-title">
        <h2
          class="marquee-animation"
          v-animate-parallax:[directionX]="2"
          data-v="0.5"
        >
          <span class="skills__word" v-for="word in 7" :key="word"
            >&nbsp;Skills -</span
          >
        </h2>
        <div class="skills__container">
          <ul class="skills__wrapper w-90">
            <li
              class="skills__list"
              v-for="(skills, index) in skills.aboutPageSkills"
              :key="index"
            >
              <h3 class="skills__title">{{ skills }}</h3>
              <div class="nbr">0{{ index + 1 }}</div>
            </li>
          </ul>
        </div>
      </section>
      <section class="internship">
        <h2 class="internship__title">Stage chez Atelier Design</h2>
        <div class="internship__container">
          <div class="internship__flex">
            <picture v-animate-parallax:[directionY]="4" data-v="0.15" class="internship__img hide">
              <nuxt-img
                src="/about/ad.webp"
                sizes="sm:100vw lg:100vw"
                alt="Atelier Design"
              />
            </picture>
            <p class="internship__paragraph">
              Dans le cadre de ma 3eme année, j’ai effectué un stage d’une durée de quinze semaines au sein de l’agence Atelier design en tant que développeur web. Il m'a permis d'approfondire mes connaissances dans le CMS Wordpress et le language Javascript.
            </p>
          </div>
          <picture class="internship__img hide">
            <nuxt-img
              src="/about/atelier_design.webp"
              sizes="sm:100vw lg:100vw"
              alt="Atelier Design2"
            />
          </picture>
        </div>
      </section>
      <div class="get-in-touch marquee-title">
           <h2
          class="marquee-animation"
          v-animate-parallax:[directionX]="2"
          data-v="0.5"
        >
          <span class="skills__word" v-for="word in 7" :key="word"
            >&nbsp;Get in touch -</span
          >
        </h2>
      </div>
      <section class="contact">
        <div class="contact__container w-90">
            <p>Clique sur l'adresse mail pour me contacter</p>
            <a class="mail" href="mailto:dimitri.syko@hotmail.com">
               <Marquee value="Dimitri.syko@hotmail.com"/>
            </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import skills from "@/data/data.json";
export default {
  name: "About",
  data() {
    return {
      directionX: "translateX",
      directionY: "translateY",
      svgAnim : undefined
    };
  },
  asyncData({ params }) {
    return { skills };
  },
  head() {
    return {
      title: "A propos - Portfolio",
    };
  },
  mounted(){
    this.svgRotate()
  },
  beforeDestroy(){
    cancelAnimationFrame(this.svgAnim)
  },
  methods:{
    svgRotate(){
      this.$refs.svgRotate.style.transform = "rotate("+window.pageYOffset / 7+"deg)"
      this.svgAnim = requestAnimationFrame(this.svgRotate)
    }
  }
};
</script>

<style lang="scss">
.hero-about {
  position: relative;
  height: 100vh;
  @extend %centerFlex;
  .hero-about__title {
    width: 87%;
  }
  &__big{
    position: absolute;
     font-size: 55vh;
     color: transparent;
      -webkit-text-stroke: 1px #f92d2d7b;
      font-family: "Mongoose";
      text-transform: uppercase;
      @include laptop{
        font-size: 75vh;
      }
      &:first-of-type{
        top: -12%;
        left: -5%;
      }
      &:last-of-type{
        top: 50%;
        right: 0;
      }
  }
  &__span {
    @include tablet {
      &:first-child {
        align-self: flex-start;
      }
      &:nth-child(2) {
        align-self: flex-end;
      }
      &:nth-child(3) {
        align-self: center;
      }
    }
  }
}
.bio {
  width: 90%;
  margin: 10rem auto;
  @include phone {
   margin: 20rem auto;
  }
  @include tablet {
     width: 70%;
    margin: 12% auto;
  }
  &__content{
    @include  tablet{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
  }
  &__title {
    margin-bottom: 1.5rem;
    @include tablet {
      width: 20%;
      line-height: 0.8;
      margin-bottom: 0;
    }
  }
  &__paragraph {
    @include tablet {
      width: 42%;
    }
  }
  .svg-star{
    width: 50px;
    margin: 10rem auto;
  }
}
.marquee-title{
  margin-top: 8rem;
  border-top: 1px solid #F92E2D;
  border-bottom: 1px solid #F92E2D;
  @include phone {
    margin-top: 12rem;
  }
.marquee-animation{
    display: flex;
    white-space: nowrap;
    padding: 2.5rem 0;
    will-change: transform;
    @include laptop {
      margin-left: -10%;
    }
}
}
.skills {
    font-family: 'Poppins';
    color: white;
  &__title {
    width: 60%;
    @include phone {
      width: 100%;
    }
  }
  &__container {
    background-color: #F92E2D;
    padding: 7rem 0;
    @include phone {
      padding: 12rem 0;
    }
  }
  &__list {
    @extend %flex_between;
    border-top: 1px solid white;
    padding: 2rem 0;
    @include phone {
      padding: 3rem 0;
    }
    &:last-child {
      border-bottom: 1px solid white;
    }
    @include laptop {
      width: 60%;
      margin-left: auto;
    }
  }
}
.internship {
  width: 90%;
  margin: 8rem auto 0 auto;
  @include tablet {
    width: 100%;
    margin: 15% auto 0 auto;
  }
  &__container{
    margin-top: 3rem;
    @include phone{
     margin-top: 5rem; 
    }
    @include tablet {
      margin-top: 7%; 
    }
  }
  &__title {
    line-height: 0.9;
    width: 100%;
    @include tablet {
      width: 40%;
      margin-left: 5%;
    }
  }
  &__img {
    @include tablet {
      position: relative;
      width: 50%;
      height: 35vw;
      margin-bottom: 0rem;
      &:last-child {
        transform: translate(80%, -30%);
        z-index: -1;
      }
    }
  }
  &__flex {
    display: flex;
    flex-direction: column;
    @include tablet {
      flex-direction: row;
    }
  }
  &__paragraph {
    width: 100%;
    margin: 4rem 0;
    @include phone{
     margin: 5.5rem 0; 
    }
    @include tablet {
      width: 30%;
      margin: 5% 0 0 10%; 
    }
  }
}
.contact{
   height: 100vh;
  @extend %centerFlex;
   &__container {
    p {
      text-align: center;
      margin-bottom: 3rem;
      @include laptop {
        margin-bottom: 3vw;
      }
    }
   }
}
</style>