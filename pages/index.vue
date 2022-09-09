<template>
  <div class="all w-90">
    <Header/>
    <section class="home">
      <h1 class="home__title">
        <span v-for="split in txt" :key="split" class="home__span">
          {{ split }}
        </span>
      </h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      txt: ["Front-end", "developpeur", "/ web designer"],
    };
  },
  head() {
    return {
      title: "Accueil",
    };
  },
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  &__title {
    letter-spacing: 4px;
    font-size: 3.2rem;
    text-align: center;
    line-height: 1.2;
    @extend %centerFlex;
    flex-direction: column;
    @include phone {
      font-size: 4.5rem;
    }
    @include tablet {
      font-size: 5.5rem;
    }
    @include laptop {
      font-size: 10vw;
      letter-spacing: 10px;
    }
  }
  &__span {
    @include laptop {
      &:nth-child(1) {
        align-self: flex-start;
      }
      &:nth-child(2) {
        align-self: flex-end;
      }
    }
  }
}
</style>
