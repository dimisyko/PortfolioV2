<template>
  <div>
    <Header />
    <main role="main" class="overflow-x">
        <section class="project" v-for="(project, i) in works" :key="i">
            <h2 class="project__title">{{project.titleProject}}</h2>
              <div class="project__img" :style="{ backgroundImage: 'url(' + project.imgProject + ')' }"></div>
        </section>
    </main>
  </div>
</template>

<script>
import works from "@/data/works.json"
export default {
  name: "Works",
asyncData ({ params }) {
    return { works }
  },
  head() {
    return {
      title: "Travaux - Portfolio",
    };
  },
};
</script>

<style lang="scss">
.project{
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  &__title{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    white-space: nowrap;
    font-size: 3rem;
    @include phone{
         font-size: 5rem; 
    }
    @include laptop{
        font-size: 7vw; 
    }
  }
  &__img{
    position: relative;
    background-attachment: fixed;
  height: 100%;
  background-size: cover;
  &::after{
    @include after(0, 0);
    background-color: rgba(0, 0, 0, 0.455);
    height: 100%;
    width: 100%;
    z-index: 1;
  }
}
}
</style>