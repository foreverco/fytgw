<template>
  <div id="aboutUs">
    <div id="swiper" class="newsswiper">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <h1>{{item.title}}</h1>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>

    <div class='row aboutusTitle'>
        <div class='container'>
            <div class='row rowBox'>
                <div class='col-xs-6 imgBox'>
                    <img src="../../assets/img/aboutUs/3-1qiyewenhua-2guanyu-3.png" alt="">
                </div>
                <div class='col-xs-6 txtBox'>
                    <h3>
                        <span>
                            关于国草园
                        </span>
                    </h3>
                    <p>
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                        防护墙和父亲回复缺乏维护其合法去合肥
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class='container'>
        <ul class='row txtpicBox1'>
            <li class='col-xs-10' v-for="(item, index) in txtpicList" :key="index">
              <img :src="item.imgUrl" alt="">
            </li>
            
        </ul>
    </div>

    <ul class='row aboutUsList'>
        <li>
            企业发展理念
        </li>
        <li>
            以道地药材立足根本 以优质产品健康大众
        </li>
        <li>
            以科技创新引领行业
        </li>
    </ul>

    <div class='container'>
        <ul class='row txtpicBox2'>
            <li class='col-xs-10' v-for="(item, index) in txtpicList2" :key="index">
              <p>
                <img src="item.picUrl" alt="">
              </p>
              <img :src="item.imgUrl" alt="">
            </li>
            
        </ul>
    </div>

  </div>
</template>
<script>
import Swiper from "swiper"
export default {
  name: "aboutUs",
  data() {
    return {
                    /* 轮播图列表 */
      swiperList: [
        {
          img: require("@/assets/img/aboutUs/3-1banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/aboutUs/3-1banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/aboutUs/3-1banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/aboutUs/3-1banner.png"),
          path: "",
          title: "",
          content: ""
        }
      ],
      txtpicList: [
        {imgUrl:'static/img/qiye/aa1.png'},
        {imgUrl:'static/img/qiye/aa2.png'},
        {imgUrl:'static/img/qiye/aa3.png'},
        {imgUrl:'static/img/qiye/aa4.png'}
      ],
      txtpicList2: [
        {imgUrl:'static/img/qiye/a1.png',picUrl:'static/img/qiye/pic1.png'},
        {imgUrl:'static/img/qiye/a2.png',picUrl:'static/img/qiye/pic2.png'},
      ]
    };
  },
  mounted() {
          new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: "coverflow",
      speed: 2000,
      //自动播放
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
  }
};
</script>
<style scoped>
/* 轮播图 */
#swiper {
  /* border:1px solid red; */
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  /* border:1px solid blue; */
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
/* 关于国草园 */
.aboutusTitle{
    background: url('../../assets/img/aboutUs/3-1qiyewenhua-2guanyu-1.png') no-repeat;
    background-size: 100% 100%;
    padding:1vw 0;
    /* height:671px; */
}
.aboutusTitle .rowBox{
    position: relative;

}
.aboutusTitle .imgBox img {
    width:90%;
}
.aboutusTitle .txtBox {
    /* width: 100%; */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    /* background-color: pink; */
    /* border:1px solid pink; */
}
.aboutusTitle .txtBox h3{
    margin:0;
    padding:0;
    display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  font-size:2vw;
    font-family: 'lv1';
    background: url('../../assets/img/aboutUs/3-1qiyewenhua-2guanyu-2.png') no-repeat;
  background-position: center;
  height:20%;
  background-size:contain;
    /* border:1px solid blue; */
}
.aboutusTitle .txtBox h3 span{
    margin-left:-10%;
}
.aboutusTitle .txtBox p {
    /* border:1px solid red; */
    height:80%;
    color:#fff;
     font-size:1.3vw;
    font-family: 'lv1';
    padding:1vw;
    overflow: auto;
}

.aboutUsList{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color:#fff;
    background: url('../../assets/img/aboutUs/3-1qiyewenhua-8.png') no-repeat;
    background-size: 100% 100%;
}
.aboutUsList li {
  width:100%;
  display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* border:1px solid blue; */
    padding:10px 0;
    font-family: 'lv1';
}
.aboutUsList li:first-child{
  font-size:22px;

}
.txtpicBox1{
      display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin:20px 0;
}
.txtpicBox1 li{
  /* border:1px solid red; */
    display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin:20px 0;
}
.txtpicBox1 li img{
  width:80%;
}

.txtpicBox2{
      display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin:20px 0;
}
.txtpicBox2 li{
  /* border:1px solid red; */
    display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* margin:20px 0; */
}
.txtpicBox2 li img{
  width:80%;
}
</style>

