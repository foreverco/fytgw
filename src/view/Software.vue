<template>
    <div id="Software" class="container">
        <div class="row">
            <div id="left" class="col-md-3 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>企业简介</p>
                    <li v-for="(item,index) in softwareList" :key="index">
                        <router-link :to=item.path>{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div id="right" class="col-md-9 col-xs-12  wow bounceInRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Software',
    data(){
        return{
            softwareList: [
                {
              name: "企业简介",
              path: "/software/aboutUs"
            },
            {
              name: "重要公告",
              path: "/software/bigData"
            },
            {
              name: "行业动态",
              path: "/software/smartTown"
            },
            {
              name: "专题报道",
              path: "/software/bigData"
            },
             {
              name: "视频展示",
              path: "/software/bigData"
            }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
}
</script>
<style scoped>
#left{
    margin: 50px 0;
}
.left-container{
    width: 60%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #474747;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #474747;
}
.left-container>li>a{
    text-decoration: none;
}
.left-container>li:hover{
    background: #928989;
}
#right{
    padding: 50px 0;
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
}
</style>

