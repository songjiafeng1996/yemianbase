import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 测试用的路由
import productInfo from "../components/detailPage/productInfo"
import FriendshipLink from "../components/detailPage/FriendshipLink"
import commonButtom from "../components/detailPage/commonButtom"

// 项目用的路由
import Login from "../components/detailPage/Login"
import commonProduct from "../components/detailPage/commonProduct"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{navShow:true}
    },
    // 测试
    {
      path:'/productInfo',
      name:'productInfo',
      component:productInfo
    },
    {
      path:'/FriendshipLink',
      name:'FriendshipLink',
      component:FriendshipLink
    },
    {
      path:'/commonButtom',
      name:'commonButtom',
      component:commonButtom
    },




  //  项目使用
  {
    path:'/Login',
    name:'Login',
    component:Login,
    meta:{navShow:false}
  },
  {
    path:'/commonProduct',
    name:'commonProduct',
    component:commonProduct,
    meta:{navShow:true}
  },
  ]
})
