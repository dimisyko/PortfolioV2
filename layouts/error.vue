<template>
  <section class="error overflow-x">
    <div class="error__txt">
      <p>Page non trouvé</p>
      <h1 class="error__title title-primary" v-if="error.statusCode === 404">
        <span v-for="word in 2" :key="word" class="error__words">
          <span v-for="span in 4" :key="span">Erreur 404 -&nbsp;</span>
        </span>
      </h1>
      <nuxt-link class="btn-error" to="/">Retour accueil</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
  head() {
    return {
      title: "Erreur - 404",
    };
  },
};
</script>

<style lang="scss">
.error {
  height: 100vh;
  &__txt {
    @extend %centerFlex;
    flex-direction: column;
    height: 100%;
    p {
      margin-bottom: 7rem;
      @include laptop {
        margin-bottom: 8vw;
      }
    }
    .btn-error {
      position: relative;
      margin-top: 7rem;
      @include laptop {
        margin-top: 8vw;
      }
      @include lineAfter(2px, transform 0.7s cubic-bezier(0.87, 0, 0.12, 1));
    }
  }
  &__title {
    display: flex;
    white-space: nowrap;
  }
  &__words {
    display: flex;
    white-space: nowrap;
    animation: animaTxt 15s infinite linear;
  }
}
@keyframes animaTxt {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>