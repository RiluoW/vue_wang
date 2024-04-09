<template>
    <!-- 主页轮播图显示   ， 热映和上映导航 -->
    <div>
       
        <swips :key="listswips.length">
          <swipsitem v-for="data in listswips" :key="data.id" class="swipsitem">
            <img :src="data.imgUrl" alt="">
          </swipsitem>
        </swips>
   

       <div class="box">
           <ul>
                <router-link v-for="(data,index) in datalist" :key="index" :to="data.href" v-slot="{navigate,isActive}">
                <li @click="navigate" ><span :class="isActive?'rout': ''">{{ data.name }}</span></li>
                </router-link>
            </ul>
       </div>
        <router-view></router-view>
          
    </div>
</template>
<script>
import swips from '@/mycomponents/films/swips.vue'
import swipsitem from '@/mycomponents/films/swipsitem.vue'

export default{
    data(){
        return {
            listswips:[],
            datalist:[{
                href:"/films/nowplay",
                name:"正在热映"
                },
                {
                href:"/films/coming",
                name:"即将上映"
                },
            ]
        }
    },
    components:{
        swips,
        swipsitem
    },
    mounted(){
        fetch("http://localhost:3000/banner.json")
        .then(res=>res.json())
        .then(res=>{
            
            this.listswips=res.banner
            console.log(this.listswips)
        })
    }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.swipsitem{
    img{
        width:100%;    
    }
}

    .box{
    height: 3.4375rem;
    width: 23.4375rem;
    position: sticky;
    top: -0.0625rem;
    background: white;
    

    ul{
        display: flex;
        padding-left: 0;
        margin-bottom: 0;
        li{
            flex: 1;
            line-height: 3.4375rem;
            font-size: 1.25rem;
            text-align: center;
            span{
                padding-bottom: 0.9rem;
            }
        }
    }

    .rout{
        border-bottom:2px solid red;
    }
}

</style>

