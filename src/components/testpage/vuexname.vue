<template>
  <div class="vuexname">
    <p>name: {{name}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    name: function () {
      // console.log(this)
      return this.$store.state.a[0].name
      // this.$store.state.a
    }
  }
}
</script>
