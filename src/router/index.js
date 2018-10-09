import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import modem from '@/components/mode/modem'
import otherm from '@/components/mode/otherm'
import find from '@/components/mode/find'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: home
    // },
    // {
    //   path: '/modem',
    //   name: 'modem',
    //   component: modem
    // },
    // {
    //   path: '/otherm',
    //   name: 'otherm',
    //   component: otherm
    // },
    { path:'/',component:home ,
      children:[
        {path:'/',component:modem},
        {path:'/home/otherm',component:otherm},
        {path:'/home/find',component:find}
        ]
    }


  ]
})
