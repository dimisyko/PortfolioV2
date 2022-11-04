<template>
    <div ref="indicator" class="indicator"></div>
</template>

<script>
export default {
    name : "Indicator",
    data(){
        return{
            raf : undefined,
            initPos : -100
        }
    },
    mounted(){
       this.scrollIndic()
    },
    beforeDestroy(){
        cancelAnimationFrame(this.raf)
    },
    methods:{
        scrollIndic(){
            const heightDocument = this.initPos - window.pageYOffset / (window.innerHeight - document.documentElement.scrollHeight) * 100
            this.$refs.indicator.style.transform = "translate3d(0,"+heightDocument+"%, 0)"
            this.raf = requestAnimationFrame(this.scrollIndic)
        }
    }
}
</script>

<style lang="scss">
    .indicator{
        position: fixed;
        top: 0;
        height: 100vh;
        width: 5px;
        right: 0;
        background-color: #F92E2D;
        z-index: 1;
        transform: translate3d(0, -100%, 0);
    }
</style>