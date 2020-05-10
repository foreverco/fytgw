<template>
  <div class="container-fluid">
    <div id="swiper" class="newsswiper" v-show="$route.name != 'NewsMsg'">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in swiperList"
            :key="index"
          >
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <h1>{{ item.title }}</h1>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div id="Software" class="container">
      <div class="row">
        <div id="left" class="col-md-3 col-xs-12">
          <ul class="left-container wow bounceInLeft">
            <!-- <p>新闻中心</p> -->
            <li
              v-for="(item, index) in softwareList"
              :key="index"
              :class="{ pathActive: item.path == $route.path }"
            >
              <router-link :to="item.path"
                ><img
                  v-if="item.path == $route.path"
                  src="../../assets/img/news/dl.png"
                  class="activeImg"
                  alt=""
                />
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div id="right" class="col-md-9 col-xs-12 wow bounceInRight">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import Swiper from "swiper";
export default {
  name: "Software",
  data() {
    return {
      softwareList: [
        {
          name: "公司新闻",
          path: "/news/companynews"
        },
        {
          name: "视频展示",
          path: "/news/videonews"
        }
      ],
      /* 轮播图列表 */
      swiperList: [
        {
          img: require("@/assets/img/news/banner-1.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/news/banner-1.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/news/banner-1.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/news/banner-1.png"),
          path: "",
          title: "",
          content: ""
        }
      ]
    };
  },
  mounted() {
    console.log(this.$route.path);
    var wow = new WOW();
    wow.init();
    /* banner-swiper */
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
#left {
  margin: 20px 0;
}
.left-container {
  width: 60%;
  margin: 0 auto;
  /* border: 1px solid #474747; */
  padding: 10px;
  background: url("../../assets/img/news/cebianlan-kuang1.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 5px;
}
.left-container > p {
  text-align: center;
  line-height: 45px;
  padding: 0;
  margin: 0;
  /* background: #807474; */
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.left-container > li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  /* border-top: 1px solid #474747; */
  position: relative;
}
.left-container > li:first-child {
  border-bottom: 1px solid rgba(255, 255, 255, 1);
}
.left-container > li > a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.left-container > li:hover {
  /* background: #928989; */
}
#right {
  padding: 20px 0;
}

@media screen and (max-width: 768px) {
  #right {
    padding: 15px;
  }
}
.pathActive {
  background: #00000020;
  /* color:#c60c16 */
}
.activeImg {
  position: absolute;
  height: 70%;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}
/* 轮播图 */
/* #swiper {
  height: 600px;
} */
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  /* border:1px solid blue; */
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>
