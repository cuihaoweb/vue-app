import {createApp} from 'vue';
import directives from '@/common/directives';
import Alert from '@/components/modules/alert';
import router from '@/router';
import App from './App.vue';
import store from './store';
import '@/common/vee-validate';

const app = createApp(App);

app.use(Alert);

app.use(store);
app.use(router);

Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key]);
});

app.mount('#app');
