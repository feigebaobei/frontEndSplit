import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page0 from '../components/testpage/page0.vue'
import page1 from '../components/testpage/page1.vue'
import page2 from '../components/testpage/page2.vue'
import page3 from '../components/testpage/page3.vue'
import vuex from '../components/testpage/vuex.vue'
import vuex2 from '../components/testpage/vuex2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page0',
      component: page0
    },
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/page3',
      component: page3
    },
    {
      path: '/vuex',
      component: vuex
    },
    {
      path: '/vuex2',
      component: vuex2
    }
  ]
})
