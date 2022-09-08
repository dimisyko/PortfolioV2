<template>
  <div>
    <section class="error">
      <div class="error__txt">
        <h2 v-if="error.statusCode === 404">La page n'existe pas</h2>
        <nuxt-link to="/">
         Retour à l'accueil
        </nuxt-link>
      </div>
    </section>
  </div>
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

<style>
.error{
  height: 100vh;
}
.error__txt{
  text-align: center;
  flex-direction: column;
}
</style>