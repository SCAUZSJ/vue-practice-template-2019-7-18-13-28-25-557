<template>
  <div>
  <button @click="reduce"> - </button>
  <span style="margin:10px;">{{value}}</span>    
  <button @click="add"> + </button>
  </div>
</template>

<script>
export default {
  props: {
  },
  data(){
    return{
      value:0,
    }
  },
  methods:{
    add(){
      this.value++;
      this.$emit("add");
    },
    reduce(){
      this.value--;
      this.$emit("reduce")
    }
  }

}
</script>
