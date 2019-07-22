<template>
  <div id="app">
   <counter></counter>
  </div>
</template>
<script>
import Counter from "./components/Counter";
export default {
  name: "app",
  components: {
    Counter
  },
  data() {
    return {
      num: 0
    };
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
