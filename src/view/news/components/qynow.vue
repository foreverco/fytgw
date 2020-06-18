<template>
  <div>
    <div class="visible-xs">
      <h3 class="xsTitle">{{ newsMsgObj.title }}</h3>
      <ul class="xsBox">
        <li v-for="(item, index) in newsMsgObj.imgList" :key="index">
          <!-- {{ item.imrUrl }} -->
          <img v-lazy="item.imrUrl" alt>
        </li>
      </ul>
    </div>
    <div class="qydt_container hidden-xs">
      <h3 class="xsTitle">{{ newsMsgObj.title }}</h3>
      <div class="swiper-container qydtcontainer" ref="qydtcontainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in newsMsgObj.imgList" :key="index">
            <img :src="item.imrUrl" alt>
          </div>
          <!-- <div class="swiper-slide">
            <img src="static/img/3/home/6-guanyuguocaoyuan-tupian3.png" alt>
          </div>
          <div class="swiper-slide">
            <img src="static/img/3/home/6-guanyuguocaoyuan-tupian4.png" alt>
          </div>-->
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../../components/Breadcrumb";
import { getNewsList } from "../../../util/newsList";
import Swiper from "swiper";
const newsListObj = getNewsList();
export default {
  data() {
    return {
      newsMsgObj: {}
    };
  },
  components: {
    Menu
  },
  mounted() {
    console.log(this.$route.path);
    let arr = String(this.$route.path).split("/");
    let basenewsId = arr[arr.length - 1];
    console.log(basenewsId);
    console.log(newsListObj.newsList);
    this.newsMsgObj = newsListObj.newsList.filter(item => {
      return item.newsid == basenewsId;
    })[0].baseNewsList;
    console.log(this.newsMsgObj.title);
    new Swiper(".qydtcontainer", {
      loop: true, // 循环模式选项
      effect: "coverflow",
      speed: 500,
      //自动播放
      // autoplay: 5000,
      autoplay: false,
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 1,
      coverflow: {
        rotate: 10, //设置为0
        stretch: 20,
        depth: 200,
        modifier: 3,
        slideShadows: true
      },
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
  },
  computed: {
    pathList() {
      return this.$route.matched.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.swiper-container-3d .swiper-slide-shadow-left {
  background-image: unset !important;
}
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: unset !important;
}
.swiper-container-3d .swiper-slide-shadow-left {
  opacity: 0 !important;
}
.swiper-container-3d .swiper-slide-shadow-right {
  opacity: 0 !important;
}
.qydt_container {
  height: 85vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .swiper-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    // border: 1px solid red;
  }
  .swiper-container .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .swiper-container .swiper-slide img {
    width: 140%;
  }
}
.xsTitle {
  width: 100%;
  text-align: center;
  font-family: "lv1";
}
.xsBox {
  // border: 1px solid red;
  width: 100%;
  li {
    width: 100%;
    img {
      width: 100%;
      margin: 1rem 0;
    }
  }
}
</style>
