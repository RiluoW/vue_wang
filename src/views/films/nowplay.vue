<template>
   <!-- 主页，正在热映电影列表 -->
        <ul>
            <li v-for="data in nowfilms" :key="data.filmId" @click="hand(data.filmId)">
                <img :src="data.poster" alt="">
               <div> 
               <div class="box3">
                    <span class="span1">{{data.name}}</span>
                    <span class="span2">{{data.filmType.name}}</span>
               </div>
                <div class="box2">
                    <p :class="data.grade?'' : 'hidden'">观众评分 <span style="color: #ffb232;">{{ data.grade }}</span></p>
                    <p class="hodden">主演：<span>{{ data.actors | actorsname }}</span></p>
                    <p><span>{{ data.nation }}</span> | <span>{{ data.runtime }}分钟</span></p>
                </div>
               </div>
               <div class="box">
                 购票
               </div>
            </li>
        </ul>
   
</template>
<script>
import http from '@/axios/axios.js'

import Vue from 'vue'
Vue.filter('actorsname',(data)=>{
    if(data===undefined) return '暂无'
    return data.map(item=>item.name).join(' ')
})
export default{
    data(){
        return {
            nowfilms:[]
        }
    },
    methods:{
        hand(index){
            //编程式导航
        //    location.href="#/filmslist"

        //    this.$router.push(`/filmslist/${index}`) vue标准的导航方式，可以自行判断需不需呀加#号，通过路径跳转

              this.$router.push({
                name:'wang',
                params:{
                    id:index //通过命名路由跳转
                }
              })
        }
    },
    mounted(){
        //  http.httpnowplay()

        http({
        url:'/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2843238',
        headers:{
            ' X-Host':'mall.film-ticket.film.list'
        }
        })
        .then(res=>{
            console.log(res.data.data.films)
            this.nowfilms=res.data.data.films
        })
    }
}
</script>
<style lang="scss" scoped>
ul{
    padding-bottom: 3.4375rem;
   
}
li{
    width: 21.5625rem;
    padding: 15px 15px 15px 15px;
    display: flex;
  
    div{
        width: 13.075rem;
        margin: 0 10px 0 10px;
        .span1{
            margin: 0;
            font-size: 16px;
            color: black;
            margin-right: 5px;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
        }
        p{
            margin: 0;
        }
        .hodden{
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
        }
    }
    img{
        width:4.125rem;
        max-height: 6.1875rem;
    }
    .box{
        width: 3.125rem;
        height: 1.5625rem;
        border: 0.0625px solid #ff5f16;
        text-align: center;
        margin: 2.2188rem 0 2.2188rem 0;
        color: #ff5f16;
        line-height: 1.5625rem
    }
    .hidden{
       visibility:hidden 
    }
}
.box2 p{
    font-size: 13px;
    margin-top: 4px;
    color: #797D82;
}
.box3{
    display: flex;
    .span2{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        margin-top: 4px;
        }
    }


</style> 