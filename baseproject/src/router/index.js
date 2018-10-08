import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import productInfo from "../components/detailPage/productInfo"
import FriendshipLink from "../components/detailPage/FriendshipLink"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/productInfo',
      name:'productInfo',
      component:productInfo
    },
    {
      path:'/FriendshipLink',
      name:'FriendshipLink',
      component:FriendshipLink
    }
  ]
})
