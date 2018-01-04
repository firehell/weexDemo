// var App = require('../src/index.vue')
import App from './index.vue';
import router from './router/index.js';

new Vue(
    Vue.util.extend({
        el: '#root',
        router
    }, App)
)

router.push({path: '/login'})
