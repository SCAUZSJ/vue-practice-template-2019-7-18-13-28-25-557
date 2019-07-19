<template>
  <div id="app">
    <input v-model.number="num">
    <CounterGroup :counterNum="num"></CounterGroup>
  </div>
</template>
<script>
import CounterGroup from './components/CounterGroup'
export default {
  name: 'app',
  components: {
    CounterGroup
  },
  data(){
    return {
      num:0
    }
  },
  methods:{
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
