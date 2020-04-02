<template>
  <div id="goodscon" class="container">
    <div class='row goodsTitle'>
      甘草片泡水500克g瓶装干草粉野生茶叶食用中药材搭黄芪当归党参茶
    </div>
    <div class="row goodsBox">
      <div class="col-md-7 goodspic wow bounceInLeft">
        <div class="swiper-box">
          <!-- swiper1 -->
          <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
            <swiper-slide class="slide-1" v-for="(item, index) in swiperList" :key="index">
              <img class="comp-intro-banner" :src="item.imgUrl" alt="item.title">
            </swiper-slide>

            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          </swiper>
          <!-- swiper2 Thumbs -->
          <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
            <swiper-slide class="slide-1" v-for="(item, index) in swiperList" :key="index">
              <img class="comp-intro-banner" :src="item.imgUrl" alt="item.title">
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="col-md-5 goodsprice wow bounceInRight">
        <div class="priceBox">
          <div class="priceBox1">
            <p>
              <span>价格</span>
              <span>￥68.88</span>
            </p>
            <p>
              <span>体验价</span>
              <span>￥28.88</span>
            </p>
          </div>
          <div class="priceBox2">
            <p>好评率</p>
            <p>98%</p>
          </div>
        </div>
        <ul class="priceList">
          <li>
            <span>数量</span>
            <span>
              <el-input-number
                v-model="goodsNum"
                controls-position="right"
                @change="handleChange"
                :min="1"
                :max="10"
              ></el-input-number>
            </span>
          </li>
          <li>
            <span>承诺</span>
            <span class="hope">
              <i>以人为本</i>
              <i>诚信经营</i>
              <i>发展蒙药</i>
              <i>致力健康</i>
            </span>
          </li>
          <li>
            <span>运费</span>
            <span>15:00 之前付款 当天发货</span>
          </li>
          <li>
            <span>优惠</span>
            <span>7天无理由退货</span>
          </li>
        </ul>
        <div class="btnBox">
          <p>立即购买</p>
        </div>
      </div>
    </div>

    <ul class="row navTitle">
      <li
        v-for="(item, index) in navLists"
        :key="index"
        :class="{navActive:isnavActive==index}"
        @click='changenavMsg(index)'
      >{{item.name}}</li>
      <li>
      </li>
    </ul>
    <div class='row testBox wow zoomIn'>
        <img src="static/img/test.png" alt="">
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  data() {
    return {
      goodsNum: 1,
      /* 轮播图 */
      swiperList: [
        {
          imgUrl: "static/img/chanpin/goods4.png",
          title: "pic1"
        },
        {
          imgUrl: "static/img/chanpin/goods3.png",
          title: "pic1"
        },
        {
          imgUrl: "static/img/chanpin/goods2.png",
          title: "pic1"
        },
        {
          imgUrl: "static/img/chanpin/goods1.jpg",
          title: "pic1"
        }
      ],
      swiperOptionTop: {
        autoplay:true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      /* 推荐详情 */
      navLists: [
        { name: "相关推荐" },
        { name: "产品详情" },
        { name: "专享服务" },
        { name: "优惠活动" }
      ],
      isnavActive: 0
    };
  },
  mounted() {
    // console.log(this.$refs.swiperTop.$swiper.controller)
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
     /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    changenavMsg(e) {
       this.isnavActive = e
    }
  }
};
</script>
<style>
 .goodsTitle{
   font-size:22px;
   font-weight: bold;
   margin:10px 0;
 }

/* 计数器样式 */
.el-input-number.is-controls-right .el-input-number__decrease,
.el-input-number.is-controls-right .el-input-number__increase {
  height: auto;
  line-height: 10px;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 30px;
  line-height: 30px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-input-number {
  position: relative;
  display: inline-block;
  width: 110px;
  line-height: 28px;
}
</style>

<style lang="scss" scoped>
.container {
  padding: 0;
}
#goodscon {
//   border: 1px solid yellow;
//   height: 1000px;
}

/* 轮播图 */
.swiper-box {
  width: 100%;
}
.swiper-container {
  //  background-color: red;
}
.goodsBox {
  content: "";
  display: block;
  clear: both;
  //   background: pink;
  margin-bottom: 30px;
}

.goodspic {
  height: 100%;
}
.gallery-top {
  height: 70% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 30% !important;
  box-sizing: border-box;
  padding: 10px 0;
  //  border:1px solid red;
  display: flex;
  justify-content: flex-start;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  //  border:1px solid red;
  height: 100%;
  opacity: 0.4;
}
.slide-1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-slide img {
  width: 100%;
  //   border:1px solid red;
}
.gallery-thumbs img {
  width: 100%;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.goodsprice {
  //   background: blue;
  height: 100%;
}
.priceBox {
  height: 110px;
  width: 100%;
  background: #fff3e5;
  display: flex;
  align-items: center;
  padding: 15px 0;
}
.priceBox1 {
  width: 70%;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 40px;
}
.priceBox1 p {
  width: 100%;
  font-size: 16px;
}
.priceBox1 p:first-child {
  text-decoration: line-through;
}
.priceBox1 p span:first-child {
  display: inline-block;
  width: 80px;
}
.priceBox1 p:last-child span:last-child {
  font-size: 20px;
  color: orange;
}
.priceBox2 {
  width: 30%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.priceBox2 p {
  width: 100%;
  //   border:1px solid red;
  text-align: center;
}
.priceBox2 p:last-child {
  color: orange;
  font-size: 20px;
}
.priceList {
  //   border: 1px solid red;
  padding-left: 40px;
}
.priceList li {
  height: 70px;
  display: flex;
  align-items: center;
}
.priceList li span {
  width: 80%;
  display: inline-block;
}
.priceList li span:first-child {
  width: 80px;
}
.priceList li .hope {
  //   border: 1px solid red;
  font-family: "lv";
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.priceList li .hope i {
  font-style: normal;
}
.btnBox {
  // border:1px solid yellow;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.btnBox p {
  width: 60%;
  background: #c5000c;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  transition: all 0.6s;
}
.btnBox p:hover {
  cursor: pointer;
  border:1px solid #c5000c;
  background: #fff;
  color:#c5000c;
  transform: scale(1.2);
}
.navTitle {
  background: #c5000c;
  display: flex;
  align-items: flex-end;
  height: 50px;
  //   padding-left:10px;
}
.navTitle li {
  width: 15%;
  height: 40px;
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navTitle li:hover {
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.navTitle li.navActive {
  background: #fff;
  color: #c5000c;
  transition: all 0.6s;
}
.testBox{
  margin-top:20px;
}
.testBox img{
  width:100%;
}
@media screen and (max-width: 768px){
      .navTitle li {
  width: 23%;
  height: 40px;
  color: #fff;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
}
</style>

