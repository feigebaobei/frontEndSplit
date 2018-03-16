<template>
  <div class="buttons">
    <button v-on:click="toggleimg">显示第一张图片</button>
    <button v-on:click="toggleimg">显示第二张图片</button>
    <button v-on:click="toggleimg">显示第三张图片</button>
    <button v-on:click="toggleimg">显示第四张图片</button>
    <numcurrent></numcurrent>
  </div>
</template>

<script>
import numcurrent from './teststore.vue'
import $ from 'jquery'
export default {
  data () {
    return {}
  },
  components: {
    numcurrent: numcurrent
  },
  methods: {
    toggleimg: function (event) {
      let i = $(event.target).index()
      this.$store.dispatch('toggleimg', {amount: i})
    }
  }
}
</script>
