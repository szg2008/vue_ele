// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/stylus/index.styl'

//注册vue插件
Vue.use(VueRouter)
Vue.use(VueResource)

//路由的使用

const routes = [
    {
        path:'/',
        redirect:'/goods'//通过重定向指定默认路由
    },
    {
        path:'/goods',
        component:goods
    },
    {
        path:'/ratings',
        component:ratings
    },
    {
        path:'/seller',
        component:seller
    }
]

let router = new VueRouter({
    mode:'history',
    linkActiveClass:'active',
    routes
})

new Vue({
    el:'#app',
    router,
    render:h=>h(App)
})
