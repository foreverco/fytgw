<template>
    <vue-seamless-scroll :data="listData" 
    class="seamless-warp" 
    :class-option="optionSetting"> <!-- 参数配置，计算属性 -->
        <ul class="item">
            <li v-for="(item,index) in listData" :key='index'>
                <span :class="{red:isRed}" class="title" v-text="item.title"></span>
                <span class="date" v-text="item.date"></span>
                
            </li>
        </ul>
    </vue-seamless-scroll>
</template>

<script>
    export default {
        props:{
            listData:{
                type:Array,
                 default:()=>{
                    return [
                {
                   'title': '店面盗窃',
                   'date': '1888-1965年在英国、美国、澳大利亚等地发生的十件疑案的总称这10件案件在当时都具有一定影响,并以“十大疑案”之名闻名于世。',
                 }, 
                 {
                   'title': '店面盗窃',
                   'date': '1888-1965年在英国、美国、澳大利亚等地发生的十件疑案的总称这10件案件在当时都具有一定影响,并以“十大疑案”之名闻名于世。',
                 },
                 {
                   'title': '店面盗窃',
                   'date': '1888-1965年在英国、美国、澳大利亚等地发生的十件疑案的总称这10件案件在当时都具有一定影响,并以“十大疑案”之名闻名于世。',
                 },
                 {
                   'title': '店面盗窃',
                   'date': '1888-1965年在英国、美国、澳大利亚等地发生的十件疑案的总称这10件案件在当时都具有一定影响,并以“十大疑案”之名闻名于世。',
                 },
                 {
                   'title': '店面盗窃',
                   'date': '1888-1965年在英国、美国、澳大利亚等地发生的十件疑案的总称这10件案件在当时都具有一定影响,并以“十大疑案”之名闻名于世。',
                 },
                 {
                   'title': '店面盗窃',
                   'date': '1888-1965年在英国、美国、澳大利亚等地发生的十件疑案的总称这10件案件在当时都具有一定影响,并以“十大疑案”之名闻名于世。',
                 },
                 {
                   'title': '店面盗窃',
                   'date': '1888-1965年在英国、美国、澳大利亚等地发生的十件疑案的总称这10件案件在当时都具有一定影响,并以“十大疑案”之名闻名于世。',
                 },
                 {
                   'title': '店面盗窃',
                   'date': '1888-1965年在英国、美国、澳大利亚等地发生的十件疑案的总称这10件案件在当时都具有一定影响,并以“十大疑案”之名闻名于世。',
                 }
                 ]
                }
            },
            isRed:{
                type:Boolean,
                default:()=>{
                    return false
                }
            }
        },
        mounted() {
            // this.listData = Array.from(this.listData)
            console.log(this.listData[0].title)
        },
        data () {
                return {

                }
            },
        computed: {
            // 公告滚动自定义
            optionSetting () {
                return {
                    step: 0.3, // 数值越大速度滚动越快
                    limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
                    hoverStop: true, // 是否开启鼠标悬停stop
                    direction: 1, // 0向下 1向上 2向左 3向右
                    openWatch: true, // 开启数据实时监控刷新dom
                    singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                    singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                    waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
                }
            }

       }
    }
</script>
<style scoped>
    .seamless-warp {
        position: relative;
        top:8%;
        height: 160px;
        width:100%;
        overflow: hidden;
        line-height: 4vh;
        margin-bottom:20px;
        /* border:1px solid red; */

    }
    .seamless-warp div{
        width:100%;

    }
    .item{
        width:100%;
    }
    .item li{
        margin:1% 0;
         width:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content: center; /* 水平居中 */
        align-items: center;     /* 垂直居中 */
    }
    .item span{
        display: inline-block;
        width:100%;
        font-size:1vw;
        text-align:unset;
        /* overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical; */
    }
    .item span:first-child{
        color:#fecd85;
        font-family: 'lv';
        font-size:0.7vw;
    }
    .red{
        color:red !important;
    }
</style>