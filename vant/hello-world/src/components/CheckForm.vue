<template>
  <div class="hello">
      <h1>大家好</h1>
      <van-checkbox-group v-model="result">
  <van-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </van-checkbox>
</van-checkbox-group>
  </div>
</template>
<script>
import { Checkbox, CheckboxGroup } from 'vant';
export default {
   components:{
    'van-checkbox':Checkbox,
    'van-checkbox-group':CheckboxGroup 
  },
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
</script>

      