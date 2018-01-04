<template>
    <div>
        <wxc-button text="确定"
                    @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { WxcButton } from 'weex-ui'
    export default {
        components: { WxcButton },
        methods: {
            wxcButtonClicked (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>