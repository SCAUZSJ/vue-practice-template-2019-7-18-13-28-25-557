<template>
  <div>
  <button @click="decrease"> - </button>
  <span style="margin:10px;">{{countNum}}</span>    
  <button @click="increase"> + </button>
  </div>
</template>

<script>
export default {
  props: {
  },
  data(){
    return{
    }
  },
  computed:{
    countNum(){
      return this.$store.getters.getCountNum
    }
  },
  methods:{
    increase(){
      this.$store.commit("increase");
    },
    decrease(){
      this.$store.commit('decrease');
    }
  }

}
</script>
