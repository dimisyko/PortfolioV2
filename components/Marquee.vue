<template>
  <h2 class="marquee">
    <span v-for="word in 2" :key="word" class="marquee__words">
      <span v-for="span in 5" :key="span">&nbsp;{{ value + ' - ' }}</span>
    </span>
  </h2>
</template>

<script>
export default {
  name: "Marquee",
  props: ["value"],
};
</script>

<style lang="scss">
.marquee {
  display: flex;
  white-space: nowrap;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 3rem 0;
  @include laptop{
    padding: 5% 0;
  }
  &__words {
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