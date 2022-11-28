<template>
  <button @click="scrollTo()" type="button" aria-label="down" class="btn-down"><svg width="23" height="33" viewBox="0 0 23 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6783 -5.38597e-07L12.3217 -4.66764e-07C12.7755 -4.46928e-07 13.1434 0.369365 13.1434 0.825L13.1434 27.5055L20.4398 20.163C20.5941 20.0068 20.8041 19.919 21.0232 19.919C21.2423 19.919 21.4523 20.0068 21.6066 20.163L22.7569 21.3345C22.9125 21.4894 23 21.7003 23 21.9202C23 22.1402 22.9125 22.3511 22.7569 22.506L12.6832 32.637C12.4523 32.8691 12.139 32.9997 11.8122 33L11.1878 33C10.8617 32.9962 10.5497 32.8662 10.3168 32.637L0.243052 22.506C0.0874986 22.3511 9.39569e-07 22.1402 9.49184e-07 21.9202C9.588e-07 21.7003 0.0874987 21.4894 0.243053 21.3345L1.40983 20.163C1.56129 20.0078 1.76859 19.9203 1.985 19.9203C2.20142 19.9203 2.40872 20.0078 2.56018 20.163L9.85665 27.5055L9.85665 0.824999C9.85665 0.369365 10.2245 -5.58434e-07 10.6783 -5.38597e-07Z" fill="#F92E2D"/>
        </svg>
      </button>
</template>

<script>
export default {
    name : "btnDown",
    data(){
        return{
            interval : undefined,
        }
    },
    mounted(){
      window.addEventListener('wheel', this.clearAnim)
      window.addEventListener('touchmove', this.clearAnim)
    },
    methods :{
    scrollTo() {
      let speed = 35;
      this.interval = setInterval(() => {
        if (document.documentElement.scrollTop <= window.innerHeight) {
          speed +=
            (window.innerHeight - document.documentElement.scrollTop) / 12;
          document.documentElement.scrollTop = speed
        }
      }, 15);
    },
     clearAnim(){
        clearInterval(this.interval)
  },
    }
}
</script>

<style lang="scss">
  .btn-down{
      @include centerObs(absolute, 87%, 50%, -50%, 0%);
      width: 50px;
      border: 1px solid #F92E2D;
      border-radius: 50vw;
      height: 50px;
      padding: 10px;
  }
</style>