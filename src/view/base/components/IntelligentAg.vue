<template>
  <div id="intelligentag">
    <div class="topimgbox">
      <img src="../../../../static/img/3/planting/basetop.png" alt="" />
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
        <img src="../../../../static/img/3/planting/zhny2.png" alt="" />
      </div>
      <div class="baseBoxCon">
        <div class="baseBoxConws">
          <div class="baseBoxConwsimgBox wow bounceInLeft">
            <img src="../../../../static/img/3/planting/blws2.png" alt="" />
          </div>
          <div class="baseBoxConwsTxt wow bounceInRight">
            <p class="baseBoxConwsTxtTitle">智慧玻璃温室</p>
            <p class="baseBoxConwsTxtCon">
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
            </p>
            <div class="baseBoxConwsTxtimgbox">
              <img
                src="../../../../static/img/3/planting/blwsx1.png"
                class="wow bounceInUp"
                data-wow-delay="0.3s"
                alt=""
              />
              <img
                src="../../../../static/img/3/planting/blwsx2.png"
                alt=""
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
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
            </p>
            <div class="baseBoxConwsTxtimgbox">
              <img
                src="../../../../static/img/3/planting/zhnyht2.png"
                class="wow bounceInUp"
                data-wow-delay="0.3s"
                alt=""
              />
              <img
                src="../../../../static/img/3/planting/zhnyht1.png"
                class="wow bounceInUp"
                data-wow-delay="0.6s"
                alt=""
              />
            </div>
            <p class="baseBoxConwsTxtFooter">系统界面展示</p>
          </div>
          <div class="baseBoxConwsimgBox2 wow bounceInRight">
            <img src="../../../../static/img/3/planting/login.png" alt="" />
          </div>
        </div>
      </div>
      <div class="baseBoxCon">
        <div class="baseBoxConws">
          <div class="baseBoxConwsimgBox wow bounceInLeft">
            <img src="../../../../static/img/3/planting/nydsj.png" alt="" />
          </div>
          <div class="baseBoxConwsTxt wow bounceInRight">
            <p class="baseBoxConwsTxtTitle">智慧农业大数据分析系统</p>
            <p class="baseBoxConwsTxtCon">
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
            </p>
            <div class="baseBoxConwsTxtimgbox3">
              <img
                src="../../../../static/img/3/planting/nydsjx.png"
                alt=""
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
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
              为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛(Venlo)式连栋玻璃温室，该类型温室外形美观，结构稳定，保温性能卓越，且雨槽多，跨度大，抗风能力强，土地及空间利用率高，是目前综合性能最好的一种高档温室。
            </p>
            <div class="baseBoxConwsTxtimgbox3">
              <img src="../../../../static/img/3/planting/nyzsyx.png" alt="" />
              <!-- <img src="../../../../static/img/3/planting/blwsx2.png" alt="" /> -->
            </div>
            <p class="baseBoxConwsTxtFooter">消费者查询</p>
          </div>
          <div class="baseBoxConwsimgBox2 wow bounceInRight">
            <img
              src="../../../../static/img/3/planting/nyzsy.png"
              alt=""
              class="wow bounceIn"
              data-wow-delay="0.7s"
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
  name: "IntelligentAg",
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
    padding: 2vw 0 !important;
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
        // border: 1px solid red;
        &:hover {
          cursor: pointer;
          img {
            animation: imgrotate 2s infinite alternate;
            -webkit-animation: imgrotate 2s infinite alternate;
            -moz-animation: imgrotate 2s infinite alternate;
            -o-animation: imgrotate 2s infinite alternate;
            -ms-animation: imgrotate 2s infinite alternate;
          }
          .baseNavListtitle {
            color: $mainColor;
            transform: translateX(10px) scale(1.2);
          }
        }
        img {
          width: 40%;
          margin-right: 20px;
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
      margin-bottom: 5vw;
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
