<template>
  <div>
   <input type="text" v-model="text">
   <button @click="test">add</button>
   <ul>
    <li v-for="(data,index) in list" :key="index">{{ data }}</li>
   </ul>
  </div>
</template>

<script>
export default{
  data(){
    return {
      text:'',
      list:[]
    }
  },
  methods:{
    test(){
      this.list.push(this.text)
    }
  }
}
</script>