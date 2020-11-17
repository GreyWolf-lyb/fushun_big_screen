import Vue from 'vue'
import App from './App.vue'
// 挂载全局请求方法
import Api from './api/index';
Vue.use(Api);
import './assets/iconFont/iconfont.css';
import '../src/utils/rem';//适配文件
import store from './store' //全局状态 vuex
import './assets/style/common.css' // 公共样式
import router from './router'; //路由
Vue.config.productionTip = false;
import { getToken } from "@/utils/storage.js";

router.beforeEach((to, from, next) => {
    if (getToken()) { //如果有就直接到首页
        next();
    } else {
        if (to.path == '/login') { //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next('/login');
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')