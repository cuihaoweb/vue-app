import moment from 'dayjs';
import {createRouter, createWebHashHistory} from 'vue-router';
import store from '@/store/index';
import routes from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    ...routes
});

// 1. 基于角色的路由守卫
// 2. 组件级的权限控制 -> directive

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (token !== '' && token !== null) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (moment().isBefore(moment(payload.exp * 1000))) {
            // 取localStorage里面缓存的token信息 + 用户信息
            // 8-24小时， refresh token 1个月
            store.commit('setToken', token);
            store.commit('setUserInfo', userInfo);
            store.commit('setIsLogin', true);
            if (!store.state.ws) {
                store.commit('initWebSocket', {});
            }
        } else {
            localStorage.clear();
        }
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const isLogin: boolean = store.state.isLogin;
        if (isLogin) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router;
