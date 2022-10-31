<template>
  <h2 class="marquee hide">
    <span v-for="word in 2" :key="word" class="marquee__container">
      <span  v-for="span in 5" :key="span" class="marquee__word">&nbsp;{{ value + ' - ' }}</span>
    </span>
  </h2>
</template>

<script>
export default {
  name: "Marquee",
  props: ["value"]
};
</script>

<style lang="scss">
.marquee {
  display: flex;
  white-space: nowrap;
  border: 1px solid white;
  border-radius: 50vw;
  padding: 3rem 0;
  @include laptop{
    padding: 4% 0;
  }
  &__container {
    display: flex;
    white-space: nowrap;
    animation: animTxt 30s infinite linear;
  }
  @keyframes animTxt {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
}
</style>