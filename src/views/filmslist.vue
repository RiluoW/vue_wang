<template>
     <!-- 详情页面 -->
    <div v-if="filmlist" style="padding-bottom: 3.4375rem; overflow: auto;">
        <div class="bad" @click="fanhui"> 
            <i class="iconfont icon-jiantou"></i>
        </div>
        <head-dao v-scroll="50">
            {{ filmlist.name }}
        </head-dao>

       <div class="box"> <img :src="filmlist.poster" alt=""></div>
       <div class="box2">
        <div class="box3">
            <div>
                <span class="span1">{{ filmlist.name }}</span>
                <span class="span4">{{ filmlist.filmType.name }}</span>
            </div>
            <div v-show="filmlist.grade?true : ''">
                <span class="span2">{{ filmlist.grade }}</span>
                <span class="span3"> 分 </span>
            </div>
        </div>
        <div>
            <div class="mabootm">{{ filmlist.category }}</div>
            <div class="mabootm">{{ filmlist.premiereAt | time}}上映</div>
            <div class="mabootm">{{ filmlist.nation }} | {{ filmlist.runtime }}分钟</div>

            <div class="mabootm" :class="overflow?'jianjie' : '' ">{{ filmlist.synopsis }}</div>

            <div class="box4" @click="heat"><i class="iconfont" :class="overflow?'icon-xialajiantouxiao' : 'icon-shouqijiantouxiao'"></i></div>
        </div>
       </div>

       <div style="background-color: #f4f4f4; height: 10px;"></div>

       <div >
            <div style="padding: 0.9375rem;">演职人员</div>

            <juimg style="padding-left: 15px;padding-bottom: 5px;" :perviem="4" name="wang">
                <juswiper v-for="(data,index) in filmlist.actors" :key="index">
                 <div style="width: 4rem"> <img :src="data.avatarAddress" style="width: 100%;"></div>
                <div style="width:4rem;">
                    <div style="text-align: center; font-size: 0.625rem; margin-top: .4rem;">{{ data.name }}</div>
                    <div style="text-align: center; font-size: 0.625rem; color: #797D82;">{{ data.role }}</div>
                </div>
                </juswiper>
            </juimg>
        </div>

        <div style="background-color: #f4f4f4; height: 11px;"></div>

        <div style="padding: 0.9375rem;">剧照</div>

        <juimg style="padding-left: 15px;" :perviem="2" name="chao">
                <juswiper v-for="(data,index) in filmlist.photos" :key="index">
                 <div style="width: 9.375rem; height: 6.25rem;">
                     <img :src="data" style="width: 100%;">
                </div>
                </juswiper>
        </juimg>
       
        <div style="background-color: #f4f4f4; height: 10px;"></div>
    </div>
</template>
<script>
import http from '@/axios/axios.js'
import moment from 'moment' //先npm下载，然后引入
import Vue from 'vue'

import juimg from '@/views/xqswiper/juimg.vue'
import juswiper from '@/views/xqswiper/juswiper.vue'
import headDao from '@/views/headDao.vue'

console.log(moment().format('YYYY-MM-DD'))

Vue.filter("time",(data)=>{
    return moment(data * 1000).format('YYYY-MM-DD')
})
Vue.directive('scroll',{
    inserted(el,band){
     console.log(document.body.scrollTop)
     el.style.display='none'
        window.onscroll=()=>{
        if(document.documentElement.scrollTop||document.body.scrollTop > band.value){
            el.style.display='block'
        }else{
            el.style.display='none'
        }
       }
    },
    //具有连带效果，用完之后要进行销毁 
    unbind(){
        window.onscroll=null
    }

})
export default {
    data(){
        return {
            filmlist:null,
            overflow:true
        }
    },
    components:{
        juimg,
        juswiper,
        headDao
    },
    created(){
        console.log("id",this.$route.params.id)

    //    http.httpfilmlist(this.$route.params.id)

        http({
           url:`/gateway?filmId=${this.$route.params.id}&k=6187388`,
           headers:{
            'X-Host':'mall.film-ticket.film.info'
           }
         })
        .then(res=>{
            console.log(res.data.data.film)
            this.filmlist=res.data.data.film
        })
    },
    methods:{
        heat(){
          this.overflow=!this.overflow
        },
        fanhui(){
            this.$router.back()
        }
        
    }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 13.125rem;
    overflow: auto

}
::-webkit-scrollbar{
    display: none;
}
.box2{
    padding: 12px 15px 15px 15px;
}
.box3{
    display: flex;
    justify-content: space-between;
    height: 1.6875;
    line-height: 1.6875rem;
    .span1{
        font-size: 18px;
        color: black;
        margin-right: 7px;
        
    }
    .span2{
        font-size: 18px;
        font-style: italic;
        color: #ffb232;
    }
    .span3{

        font-size: 12px;
        color: #ffb232;
    }
    .span4{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
        position: relative;
        bottom: 4px;
   
    }
}
.mabootm{
    margin-top: 0.25rem;
    color: #797D82;
    font-size: 0.8125rem;
}
.jianjie{
    height: 35px;
    overflow: hidden;
    margin-bottom:0.3rem;
}
div{
    img{
        width: 100%;
       
    }
}
.box4{
    text-align: center;
     color: wheat;
     height: 30px;
     line-height: 30px;
}

   
.bad{
    position: fixed;
    width: 1.875rem;
    height: 1.875rem;
    background-color:#edf0f3;
    border-radius: 50%;
    top: 7px;
    left:15px;
    .icon-jiantou{
    position: fixed;
    top:0;
    left: 20px;
    font-size:1.0625rem;
    height: 2.75rem;
    line-height: 2.75rem;
}
}

</style>