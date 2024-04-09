<template>
  <div>
   
   
   <tagbe></tagbe>

   <router-view></router-view>

  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import tagbe from '@/mycomponents/zhuye/tagbe.vue'
Vue.directive('hell',{
  inserted(el,ban){
    console.log(el)
    el.style.background="yellow"
  }
})
export default{
  methods:{
   
  },
  components:{
    tagbe
  },
  mounted(){
  
  }
}
</script>

<style>
html{
  font-size: 16px;
}
li{
  list-style: none;
}
.rout{
  color: red;
}
ul{
  padding: 0;
  margin: 0;
}
body{
  margin: 0;
}
</style>