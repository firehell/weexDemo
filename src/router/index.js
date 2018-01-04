import Router from 'vue-router';
import Goods from '../components/home/goods/goods.vue';
import Ratings from '../components/home/ratings/ratings.vue';
import Seller from '../components/home/seller/seller.vue';
import Home from '../components/home/home.vue';
import Login from '../components/login/login.vue';

Vue.use(Router)

export default new Router({
    mode: 'abstract',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'goods',
                    name: 'goods',
                    component: Goods
                },
                {
                    path: 'ratings',
                    name: 'ratings',
                    component: Ratings
                },
                {
                    path: 'seller',
                    name: 'seller',
                    component: Seller
                }
            ]
        }
    ]
})

// const routes = [
// {
//   path:'/login',
//   name: 'login',
//   component: Login
// },
// {
//   path: '/mine/mine',
//   name: '用户中心',
//   component: Mine
// },
// {
//   path: '/help/helpCore',
//   name: '帮助中心',
//   component: HelpCore
// }
// ];
