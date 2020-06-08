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
          @click="$router.push(item.routerUrl)"
        >
          <img class="swiper-lazy" :src="item.imgUrl" alt="轮播图" />
          <div class="baseNavListtitle">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <div class="baseBox">
      <div class="baseBoxTitle">
        <img src="/static/img/3/planting/zhny2.png" alt />
      </div>
      <div class="baseBoxCon">
        <div class="baseBoxConws">
          <div class="baseBoxConwsimgBox wow bounceInLeft">
            <img src="../../../../static/img/3/planting/blws2.png" alt />
          </div>
          <div class="baseBoxConwsTxt wow bounceInRight">
            <p class="baseBoxConwsTxtTitle">智慧玻璃温室</p>
            <p class="baseBoxConwsTxtCon">
              为切实加强蒙药材中药材资源保护和生产管理，国草园集团将集新兴的物联网、移动互联网、云计算和区块链技术为一体,依托部署在农业生产现场的各种传感节点(环境温湿度、土壤水分、二氧化碳、图像等)和无线通信网络实现农业生产环境的智能感知、智能预警、智能决策、智能分析、专家在线指导，为中药材生产提供精准化种植、可视化管理、智能化决策。平台的建成将转变传统的中药材生产模式，促进中药材生产过程中信息服务网络化、资源管理数字化、生产管理精准化、生产装备智能化、生产过程安全化。
            </p>
            <div class="baseBoxConwsTxtimgbox">
              <img
                src="../../../../static/img/3/planting/blwsx1.png"
                class="wow bounceInUp"
                data-wow-delay="0.3s"
                alt
              />
              <img
                src="../../../../static/img/3/planting/blwsx2.png"
                alt
                class="wow bounceInUp"
                data-wow-delay="0.6s"
              />
            </div>
            <p class="baseBoxConwsTxtFooter">各种传感节点</p>
          </div>
        </div>
      </div>
      <div class="baseBoxCon">
        <div class="baseBoxConws">
          <div class="baseBoxConwsTxt2 wow bounceInLeft">
            <p class="baseBoxConwsTxtTitle">智慧农业监控系统</p>
            <p class="baseBoxConwsTxtCon">
              利用传感器感知技术、信息融合传输技术和物联网技术,获取土壤、墒情、水文、长势等极为精细的中药材生长环境及资源信息,实时把握中药材的生长情况；打造智慧农业科技温室大棚，可根据不同药材的适宜环境进行远程联动控制大棚内智能设备，实现生产过程的智能化控制和科学化管理,提高资源利用率和劳动生产率。
            </p>
            <div class="baseBoxConwsTxtimgbox">
              <img
                src="../../../../static/img/3/planting/zhnyht2.png"
                class="wow bounceInUp"
                data-wow-delay="0.3s"
                alt
              />
              <img
                src="../../../../static/img/3/planting/zhnyht1.png"
                class="wow bounceInUp"
                data-wow-delay="0.6s"
                alt
              />
            </div>
            <p class="baseBoxConwsTxtFooter">系统界面展示</p>
          </div>
          <div class="baseBoxConwsimgBox2 wow bounceInRight">
            <img src="../../../../static/img/3/planting/login.png" alt />
          </div>
        </div>
      </div>
      <div class="baseBoxCon">
        <div class="baseBoxConws">
          <div class="baseBoxConwsimgBox wow bounceInLeft">
            <img src="../../../../static/img/3/planting/nydsj.png" alt />
          </div>
          <div class="baseBoxConwsTxt wow bounceInRight">
            <p class="baseBoxConwsTxtTitle">智慧农业大数据分析系统</p>
            <p class="baseBoxConwsTxtCon">
              以中药材种植、生长、采收、加工、存储、流通、销售过程中的数据为支撑，实现视频监控、环境监控、统计分析、自动预警和远程控制、建立相关作物生长数据库等功能，帮助生产管理人员积累种植经验和生产策略，为相关管理部门和企业提供管理手段和决策依据，提高农业信息化水平，为农业规范化管理提供可靠保障，使农民增产增收。
            </p>
            <div class="baseBoxConwsTxtimgbox3">
              <img
                src="../../../../static/img/3/planting/nydsjx.png"
                alt
                class="wow bounceIn"
                data-wow-delay="0.7s"
              />
              <!-- <img src="../../../../static/img/3/planting/blwsx2.png" alt="" /> -->
            </div>
            <p class="baseBoxConwsTxtFooter">系统界面展示</p>
          </div>
        </div>
      </div>
      <div class="baseBoxCon">
        <div class="baseBoxConws">
          <div class="baseBoxConwsTxt2 wow bounceInLeft">
            <p class="baseBoxConwsTxtTitle">智慧农业追溯源系统</p>
            <p class="baseBoxConwsTxtCon">
              4.通过对中药材生产、流通、销售过程的全程信息感知、传输、融合和处理,实现蒙中药材“从土地到市场”的全程追溯,为蒙中药材安全保驾护航。
            </p>
            <div class="baseBoxConwsTxtimgbox3">
              <img
                src="../../../../static/img/3/planting/nyzsyx.png"
                class="wow bounceIn"
                data-wow-delay="0.7s"
                alt
              />
              <!-- <img src="../../../../static/img/3/planting/blwsx2.png" alt="" /> -->
            </div>
            <p class="baseBoxConwsTxtFooter">消费者查询</p>
          </div>
          <div class="baseBoxConwsimgBox2 wow bounceInRight">
            <img src="../../../../static/img/3/planting/nyzsy.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "IntelligentAg",
  data() {
    return {
      tecnologyList: [
        {
          title: "种植基地",
          routerUrl: "/base/plantingbas",
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
      margin-bottom: 8vw;
      height: 100%;
      .baseBoxConws {
        // background: blue;
        position: relative;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        -ms-flex-item-align: center;
        .baseBoxConwsimgBox {
          margin-right: 2vw;
          width: 48%;
          overflow: hidden;
          // position: absolute;
          &:hover {
            cursor: pointer;
            img {
              transform: scale(1.1);
            }
          }
          img {
            width: 100%;
            transition: all 0.6s ease;
          }
        }
        .baseBoxConwsimgBox2 {
          margin-left: 2vw;
          width: 48%;
          overflow: hidden;
          // position: absolute;
          &:hover {
            cursor: pointer;
            img {
              transform: scale(1.1);
            }
          }
          img {
            width: 100%;
            transition: all 0.6s ease;
          }
        }
        .baseBoxConwsTxt {
          // position: absolute;
          margin-right: auto;
          width: 40%;
          // background: red;
          .baseBoxConwsTxtTitle {
            font-size: 1.8vw;
            height: 20%;
            font-weight: bold;
            color: $mainColor;
          }
          .baseBoxConwsTxtimgbox {
            display: flex;
            img {
              width: 49%;
              &:first-child {
                margin-right: 2%;
              }
            }
          }
          .baseBoxConwsTxtimgbox3 {
            display: flex;
            img {
              width: 90%;
            }
          }
          .baseBoxConwsTxtCon {
            height: 11vw;
            font-size: 0.7vw;
            letter-spacing: 0.2vw;
            margin: 1vw 0;
            line-height: 1.6vw;
            overflow: auto;
            // border: 1px solid red;
          }
          .baseBoxConwsTxtFooter {
            font-size: 1.2vw;
            // margin-top: 1vw;
            font-weight: bold;
            color: $mainColor;
            padding: 1vw 0.5vw;
            width: 40%;
            border-bottom: 1px solid #ccc;
          }
        }
        .baseBoxConwsTxt2 {
          // position: absolute;
          margin-left: auto;
          width: 40%;
          // background: red;
          .baseBoxConwsTxtTitle {
            font-size: 1.8vw;
            height: 20%;
            font-weight: bold;
            color: $mainColor;
          }
          .baseBoxConwsTxtimgbox {
            display: flex;
            img {
              width: 49%;
              &:first-child {
                margin-right: 2%;
              }
            }
          }
          .baseBoxConwsTxtimgbox3 {
            display: flex;
            img {
              width: 90%;
            }
          }
          .baseBoxConwsTxtCon {
            height: 10vw;
            font-size: 0.7vw;
            letter-spacing: 0.2vw;
            margin: 1vw 0;
            line-height: 1.6vw;
            overflow: auto;
            // border: 1px solid red;
          }
          .baseBoxConwsTxtFooter {
            font-size: 1.2vw;
            // margin-top: 1vw;
            font-weight: bold;
            color: $mainColor;
            padding: 1vw 0.5vw;
            width: 40%;
            border-bottom: 1px solid #ccc;
          }
        }
      }
    }
  }
}
</style>
