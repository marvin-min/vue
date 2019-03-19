<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CheckForm msg="Welcome to Your Vue.js App"/>
    <Nav/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CheckForm from './components/CheckForm.vue'
import Nav from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    CheckForm,
    Nav,
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
