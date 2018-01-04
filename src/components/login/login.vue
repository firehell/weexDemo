<template>
    <div class="wrapper">
        <image style="width: 750px;height: 1334px;"
               src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
        <div class="loginwrapper">
            <div class="inputuser">
                <text class="inputtitle">+86</text>
                <input class="user" type="text" placeholder="用户名" :autofocus=false value="" v-model="form.phone"/>
            </div>
            <div class="inputuser">
                <text class="inputtitle">密码</text>
                <input class="user" type="password" placeholder="密码" :autofocus=false value="" v-model="form.password"/>
            </div>
            <div class="inputuser">
                <wxc-button class="loginbtn" text="确定" @wxcButtonClicked="login"></wxc-button>
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
        position: absolute;
    }

    .loginwrapper {
        flex-direction: column;
        top: -1050px;
        width: 750px;
        height: 300px;
        padding-left: 30px;
        padding-right: 30px;
        background-color #0088fb;
    }

    .loginbtn {
        flex: 1;
        justify-items: center;
        align-items: center;
    }

    .inputuser {
        flex-direction: row;
        justify-items: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .inputtitle {
        flex: 0.3;
        justify-items: center;
        align-items: center;
        padding: 20px;
        background-color #fb1331;
    }

    .user {
        flex: 1;
        justify-items: center;
        align-items: center;
        padding: 20px;
    }
</style>