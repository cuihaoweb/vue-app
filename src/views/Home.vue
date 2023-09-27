
<template>
    <div>
        <!-- <imooc-panel /> -->
        <router-view />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
// import Panel from '@/components/Panel.vue';

export default defineComponent({
    name: 'MHome',
    components: {
        // 'imooc-panel': Panel
    }
});
</script>

<style lang="scss" scoped>
</style>
