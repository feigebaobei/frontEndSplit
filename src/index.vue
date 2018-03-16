<template>
  <div id="index">
    <!-- <h2>index</h2> -->
    <headercustom></headercustom>
    <!-- <img src="./assets/logo.png"> -->
    <nav class="nav">
      <router-link to="/page0">go to page0</router-link>
      <router-link to="/page1">go to page1</router-link>
      <router-link to="/page2">go to page2</router-link>
      <router-link to="/page3">go to page3</router-link>
      <router-link to="/vuex">go to vuex</router-link>
      <router-link to="/vuex2">go to vuex2</router-link>
    </nav>
    <router-view/>
    <content_custom></content_custom>
    <footer_custom></footer_custom>
  </div>
</template>

<script>
import header from './components/header.vue'
import content from './components/content.vue'
import footer from './components/footer.vue'
export default {
  name: 'index',
  components: {
    headercustom: header,
    content_custom: content,
    footer_custom: footer
  }
}
</script>

<style>
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
