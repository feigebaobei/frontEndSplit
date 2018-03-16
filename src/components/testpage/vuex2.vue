<template>
  <div class="vuex">
    <h2>vuex2 title</h2>
    <p>vuex2 p</p>
    <!-- <buttons></buttons> -->
    <button v-on:click="addnum">addnum</button>
    <button v-on:click="modifyname">modify name</button>
    <vuexname></vuexname>
    <p>age: {{age}}</p>
  </div>
</template>

<script>
import store from '../../store/store2.js'
import vuexname from './vuexname.vue'
export default {
  store: store,
  computed: {
    age: function () {
      return this.$store.getters.get1
    }
  },
  components: {
    vuexname: vuexname
  },
  methods: {
    addnum: function () {
      // console.log(this)
      // store.state.a.dispatch('modify0', {name: 'haha'})
      this.$store.dispatch('modify1', {num: 1})
    },
    modifyname: function () {
      this.$store.dispatch('modify0', {name: 'haha'})
    }
  }
}
</script>
