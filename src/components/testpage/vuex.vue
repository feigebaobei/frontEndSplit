<template>
  <div class="vuex">
    <h2>vuex title</h2>
    <p>vuex p</p>
    <!-- <div class="buttons">
      <button v-on:click="toggleimg">显示第一张图片</button>
      <button v-on:click="toggleimg">显示第二张图片</button>
      <button v-on:click="toggleimg">显示第三张图片</button>
      <button v-on:click="toggleimg">显示第四张图片</button>
    </div>
    <div class="images">
      <img src="../../assets/food.jpg" alt="" v-show='image[0].show'>
      <img src="../../assets/girl.jpg" alt="" v-show='image[1].show'>
      <img src="../../assets/icecream.jpg" alt="" v-show='image[2].show'>
      <img src="../../assets/mountain.jpg" alt="" v-show='image[3].show'>
    </div> -->
    <buttons></buttons>
    <images></images>
  </div>
</template>

<script>
import store from '../../store/store.js'
// import $ from 'jquery'
import buttons from './buttons.vue'
import images from './images.vue'
export default {
  store: store,
  data () {
    return {}
  },
  // compute: {
  //   image: function () {
  //     return this.$store.state.img
  //   }
  // },
  // methods: {
  //   toggleimg: function (event) {
  //     let i
  //     // if (event.target)
  //     i = $(event.target).index()
  //     this.$store.dispatch('toggleimg', {amount: i})
  //   }
  // },
  components: {
    'buttons': buttons,
    'images': images
  }
}
</script>

<style lang="scss" scope="" type="text/css">
  .vuex {
    color: green;
  }
</style>
