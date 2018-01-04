<template>
    <div>
        <Myheader></Myheader>
        <div class="tab">
            <div class="tab-item" @click="jumpGoods">
                <text>商品</text>
            </div>
            <div class="tab-item" @click="jumpRatings">
                <text>评论</text>
            </div>
            <div class="tab-item" @click="jumpSeller">
                <text>商家</text>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import {WxcButton} from "weex-ui"
    import Myheader from './header/header.vue'

    export default {
        data: {},
        methods: {
            jumpGoods() {
                this.$router.push({path: '/home/goods'})
            },
            jumpRatings() {
                this.$router.push({path: '/home/ratings'})
            },
            jumpSeller() {
                this.$router.push({path: '/home/seller'})
            },
        },
        components: {
            Myheader
        },
        created() {
            this.$router.push({path: '/home/goods'})
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .tab {
        flex-direction: row
    }

    .tab-item {
        flex: 1;
        justify-items: center;
        align-items: center;
        padding: 20px;
    }
</style>