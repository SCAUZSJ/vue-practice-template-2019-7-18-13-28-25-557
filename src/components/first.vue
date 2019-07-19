<template>
  <div>
  <button @click="reduce"> - </button>
  <span>{{value}}</span>
  <button @click="add"> + </button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data(){
    return{
      value:0,
    }
  },
  methods:{
    add(){
      this.value++;
    },
    reduce(){
      this.value--;
    }
  }

}
</script>
