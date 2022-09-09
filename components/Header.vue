<template>
  <header class="menu">
    <div class="menu__header">
      <nuxt-link to="/">SD</nuxt-link>
      <button
        type="button"
        aria-label="toggleMenu"
        @click="$event.target.classList.toggle('active'); toggleMenu()"
        class="menu__burger"
      >
        <div class="wrapper-line">
          <div v-for="line in 3" :key="line" class="lineBurger"></div>
        </div>
      </button>
    </div>
    <div class="menu__bg">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class="bg-transition"
      >
        <path fill="#df603c" d="M 0 0 Q 50 0 100 0 V 0 Q 50 0 0 0 Z" />
      </svg>
      <nav class="menu__nav">
        <ul class="menu__wrapper">
          <li class="menu__list hide" v-for="(i, item) in nav" :key="item">
            <nuxt-link class="menu__link" :to="i.url">{{ i.link }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Header",
  data() {
    return {
      nav: [
        {
          url: "/",
          link: "Accueil",
        },
        {
          url: "/works",
          link: "Travaux",
        },
        {
          url: "/about",
          link: "A propos",
        },
      ],
      tlOpen: gsap.timeline({ paused: true }),
    };
  },
  mounted() {
    this.menuAnim();
  },
   methods: {
    menuAnim() {
      this.tlOpen.to(".bg-transition path",{
            attr : {'d' : "M 0 0 Q 50 0 100 0 V 15 Q 50 100 0 15 Z"},
            duration: 0.7,
            ease: 'power4.in',
        },)
      this.tlOpen.to(".bg-transition path",{
            attr : {'d' : "M 0 0 Q 50 0 100 0 V 100 Q 50 100 0 100 Z"},
            duration: 0.4,
            ease: 'power2',
        })
       this.tlOpen.to(".menu__list",{
          duration: 0.8,
         opacity : 1
        }, "sameTime");
      this.tlOpen.to(".menu__link",{
          duration: 0.8,
         ease: 'power2.inOut',
          stagger: 0.12,
          y : "0%"
        }, "sameTime");
      this.tlOpen.reverse();
    },
    toggleMenu() {
      this.tlOpen.reversed(!this.tlOpen.reversed());
    },
  },
};
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  width: 90%;
  height: 0;
  &__header {
    padding: 2rem 0;
    @extend %flex_between;
  }
  &__burger {
    position: relative;
    height: 60px;
    width: 60px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: transparent;
        &.active{
             .lineBurger:nth-child(1) {
                transform:translate(0px, 8px) rotate(-45deg);
              }
             .lineBurger:nth-child(2) {
                opacity: 0;
              }
              .lineBurger:nth-child(3) {
                transform:translate(0px, -8px) rotate(45deg);
              }
        }
    .wrapper-line {
      height: 28%;
      width: 45%;
      pointer-events: none;
      @include centerObs(50%, 50%, -50%, -50%);
      .lineBurger {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: black;
        transition: 0.5s;
      }
      .lineBurger:nth-child(1) {
        top: 0;
      }
      .lineBurger:nth-child(2) {
        top: 50%;
      }
      .lineBurger:nth-child(3) {
        top: 100%;
      }
    }
  }
  &__bg {
    height: 80vh;
    .bg-transition {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  &__nav {
    @extend %centerFlex;
  }
  &__wrapper {
    width: 100%;
  }
  &__list {
    padding: 2.5rem 0;
    opacity: 0;
    border-top: 1.5px solid #f1f1f1;
    display: flex;
    pointer-events: none;
    &:last-child {
      border-bottom: 1.5px solid #f1f1f1;
    }
    @include phone {
      padding: 3rem 0;
    }
    @include tablet {
      padding: 2.5rem 0;
    }
    @include laptop {
      padding: 1vw 0;
      &:first-child {
        padding-left: 17vw;
      }
      &:nth-child(2) {
        justify-content: flex-end;
        padding-right: 17vw;
      }
      &:nth-child(3) {
        justify-content: center;
      }
    }
  }
  &__link {
    color: #f1f1f1;
    font-size: 2.5rem;
    font-family: "OswaldTitle";
    transform: translate(0, 150%);
    @include phone {
      font-size: 3rem;
    }
    @include tablet {
      font-size: 4rem;
    }
    @include laptop {
      font-size: 8vw;
      transform: translate(0, 105%);
    }
  }
}
</style>