<template>
    <section>
      <h1>Dimi</h1>
       <figure class="image">
              <nuxt-img src="/atomium-hero.webp" quality="90" sizes="sm:100vw md:100vw lg:100vw" />
      </figure>
      <nuxt-link to="/works">Voir mes travaux</nuxt-link>
    </section>
</template>

<script>
export default {
  name: 'Home',
  head(){
    return{
      title : "Accueil"
    }
  }
}
</script>

<style lang="scss">
section{
  h1{
    color: red;
    @include centerObs(50%, 50%, -50%, -50%)
  }
}
</style>
