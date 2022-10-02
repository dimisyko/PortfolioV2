<template>
  <div class="overflow-x">
    <Header />
    <section class="hero-about">
      <CutTitle
        classNameTitle="hero-about__title"
        classNameSpan="hero-about__span"
        value="Sykovaris Dimitrios developpeur designer"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
.hero-about {
  height: 100vh;
  @extend %centerFlex;
  &__title {
    @include tablet {
        width: 70%;
    }
  }
  &__span{
    @include tablet {
       &:first-child{
        align-self: center;
       }
       &:nth-child(3){
        align-self: flex-end
       }
       &:nth-child(4){
        align-self: center;
       }
    }
  }
}
</style>