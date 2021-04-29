<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <Content/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>

<style>
#app {
  
}
</style>
