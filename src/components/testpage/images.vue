<template>
  <div class="images">
    <img src="../../assets/food.jpg" alt="" v-show='image[0].show'>
    <img src="../../assets/girl.jpg" alt="" v-show='image[1].show'>
    <img src="../../assets/icecream.jpg" alt="" v-show='image[2].show'>
    <img src="../../assets/mountain.jpg" alt="" v-show='image[3].show'>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    image: function () {
      return this.$store.state.img
    }
  }
}
</script>
