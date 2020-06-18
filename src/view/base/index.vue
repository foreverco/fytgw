<template>
  <div class="container-fluid">
    <div class="topimgbox">
      <img src="../../../static/img/3/planting/basetop.png" alt>
    </div>
    <div class="baseNav container">
      <ul class="baseNavList row">
        <li
          v-for="(item, index) in tecnologyList"
          :key="index"
          class="wow bounceInRight col-md-3 col-xs-12"
          data-wow-delay="0"
          @click="baseGoto(item)"
        >
          <img class="swiper-lazy" :src="item.imgUrl" alt="轮播图">
          <div class="baseNavListtitle">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "Base",
  data() {
    return {
      tecnologyList: [
        {
          title: "种植基地",
          routerUrl: "/base/plantingbase",
          imgUrl: "static/img/3/home/tac1.png"
        },
        {
          title: "智慧农业",
          routerUrl: "/base/inteligentAg",
          imgUrl: "static/img/3/home/tac2.png"
        },
        {
          title: "康养小镇",
          routerUrl: "/base/kytown",
          imgUrl: "static/img/3/home/tac3.png"
        },
        {
          title: " 加工产业园",
          routerUrl: "/base/park",
          imgUrl: "static/img/3/home/tac4.png"
        }
      ]
    };
  },
  methods: {
    baseGoto(e) {
      if (this.$route.path !== e.routerUrl) {
        this.$router.push(e.routerUrl);
      }
    }
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.topimgbox {
  width: 100%;
  img {
    width: 100%;
  }
}
.baseNav {
  width: 100%;
  background: url("../../assets/img/3.0/tecbg.png") no-repeat;
  background-size: 100% 100%;
  margin-top: -12px;

  .baseNavList {
    // background: red;
    // width: 80%;
    // margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    // height: 160px;
    padding: 20px;
    li {
      padding: 1vw 0 !important;
      display: flex;
      justify-content: center;
      align-items: center;
      -ms-flex-item-align: center;
      // width: 20%;
      // border: 1px solid red;
      &:hover {
        cursor: pointer;
        img {
          box-shadow: 3px 3px 6px 3px #24585250,
            -0px 0px 0px 0px rgba(255, 255, 255, 0.5);
        }
        .baseNavListtitle {
          color: $mainColor;
          transform: translateX(10px);
        }
      }
      img {
        width: 25%;
        margin-right: 20px;
        border-radius: 100%;
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
      }
      .baseNavListtitle {
        // width: 50%;
        // font-size: 1.3vw;
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
      }
    }
  }
}
</style>
