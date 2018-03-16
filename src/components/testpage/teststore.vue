<template>
  <div class="teststore">
    <h2>teststore title</h2>
    <p>当前图片的序号：{{num}},前一个图片的序号是：{{prenum}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  computed: {
    // num: function () {
    //   return this.$store.state.numcurrent
    // }
    num: function () {
      return this.$store.getters.getnumcurrent
    },
    prenum: function () {
      return this.$store.getters.getprenum
    }
  }
}
</script>
