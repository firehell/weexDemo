<template>
    <div>
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="img in imageList">
                <image class="image" resize="cover" :src="img.src"></image>
            </div>
        </slider>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                imageList: [
                    {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                    {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    {src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ]
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .image {
        width: 750px;
        height: 200px;
    }

    .slider {
        width: 750px;
        height: 200px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }

    .frame {
        width: 750px;
        height: 200px;
        position: relative;
    }
</style>