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
    </section>
    <main class="site-main">
      <section class="bio">
        <h2 v-animate-parallax:[directionY]="4" data-v="0.25" class="bio__title">Ma bio</h2>
        <p class="bio__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          sed rem distinctio amet ut repellendus ipsa voluptatum animi illum
          perspiciatis?
        </p>
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
            <p class="internship__paragaph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              culpa error perferendis pariatur, perspiciatis inventore doloribus
              maxime earum rerum tempore.
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
            <a href="mailto:dimitri.syko@hotmail.com">
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
      -webkit-text-stroke: 1px #f92d2d60;
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
  margin-bottom: 10rem;
  width: 90%;
  margin: auto;
  @include phone {
    margin-bottom: 25rem;
  }
  @include tablet {
    display: flex;
    justify-content: space-between;
    align-items: center;
     width: 70%;
    margin: 12% auto 20% auto;
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
      width: 40%;
    }
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
  &__paragaph {
    width: 100%;
    margin: 3rem 0;
    @include phone{
     margin: 5rem 0; 
    }
    @include tablet {
      width: 30%;
      margin: 8% 0 0 10%; 
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