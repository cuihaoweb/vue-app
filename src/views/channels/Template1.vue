<template>
    <div class="layui-container">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md8">
                <imooc-list />
            </div>
            <div class="layui-col-md4">
                <imooc-simplebar />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
// import List from '@/components/contents/List.vue';
// import SimpleSideBar from '@/views/sidebar/SimpleSideBar.vue';

export default defineComponent({
    name: 'MTemplate1',
    components: {
        // 'imooc-list': List,
        // 'imooc-simplebar': SimpleSideBar
    }
});
</script>

<style lang="scss" scoped>
</style>
