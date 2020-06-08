<template>
  <div class="container-fluid">
    <div class="row productpackBanner">
      <img src="/static/img/3/home/banner2.jpg" alt />
    </div>
    <div class="baseNav" v-show="$route.name !== 'companynews'">
      <ul class="baseNavList">
        <li
          v-for="(item, index) in tecnologyList"
          :key="index"
          class="wow bounceInRight"
          data-wow-delay="0"
          @click="gotonews(item, index)"
        >
          <img class="swiper-lazy" :src="item.imgUrl" alt="轮播图" />
          <div class="baseNavListtitle">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "Product",
  data() {
    return {
      tecnologyList: [
        {
          title: "国草园资讯",
          routerUrl: "/news/companynews",
          imgUrl: "static/img/3/home/cp1.png"
        },
        {
          title: "最新公告",
          routerUrl: "/news/companynews",
          imgUrl: "static/img/3/home/cp2.png"
        },
        {
          title: "行业动态",
          routerUrl: "/news/companynews",
          imgUrl: "static/img/3/home/cp3.png"
        },
        {
          title: " 视频展示",
          routerUrl: "/news/videonews",
          imgUrl: "static/img/3/home/tac4.png"
        }
      ]
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
#productpack .productpackBanner img {
  width: 100%;
}
.baseNav {
  width: 100%;
  background: url("/static/img/3/home/tecbg.png") no-repeat;
  background-size: 100% 100%;
  margin-top: -10px;
  .baseNavList {
    // background: red;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      -ms-flex-item-align: center;
      width: 20%;
      padding: 3vw 0 !important;

      // border: 1px solid red;
      &:hover {
        cursor: pointer;
        img {
          box-shadow: 3px 3px 6px 3px #24585250,
            -0px 0px 0px 0px rgba(255, 255, 255, 0.5);
          // animation: imgrotate 2s infinite alternate;
          // -webkit-animation: imgrotate 2s infinite alternate;
          // -moz-animation: imgrotate 2s infinite alternate;
          // -o-animation: imgrotate 2s infinite alternate;
          // -ms-animation: imgrotate 2s infinite alternate;
        }
        .baseNavListtitle {
          color: $mainColor;
          transform: translateX(10px);
        }
      }
      img {
        width: 40%;
        margin-right: 20px;
        border-radius: 100%;
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
      }
      .baseNavListtitle {
        // width: 50%;
        font-size: 1.3vw;
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
      }
    }
  }
}
</style>
