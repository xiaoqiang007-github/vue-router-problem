// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
console.log('VueRouter', createRouter, createWebHashHistory)
// import './router'
// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// B一级导航栏
import B from './components/B/index.vue'
// A一级导航栏
import P1 from './components/A/Page1.vue'
import P2 from './components/A/Page2.vue'
import M from './components/A/M.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: "/", redirect: "/A/P1",
    },
    {
        path: "/A", redirect: "/A/P1",
        children: [
            {
                path: 'P1',
                component: () => P1,
            },
            {
                path: 'M',
                component: () => M,
            },
            {
                path: 'P2',
                component: () => P2,
            },
        ]
    },
    { path: "/B", component: () => B },
    // { path: "/", redirect: "/home" },
    //   { path: '/home', component: Home, name: "home", },
    //   { path: '/about', component: About, name: "about", },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
// const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
// app.use(router)

// app.mount('#app')


export default router
// 现在，应用已经启动了！