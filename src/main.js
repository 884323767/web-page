import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
// import $ from 'jquery'
// import semantic from 'semantic'
//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
import login from './components/Login.vue'
import portfolio from './components/Portfolio.vue'
import summary from './components/Summary.vue'
import register from './components/Register.vue'
import test from './components/test.vue'
import First from './components/First.vue';
import Interface from './components/Interface.vue'
import transfer from './components/transfer.vue'
import reset from './components/Reset.vue'
// import './sass/resetCss.scss'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: [{
        path: '/first',
        component: First
    }, {
        path: '/test',
        component: test
    }, {
        path: '/login',
        component: login
    }, {
        path: '/portfolio',
        component: portfolio
    }, {
        path: '/summary',
        component: summary
    }, {
        path: '/register',
        component: register
    }, {
        path: '/reset',
        component: reset
    }, {
      path: '/interface',
      component: Interface
    }, {
        path: '*',
        redirect: '/login'
    }]

})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
