<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div
      id="swiper"
      class="container-fuild"
      @mouseenter="on_top_enter"
      @mouseleave="on_top_leave"
    >
      <div class="swiper-container banner-swiper" ref="mySwiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in swiperList"
            :key="index"
            @click="swiperGoto(item)"
          >
            <img class="swiper-lazy" :src="item.img" alt="轮播图" />
            <!-- <img
              class="swiper-lazy"
              :data-src="item.img"
              :key="item.img"
              alt="轮播图"
            /> -->
            <!-- <div class="swiper-lazy-preloader"></div> -->
            <div class="swiper-slide-title">
              <h1>{{ item.title }}</h1>
              <p class="hidden-xs">{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev hidden-xs"></div>
        <div class="swiper-button-next hidden-xs"></div>
      </div>
    </div>
    <!-- 专业的技术 -->
    <div id="tecnology" class="container-fluid">
      <cardVue></cardVue>
    </div>
    <!-- 新闻中心 -->
    <div id="news" class="container-fuild">
      <div class="container newscontainer">
        <div class="row newstitle">
          <img v-lazy="titlelogoList.newssrc" alt />
          <!-- <img src="@/assets/img/home/biaoti-xinwenzhongxin.png" alt /> -->
          <ul class="newsNav">
            <li
              v-for="(item, index) in newsTypeList"
              :key="index"
              :class="newsTitleActive === index ? 'newsTitleActive' : ''"
              @click="newsTitleChange(index, item)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>

        <ul class="newsList">
          <template v-if="newstypeName === '企业动态'">
            <li
              class="nonelistBox newschangewow zoomIn"
              v-for="(item, index) in newsList"
              :key="index"
              @click="
                $router.replace({
                  name: 'Qynow',
                  params: { newsId: item.newsid }
                })
              "
            >
              <div class="imgbox">
                <router-link
                  :to="{ name: 'NewsMsg', params: { newsId: item.newsid } }"
                >
                  <div class="wow zoomIn">
                    <img v-lazy="item.imgUrl" alt />
                  </div>
                </router-link>
              </div>

              <div class="newsContent">
                <p class="newstitle2">{{ item.title }}</p>
                <p class="newsdate">{{ item.baseNewsList.date }}</p>
                <!-- <p class="newsCon">{{ item.con }}</p> -->
              </div>
            </li>
          </template>

          <li
            class="row listItem newschangewow zoomIn"
            v-else
            v-for="(item, index) in newsList"
            :key="index"
            @click="
              $router.replace({
                name: 'NewsMsg',
                params: { newsId: item.newsid }
              })
            "
          >
            <div class="imgbox">
              <router-link
                :to="{ name: 'NewsMsg', params: { newsId: item.newsid } }"
              >
                <div class="wow zoomIn">
                  <img v-lazy="item.imgUrl" alt />
                </div>
              </router-link>
            </div>

            <div class="newsContent">
              <p class="newstitle2">{{ item.title }}</p>
              <p class="newsdate">{{ item.baseNewsList.date }}</p>
              <p class="newsCon">{{ item.con }}</p>
            </div>
            <!-- <div class="col-md-3 col-sm-12">
              <router-link :to="{ name: 'NewsMsg', params: { newsId: item.newsid } }">
                <button>浏览更多</button>
              </router-link>
              <span>{{ item.date }}</span>
            </div>-->
          </li>
        </ul>
      </div>
    </div>
    <!-- 国草园产品 -->
    <div id="product" class="container-fuild">
      <div class="productcontainer">
        <div class="row producttitle">
          <img v-lazy="titlelogoList.productsrc" alt />
          <ul class="productNav hidden-xs">
            <li>养生茶</li>
            <li>传统中药</li>
            <li>药食同源</li>
            <!-- <li>防风</li> -->
          </ul>
        </div>
        <ul class="productList row">
          <div
            id="productListswiper"
            class="productListswiperList container"
            @mouseenter="on_top_enter"
            @mouseleave="on_top_leave"
          >
            <div class="swiper-container product-swiper" ref="mySwiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(items, index1) in productList"
                  :key="index1"
                >
                  <div
                    v-for="(item, index) in items"
                    :key="index"
                    id="produe123"
                  >
                    <img
                      class="swiper-lazy"
                      :src="item.imgUrl"
                      :key="item.imgUrl"
                      alt="轮播图"
                      style="width:80%"
                    />
                    <div class="swiper-slide-title">
                      <p>{{ item.name }}</p>
                      <p>{{ item.title }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 如果需要导航按钮 -->
              <!-- <div class="swiper-button-prev hidden-xs"></div>
              <div class="swiper-button-next hidden-xs"></div>-->
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination1"></div>
          </div>
          <img src="static/img/3/home/cpbg.png" alt />
        </ul>
      </div>
    </div>
    <!-- 关于国草园 -->
    <div
      id="aboutgcy"
      class="container-fluid"
      @mouseenter="on_bot_enter"
      @mouseleave="on_bot_leave"
    >
      <div class="aboutcontainer">
        <div class="row aboutTitle">
          <img v-lazy="titlelogoList.aboutsrc" alt />
          <ul class="baseNav hidden-xs">
            <li @click="$router.push('/software/aboutUs')">企业简介</li>
            <li @click="$router.push('/software/jiagou')">组织架构</li>
            <li @click="$router.push('/software/fengcai')">企业风采</li>
          </ul>
        </div>
        <div class="row aboutswiper">
          <div
            class="swiper-container aboutswipercontainer"
            ref="aboutswipercontainer"
          >
            <div class="swiper-wrapper">
              <!-- <div class="swiper-slide">
                <img
                  src="static/img/3/home/6-guanyuguocaoyuan-tupian1.png"
                  alt
                />
              </div> -->
              <div class="swiper-slide">
                <img
                  src="static/img/3/home/6-guanyuguocaoyuan-tupian2.png"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="static/img/3/home/6-guanyuguocaoyuan-tupian3.png"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="static/img/3/home/6-guanyuguocaoyuan-tupian4.png"
                  alt
                />
              </div>
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
        <div class="row abouttxt hidden-xs">
          <p class="con">
            国草园集团是一家农业+互联网平台化于一体的新型企业，旗下成立了四家子公司，分别是：内蒙古国草园实业科技发展有限公司、内蒙古国草园文旅产业发展有限公司、江苏国草园医药科技有限公司、国草园生物科技有限公司。
            <br />
            <span style="display:block;width:0.3vw;"></span>
            2018年，国草园集团在四子王旗共投资了千万余元，签订了33万亩的土地合同，并进行了中药材种子采购与1.3万亩土地试种和3000亩育苗试验田，同时在培育、驯化、检测方面也进行大量投入，完成了品种种植试验和土地环评检测，建设完成了种植示范基地，种子仓储库房（现在存储种子几万多斤）及土地规划等。
            <br />
            <span style="display:block;width:0.3vw;"></span>
            2019年，国草园集团进驻化德县，与化德县政府签订百万亩蒙中道地药材产业发展合作协议，国草园集团将投资30个亿，在化德县打造50万亩的道地药材种植基地，以“政府+企业+合作社+农户”模式进行合作，融合中草药种植、加工、仓储、销售、研发、鉴定于一体化产业链服务为主要运营模式，并充分发挥自治区地域特色，将当地观光旅游资源最大化，打造国家中草药种植+加工+中医药健康文旅融合示范基地。
            <span style="display:block;width:0.3vw;"></span>
            国草园集团已与中国中药协会、中华中医药协会、国家中医药管理局等多家单位达成合作关系，推进蒙中药道地药材行业标准建设；同时还与平安保险、太平洋保险、中国人寿进行战略合作进行中草药种植保险的探索。
            <span style="display:block;width:0.3vw;"></span>
            国草园集团已与北京同仁堂、康缘药业、天士力制药、扬子江药业集团签订了订单式合作协议，打通了中草药的销售渠道。国草园集团将在国家振兴中医药事业战略的指引下，不忘初心，一直秉承“以道地药材立足根本，以优质产品健康大众，以科技创新引领行业”的企业宗旨，以世界前沿的科技创造能力为手段，培育核心竞争力，全面打造“大健康、大数据、大服务”体系，成为中国一流的大健康产业集团。
            <span style="display:block;width:0.3vw;"></span>
            2020年，国草园集团与安徽中医药大学签订了合作协议，聘请专业教授、专家学者成立有关蒙中药材研究实验室，大力推动野生蒙中药规模化种植技术研究、人才培养及相关药品研发，实现“产学研用”一体化发展，推动科研成果顺利转化，为优质的中药材良种繁育和新品种的研发试验提供可靠的保障，为集团稳定、健康、持续发展奠定了坚实的基础。
            <span style="display:block;width:0.3vw;"></span>
            此外，国草园集团计划利用公司自身的资源、团队和技术等优势，充分发挥自治区地域优势，打造‘旅游+中医药’特色旅游文化产品。以中药资源优势，以文化为引领、旅游为支撑、健康为目标、养生为主体，强化优势资源整合和道地中草药规模化种植产业带动，差异化发展，构建文旅康养全产业链，打造以“文旅康养四位一体”的文旅康养小镇。
          </p>
          <p class="title">国草园集团</p>
        </div>
      </div>
    </div>
    <!-- 蒙中草药基地 -->
    <div id="base" class="container-fluid">
      <div class="container basecontainer">
        <div class="row aboutTitle">
          <img v-lazy="titlelogoList.mengsrc" alt />
          <ul class="baseNav hidden-xs">
            <li @click="$router.push('/base/plantingbase')">种植基地</li>
            <li @click="$router.push('/base/inteligentAg')">智慧农业</li>
            <li @click="$router.push('/base/kytown')">康养小镇</li>
            <li @click="$router.push('/base/park')">加工产业园</li>
          </ul>
        </div>
        <div class="row plantingBox">
          <div
            class="box"
            v-for="(item, index) in plantingBoxList"
            :key="index"
            @click="$router.push(item.routeUrl)"
          >
            <img v-lazy="item.imgUrl" />
            <div class="box-content">
              <h3 class="title">{{ item.title }}</h3>
              <!-- <span class="post">种植基地</span> -->
            </div>
            <p>{{ item.con }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 国草园文化 -->
    <div id="scooling" class="container-fluid">
      <div class="container scoolingcontainer">
        <div class="row scoolingtitle">
          <img v-lazy="titlelogoList.scoolsrc" alt />
          <ul class="scoolingNav hidden-xs">
            <li>国之仙草</li>
            <li>百年健康</li>
          </ul>
        </div>
        <div class="row scoolingBox">
          <div class="col-md-6 scoolingTxt">
            <p class="con">
              国草园以世界前沿科技创造能力为依托，培育核心竞争力，全面打造“大健康、大数据、大服务”体系，成为中国一流的大健康产业集团，成为中国制药行业迈向国际化的典范;以诚为本守法经营，用信取人善待客宾；尊重合同友好合作，公平竞争规范发展；传承商道弘扬商德，杜绝忘义摒弃唯利；维护市场遵守秩序，构建和谐共享繁荣
            </p>
            <!-- <p class="title">-------同修仁德 济世养生------</p> -->
            <p class="name">
              <span>国草园</span>
              <!-- <img src="@/assets/img/home/1-head-logo.png" alt /> -->
              <span>・</span>
              <span>企业文化</span>
            </p>
          </div>
          <div class="col-md-6 scoolingImg wow zoomIn">
            <img src="static/img/7-wenhua-tupian1.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from "wowjs";
import MainScroll from "../components/scroll/Scroll2";
import { getNewsList } from "@/util/newsList";
import cardVue from "../components/card/cardVue";
const newsListObj = getNewsList();
const clickoutside = {
  // 初始化指令
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update() {},
  unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};
export default {
  name: "HomePage",
  data() {
    return {
      lazyimg: "static/img/3-3qiyefengcai-5.png",
      hoverBoxShow: -1,
      /* titlelogo */
      titlelogoList: {
        newssrc: require("@/assets/img/home/biaoti-xinwenzhongxin.png"),
        productsrc: require("@/assets/img/home/biaoti-chanpin.png"),
        aboutsrc: require("@/assets/img/home/biaoti-guanyu.png"),
        mengsrc: "static/img/3/home/cygh.png",
        scoolsrc: require("@/assets/img/home/biaoti-wenhua.png")
      },
      /* 轮播图列表 */
      swiperList: [
        {
          img: "static/img/3/home/banner.png",
          path: "",
          title: "",
          content: ""
        },
        {
          img: "static/img/3/home/banner33.jpg",
          path: "/base/kytown",
          title: "",
          content: ""
        },
        {
          img: "static/img/3/ky/banner.png",
          path: "/base/plantingbase",
          title: "",
          content: ""
        },
        {
          img: "static/img/3/home/zhnybanner.jpg",
          path: "/base/inteligentAg",
          title: "",
          content: ""
        },
        {
          img: "static/img/3/home/banner22.png",
          path: "product/productpack",
          title: "",
          content: ""
        }
      ],
      /* 专业技术显示隐藏 */
      tecnologyShow: 0,
      /* 专业技术列表 */
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
      /* 新闻类型列表 */
      newsTypeList: [
        { name: "国草园资讯" },
        { name: "企业动态" },
        { name: "行业动态" }
      ],
      newsTitleActive: 0,
      /* 新闻列表 */
      newsList: [],
      newstypeName: "",
      /* 国草园产品 */
      productList: [
        [
          {
            title: "增强免疫，保肝利尿",
            name: "黄芪",
            imgUrl: "static/img/3/home/ph1.png"
          },
          {
            title: "清热解毒，凉血利咽",
            name: "板蓝根",
            imgUrl: "static/img/3/home/pb2.png"
          },
          {
            title: "和解表里，疏肝解郁",
            name: "柴胡",
            imgUrl: "static/img/3/home/pc3.png"
          },
          {
            title: " 祛风解表，胜湿止痛",
            name: "防风",
            imgUrl: "static/img/3/home/pf4.png"
          }
        ],
        [
          {
            title: "增强免疫，保肝利尿",
            name: "桔梗",
            imgUrl: "static/img/3/home/pj5.png"
          },
          {
            title: "增强免疫，保肝利尿",
            name: "白芍",
            imgUrl: "static/img/3/home/pj6.png"
          },
          {
            title: "增强免疫，保肝利尿",
            name: "赤芍",
            imgUrl: "static/img/3/home/pj7.png"
          },
          {
            title: "增强免疫，保肝利尿",
            name: "紫菀",
            imgUrl: "static/img/3/home/pj8.png"
          }
        ]
      ],
      /* 关于国草园轮播图 */
      aboutgcyList: [
        { imgUrl: "static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "static/img/6-guanyuguocaoyuan-tupian1.png" }
      ],
      /* 种植基地 */
      plantingBoxList: [
        {
          imgUrl: "static/img/3/home/planting1.png",
          title: "种植基地",
          con: "种植基地",
          routeUrl: "/base/plantingbase"
        },
        {
          imgUrl: "static/img/3/home/planting4.png",
          title: "智慧农业",
          con: "智慧农业",
          routeUrl: "/base/inteligentAg"
        },
        {
          imgUrl: "static/img/3/home/planting3.png",
          title: "康养小镇",
          con: "康养小镇",
          routeUrl: "/base/kytown"
        },
        {
          imgUrl: "static/img/3/home/planting2.png",
          title: "加工产业园",
          con: "加工产业园",
          routeUrl: "/base/park"
        }
      ],
      /* 仲裁要基地图片 */
      activePic: -1,
      basePicList: [
        {
          imgUrl: "static/img/11.png",
          imgUrlHover: "static/img/homeHover/1.png",
          title: "初加工产业园",
          content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理"
        },
        {
          imgUrl: "static/img/2.png",
          imgUrlHover: "static/img/homeHover/2.png",
          title: "智慧玻璃大棚",
          content: "<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障"
        },
        {
          imgUrl: "static/img/3.png",
          imgUrlHover: "static/img/homeHover/3.png",
          title: "智慧玻璃大棚",
          content: "<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障"
        },
        {
          imgUrl: "static/img/4.png",
          imgUrlHover: "static/img/homeHover/4.png",
          title: "智慧玻璃大棚",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          imgUrl: "static/img/5.png",
          imgUrlHover: "static/img/homeHover/5.png",
          title: "产业基地",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          imgUrl: "static/img/6.png",
          imgUrlHover: "static/img/homeHover/6.png",
          title: "产业基地",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          imgUrl: "static/img/7.png",
          imgUrlHover: "static/img/homeHover/7.png",
          title: "产业基地",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        },
        {
          imgUrl: "static/img/8.png",
          imgUrlHover: "static/img/homeHover/8.png",
          title: "产业基地",
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
    newsTitleActive() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        var wow = new WOW({
          boxClass: "newschangewow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: false
        });
        wow.init();
      });
    },
    activePic() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        var wow = new WOW({
          boxClass: "hoverwow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: false
        });
        wow.init();
      });
    },
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
    },
    hoverBoxShow() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        var wow = new WOW({
          boxClass: "hoverwow",
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
    MainScroll,
    cardVue
  },
  mounted() {
    this.newsList = newsListObj.newsList.filter(item => {
      return item.type == 0;
    });
    if (this.newsList.length > 4) {
      this.newsList = this.newsList.slice(0, 4);
    }
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      // effect: "coverflow",
      speed: 500,
      lazyLoading: true,
      //自动播放
      autoplay: 4000,
      // autoplay: {
      //   delay: 2500,
      //   stopOnLastSlide: false,
      //   disableOnInteraction: false
      // },
      // 如果需要分页器
      pagination: ".swiper-pagination",
      paginationClickable: true,
      // 如果需要前进后退按钮
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
      // 延迟加载
      lazyLoading: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* 专业技术swiper tecnology-swiper */

    /* product-swiper */
    new Swiper(".product-swiper", {
      slidesPerView: 1,
      loop: true, // 循环模式选项
      // effect: "coverflow",
      speed: 500,
      //自动播放
      autoplay: 4000,
      // 如果需要分页器
      pagination: ".swiper-pagination1",
      paginationClickable: true,
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
      speed: 500,
      //自动播放
      // autoplay: 5000,
      autoplay: 4000,
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 1,
      coverflow: {
        rotate: 0, //设置为0
        stretch: 20,
        depth: 300,
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
  directives: { clickoutside },
  //计算属性，获得可以操作的swiper对象
  computed: {
    mySwiper() {
      // mySwiper 是要绑定到标签中的ref属性
      return this.$refs.mySwiper.swiper;
    },
    myBotSwiper() {
      return this.$refs.aboutswipercontainer.swiper;
    }
  },
  methods: {
    on_top_enter() {
      console.log("on_top_enter");
      this.mySwiper.stopAutoplay();
    },
    on_top_leave() {
      console.log("on_top_leave");
      this.mySwiper.startAutoplay();
    },
    on_bot_enter() {
      this.myBotSwiper.stopAutoplay();
    },
    on_bot_leave() {
      this.myBotSwiper.startAutoplay();
    },
    /* 轮播图跳转 */
    swiperGoto(e) {
      if (e.path) {
        this.$router.push(e.path);
      }
    },
    newsTitleChange(e, item) {
      console.log(item);
      this.newstypeName = item.name;
      console.log(this.newstypeName);
      // this.newsList = this.newsList1[e];
      this.newsList = newsListObj.newsList.filter(item => {
        return item.type == e;
      });
      this.newsTitleActive = e;
      if (this.newsList.length > 4) {
        this.newsList = this.newsList.slice(0, 4);
      }
    },
    changeTacnology(e) {
      this.tecnologyShow = e;
    },
    hoverboxShow(e) {
      this.hoverBoxShow = e;
    },
    hoverboxHide() {
      this.hoverBoxShow = -1;
    },
    gotoprodect() {
      this.$router.push("/product/productpack");
    },
    getBigPic(e) {
      this.activePic = e;
    },
    // moveBigPic() {
    //   this.activePic = -1;
    // },
    bigPicIndex(e) {
      this.activePic = -1;
    },
    movePicIndex() {
      // this.activePic = -1;
    },
    handleClose(e) {
      this.activePic = -1;
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
.swiper-container-3d .swiper-slide-shadow-left {
  opacity: 0 !important;
}
.swiper-container-3d .swiper-slide-shadow-right {
  opacity: 0 !important;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0 13px !important;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  // opacity: 0.2;
}
.swiper-pagination-bullet-active {
  background: $mainColor;
  width: 15px;
  border-radius: 5px;
}
</style>
<style lang="scss" scoped>
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
.swiper-container-3d .swiper-slide-shadow-left {
  opacity: 0 !important;
}
.swiper-container-3d .swiper-slide-shadow-right {
  opacity: 0 !important;
}
/* 整体盒子 */

#HomePage {
  // margin-top: 3px;
  margin-bottom: 50px;
  /* 轮播图 */
  #swiper {
    // border: 1px solid blue;
  }
  #swiper .banner-swiper {
    width: 100%;
    height: 100%;
    &:hover {
      cursor: pointer;
    }
    .swiper-slide {
      position: relative;
      .swiper-slide-title {
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
      img {
        width: 100%;
        // height: 100%;
      }
    }
  }
  /* 专业的技术 */
  #tecnology {
    background: url("../assets/img/3.0/tecbg.png") no-repeat;
    background-size: 100% 100%;
    // margin-top: -13px;
    // border: 1px solid red;
    // height: 268px;
    // padding: 2vw 0 !important;
    // margin: 0 auto;
  }
  /* 新闻中心 */
  .newscontainer {
    margin-top: 14px;
    /* 新闻标题 */
    .newstitle {
      /* background: blue; */
      margin: 12px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    /* 新闻导航 */
    .newsNav {
      /* background: #81b25b; */
      left: 50%;
      transform: translate(-50%);
      -ms-transform: translate(-50%);
      text-align: center;
      font-size: 14px;
      position: absolute;
      bottom: 20px;
      > li {
        /* float:left; */
        display: inline-block;
        border-right: 1px solid #333;
        padding: 0 15px;
        &:last-child {
          border: 0;
        }
        &:hover {
          color: #81b25b;
          cursor: pointer;
        }
        /* 新闻列表 */
        &.newsTitleActive {
          color: #81b25b;
          font-size: 16px;
        }
      }
    }
    /* 新闻列表 */
    .newsList {
      .nonelistBox {
        background: url("../assets/img/3.0/newsBg.png") no-repeat;
        background-size: 100% 100%;
        width: 49%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        padding: 5px;
        &:nth-child(even) {
          float: right;
        }
        &:nth-child(odd) {
          float: left;
        }
        .imgbox {
          // position: absolute;
          // padding: 1px 0;
          width: 50%;
          img {
            opacity: 1;
            width: 100%;
            border-radius: 8px 0 0 8px;
          }
        }
        .newsContent {
          width: 46%;
          margin-left: 10px;

          .newstitle2 {
            font-size: $titleFontSize;
            line-height: 60px;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .newsdate {
            background: url("../../static/img/3/home/newsdate.png") no-repeat;
            background-size: 100% 100%;
            padding: 3px 20px 2px 20px;
            display: flex;
            margin: 20px 0;
            align-items: center;
            justify-content: center;
            display: inline-block;
          }
        }
      }
      a {
        color: #000;
      }
      .listItem {
        display: block;
        margin: 30px 0;
        background: url("../assets/img/3.0/newsBg.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        // border-radius: 8px;
        // height: 10vw;
        &:hover {
          cursor: pointer;
          box-shadow: 3px 3px 6px 3px #24585250,
            -0px 0px 0px 0px rgba(255, 255, 255, 0.5);
          .newsContent {
            color: $mainColor;
          }
        }
        // display: flex;
        // align-items: center;
        // justify-content: space-around;
        // border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        .imgbox {
          // position: absolute;
          // padding: 1px 0;
          width: 34%;
          img {
            opacity: 1;
            width: 100%;
            // height: 17vw;
            // margin-left: 1px;
            border-radius: 8px 0 0 8px;
          }
        }
        .newsContent {
          // border: 1px solid red;
          width: 55%;
          margin-left: 50px;
          // position: absolute;
          // right: 7%;
          // top: 50%;
          // transform: translateY(-50%);
          .newstitle2 {
            font-size: $titleFontSize;
            line-height: 50px;
            font-weight: bold;
          }
          .newsdate {
            background: url("../../static/img/3/home/newsdate.png") no-repeat;
            background-size: 100% 100%;
            padding: 3px 20px 2px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            display: inline-block;
          }
          .newsCon {
            width: 100%;
            line-height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }

  /* 国草园产品 */
  .productcontainer {
    margin-top: 14px;
    /* 产品标题 */
    .producttitle {
      /* background: blue; */
      margin: 12px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    /* 产品导航 */
    .productNav {
      left: 50%;
      transform: translateX(-45%);
      -ms-transform: translateX(-45%);
      /* background: #81b25b; */
      text-align: center;
      /* margin-bottom: 50px;*/
      font-size: 14px;
      position: absolute;
      bottom: 40px;
      > li {
        /* float:left; */
        display: inline-block;
        border-right: 1px solid #333;
        padding: 0 15px;
        &:last-child {
          border: 0;
        }
        &:hover {
          color: #81b25b;
          cursor: pointer;
        }
      }
    }
    /* 产品列表 */
    .productList {
      // position: relative;
      margin-bottom: -80px;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // flex-wrap: wrap;
      > img {
        width: 100%;
        transform: translateY(-60%);
      }
      #productListswiper {
        z-index: 100;
        position: relative;
        &:hover {
          cursor: pointer;
        }
        .swiper-slide {
          // border: 1px solid red;
          display: flex;
          justify-content: center;
        }
        #produe123 {
          // outline: 1px solid red;
          width: 25%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          img {
            width: 100%;
          }
          .swiper-slide-title {
            position: absolute;
            bottom: 0;
            left: 50%;
            -ms-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            transform: translateX(-50%);
            z-index: 105;
            width: 80%;
            height: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            p {
              width: 100%;
              text-align: center;
              color: #888;
              &:first-child {
                font-size: $titleFontSize;
                color: $mainColor;
                margin-top: 10px;
              }
              &:last-child {
                margin-bottom: 10px;
              }
            }
          }
        }
        // border: 1px solid blue;
        // .swiper-slide-title {
        //   position: absolute;
        //   bottom: 0;
        //   width: 80%;
        //   height: 20%;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   flex-wrap: wrap;
        //   p {
        //     width: 100%;
        //     text-align: center;
        //     color: #888;
        //     &:first-child {
        //       font-size: $titleFontSize;
        //       color: $mainColor;
        //       margin-top: 10px;
        //     }
        //     &:last-child {
        //       margin-bottom: 10px;
        //     }
        //   }
        // }
      }
    }
  }
  /* 中药材基地 */
  .plantingBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
    .box {
      // border: 1px solid blue;
      // background: linear-gradient(#245852, #24585220);
      font-family: "Merriweather Sans", sans-serif;
      border-radius: 7px;
      position: relative;
      overflow: hidden;
      background: url("/static/img/3/home/plantingdk.png") no-repeat;
      background-size: 100% 100%;
      padding: 3px;
      width: 45%;
      margin: 2%;
      > p {
        // border: 1px solid blue;
        text-align: center;
        height: 3vw;
        line-height: 3vw;
        font-size: 1.2vw;
        letter-spacing: 13px;
      }
      &:first-child {
        // margin-right: 2%;
      }
      &:hover {
        background: linear-gradient(#245852, #24585220);
        cursor: pointer;
        > p {
          font-size: 0;
        }
      }
    }
    .box:before {
      content: "";
      background: -webkit-repeating-linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.1) 10px,
        transparent 10px,
        transparent 20px,
        rgba(0, 0, 0, 0.1) 20px,
        rgba(0, 0, 0, 0.1) 30px,
        transparent 30px,
        transparent 40px,
        rgba(0, 0, 0, 0.1) 40px,
        rgba(0, 0, 0, 0.1) 50px,
        transparent 50px,
        transparent 60px,
        rgba(0, 0, 0, 0.1) 60px,
        rgba(0, 0, 0, 0.1) 70px,
        transparent 70px,
        transparent 80px,
        rgba(0, 0, 0, 0.1) 80px,
        rgba(0, 0, 0, 0.1) 90px,
        transparent 90px
      );
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      transition: all 0.5s;
    }
    .box:hover:before {
      opacity: 1;
    }
    .box img {
      width: 100%;
      border-radius: 5px;

      // height: auto;
      transition: all 0.5s ease;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    .box:hover img {
      opacity: 0.5;
      -webkit-clip-path: polygon(50% 0, 99% 50%, 50% 99%, 0 50%);
      clip-path: polygon(50% 0, 99% 50%, 50% 99%, 0 50%);
    }
    .box .box-content {
      color: #fff;
      text-align: center;
      width: 100%;
      opacity: 0;
      transform: translateX(-50%) translateY(-50%) rotate(-55deg);
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transition: all 0.5s;
    }
    .box:hover .box-content {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    .box .title {
      font-size: 25px;
      font-weight: 700;
      text-transform: uppercase;
      text-shadow: 0 0 5px #000;
      margin: 0 0 3px 0;
    }
    .box .post {
      font-size: 16px;
      text-shadow: 0 0 5px #000;
      text-transform: capitalize;
      display: block;
    }
    .box .icon {
      padding: 0;
      margin: 0;
      list-style: none;
      opacity: 0;
      transform: rotateX(180deg);
      position: absolute;
      right: 10px;
      top: 10px;
      transition: all 0.3s;
    }
    .box:hover .icon {
      opacity: 1;
      transform: rotate(0);
    }
    .box .icon li a {
      color: #24585220;
      background-color: #fff;
      font-size: 17px;
      text-align: center;
      line-height: 30px;
      width: 30px;
      height: 30px;
      margin: 0 0 7px;
      border-radius: 50%;
      display: block;
      transition: all 0.5s;
    }
    .box .icon li a:hover {
      color: #245852;
      box-shadow: 0 0 15px #fff;
    }
    // @media only screen and (max-width: 990px) {
    //   .box {
    //     margin: 0 0 30px;
    //   }
    // }
    // @media only screen and (max-width: 479px) {
    //   .box .title {
    //     font-size: 20px;
    //   }
    // }
  }
}

/* 关于国草园 */
.aboutcontainer {
  width: 90%;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
}
/* 关于国草园标题 */
.aboutTitle {
  /* background: blue; */
  // margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
/* 关于国草园轮播图 */
#aboutgcy .container {
  // border: 1px solid red;
}
#aboutgcy .swiper-container {
  width: 100%;
  // border: 1px solid red;
}
#aboutgcy .swiper-container .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid red;
}
#aboutgcy .swiper-container .swiper-slide img {
  width: 140%;
}
.abouttxt {
  // width: 100%;
  margin-top: 40px;
  height: 330px;
  display: flex;
  justify-content: center;
  // background: blue;
  // border: 1px solid blue;
  text-align: center;
}
.abouttxt .title {
  /* background: #81b25b; */
  writing-mode: tb-rl;
  // border: 1px solid red;
  // width: 4%;
  min-width: 8%;
  font-size: 25px;
  /* font-family:'lv1'; */
  // font-weight: bold;
  color: $mainColor;
  margin-left: 1%;
  // line-height: 50px;
  letter-spacing: 7px;
  display: flex;
  align-items: center;
  font-family: "lv2";
}
.abouttxt .con {
  /* width:90%; */
  font-size: 14px;
  // border: 1px solid red;
  min-width: 70%;
  letter-spacing: 5px;
  line-height: 19px;
  /* font-family:'lv1'; */
  writing-mode: tb-rl;
  overflow: auto;
  // border: 1px solid blue;
  text-align: left;
  // display: flex;
  // justify-content: center;
  // font-family: "lv2";
}
/* #aboutgcy .customer-block img{
  width:100%;
} */
/* 蒙中草药基地 */
.basecontainer {
  /* border: 1px solid #81b25b; */
  margin-top: 30px;
  position: relative;
}
/* 基地导航 */
.baseNav {
  /* background: #81b25b; */
  left: 50%;
  transform: translateX(-45%);
  -ms-transform: translateX(-45%);
  text-align: center;
  /* margin-bottom: 50px; */
  font-size: 14px;
  position: absolute;
  bottom: 30px;
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
  color: #81b25b;
  cursor: pointer;
}
/* 基地图片 */

/* 国草园文化 */
.scoolingcontainer {
  /* border: 1px solid #81b25b; */
  margin-top: 14px;
}
/* 国草园文化标题 */
.scoolingtitle {
  /* background: blue; */
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    // border: 1px solid red;
  }
}
/* 国草园文化导航 */
.scoolingNav {
  // background: #81b25b;
  left: 50%;
  transform: translateX(-42%);
  -ms-transform: translateX(-42%);
  text-align: center;
  /* margin-bottom: 50px; */
  font-size: 14px;
  position: absolute;
  bottom: 30px;
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
  color: #81b25b;
  cursor: pointer;
}
/* 文化展示 */
.scoolingBox {
}
.scoolingImg {
  display: flex;
  align-items: center;
  justify-content: center;
}
.scoolingImg img {
  width: 65%;
}
.scoolingBox > div {
  /* border: 1px solid #81b25b; */
  height: 300px;
}
.scoolingTxt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "lv1";
  // border: 1px solid red;
}
.scoolingBox > div .name {
  width: 8%;
  // border: 1px solid red;
  writing-mode: tb-rl;
  span {
    font-size: 24px;
    // border: 1px solid red;
  }
}
.scoolingBox > div .name span:first-child {
  font-size: 24px;
}
.scoolingBox > div .name span:nth-child(2) {
  font-size: 30px;
  color: #81b25b;
  // border: 1px solid red;
}
// .scoolingBox > div .title {
//   width: 5%;
//   font-size: 18px;
//   writing-mode: tb-rl;
// }
.scoolingBox > div .con {
  // border: 1px solid red;
  width: 90%;
  height: 90%;
  font-size: 14px;
  letter-spacing: 3px;
  overflow: auto;
  writing-mode: tb-rl;
  padding: 10px 0;
  line-height: 37px;
  font-family: "微软雅黑";
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
  /* background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
  background-size: 100% 100%; */
  /* background: rgba(0,0,0,0.3); */
  transition: all ease 0.6s;
  margin-bottom: 60px;
}
#contactUs .contactUs-container {
  padding-top: 50px;
}
#contactUs .contactUs-container button {
  width: 300px;
  /* height: 50px; */
  margin-top: 20px;
  font-size: 26px;
  letter-spacing: 8px;
  font-family: "lv1";
}
#contactUs .contactUs-container .contactUs-contactWay {
  background: rgba(0, 0, 0, 0.2);
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
#contactUs .contactUs-container .logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-info {
  color: #fff;
  background-color: #81b25b;
  border-color: #81b25b;
}

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
@media screen and (min-width: 768px) {
  .productList li p:first-child {
    // margin-top: -20px;
    margin-left: 70px;
  }
  .productList li p:nth-child(2) {
    margin-top: 40px;
    margin-left: -15px;
  }
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #tecnology {
    background: url("../assets/img/3.0/tecbg.png") no-repeat;
    background-size: 100% 100%;
    margin-top: 0 !important;
    margin: 0 auto;
    .tecnologyList {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 50px !important;
        border: 1px solid red;
        &:hover {
          cursor: pointer;
          .swiper-slide-title {
            color: $mainColor;
            transform: translateX(10px);
          }
          img {
            box-shadow: 3px 3px 6px 3px #24585250,
              -0px 0px 0px 0px rgba(255, 255, 255, 0.5);
          }
        }
        img {
          width: 55%;
          border-radius: 100%;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
        }
        .swiper-slide-title {
          font-size: 12px !important;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
        }
      }
    }
  }
  // .productList li p:first-child {
  //   margin-top: -20px;
  //   margin-left: 50px;
  // }
  // .productList li p:nth-child(2) {
  //   margin-top: -10px;
  //   margin-left: 10px;
  //   width: 60%;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  // }

  #swiper {
    // height: 200px;
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
    /* height: 200px; */
    /* border:1px solid #81b25b; */
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
    /* height: 30px; */
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
    // height: 400px;
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
  /* border:1px solid #81b25b; */
}
.server-wrapper img {
  width: 100%;
  height: 250px;
}
.text-center {
  font-size: 25px;
  font-weight: bold;
}

@media screen and (max-width: 996px) {
  #tecnology .tecnologyList > ul > li {
    margin: 5px;
    max-width: 70%;
  }
  .newsList li > div:last-child {
    /* border:1px solid #81b25b; */
    padding-top: 0;
  }
  #tecnology .tecnologyList > ul > li > p {
    background: #81b25b;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 208px;
    width: 25px;
    /* margin: 0 auto;   */
    line-height: 24px;
  }

  #tecnology .tecnologyList > ul > li > div[data-v-4eb70d62] {
    margin: 0 4%;
  }
  .productList li img {
    width: 95%;
    /* position: absolute; */
  }
  .productList li[data-v-4eb70d62] {
    height: 300px;
  }
}

@media screen and (max-width: 768px) {
  .newsList a[data-v-4eb70d62] {
    padding-bottom: 10px;
  }
  .productList li p:nth-child(2) {
    margin-top: 22px !important;
    // margin-left: 50px;
  }
  .productList li p[data-v-4eb70d62]:first-child {
    margin-top: -3px;
  }
}
</style>
