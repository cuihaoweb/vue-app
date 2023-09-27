<template>
    <div class="fly-header layui-bg-black">
        <div class="fly-header layui-bg-black">
            <div class="layui-container">
                <a
                    class="fly-logo"
                    href="/"
                >
                    <img
                        src="../assets/img/logo-2.png"
                        alt="layui"
                    >
                </a>
                <ul class="layui-nav fly-nav layui-hide-xs">
                    <li class="layui-nav-item layui-this">
                        <a href="/"> <i class="iconfont icon-jiaoliu" />交流 </a>
                    </li>
                    <li class="layui-nav-item">
                        <a href="case/case.html">
                            <i class="iconfont icon-iconmingxinganli" />案例
                        </a>
                    </li>
                    <li class="layui-nav-item">
                        <a
                            href="http://www.layui.com/"
                            target="_blank"
                        >
                            <i class="iconfont icon-ui" />框架
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive} from 'vue';
// import {confirm} from '@/components/modules/alert';
// import router from '@/router';
// import store from '@/store';
// import toggleUtils from '@/utils/toggle';

export default defineComponent({
    setup () {
        // const {toggle, on} = toggleUtils(false, 500);

        // const state = reactive({
        //     isHover: false,
        //     hoverCtrl: { },
        //     hasMsg: false
        // });

        // const logout = () => {
        //     confirm(
        //         '确定退出吗？',
        //         () => {
        //             localStorage.clear();
        //             store.commit('setToken', '');
        //             store.commit('setUserInfo', {});
        //             store.commit('setIsLogin', false);
        //             router.push({name: 'index'});
        //         },
        //         () => {
        //             console.log('cancel');
        //         }
        //     );
        // };

        return {
            // ...state,
            // num: computed(() => store.state.num),
            // isShow: computed(() => store.state.isLogin),
            // userInfo: computed(() => store.state.userInfo),
            // toggle,
            // on,
            // logout
        };
    }
});
</script>

<style lang="scss" scoped>
.fly-logo {
  left: -15px;
  top: -10px;
  margin-left: 15px;
}
.layui-layer-tips {
  position: absolute;
  white-space: nowrap;
  right: 0;
  top: 60px;
  z-index: 2000;
}
</style>
