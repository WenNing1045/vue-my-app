import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Personal from '../pages/Personal.vue'
import Shopping from '../pages/Shopping.vue'
import Species from '../pages/Species.vue'
import nav from '../pages/nav.vue'
import brand from '../pages/brand.vue'
import login from '../pages/login.vue'
import register from '../pages/register.vue'



Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  // mode:'history',
  routes:[
    //默认主页路由
    {
      path:'/',
      redirect:'/home'
    },
    //主页
    {
      path:'/home',
      component:Home
    },
    //分类
    {
      path:'/species',
      component:Species,
      children:[
        {
          path:'',
          redirect:'nav'
        },
        {
          path:'/species/nav',
          component:nav
        },
        {
          path:'/species/brand',
          component:brand
        }
      ]

    },
    //购物车
    {
      path:'/shopping',
      component:Shopping
    },
    //个人中心
    {
      path:'/personal',
      component:Personal,
      children:[
        {
          path:'',
          redirect:'login'
        },
        {
          path:'login',
          component:login
        },
        {
          path:'register',
          component:register
        }
      ]
    }
  ]
})
