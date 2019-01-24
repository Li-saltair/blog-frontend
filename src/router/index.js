import Vue from 'vue'
import Router from 'vue-router'

import index from './../views/home.vue'
import artdetail from './../views/artdetail.vue'
import artlist from './../views/artlist.vue'
import introduce from './../views/introduce.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: artlist },
        { path: '/detail', component: artdetail },
        { path: '/list', component: artlist },
        { path:'/introduce', component: introduce}
    ]
})