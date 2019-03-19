<template>
<div id="app">

          <van-tabs type="card" class="box">
          <van-tab title="日">日</van-tab>
          <van-tab title="周">周</van-tab>
          <van-tab title="月">月</van-tab>
          <van-tab title="年">年</van-tab>
          <van-tab title="临检">临检</van-tab>
        </van-tabs>


    <CheckForm msg="Welcome to Your Vue.js App"/>
     <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/>
      <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/> <CheckForm msg="Welcome to Your Vue.js App"/>
    <Nav/>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import CheckForm from './components/CheckForm.vue'
import Nav from './components/NavBar.vue'
import { Tab, Tabs } from 'vant';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    CheckForm,
    Nav,
    'van-tabs':Tabs,
    'van-tab':Tab,
  }
}
</script>

<style>
.box{
	 position: relative;
	 height: 80px;
	 width: 100%;
	z-index: 999;
	}
.box-active{
  position: fixed;
  top: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
