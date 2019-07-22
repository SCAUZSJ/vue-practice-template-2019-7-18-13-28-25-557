<template>
  <div>
  <button @click="decrease"> - </button>
  <span style="margin:10px;">{{countNum}}</span>    
  <button @click="increase"> + </button>
  </div>
</template>

<script>
 import { mapMutations, mapGetters} from 'vuex'
export default {
  props: {
  },
  data(){
    return{
    }
  },
  computed:{
    // countNum(){
    //   return this.$store.getters.getCountNum
    // },
  ...mapGetters({
     countNum : 'getCountNum'
     })
  },
  methods:{
     ...mapMutations([
      'increase', 
      'decrease'
    ]),
    // increase(){
    //   this.$store.commit("increase");
    // },
    // decrease(){
    //   this.$store.commit('decrease');
    // },
    
  }

}
</script>
