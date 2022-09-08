<template>
    <section>
      <h1>Front-end developpeur et web designer</h1>
      <p>Test texte</p>
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
    font-size: 3rem;
  }
}
</style>
