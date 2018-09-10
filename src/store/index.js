
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 1、state：状态初始化
const state = {
  // 放置初始状态
  count: 1,
  name: 'lisong',
  obj: {},
}

// 2、mutations：创建改变状态的方法
const mutations = {
  // 状态变更函数-一般大写
  ADD(state, n){
    state.count += n;
  },
  RESET(state, value){
    state.name = value;
  }
}

// 3、getters：提供外部获取state
const getters = {
  count: function(state){
    return state.count;
  },
  name: function (state) {
    return state.name;
  }
}

// 4、actions：创建驱动方法改变mutations
const actions = {
  // 触发mutations中相应的方法-一般小写
  add({commit}, data){
    return commit('ADD', data);
  },
  reset(obj, data){
    return obj.commit('RESET', data);
  }
}

// 5、全部注入store
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

// 6、输出store
export default store;
