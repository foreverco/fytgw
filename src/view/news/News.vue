<template>
  <div class="container-fluid">
    <div id="swiper" class="newsswiper" v-show="$route.name === 'companynews'">
      <img src="../../assets/img/news/banner-2.png" alt />
    </div>
    <div class="baseNav" v-show="$route.name === 'companynews'">
      <ul class="baseNavList">
        <li
          v-for="(item, index) in tecnologyList"
          :key="index"
          class="wow bounceInRight"
          data-wow-delay="0"
          @click="gotonews(item, index)"
        >
          <img class="swiper-lazy" :src="item.imgUrl" alt="轮播图" />
          <div
            class="baseNavListtitle"
            :style="{
              color: newsType === index ? '#245852' : '',
              fontWeight: newsType === index ? 'bold' : ''
            }"
          >
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
    <!-- 企业宣传片 -->
    <div id="company" class="container" v-if="$route.name === 'videonews'">
      <div class="row">
        <div class="col-xs-12 videoBox">
          <video
            id="videoactive"
            autoplay
            :src="videoActive"
            poster="../../../static/img/news/xuanchuanvidoe.png"
            controls="true"
            preload="auto"
            webkit-playsinline="true"
            playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x5-video-orientation="portraint"
            style="object-fit:fill"
          ></video>
        </div>
      </div>
    </div>
    <div id="Software" class="container">
      <div class="row">
        <div id="right" class="col-md-12 col-xs-12 wow bounceInRight">
          <router-view :newsType="newsType"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
// import Swiper from "swiper";
export default {
  name: "Software",
  data() {
    return {
      newsType: 0,
      videoActive: "",
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
      tecnologyList: [
        {
          title: "国草园资讯",
          routerUrl: "/news/companynews",
          imgUrl: "static/img/3/home/tac1.png"
        },
        {
          title: "最新公告",
          routerUrl: "/news/companynews",
          imgUrl: "static/img/3/home/tac2.png"
        },
        {
          title: "行业动态",
          routerUrl: "/news/companynews",
          imgUrl: "static/img/3/home/tac3.png"
        },
        {
          title: " 视频展示",
          routerUrl: "/news/videonews",
          imgUrl: "static/img/3/home/tac4.png"
        }
      ],
      /* 轮播图列表 */
      swiperList: [
        {
          img: require("@/assets/img/news/banner-2.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/news/banner-2.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/news/banner-2.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/news/banner-2.png"),
          path: "",
          title: "",
          content: ""
        }
      ]
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
    }
  },
  methods: {
    gotonews(e, index) {
      this.newsType = index;
      localStorage.setItem("newstype", this.newsType);
      if (e.routerUrl !== "/news/companynews") {
        this.newsType = 0;
        localStorage.setItem("newstype", 0);
        this.$router.push(e.routerUrl);
      }
    }
  },
  mounted() {
    console.log(this.$route.path);
    this.newsType = Number(localStorage.getItem("newstype"));
    console.log(Number(localStorage.getItem("newstype")));
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
#swiper {
  // height: 600px;
  // border: 1px solid blue;
  img {
    width: 100%;
  }
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
  // background: rgba(0, 0, 0, 0.1);
  a {
    font-size: 18px;
  }
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
  background: #81b25b;
  /* color:#c60c16 */
  &a {
    font-size: 20px;
    color: red !important;
  }
}
.activeImg {
  position: absolute;
  height: 70%;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}
/* 轮播图 */

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#company {
  // border: 1px solid red;

  #videoactive {
    width: 100%;
    // margin-left: 5%;
  }
}
</style>
