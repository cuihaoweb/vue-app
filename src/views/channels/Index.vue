<template>
    <div class="layui-container">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md8">
                <imooc-top />
                <imooc-list />
            </div>
            <div class="layui-col-md4">
                <imooc-sidebar />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
// import List from '@/components/contents/List.vue';
// import Top from '@/components/contents/Top.vue';
// import SideBar from '@/views/sidebar/index.vue';

export default defineComponent({
    name: 'MIndex',
    components: {
        // 'imooc-sidebar': SideBar,
        // 'imooc-list': List,
        // 'imooc-top': Top
    }
});
</script>

<style lang="scss" scoped>
</style>
