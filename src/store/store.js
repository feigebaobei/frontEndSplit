import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    numcurrent: 0,
    prenum: '',
    img: [
      {num: 0, show: true},
      {num: 1, show: false},
      {num: 2, show: false},
      {num: 3, show: false}
    ]
  },
  getters: {
    getnumcurrent: function (state) {
      return state.numcurrent
    },
    getprenum: function (state, getters) {
      // let cur = getters.getnumcurrent
      // return state.img[cur - 1].num
      return state.prenum
    }
  },
  mutations: {
    toggleimg: function (state, payload) {
      console.log(payload)
      state.img.map(im => (im.show = false))
      state.img[payload.amount].show = true
      state.prenum = state.numcurrent
      state.numcurrent = payload.amount
      console.log(state.numcurrent)
    }
  },
  actions: {
    toggleimg: function ({commit}, payload) {
      commit('toggleimg', payload)
    },
    action2: function (context) {
      // context: 一个与store实例具有相同方法和属性的context对象。
    }
  }
})

export default store
