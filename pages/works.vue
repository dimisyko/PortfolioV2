<template>
  <div class="overflow-x">
    <Header />
    <main class="site-main">
      <section class="project" v-for="(project, i) in works.projectsPage" :key="i">
        <nuxt-link class="project__title" :to="`project/${project.url}`">{{ project.titleProject }}</nuxt-link>
        <div
          class="project__img"
          :style="{ backgroundImage: 'url(' + project.imgProject + ')' }"
        ></div>
        <button class="btn-down">Défiler</button>
      </section>
    </main>
  </div>
</template>

<script>
import works from "@/data/works.json";
export default {
  name: "Works",
  asyncData({ params }) {
    return { works };
  },
  head() {
    return {
      title: "Travaux - Portfolio",
    };
  },
};
</script>

<style lang="scss">
.project {
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  &__title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    white-space: nowrap;
    @include lineAfter(5px, transform 0.7s cubic-bezier(.87,0,.12,1))
  }
  .btn-down{
    position: fixed;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
  }
  &__img {
    position: relative;
    background-attachment: fixed;
    height: 100%;
    background-size: cover;
    &::after {
      @include after(0, 0);
      background-color: rgba(0, 0, 0, 0.4);
      height: 100%;
      width: 100%;
    }
  }
}
</style>