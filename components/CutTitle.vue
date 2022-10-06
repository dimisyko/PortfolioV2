<template>
    <h1 :class="`title ${classNameTitle}`">
      <span :class="`${classNameSpan} hide`" v-for="(letter, i) in tab" :key="i" 
      v-animate-parallax:[directionX]="4" :data-v="`${i % 2 === 0 ? data_left : data_right}`">
        <span class="stagger">{{letter}}</span>
      </span>
    </h1>
</template>

<script>
export default {
    name : "CutTitle",
  data(){
    return{
      directionX: "translateX",
      tab : ""
    }
  },
  props: ["value", "classNameTitle", "classNameSpan", "data_left", "data_right"],
  mounted(){
   this.cutTitle()
  },
  methods:{
    cutTitle(){
       const split = this.$props.value.split(' ')
       this.tab = split
    }
  }
}
</script>

<style lang="scss">
  .title{
    display: flex;
    flex-direction: column;
  }
</style>