<template>
    <div class="wrapper">
        <image class="divimg"
               src="http://osev8jqm0.bkt.clouddn.com/blackground.png"></image>
        <div class="loginwrapper">
            <div class="inputuser">
                <text class="inputtitle">+86</text>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import md5 from 'js-md5';
    import {WxcButton} from 'weex-ui'

    var modal = weex.requireModule('modal')
    const stream = weex.requireModule('stream')
    export default {
        data() {
            return {
                form: {
                    phone: '',
                    password: ''
                }
            }
        },
        components: {WxcButton},
        methods: {
            login(e) {
                // if (!this.form.phone) {
                //     console.log('will show toast')
                //     modal.toast({
                //         message: '用户名不能为空！',
                //         duration: 0.3
                //     })
                //     return false;
                // }
                // if (!this.form.password) {
                //     console.log('will show toast')
                //     modal.toast({
                //         message: '密码不能为空！',
                //         duration: 0.3
                //     })
                //     return false;
                // }
                this.$router.push('/home');
                // stream.fetch({
                //     method: 'get',
                //     type: 'json ',
                //     url: 'http://gank.io/api/data/Android/10/1'
                // }, res => {
                //     if (res.status === '200') {
                //         modal.toast({
                //             message: '登录成功',
                //             duration: 0.3
                //         })
                //
                //     }
                // })
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .wrapper {
        position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .divimg {
        position: absolute;
        width: 750px;
        height: 1334px;
        top: 0px;
        left: 0px;
    }

    .loginwrapper {
        position: absolute;
        flex-direction: column;
        top: 0px;
        left: 0px;
        width: 750px;
        height: 300px;
        background-color #0088fb;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inputuser {
        width: 100px;
        height: 100px;
        background-color: brown
        justify-content: center
    }
</style>