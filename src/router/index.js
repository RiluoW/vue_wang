import Vue from 'vue'
import VueRouter from 'vue-router'
import films from '@/views/Films.vue'
// import center from '@/views/Center.vue'
import omags from '@/views/omags.vue'
// import cienmas from '@/views/Cienmas.vue'
import filmslist from '@/views/filmslist.vue'
import next from '@/views/next.vue'
import zixun from '@/views/zixun.vue'



import nowplay from '@/views/films/nowplay.vue'
import coming from '@/views/films/coming.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/films',
    component:films,
    children:[
      {
        path:'/films/nowplay',
        component:nowplay,
        meta:{
          asd:true
        }
      },
      {
        path:'/films/coming',
        component:coming,
      },
      {
        path:'/films',
        redirect:'/films/nowplay' //重定向
      }
    
    ]
  },
  {
    name:"wang",
    path:'/filmslist/:id',
    component:filmslist
  },
  {
    path:'/center',
    component:()=>import('@/views/Center.vue'),
    meta:{
      asd:true
    }
  },
  {
    path:'/cienmas',
    component:()=>import('@/views/Cienmas.vue')
   
  },
  {
    path:'/cienmas/omags',
    component:omags
  },
  {
    path:'/next',
    component:next
  },
  {
    path:'/zixun',
    component:zixun
  },
  {
    path:'*',
    redirect:'/films' //重定向
  }

]

const router = new VueRouter({
  mode:'history',
  routes
})

// router.beforeEach((to,from,next)=>{
//   console.log(from);
//   if(from.meta.asd){
//     next({
//       path:'/next'
//     })
//   }else{
    
//   }
  
// })

export default router
