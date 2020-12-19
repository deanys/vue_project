import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Resigter from '@/components/Resigter'

Vue.use(VueRouter)

const routes = [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/home", component: Home },
    { path: "/resigter", component: Resigter }
]

// router.beforeEach((to, from, next) => {
//     /* 必须调用 `next` */
//   })
const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    console.log("守卫导航")
    if (to.path == "/login") return next()
    const tokenStr = window.sessionStorage.getItem("token")
    if (!tokenStr) return next("/login")
    next()
})
export default router