<template>
  <header class="menu">
    <div class="menu__header w-90">
      <nuxt-link to="/" class="menu__logo">Sykovaris Dimitrios</nuxt-link>
      <nav class="menu__nav">
        <ul class="menu__wrapper">
          <li class="menu__list" v-for="(i, item) in nav" :key="item">
            <nuxt-link :data-txt="i.link" class="menu__link" :to="i.url">{{
              i.link
            }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
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
          link: "A\xa0propos",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0;
  z-index: 3;
  &__header {
    padding: 2rem 0;
    @extend %flex_between;
  }
  &__logo {
    font-family: "Poppins";
    color: black;
    font-size: 1.1rem;
    width: 30%;
    @include phone {
      width: fit-content;
    }
    @include laptop{
      font-size: 1.2vw;
    }
  }
  &__nav {
    @extend %centerFlex;
    height: 100%;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    @include phone {
      flex-direction: row;
    }
  }
  &__list {
    margin: 0.4rem 0;
    width: fit-content;
    @include phone {
      margin: 0 0.8rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__link {
    position: relative;
    @include lineAfter(1.5px, transform 0.7s);
    @include laptop{
      font-size: 1.2vw;
    }
    &.nuxt-link-exact-active {
      pointer-events: none;
      &::before {
        transform: scaleX(1);
      }
    }
  }
}
</style>