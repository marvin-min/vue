<template>
  <div class="nav">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">任务</van-tabbar-item>
      <van-tabbar-item icon="search" dot>功能</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" @click="goToTag()">记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20" @click="goToSetting()">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import { Dialog } from "vant";
export default {
  data() {
    return {
      active: 1
    };
  },
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem
  },
  methods: {
    goToSetting: function() {
      Dialog.alert({
        title: "设置",
        message: "设置页面"
      }).then(() => {
        // on close
      });
    },
    goToTag:function(){
        console.log('gototag')
    }
  }
};
</script>
