<template>
  <!-- 主页底部导航栏 -->
   <div class="box">
     <ul>
        <router-link to="/films" v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'rout': ''">
          <i class="iconfont icon-dianying"></i>
          <span>电影</span>
        </li>
        </router-link>

        <router-link to="/cienmas" v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'rout': ''">
          <i class="iconfont icon-yingyuan"></i>
          <span>影院</span>
        </li>
        </router-link>

        <router-link to="/zixun" v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'rout': ''">
          <i class="iconfont icon-zixun"></i>
          <span>咨讯</span>
        </li>
        </router-link>

        <router-link to="/center" v-slot="{navigate,isActive}">
        <li @click="navigate" :class="isActive?'rout': ''">
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </li>
        </router-link>
     </ul>
   </div>
</template>
<script>

</script>
<style lang="scss" scoped>
li{
    list-style: none;
}

.box{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3.4375rem;
    width: 23.4375rem;
    background-color:white;
    
    
    ul{
        display: flex;
        padding-left: 0;
        margin-bottom: 0;
        li{
            flex: 1;
            line-height: 1.7188rem;
            font-size: .75rem;
            text-align: center;
            display: flex;
            flex-direction: column;
           
          
            i{
              font-size: 1.5rem;
              margin-top: 2px;
            }
        }
    }
   
}
</style>