<template>
  <div class="content">
    <h3>axios request data</h3>
    <p>{{responseData}}</p>
  </div>
</template>

<script>
import axios from 'axios'
// import $ from 'jquery'
export default {
  data () {
    return {
      responseData: 'unload data.'
    }
  },
  methods: {},
  computed: {},
  mounted () {
    // console.log('mounted')
    axios({
      url: '/static/resource.json',
      method: 'GET'
    }).then(response => {
      this.responseData = response.data
    })
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
  $red: red;
  .content {color: red;}
</style>
