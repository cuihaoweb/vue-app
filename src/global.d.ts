declare module '*.vue' {
    import {DefineComponent} from 'vue';
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;
}
