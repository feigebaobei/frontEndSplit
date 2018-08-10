import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: [
    {name: 'feiji', age: 23},
    {name: 'tack', age: 22},
    {name: 'gun', age: 21}
  ],
  getters: {
    get0: function (state) {
      // console.log(state)
      return state[0].name
    }
  },
  mutations: {
    modify0: function (state, payload) {
      // console.log(state)
      state[0].name = payload.name
    }
  },
  actions: {
    modify0: function (context, payload) {
      context.commit('modify0', payload)
    }
  }
}

const moduleB = {
  state: [
    {name: 'feiji', age: 23},
    {name: 'tack', age: 22},
    {name: 'gun', age: 21}
  ],
  getters: {
    get1: function (state) {
      return state[0].age
    }
  },
  mutations: {
    modify1: function (state, payload) {
      state[0].age += payload.num
    }
  },
  actions: {
    modify1: function (context, payload) {
      context.commit('modify1', payload)
    }
  }
}

const moduleC = {
  state: [
    {name: 'feiji', age: 23},
    {name: 'tack', age: 22},
    {name: 'gun', age: 21}
  ],
  getters: {
    get2: function (state) {
      return state[0].name
    }
  },
  mutations: {
    modify2: function (state, payload) {
      state[0].name = payload.name
    }
  },
  actions: {
    modify2: function (context, payload) {
      context.commit('modify2', payload)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC
  }
})

// export {state.a, state.b, state.c}
// export {state, d}
export default store
