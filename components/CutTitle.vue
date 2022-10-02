<template>
    <h1 :class="`title ${classNameTitle}`">
      <span :class="classNameSpan" v-for="(letter, i) in tab" :key="i">{{letter}}</span>
    </h1>
</template>

<script>
export default {
    name : "CutTitle",
  data(){
    return{
      tab : ""
    }
  },
  props: ["value", "classNameTitle", "classNameSpan"],
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
    line-height: 0.85;
  }
</style>