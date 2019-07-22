import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
     countNum:0
    },
    getters: {
        getCountNum(state){
            return state.countNum;
        }
    },
    mutations:{
        increase(state){
            state.countNum++;
        },
        decrease(state){
            state.countNum--;
        }
    }
  })

  export default store;