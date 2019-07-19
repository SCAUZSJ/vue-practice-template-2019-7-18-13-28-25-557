<template>
  <div>
      <div v-for="item of counterNum" :key="item">
        <counter @add="totalAdd" @reduce="totalReduce"></counter>
      </div>
      <couter-sum :counterSum="total"></couter-sum>
  </div>
</template>

<script>
import Counter from "./Counter";
import CouterSum from "./CounterSum"
export default {
  props: ['counterNum'],
  data() {
    return {
        total:0
    };
  },

  components: {
    Counter,
    CouterSum
  },
  methods: {
      totalAdd(){
          this.total++;
      },
      totalReduce(){
          this.total--;
      }
  },

};
</script>
<style lang='scss' scoped>

</style>