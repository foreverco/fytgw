<template>
  <div id="kytown">
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
                alt
              />
              <p>化德县朝阳镇选址地规划前</p>
            </div>
            <div class="baseBoxContownimgboxsmall">
              <img
                src="../../../../static/img/3/ky/townafter.png"
                class="wow bounceInRight"
                data-wow-delay="0.1s"
                alt
              />
              <p>化德县朝阳镇选址地规划后</p>
            </div>
          </div>
          <p class="baseBoxContowntxtbox hidden-xs">
            国草园集团计划利用公司自身的资源、团队和产业等优势，充分发挥当地地域特色，打造“旅游+中医药”特色旅游文化产品。蒙中草药康养小镇的选址工作目前已经完成，位于化德县朝阳镇，从化德县到北京的必经之路上，2020年将根据选址的面积将其打造成‘旅游+蒙中医药’特色旅游文化产品。以“寻找铁木真”为主题故事线，将“一乡一品”特色民俗村、中药花海、博物馆、科技大棚、蒙古特色项目、科研院所等融入旅游文化产业发展，将其建设成为具有地域特色的中药材康养小镇。
          </p>
        </div>
      </div>
      <div class="baseBoxTitle">
        <img src="../../../../static/img/3/ky/ztlogo.png" alt />
      </div>
      <div class="ztbg">
        <img src="../../../../static/img/3/ky/ztgs.png" alt />
      </div>
      <div class="ztcontent container">
        <div class="guijiBox">
          <img src="../../../../static/img/3/ky/imgline.png" alt />
        </div>
        <div class="storyBox">
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                class="wow bounceIn"
                data-wow-delay="0.3s"
                v-lazy="storyList[0].imgUrl"
                alt
              />
              <p>
                <span>{{ storyList[0].imgTxt1 }}</span>
                <span>{{ storyList[0].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[0].title }}</div>
            <div class="storyTxtBot hidden-xs">{{ storyList[0].con }}</div>
          </div>
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              v-lazy="storyList[0].storyImg"
              alt
            />
          </div>
        </div>
        <div class="storyBox">
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              v-lazy="storyList[1].storyImg"
              alt
            />
          </div>
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                v-lazy="storyList[1].imgUrl"
                class="wow bounceIn"
                data-wow-delay="0.3s"
                alt
              />
              <p>
                <span>{{ storyList[1].imgTxt1 }}</span>
                <span>{{ storyList[1].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[1].title }}</div>
            <div class="storyTxtBot hidden-xs">{{ storyList[1].con }}</div>
          </div>
        </div>

        <div class="storyBox">
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                class="wow bounceIn"
                data-wow-delay="0.3s"
                v-lazy="storyList[2].imgUrl"
                alt
              />
              <p>
                <span>{{ storyList[2].imgTxt1 }}</span>
                <span>{{ storyList[2].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[2].title }}</div>
            <div class="storyTxtBot hidden-xs">{{ storyList[2].con }}</div>
          </div>
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              v-lazy="storyList[2].storyImg"
              alt
            />
          </div>
        </div>
        <div class="storyBox">
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              v-lazy="storyList[3].storyImg"
              alt
            />
          </div>
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                class="wow bounceIn"
                data-wow-delay="0.3s"
                v-lazy="storyList[3].imgUrl"
                alt
              />
              <p>
                <span>{{ storyList[3].imgTxt1 }}</span>
                <span>{{ storyList[3].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[3].title }}</div>
            <div class="storyTxtBot hidden-xs">{{ storyList[3].con }}</div>
          </div>
        </div>

        <div class="storyBox">
          <div class="storyTxt">
            <div class="storyTxtTop">
              <img
                class="wow bounceIn"
                data-wow-delay="0.3s"
                v-lazy="storyList[4].imgUrl"
                alt
              />
              <p>
                <span>{{ storyList[4].imgTxt1 }}</span>
                <span>{{ storyList[4].imgTxt2 }}</span>
              </p>
            </div>
            <div class="storyTxtMid">{{ storyList[4].title }}</div>
            <div class="storyTxtBot hidden-xs">{{ storyList[4].con }}</div>
          </div>
          <div class="storyimg">
            <img
              class="wow bounceIn"
              data-wow-delay="0.3s"
              v-lazy="storyList[4].storyImg"
              alt
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
      ],
      storyList: [
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story1.png",
          imgTxt1: "第一站",
          imgTxt2: "寻找",
          title: "推本溯源",
          con:
            "以大型蒙古包作为整个项目地的核心建筑物，包内建设内蒙古和蒙中草药从古至今文化传承博物馆、产品销售馆、蒙古文化大型演义馆。包外设有大型舞台作为祭拜活动场所。围绕核心建筑打造蒙古包民宿部落，蒙古特色游乐活动及小吃美食街"
        },
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story2.png",
          imgTxt1: "第二站",
          imgTxt2: "深入",
          title: "独具匠心",
          con:
            "打造“一乡一品种”的蒙中药材文化民俗村，游客可以深入到村庄，感受不一样的蒙中药特色的民俗风情"
        },
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story3.png",
          imgTxt1: "第三站",
          imgTxt2: "沉浸",
          title: "宛如仙境",
          con:
            "种植各种中药材花卉，打造花海景观，种植区中间可分散建设蒙古草药命名的蒙古包餐厅；并在山坡上建设彩虹滑道、热气球、滑翔伞等娱乐项目"
        },
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story4.png",
          imgTxt1: "第四站",
          imgTxt2: "发现",
          title: "遗迹探寻",
          con: "发现成吉思汗边墙遗迹，探索古蒙古帝国辉煌，学习民族英雄精神"
        },
        {
          imgUrl: "static/img/3/ky/storybg.png",
          storyImg: "static/img/3/ky/story5.png",
          imgTxt1: "第五站",
          imgTxt2: "回归",
          title: "修身养性",
          con:
            "建造药膳精品美食会所，徽派建筑风格的湖景别墅高端酒店，夜晚打造大型烟花、LED灯光演艺活动，围绕水系到208省道之间区域种植观赏性强又能改善土质的柴胡、芍药、红花等中药材花卉"
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
#kytown {
  .topimgbox {
    img {
      width: 100%;
    }
  }
  .baseNav {
    width: 100%;
    background: url("../../../assets/img/3.0/tecbg.png") no-repeat;
    background-size: 100% 100%;
    .baseNavList {
      // background: red;
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      margin-top: -12px;
      height: 160px;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        -ms-flex-item-align: center;
        width: 20%;
        // padding: 3vw 0 !important;

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
          width: 93%;
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
                // font-size: rem(30);
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
