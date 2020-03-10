<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div
      id="swiper"
      class="container-fuild"
    >
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item,index) in swiperList"
            :key="index"
          >
            <img
              class="swiper-lazy"
              :data-src="item.img"
              alt="轮播图"
            >
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <h1>{{item.title}}</h1>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <!-- 专业的技术 -->
    <div
      id="tecnology"
      class="container-fluid"
    >
      <div class="tecnologyList container">
        <ul>
          <li
            v-for="(item, index) in tecnologyList"
            :style='{width:tecnologyShow===index?"90%":""}'
            :key="index"
            @click="changeTacnology(index)"
          >
            <p
              class="tacwow bounceInRight"
              data-wow-duration="0.2s"
            >{{item.title}}</p>
            <div
              class="tacwow bounceInRight"
              data-wow-duration="1.0s"
              v-if="tecnologyShow===index"
            >
              <div class="row">
                <div class="hidden-sm hidden-xs col-md-4 tacimg">
                  <img
                    src="@/assets/img/home/3-wenhua-logo.png"
                    alt
                  >
                </div>
                <div class="col-xs-11 col-md-8 taccon">
                  <p>{{item.con}}</p>
                  <div class="button">
                    <button>查看更多</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新闻中心 -->
    <div
      id="news"
      class="container-fuild"
    >
      <div class="container newscontainer">
        <div class="row newstitle">
          <img
            src="@/assets/img/home/biaoti-xinwenzhongxin.png"
            alt
          >
        </div>
        <ul class="row newsNav">
          <li>行业动态</li>
          <li>行业动态</li>
          <li>行业动态</li>
        </ul>
        <ul class="newsList">
          <li
            class="row"
            v-for="(item, index) in newsList"
            :key="index"
          >
            <div class="col-md-3 col-sm-12 wow zoomIn">
              <img
                src="@/assets/img/home/4-xinwenzhongxin-1.png"
                alt
              >
            </div>
            <div class="col-md-6 col-sm-12">
              <p>{{item.title}}</p>
              <p>{{item.con}}</p>
            </div>
            <div class="col-md-3 col-sm-12">
              <span>{{item.date}}</span>
              <button>浏览更多</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 国草园产品 -->
    <div
      id="product"
      class="container-fuild"
    >
      <div class="container productcontainer">
        <div class="row producttitle">
          <img
            src="@/assets/img/home/biaoti-chanpin.png"
            alt
          >
        </div>
        <ul class="row productNav">
          <li>黄芪</li>
          <li>板蓝根</li>
          <li>柴胡</li>
          <li>防风</li>
        </ul>
        <ul class='productList row'>
          <li
            class='col-md-3 col-sm-5 col-xs-9'
            v-for="(item, index) in productList"
            :key="index"
          >
            <p>{{item.name}}</p>
            <p>{{item.effect}}</p>
            <p class='imgBox wow zoomIn'>
              <img
                :src="item.imgUrl"
                alt=""
              >
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 关于国草园 -->
    <div
      id='aboutgcy'
      class='container-fluid'
    >
      <div class='container aboutcontainer'>
        <div class="row aboutTitle">
          <img
            src="@/assets/img/home/biaoti-guanyu.png"
            alt
          >
        </div>
        <div class='row aboutswiper'>
          <div class="swiper-container aboutswipercontainer">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="../../static/img/6-guanyuguocaoyuan-tupian1.png"
                  alt=""
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="../../static/img/6-guanyuguocaoyuan-tupian1.png"
                  alt=""
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="../../static/img/6-guanyuguocaoyuan-tupian1.png"
                  alt=""
                >
              </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
        <div class='row abouttxt'>
          <p class='con col-md-11'>内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓</p>
          <p class='title col-md-1'>国草园产品:</p>
        </div>
      </div>
    </div>
    <!-- 蒙中草药基地 -->
    <div
      id='base'
      class='container-fluid'
    >
      <div class='container basecontainer'>
        <div class="row aboutTitle">
          <img
            src="@/assets/img/home/biaoti-jidi.png"
            alt
          >
        </div>
        <ul class="row baseNav">
          <li>黄芪</li>
          <li>板蓝根</li>
          <li>柴胡</li>
          <li>防风</li>
        </ul>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 baseList wow zoomIn"
            v-for="(item,index) in basePicList"
            :key="index"
          >
            <div class='basePicBox'>
              <img
                :src="item.imgUrl"
                alt
              >
            </div>
            <!-- <p class="text-center">{{item.title}}</p> -->
            <!-- <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{item.title}}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- 国草园文化 -->
    <div
      id="scooling"
      class='container-fluid'
    >
      <div class="container scoolingcontainer">
        <div class="row scoolingtitle">
          <img
            src="@/assets/img/home/biaoti-wenhua.png"
            alt
          >
        </div>
        <ul class="row scoolingNav">
          <li>技术保障</li>
          <li>跟踪服务</li>
          <li>雄厚实力</li>
        </ul>
        <div class='row scoolingBox'>
          <div class='col-md-6 scoolingTxt'>

            <p class='con'>
              内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓
            </p>
            <p class='title'>-------同修仁德 济世养生-------</p>
            <p class='name'>
              <span>国草园</span>
              <span>◆</span>
              <span>企业文化</span>
            </p>
          </div>
          <div class='col-md-6 scoolingImg'>456</div>
        </div>
      </div>
    </div>
    <!-- 大数据管理系统 -->
    <!-- <div
      id="bigData"
      class="container-fuild"
    >
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive"
            src="@/assets/img/img1.png"
            alt="大数据管理系统"
          >
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="bigData-title">
            关于我们
            <small>/ Big Data Management System</small>
          </h2>
          <MainScroll :listData="listData"></MainScroll>
          <a
            href="#"
            class="btn btn-lg btn-block btn-info"
          >联系我们</a> -->
          <!-- <p>当今最领先的响应式自助建站平台。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？起飞页可以满足您的所有需求。</p>
          <p>我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员。</p>
          <h2 class="bigData-device">PC/PAD/Phone &nbsp; 全设备支持</h2>
          <a href="#" class="btn btn-lg btn-block btn-info">联系我们</a>-->
        <!-- </div>
      </div>
    </div> -->
    <!-- 您身边的IT专家 -->
    <div
      id="contactUs"
      class="container-fuild text-center"
    >
      <div class="container contactUs-container wow slideInUp">
        <h1>400-8888-456</h1>
        <div class='logo hidden-xs'>
          <img src="@/assets/img/home/8-lianxiwomen-logo.png" alt="">
        </div>
        <button
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >联系我们</button>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 客户评价 -->
    <!-- <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">客户评价</p>
        <div class="swiper-container customer-swiper hidden-xs">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide customer-block"
              v-for="(item,index) in customerList"
              :key="index"
            >
              <div class="customer-logo">
                <img class="center-block" :src="item.logo" alt="logo">
              </div>
              <div class="customer-yh">
                <img src="@/assets/img/yinhao.png" alt="引号">
              </div>
              <div class="customer-content1">
                <small>{{item.content}}</small>
              </div>
              <div class="customer-content2">{{item.title}}</div>
            </div>
          </div> -->
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="row visible-xs customer-block">
          <div class="col-xs-12" v-for="(item,index) in customerList" :key="index">
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo">
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号">
            </div>
            <div class="customer-content1">
              <small>{{item.content}}</small>
            </div>
            <div class="customer-content2">
              <small>{{item.title}}</small>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 为什么选择我们 -->
    <!-- <div
      id="whyChooseUs"
      class="conatiner-fuild"
    >
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>我们的文化</p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper wow zoomIn"
            v-for="(item,index) in serverList"
            :key="index"
          >
            <img
              src="@/assets/img/timg.jpg"
              alt
            > -->
            <!-- <p class="text-center">{{item.title}}</p> -->
            <!-- <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{item.title}}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>-->
          <!-- </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from "wowjs";
import MainScroll from "../components/scroll/Scroll2";

export default {
  name: "HomePage",
  data() {
    return {
      /* 轮播图列表 */
      swiperList: [
        {
          img: require("@/assets/img/home/2-banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/home/2-banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/home/2-banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/home/2-banner.png"),
          path: "",
          title: "",
          content: ""
        }
      ],
      /* 专业技术显示隐藏 */
      tecnologyShow: 0,
      /* 专业技术列表 */
      tecnologyList: [
        {
          title: "专业的技术",
          con:
            "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓"
        },
        {
          title: "专业的技术",
          con: "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市"
        },
        {
          title: "专业的技术",
          con: "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市"
        },
        {
          title: "专业的技术",
          con: "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市"
        }
      ],
      /* 新闻列表 */
      newsList: [
        {
          imgUrl: "@/assets/img/home/4-xinwenzhongxin-1.png",
          title: "关于阿擦擦",
          con: "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市",
          date: "2020-03-09"
        },
        {
          imgUrl: "@/assets/img/home/4-xinwenzhongxin-1.png",
          title: "关于阿擦擦",
          con: "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市",
          date: "2020-03-09"
        },
        {
          imgUrl: "@/assets/img/home/4-xinwenzhongxin-1.png",
          title: "关于阿擦擦",
          con: "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市",
          date: "2020-03-09"
        }
      ],
      /* 国草园产品 */
      productList: [
        {
          name: "黄芪",
          imgUrl: "../../static/img/5-chanpinzhongxin-chanpin1.png",
          effect: "清热解毒"
        },
        {
          name: "板蓝根",
          imgUrl: "../../static/img/5-chanpinzhongxin-chanpin2.png",
          effect: "清热解毒"
        },
        {
          name: "柴胡",
          imgUrl: "../../static/img/5-chanpinzhongxin-chanpin3.png",
          effect: "清热解毒"
        },
        {
          name: "防风",
          imgUrl: "../../static/img/5-chanpinzhongxin-chanpin4.png",
          effect: "清热解毒"
        }
      ],
      /* 关于国草园轮播图 */
      aboutgcyList: [
        { imgUrl: "../../static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "../../static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "../../static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "../../static/img/6-guanyuguocaoyuan-tupian1.png" }
      ],
      /* 仲裁要基地图片 */
      basePicList: [
        {
          imgUrl: "../../static/img/8-jidi-tu2.png",
          title: "德诚百年",
          content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理"
        },
        {
          imgUrl: "../../static/img/8-jidi-tu3.png",
          title: "大医精诚",
          content: "<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障"
        },
        {
          imgUrl: "../../static/img/8-jidi-tu4.png",
          title: "精益求精",
          content: "<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障"
        },
        {
          imgUrl: "../../static/img/8-jidi-tu5.png",
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          imgUrl: "../../static/img/8-jidi-tu6.png",
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          imgUrl: "../../static/img/8-jidi-tu7.png",
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          imgUrl: "../../static/img/8-jidi-tu4.png",
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          imgUrl: "../../static/img/8-jidi-tu5.png",
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        }
      ],
      listData: [
        {
          title: "",
          date:
            "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓"
        },
        {
          title: "",
          date:
            "内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓储库10000㎡，机械陈列室1800㎡，科研室1200㎡，晾晒硬化场地10000㎡，绿化6000㎡，办公楼2000㎡，生活宿舍3000㎡内蒙古国草园实业科技发展有限于2018年建设内蒙古自治区乌兰察布市四子王旗柴胡、黄芪中草药种植基地一期原生态观光旅游，科研实验教学基地建设项目，该项目种植占地面积215700亩，建筑占地面积28000㎡，总建筑面积34000㎡，建筑包括：仓"
        }
      ],
      customerList: [
        {
          logo: require("@/assets/img/logo_hp.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_kk.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_toyota.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_kk.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_hp.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_toyota.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_kk.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_hp.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_toyota.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_hp.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_kk.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        },
        {
          logo: require("@/assets/img/logo_hp.png"),
          title:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
          content:
            "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        }
      ],
      serverList: [
        {
          logo: require("@/assets/img/tel.png"),
          title: "德诚百年",
          content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理"
        },
        {
          logo: require("@/assets/img/computer.png"),
          title: "大医精诚",
          content: "<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障"
        },
        {
          logo: require("@/assets/img/qq.png"),
          title: "精益求精",
          content: "<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "别具匠心",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        }
      ]
    };
  },
  watch: {
    tecnologyShow() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        var wow = new WOW({
          boxClass: "tacwow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: false
        });
        wow.init();
      });
    }
  },
  components: {
    MainScroll
  },
  mounted() {
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
    /* customer-swiper */
    new Swiper(".aboutswipercontainer", {
      loop: true, // 循环模式选项
      effect: "coverflow",
      speed: 2000,
      //自动播放
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 1,
      coverflow: {
        rotate: 0, //设置为0
        stretch: 10,
        depth: 160,
        modifier: 2,
        slideShadows: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
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
    changeTacnology(e) {
      this.tecnologyShow = e;
    }
  }
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
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
#swiper .banner-swiper .swiper-slide {
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  /* background: rgba(51, 51, 51, 0.534); */
  text-align: center;
  line-height: 80px;
}
/* #swiper .banner-swiper .swiper-slide-title > h1{
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p{
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
} */
/* 专业的技术 */
p {
  margin: 0;
  padding: 0;
}
#tecnology {
  background: #472a2d;
  height: 268px;
  padding: 0 !important;
}
#tecnology .tecnologyList {
  height: 100%;
}
#tecnology .tecnologyList > ul {
  display: flex;
  margin-bottom: 0 !important;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background: green; */
  /* justify-content: flex-end; */
}
#tecnology .tecnologyList > ul > li {
  float: left;
  margin: 5px;
  position: relative;
  display: flex;
  align-items: center;
}
#tecnology .tecnologyList > ul > li > p {
  background: red;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 208px;
  width: 30px;
  /* margin: 0 auto;   */
  line-height: 24px;
}
/* #tecnology .tecnologyList > ul > li > p:hover {
  cursor: pointer;
} */
#tecnology:hover {
  cursor: pointer;
}
#tecnology .tecnologyList > ul > li > div {
  width: 90%;
  height: 208px;
  /* background:yellow; */
  margin: 0 1%;
}
#tecnology .tecnologyList > ul > li > div .container {
  height: 100%;
}
#tecnology .tecnologyList > ul > li > div .row {
  height: 100%;
}
.tacimg {
  /* border:1px solid green; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.taccon {
  /* border:1px solid blue; */
  float: right;
  height: 100%;
  color: #fff;
  writing-mode: tb-rl;
  /* font-size:16px; */
  /* letter-spacing: 5px; */
  /* line-height: 25px; */
  position: relative;
}
.taccon p {
  width: 80%;
  overflow: auto;
  /* background: yellow; */
}
.taccon .button {
  width: 10%;
}
.taccon button {
  height: 120px;
  width: 26px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: transparent;
  outline: 0;
  border: 0;
  border: 1px solid #fff;
}
/* 新闻中心 */
.newscontainer {
  /* border: 1px solid red; */
  margin-top: 14px;
}
/* 新闻标题 */
.newstitle {
  /* background: blue; */
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 新闻导航 */
.newsNav {
  /* background: red; */
  text-align: center;
  margin-bottom: 50px;
  font-size: 14px;
}
.newsNav > li {
  /* float:left; */
  display: inline-block;
  border-right: 1px solid #333;
  padding: 0 15px;
}
.newsNav li:last-child {
  border: 0;
}
.newsNav li:hover {
  color: red;
  cursor: pointer;
}
/* 新闻列表 */
.newsList {
}
.newsList li {
  /* border: 1px solid red; */
  display: block;
  margin: 30px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.newsList li > div {
  height: 100%;
  /* background: blue; */
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.newsList li > div:nth-child(2),
.newsList li > div:nth-child(3) {
  height: 120px;
}
.newsList li > div > p {
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* border: 1px solid red; */
}
.newsList li > div > p:first-child {
  height: 30%;
  font-size: 16px;
  font-weight: bold;
}
.newsList li > div button {
  background: transparent;
  outline: 0;
  border: 0;
  /* border: 1px solid red; */
  color: red;
}
.newsList li > div span {
  display: inline-block;
  padding: 0 20px;
}
/* 国草园产品 */
.productcontainer {
  /* border: 1px solid red; */
  margin-top: 14px;
}
/* 产品标题 */
.producttitle {
  /* background: blue; */
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 产品导航 */
.productNav {
  /* background: red; */
  text-align: center;
  margin-bottom: 50px;
  font-size: 14px;
}
.productNav > li {
  /* float:left; */
  display: inline-block;
  border-right: 1px solid #333;
  padding: 0 15px;
}
.productNav li:last-child {
  border: 0;
}
.productNav li:hover {
  color: red;
  cursor: pointer;
}
/* 产品列表 */
.productList {
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.productList li {
  background: url("../assets/img/home/5-chanpinzhongxin-kuang.png") no-repeat;
  background-size: 100% 100%;
  height: 380px;
  /* border:1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.productList li p {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #c5000d;
}
.productList li p:first-child {
  margin: 0 auto;
  width: 20px;
  line-height: 24px;
  margin-bottom: -30px;
  font-size: 20px;
}
.productList li .imgBox {
  /* border:1px solid red; */
  width: 100%;
  display: flex;
  align-items: bottom;
  justify-content: center;
  margin-top: 30px;
}
.productList li img {
  width: 85%;
  /* position: absolute; */
}
/* 关于国草园 */
.aboutcontainer {
  /* border: 1px solid red; */
  margin-top: 14px;
}
/* 关于国草园标题 */
.aboutTitle {
  /* background: blue; */
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 关于国草园轮播图 */
#aboutgcy .swiper-container {
  /* background:yellow; */
  width: 100%;
}
#aboutgcy .swiper-container .swiper-slide {
  /* width:100%; */
  /* border:1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
}
#aboutgcy .swiper-container .swiper-slide img {
  width: 100%;
}
.abouttxt {
  width: 100%;
  margin-top: 40px;
  height: 200px;
  display: flex;
}
.abouttxt .title {
  /* background: red; */
  writing-mode: tb-rl;
  /* width:10%; */
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.abouttxt .con {
  /* background: blue; */
  /* width:90%; */
  writing-mode: tb-rl;
  overflow: auto;
}
/* #aboutgcy .customer-block img{
  width:100%;
} */
/* 蒙中草药基地 */
.basecontainer {
  /* border: 1px solid red; */
  margin-top: 30px;
}
/* 基地导航 */
.baseNav {
  /* background: red; */
  text-align: center;
  margin-bottom: 50px;
  font-size: 14px;
}
.baseNav > li {
  /* float:left; */
  display: inline-block;
  border-right: 1px solid #333;
  padding: 0 15px;
}
.baseNav li:last-child {
  border: 0;
}
.baseNav li:hover {
  color: red;
  cursor: pointer;
}
/* 基地图片 */
.baseList {
  /* border:1px solid red; */
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.baseList .basePicBox {
  width: 270px;
  height: 270px;
  background: url("../assets/img/home/8-jidi-kuang2.png");
  background-size: 100% 100%;
  /* background: blue; */
}
.baseList .basePicBox img {
  width: 100%;
  /* height: 250px; */
}
.text-center {
  font-size: 25px;
  font-weight: bold;
  background: skyblue;
}

/* 国草园文化 */
.scoolingcontainer {
  /* border: 1px solid red; */
  margin-top: 14px;
}
/* 国草园文化标题 */
.scoolingtitle {
  /* background: blue; */
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 国草园文化导航 */
.scoolingNav {
  /* background: red; */
  text-align: center;
  margin-bottom: 50px;
  font-size: 14px;
}
.scoolingNav > li {
  /* float:left; */
  display: inline-block;
  border-right: 1px solid #333;
  padding: 0 15px;
}
.scoolingNav li:last-child {
  border: 0;
}
.scoolingNav li:hover {
  color: red;
  cursor: pointer;
}
/* 文化展示 */
.scoolingBox {
}
.scoolingBox > div {
  border: 1px solid red;
  height: 300px;
}
.scoolingTxt {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.scoolingBox > div .name {
  width: 5%;
  writing-mode: tb-rl;
}
.scoolingBox > div .name span:first-child{
  font-size:24px;
}
.scoolingBox > div .name span:nth-child(2){
  font-size:24px;
  color:red;
}
.scoolingBox > div .title {
  width: 5%;
  font-size:18px;
  writing-mode: tb-rl;
}
.scoolingBox > div .con {
  width: 80%;
  overflow: auto;
  writing-mode: tb-rl;
  padding:10px 0;
}
/* 大数据管理系统 */
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
  padding-bottom: 80px;
}
#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}
#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  /* height: 400px; */
  background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}
#contactUs .contactUs-container {
  padding-top: 50px;
}
#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}
#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
  #contactUs .contactUs-container .logo{
    display: flex;
    align-items: center;
    justify-content: center;
  }

/* 客户评价 */
/* #customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}
#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}
#customer .customer-block {
  background: red;
  padding: 30px;
  background: 1px solid red;
}
#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}
#customer .customer-yh img {
  width: 34px;
  height: 34px;
}
#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}
#customer .customer-content2 {
  padding-top: 20px;
} */
/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}
#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}
#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }
  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
  #bigData {
    padding: 60px;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
  #contactUs {
    height: 300px;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #whyChooseUs {
    padding: 20px 0;
  }

}

/* 我们的文化 */
.server-wrapper {
  /* border:1px solid red; */
}
.server-wrapper img {
  width: 100%;
  height: 250px;
}
.text-center {
  font-size: 25px;
  font-weight: bold;
  background: skyblue;
}
</style>

