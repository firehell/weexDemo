<template>
    <div>
        <text>i am goods</text>
        <list class="list" @getStarCount>
            <cell class="cell" v-for="num in lists">
                <div class="panel">
                    <text class="text">{{num.desc}}</text>
                </div>
            </cell>
            <loading class="loading" @loading="onloading" loadmoreoffset="10" :display="showLoading">
                <text class="indicator">Loading ...</text>
            </loading>
        </list>
    </div>
</template>

<script type="text/ecmascript-6">
    const modal = weex.requireModule('modal')
    const stream = weex.requireModule('stream')
    let baseurl = 'http://gank.io/api/data/Android/10/'
    const LOADMORE_COUNT = 10
    let currentPage = 0

    export default {
        data() {
            return {
                showLoading: 'hide',
                lists: []
            }
        },
        methods: {
            onloading(event) {
                modal.toast({message: 'loading', duration: 1})
                this.showLoading = 'show'
                currentPage = currentPage + 1
                modal.toast({message: baseurl + currentPage, duration: 1})

                var getdata = []
                this.getStarCount(currentPage, res => {
                    getdata = res.ok ? res.data.results : '(network error)'
                })

                setTimeout(() => {
                    const length = this.lists.length
                    for (let i = 0; i < LOADMORE_COUNT; ++i) {
                        this.lists.push(getdata[i])
                    }
                    this.showLoading = 'hide'
                }, 1500)
            },
            getStarCount(pageNumber, callback) {
                console.log(baseurl + pageNumber)
                return stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: baseurl + pageNumber
                }, callback)
            }
        },
        created() {
            this.getStarCount(currentPage, res => {
                this.lists = res.ok ? res.data.results : '(network error)'
            })
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .loading {
        justify-content: center;
    }

    .indicator {
        color: #888888;
        font-size: 42px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
    }

    .panel {
        width: 600px;
        height: 250px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }

    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }
</style>