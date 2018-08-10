<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav class="nav">
      <router-link to="/page0">go to page0</router-link>
      <router-link to="/page1">go to page1</router-link>
      <router-link to="/page2">go to page2</router-link>
      <router-link to="/page3">go to page3</router-link>
    </nav>
    <router-view/>
    <content_custom></content_custom>
    <footer_custom></footer_custom>
  </div>
</template>

<script>
import content from './components/content.vue'
import footer from './components/footer.vue'
export default {
  name: 'app',
  components: {
    content_custom: content,
    footer_custom: footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
