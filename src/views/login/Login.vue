<template>
    <div class="layui-container fly-marginTop">
        <div
            class="fly-panel fly-panel-user"
            pad20
        >
            <div
                class="layui-tab layui-tab-brief"
                lay-filter="user"
            >
                <ul class="layui-tab-title">
                    <li class="layui-this">
                        登入
                    </li>
                    <li>
                        <router-link :to="{ name: 'reg' }">
                            注册
                        </router-link>
                    </li>
                </ul>
                <div
                    id="LAY_ucm"
                    class="layui-form layui-tab-content"
                    style="padding: 20px 0"
                >
                    <Form
                        v-slot="{ errors }"
                        ref="form"
                        @submit="submit"
                    >
                        <div class="layui-tab-item layui-show">
                            <div class="layui-form layui-form-pane">
                                <div class="layui-form-item">
                                    <label
                                        for="L_email"
                                        class="layui-form-label"
                                    >用户名</label>
                                    <div class="layui-input-inline">
                                        <Field
                                            v-model="state.username"
                                            as="input"
                                            type="text"
                                            name="name"
                                            placeholder="请输入用户名"
                                            rules="required|email"
                                            autocomplete="off"
                                            class="layui-input"
                                        />
                                    </div>
                                    <div class="layui-form-mid">
                                        <span style="color: #c00">{{ errors.name }}</span>
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <label
                                        for="L_pass"
                                        class="layui-form-label"
                                    >密码</label>
                                    <div class="layui-input-inline">
                                        <Field
                                            v-model="state.password"
                                            as="input"
                                            type="password"
                                            name="password"
                                            placeholder="请输入密码"
                                            rules="required|min:6"
                                            autocomplete="off"
                                            class="layui-input"
                                        />
                                    </div>
                                    <div class="layui-form-mid">
                                        <span style="color: #c00">{{ errors.password }}</span>
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <div class="layui-row">
                                        <label
                                            for="L_vercode"
                                            class="layui-form-label"
                                        >验证码</label>
                                        <div class="layui-input-inline">
                                            <Field
                                                v-model="state.code"
                                                as="input"
                                                type="text"
                                                name="code"
                                                placeholder="请输入验证码"
                                                rules="required|length:4"
                                                autocomplete="off"
                                                class="layui-input"
                                            />
                                        </div>
                                        <div class>
                                            <span
                                                class="svg"
                                                style="color: #c00"
                                                @click="getCaptcha()"
                                                v-html="state.svg"
                                            />
                                        </div>
                                    </div>
                                    <div class="layui-form-mid">
                                        <span style="color: #c00">{{ errors.code }}</span>
                                    </div>
                                </div>
                                <div class="layui-form-item">
                                    <button
                                        class="layui-btn"
                                        type="submit"
                                    >
                                        立即登录
                                    </button>
                                    <!-- <button class="layui-btn" type="button" @click="validate().then(loginHandle)">
                    立即登录
                  </button> -->
                                    <span style="padding-left: 20px">
                                        <router-link :to="{ name: 'forget' }">忘记密码？</router-link>
                                    </span>
                                </div>
                                <div class="layui-form-item fly-form-app">
                                    <span>或者使用社交账号登入</span>
                                    <a
                                        onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                                        class="iconfont icon-qq"
                                        title="QQ登入"
                                    />
                                    <a
                                        onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                                        class="iconfont icon-weibo"
                                        title="微博登入"
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// import {Field,Form} from 'vee-validate';
import {defineComponent, onMounted} from 'vue';
// import {HttpResponse} from '@/common/interface';
// import {alert} from '@/components/modules/alert';
// import {LoginService} from '@/services/login';

// const {state, loginHandle, getCaptcha} = LoginService();

export default defineComponent({
    name: 'Login',
    components: {
        // Form, Field
    },
    setup () {
        // onMounted(async () => await getCaptcha());

        // const submit = async (values, form) => {
        //     const res = await loginHandle();
        //     const {code, msg} = res as HttpResponse;
        //     if (code !== 200) {
        //         form?.setErrors({code: msg});
        //     }
        //     // console.log('🚀 ~ file: Login.vue ~ line 90 ~ submit ~ res', res)
        //     // console.log('🚀 ~ file: Login.vue ~ line 89 ~ submit ~ form', form);
        //     // console.log('🚀 ~ file: Login.vue ~ line 89 ~ submit ~ values', values)
        // };

        return {
            // state,
            // loginHandle,
            // getCaptcha,
            // alert
            // submit
        };
    }
});
</script>
