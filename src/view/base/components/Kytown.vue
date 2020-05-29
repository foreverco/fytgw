<template>
  <div id="intelligentag">
    <div class="topimgbox">
      <img src="../../../../static/img/3/planting/basetop.png" alt />
    </div>
    <div class="baseNav">
      <ul class="baseNavList">
        <li
          v-for="(item, index) in tecnologyList"
          :key="index"
          class="wow bounceInRight"
          data-wow-delay="0"
        >
          <img class="swiper-lazy" :src="item.imgUrl" alt="轮播图" />
          <div class="baseNavListtitle">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <div class="baseBox">
      <div class="baseBoxTitle">
        <img src="../../../../static/img/3/ky/kylogo.png" alt />
      </div>
      <div class="baseBoxCon">
        <div class="baseBoxContown container">
          <div class="baseBoxContownimgbox">
            <div class="baseBoxContownimgboxsmall">
              <img
                src="../../../../static/img/3/ky/townbefore.png"
                class="wow bounceInLeft"
                data-wow-delay="0.1s"
                alt=""
              />
              <p>化德縣朝陽鎮選址地規化前</p>
            </div>
            <div class="baseBoxContownimgboxsmall">
              <img
                src="../../../../static/img/3/ky/townafter.png"
                class="wow bounceInRight"
                data-wow-delay="0.1s"
                alt=""
              />
              <p>化德縣朝陽鎮選址地規化后</p>
            </div>
          </div>
          <p class="baseBoxContowntxtbox">
            为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
          </p>
        </div>
      </div>
      <div class="baseBoxTitle">
        <img src="../../../../static/img/3/ky/ztlogo.png" alt />
      </div>
      <div class="ztbg">
        <img src="../../../../static/img/3/ky/ztgs.png" alt="" />
      </div>
      <div class="ztcontent container">
        <div class="guijiBox">
          <img src="../../../../static/img/3/ky/imgline.png" alt="" />
        </div>
        <div class="storyBox">
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                class="wow bounceIn"
                data-wow-delay="0.3s"
                :src="storyList[0].imgUrl"
                alt=""
              />
              <p>
                <span>{{ storyList[0].imgTxt1 }}</span
                ><span>{{ storyList[0].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[0].title }}</div>
            <div class="storyTxtBot">{{ storyList[0].con }}</div>
          </div>
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              :src="storyList[0].storyImg"
              alt=""
            />
          </div>
        </div>
        <div class="storyBox">
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              :src="storyList[1].storyImg"
              alt=""
            />
          </div>
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                :src="storyList[1].imgUrl"
                class="wow bounceIn"
                data-wow-delay="0.3s"
                alt=""
              />
              <p>
                <span>{{ storyList[1].imgTxt1 }}</span
                ><span>{{ storyList[1].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[1].title }}</div>
            <div class="storyTxtBot">{{ storyList[1].con }}</div>
          </div>
        </div>

        <div class="storyBox">
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                class="wow bounceIn"
                data-wow-delay="0.3s"
                :src="storyList[2].imgUrl"
                alt=""
              />
              <p>
                <span>{{ storyList[2].imgTxt1 }}</span
                ><span>{{ storyList[2].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[2].title }}</div>
            <div class="storyTxtBot">{{ storyList[2].con }}</div>
          </div>
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              :src="storyList[2].storyImg"
              alt=""
            />
          </div>
        </div>
        <div class="storyBox">
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              :src="storyList[3].storyImg"
              alt=""
            />
          </div>
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                class="wow bounceIn"
                data-wow-delay="0.3s"
                :src="storyList[3].imgUrl"
                alt=""
              />
              <p>
                <span>{{ storyList[3].imgTxt1 }}</span
                ><span>{{ storyList[3].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[3].title }}</div>
            <div class="storyTxtBot">{{ storyList[3].con }}</div>
          </div>
        </div>

        <div class="storyBox">
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                class="wow bounceIn"
                data-wow-delay="0.3s"
                :src="storyList[4].imgUrl"
                alt=""
              />
              <p>
                <span>{{ storyList[4].imgTxt1 }}</span
                ><span>{{ storyList[4].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[4].title }}</div>
            <div class="storyTxtBot">{{ storyList[4].con }}</div>
          </div>
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              :src="storyList[4].storyImg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "Kytown",
  data() {
    return {
      tecnologyList: [
        {
          title: "种植基地",
          imgUrl: "static/img/3/home/tac1.png"
        },
        {
          title: "智慧农业",
          imgUrl: "static/img/3/home/tac2.png"
        },
        {
          title: "康养小镇",
          imgUrl: "static/img/3/home/tac3.png"
        },
        {
          title: " 加工产业园",
          imgUrl: "static/img/3/home/tac4.png"
        }
      ],
      storyList: [
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story1.png",
          imgTxt1: "第一站",
          imgTxt2: "寻找",
          title: "推本溯源",
          con:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛"
        },
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story2.png",
          imgTxt1: "第二站",
          imgTxt2: "深入",
          title: "独具匠心",
          con:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛"
        },
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story3.png",
          imgTxt1: "第三站",
          imgTxt2: "沉浸",
          title: "宛如仙境",
          con:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛"
        },
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story4.png",
          imgTxt1: "第四站",
          imgTxt2: "发现",
          title: "遗迹探寻",
          con:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛"
        },
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story5.png",
          imgTxt1: "第五站",
          imgTxt2: "回归",
          title: "修身养性",
          con:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛"
        }
      ]
    };
  },
  mounted() {
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  }
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
@keyframes imgrotate {
  0% {
    transform: rotate(0);
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -o-transform: rotate(0);
    -ms-transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
}
#intelligentag {
  .topimgbox {
    img {
      width: 100%;
    }
  }
  .baseNav {
    width: 100%;
    background: url("/static/img/3/home/tecbg.png") no-repeat;
    background-size: 100% 100%;
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
            box-shadow: 10px 10px 20px 10px #24585250,
              -10px 10px 10px 10px rgba(255, 255, 255, 0.5);
            transform: scale(1.05);
            // animation: imgrotate 2s infinite alternate;
            // -webkit-animation: imgrotate 2s infinite alternate;
            // -moz-animation: imgrotate 2s infinite alternate;
            // -o-animation: imgrotate 2s infinite alternate;
            // -ms-animation: imgrotate 2s infinite alternate;
          }
          .baseNavListtitle {
            color: $mainColor;
            transform: translateX(10px) scale(1.2);
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
  .baseBox {
    .baseBoxTitle {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      -ms-flex-item-align: center;
      img {
        height: 100%;
      }
    }
    .baseBoxCon {
      // border: 1px solid red;
      margin-bottom: 1vw;
      height: 100%;
      .baseBoxContown {
        // border: 1px solid blue;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .baseBoxContownimgbox {
          display: flex;
          align-items: center;
          justify-content: center;
          .baseBoxContownimgboxsmall {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            img {
              width: 90%;
            }
            p {
              // border: 1px solid red;
              text-align: center;
              // font-family: "lv2";
              letter-spacing: 7px;
              font-size: 20px;
            }
          }
        }
        .baseBoxContowntxtbox {
          // border: 1px solid red;
          text-align: center;
          font-size: 14px;
          width: 90%;
          margin-top: 2vw;
          letter-spacing: 4px;
          line-height: 20px;
        }
      }
    }
    .ztbg {
      margin-bottom: 50px;
      img {
        width: 100%;
      }
    }
    .ztcontent {
      // border: 1px solid red;
      position: relative;
      margin-bottom: 50px;
      .guijiBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -49%);
        img {
          width: 100%;
          // border: 1px solid red;
        }
      }
      .storyBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        // margin: 20px 0;
        .storyTxt {
          width: 45%;
          // border: 1px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          > div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .storyTxtTop {
            // border: 1px solid red;
            position: relative;
            p {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              span {
                margin: 0 8px;
                color: #fff;
                font-size: 20px;
                font-family: "lv1";
              }
            }
            img {
              // width: 100%;
            }
          }
          .storyTxtMid {
            height: 4vw;
            font-size: 20px;
            font-family: "lv1";
            letter-spacing: 0.3vw;
          }
          .storyTxtBot {
            line-height: 1.5vw;
            text-align: center;
            letter-spacing: 0.3vw;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
        .storyimg {
          width: 45%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
