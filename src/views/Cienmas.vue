<template>
    <div v-if="cinemaslist">

      <div>
           <div class="box">
            <div class="box2"><span class="span1">西安</span><i  class="iconfont icon-xialajiantouxiao"></i></div>
            <div><span class="span2">影院</span></div>
            <div class="box3">
                <router-link to="/cienmas/omags" v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive">
                    <i class="iconfont icon-sousuo"></i>
                </li>
                </router-link>
           </div>
           </div>
    
           <div class="daohang">
            <div class="leng">
                <span>全城</span>
                <i  class="iconfont icon-xialajiantouxiao"></i>
            </div>
            <div class="leng">
                <span>App订票</span>
                <i  class="iconfont icon-xialajiantouxiao"></i>
            </div>
            <div class="leng"> 
                <span>最近去过</span>
                <i  class="iconfont icon-xialajiantouxiao"></i>
            </div>
           </div>
      </div>

        <div style="padding-bottom:3.4375rem;">
            <div class="box4" v-for="data in cinemaslist" :key="data.cinemaId">
              <div>
                  <div class="addname">{{ data.name }}</div>
                  <div class="address">{{ data.address }}</div>  
              </div>
            </div>
        </div>

    </div>
</template>
<script>
import http from '@/axios/axios.js'
export default{
    data(){
        return {
           cinemaslist:null
        }
    },
    mounted(){
        http({
        url:'/gateway?cityId=340800&ticketFlag=1&k=7763204',
        headers:{
            ' X-Host':'mall.film-ticket.cinema.list'
        }
        })
        .then(res=>{
            console.log(res.data.data.cinemas)
            this.cinemaslist=res.data.data.cinemas
        })
    }
}
</script>
<style lang="scss" scoped>
.box{
    display: flex;
    justify-content: space-between;
    height: 2.75rem;
    background-color: white;
    line-height: 2.75rem;
    .span2{
        font-size: 17px;
    }
    .icon-sousuo{
        font-size: 35px;
    }
    .box2{
        width: 4.375rem;
        text-align: center;
        .span1{
        font-size: 13px;
        margin-right: 5px;
       
    }
    }
    .box3{
        width: 4.375rem;
        text-align: center;
    }
}
.icon-xialajiantouxiao{
        font-size: 10px;
        
    }
.daohang{
    display: flex;
    height: 3.0625rem;
    line-height: 3.0625rem;
    .leng{
        flex: 1;
        text-align: center;
        span{
            font-size: 0.875rem;
        }
    }
}
.box4{
    height: 2.8438rem;
    padding: 15px;
}
.addname{
    font-size: 15px;

    width: 13.2594rem;
    overflow: hidden;
    text-overflow:ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
}
.address{
    font-size: 12px;
    color: #797D82;
    
    margin-top: .5rem;
    width: 13.2594rem;
    overflow: hidden;
    text-overflow:ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
}
</style>