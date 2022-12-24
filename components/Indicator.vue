<template>
    <div ref="indicator" class="indicator">{{-val}} %</div>
</template>

<script>
export default {
    name : "Indicator",
    data(){
        return{
            raf : undefined,
            val : 0
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
            const heightDocument = window.pageYOffset / (window.innerHeight - document.documentElement.scrollHeight) * 100
            this.val = Math.floor(heightDocument)
            this.raf = requestAnimationFrame(this.scrollIndic)
        }
    }
}
</script>

<style lang="scss">
    .indicator{
        position: fixed;
        bottom: 7%;
        left: 5%;
        z-index: 1;
        font-family: "Poppins";
        font-size: 0.9rem;
    }
</style>