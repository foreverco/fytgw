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
          >
            <img class="swiper-lazy" :src="item.img" alt="轮播图" />
            <!-- <div class="swiper-lazy-preloader"></div> -->
            <div class="swiper-slide-title">
              <h1>{{ item.title }}</h1>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev hidden-xs"></div>
        <div class="swiper-button-next hidden-xs"></div>-->
      </div>
    </div>
    <!-- 专业的技术 -->
    <div id="tecnology" class="container-fluid">
      <div
        id="tecnologyswiper"
        class="tecnologyList container"
        @mouseenter="on_top_enter"
        @mouseleave="on_top_leave"
      >
        <div class="swiper-container tecnology-swiper" ref="mySwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in tecnologyList"
              :key="index"
            >
              <img class="swiper-lazy" :src="item.imgUrl" alt="轮播图" />
              <div class="swiper-slide-title">{{ item.title }}</div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev hidden-xs"></div>
          <div class="swiper-button-next hidden-xs"></div>-->
        </div>
      </div>
    </div>
    <!-- 新闻中心 -->
    <div id="news" class="container-fuild">
      <div class="container newscontainer">
        <div class="row newstitle">
          <img src="@/assets/img/home/biaoti-xinwenzhongxin.png" alt />
          <ul class="newsNav">
            <li
              v-for="(item, index) in newsTypeList"
              :key="index"
              :class="newsTitleActive === index ? 'newsTitleActive' : ''"
              @click="newsTitleChange(index)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>

        <ul class="newsList">
          <li
            class="row newschangewow zoomIn"
            v-for="(item, index) in newsList"
            :key="index"
          >
            <div class="imgbox">
              <router-link
                :to="{ name: 'NewsMsg', params: { newsId: item.newsid } }"
              >
                <div class="wow zoomIn">
                  <img :src="item.imgUrl" alt />
                </div>
              </router-link>
            </div>

            <div class="newsContent">
              <p class="newstitle2">{{ item.title }}</p>
              <p class="newsdate">{{ item.date }}</p>
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
          <img src="@/assets/img/home/biaoti-chanpin.png" alt />
          <ul class="productNav">
            <li>黄芪</li>
            <li>板蓝根</li>
            <li>柴胡</li>
            <li>防风</li>
          </ul>
        </div>
        <!-- <ul class="row productNav">
          <li>黄芪</li>
          <li>板蓝根</li>
          <li>柴胡</li>
          <li>防风</li>
        </ul>-->
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
                  v-for="(item, index) in productList"
                  :key="index"
                >
                  <img
                    class="swiper-lazy"
                    :src="item.imgUrl"
                    alt="轮播图"
                    style="width:80%"
                  />
                  <div class="swiper-slide-title">
                    <p>{{ item.name }}</p>
                    <p>{{ item.title }}</p>
                  </div>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

              <!-- 如果需要导航按钮 -->
              <!-- <div class="swiper-button-prev hidden-xs"></div>
              <div class="swiper-button-next hidden-xs"></div>-->
            </div>
          </div>
          <img src="../../static/img/3/home/cpbg.png" alt />
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
      <div class="container aboutcontainer">
        <div class="row aboutTitle">
          <img src="@/assets/img/home/biaoti-guanyu.png" alt />
        </div>
        <div class="row aboutswiper">
          <div
            class="swiper-container aboutswipercontainer"
            ref="aboutswipercontainer"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="static/img/6-guanyuguocaoyuan-tupian1.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="static/img/swiper11.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="static/img/swiper22.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="static/img/swiper33.png" alt />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>-->

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
        <div class="row abouttxt">
          <p class="con col-md-11">
            国草园集团，成立于 2018
            年，总部位于北京，注册资本10118万元，主营：中药材种植、育种；中医药技术研发、技术咨询、技术服务；仓储服务；中药饮片、中成药、生物制品销售；中医药科技产业园投资、运营和中医药科技企业孵化等。同时在江苏和内蒙古成立了子公司，分别是国草园智慧医疗技术有限公司和内蒙古国草园实业科技发展有限公司；集团下设总裁办、生产事业部、科研中心部、系统集成部部、经营部、行政人事中心、市场部、财务部等。目前公司已建立起一个集中草药规范种植、加工、研发、销售、鉴定、生态农业观光为一体的产业化体系，成为了国内生态农业产业发展中具有代表性的企业之一。
            集团已与步长制药、修正药业、国药集团、江中集团、扬子江药业集团、猪八戒网、太平洋保险、中国人寿、中国中药协会、中华中医药协会、国家中医药管理局等多家单位建立了友好的合作关系，同时还与安徽中医药大学签订了合作协议，聘请各领域教授、专家学者成立有关蒙中药材方面的工作站或实验室，大力推动中医药人才培养、科技创新和药品研发，实现产学研紧密结合和推动科研成果顺利转化，研究分析药理药性及中草药成长实验，为优质的中药材良种繁育和新品种的研发试验提供可靠的保障，为集团稳定、健康、持续发展奠定了坚实的基础。目前国草园已与国药、步长、修正、北京同仁堂、康缘、天士力、扬子江签订订单式了合作协议，打通了中草药的销售渠道。国草园集团将在国家振兴中医药事业战略的指引下，不忘初心，一直秉承“以道地药材立足根本，以优质产品健康大众，以科技创新引领行业”的企业宗旨，以世界前沿的科技创造能力为手段，培育核心竞争力，全面打造“大健康、大数据、大服务”体系，成为中国一流的大健康产业集团。
          </p>
          <p class="title col-md-1">国草园集团:</p>
        </div>
      </div>
    </div>
    <!-- 蒙中草药基地 -->
    <div id="base" class="container-fluid">
      <div class="container basecontainer">
        <div class="row aboutTitle">
          <img src="@/assets/img/home/biaoti-jidi.png" alt />
          <ul class="baseNav">
            <li>黄芪</li>
            <li>板蓝根</li>
            <li>柴胡</li>
            <li>防风</li>
          </ul>
        </div>
        <div class="row plantingBox">
          <div
            class="planting_model hoverwow zoomIn"
            data-wow-duration="1.5s"
            v-if="activePic !== -1"
            @mouseleave.stop="movePicIndex"
            v-clickoutside="handleClose"
          >
            <div class="closePic" @click="bigPicIndex(activePic)">X</div>
            <img :src="basePicList[activePic].imgUrlHover" ref="bigPic" alt />
          </div>
          <div
            class="col-xs-12 col-sm-6 col-md-3 baseList wow zoomIn"
            v-for="(item, index) in basePicList"
            :key="index"
          >
            <div class="basePicBox">
              <img :src="item.imgUrl" alt @click.stop="getBigPic(index)" />
              <div class="hoverBox">{{ item.title }}</div>
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
    <div id="scooling" class="container-fluid">
      <div class="container scoolingcontainer">
        <div class="row scoolingtitle">
          <img src="@/assets/img/home/biaoti-wenhua.png" alt />
          <ul class="scoolingNav">
            <li>技术保障</li>
            <li>跟踪服务</li>
            <li>雄厚实力</li>
          </ul>
        </div>
        <div class="row scoolingBox">
          <div class="col-md-6 scoolingTxt">
            <p class="con">
              国草园以世界前沿科技创造能力为依托，培育核心竞争力，全面打造“大健康、大数据、大服务”体系，成为中国一流的大健康产业集团，成为中国制药行业迈向国际化的典范;以诚为本守法经营，用信取人善待客宾；尊重合同友好合作，公平竞争规范发展；传承商道弘扬商德，杜绝忘义摒弃唯利；维护市场遵守秩序，构建和谐共享繁荣
            </p>
            <p class="title">-------同修仁德 济世养生------</p>
            <p class="name">
              <span>国草园</span>
              <span>◆</span>
              <span>企业文化</span>
            </p>
          </div>
          <div class="col-md-6 scoolingImg wow zoomIn">
            <img src="static/img/7-wenhua-tupian1.png" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 您身边的IT专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1 style="color:#81b25b">400-8888-456</h1>
        <button
          class="btn btn-info btn-sm"
          @click="$router.push('/contactus')"
          onmouseleave="this.style.borderColor='#81b25b'; this.style.backgroundColor='#81b25b'; this.style.color='#fff';"
          onmouseenter="this.style.backgroundColor='#fff'; this.style.borderColor='#81b25b'; this.style.color='#81b25b';"
        >
          联系我们
        </button>
        <!-- <hr />
        <span style="background:black">http://www.guocaoyuan.com</span>
        <h3 style="color:#81b25b">服务热线: 0471-3900199</h3>-->
        <!-- <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from "wowjs";
import MainScroll from "../components/scroll/Scroll2";
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
      /* 轮播图列表 */
      swiperList: [
        {
          img: "static/img/3/home/banner.png",
          path: "",
          title: "",
          content: ""
        },
        {
          img: "static/img/3/home/banner.png",
          path: "",
          title: "",
          content: ""
        },
        {
          img: "static/img/3/home/banner.png",
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
          title: "以人为本",
          imgUrl: "static/img/3/home/tac1.png"
        },
        {
          title: "诚信经营",
          imgUrl: "static/img/3/home/tac2.png"
        },
        {
          title: "发展蒙药",
          imgUrl: "static/img/3/home/tac3.png"
        },
        {
          title: " 致力健康",
          imgUrl: "static/img/3/home/tac4.png"
        }
      ],
      /* 新闻类型列表 */
      newsTypeList: [
        { name: "国草园咨询" },
        { name: "最新公告" },
        { name: "行业动态" }
      ],
      newsTitleActive: 0,
      /* 新闻列表 */
      newsList: [],
      newsList1: [
        [
          {
            newsid: 1,
            imgUrl: "static/img/news/news1.png",
            title:
              "内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式",
            con:
              "阳春三月，犁牛遍地走。今年春天，在内蒙古中西部农民们种植有了新变化，不种庄稼种药材，黄芪、甘草、红花、防风、柴胡等，进入4月，不少村民已开始忙碌起来。“我们都在种黄芪等中药材，一亩地能增收2000元呢。”村民老刘介绍，他所在的乌兰察布市商都县地黄种植一亩可产7000多斤，比传统作物土豆、向日葵产值高多了！在包头、乌海、巴彦淖尔、乌兰察布、呼和浩特等地掀起了种药材热潮。农民朋友们欢欢喜喜买种子，种药材。",
            date: "2020-01-15"
          },
          {
            newsid: 2,
            imgUrl: "static/img/4-xinwenzhongxin-1.png",
            title:
              "国草园集团代表与内蒙古化德县种植大户关于中草药种植合作形式举行会议宣讲",
            con:
              "2020年3月14日上午，国草园集团与内蒙古化德县当地种植大户就百万亩中草药种植合作模式举行会议宣讲。会上，国草园集团代表就项目进展以及种植收益等方面进行了详细讲解，并就种植户提出的种植、合作问题进行了深入探讨。",
            date: "2020-03-14"
          },
          {
            newsid: 3,
            imgUrl: "static/img/news2.png",
            title:
              "国草园集团代表与化德县领导于近日在林西县扶贫产业园和蒙中草药种植基地进行考察",
            con:
              "2020年3月30日，国草园集团董事长慈平凡、总裁唐琳与化德县领导在当地有关部门的陪同下到林西县东山生态扶贫产业园和蒙中草药种植基地设施农业项目进行实地考察调研。",
            date: "2020-03-30"
          }
        ],
        [
          {
            newsid: 4,
            imgUrl: "static/img/news/news1.png",
            title:
              "内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式",
            con:
              "阳春三月，犁牛遍地走。今年春天，在内蒙古中西部农民们种植有了新变化，不种庄稼种药材，黄芪、甘草、红花、防风、柴胡等，进入4月，不少村民已开始忙碌起来。“我们都在种黄芪等中药材，一亩地能增收2000元呢。”村民老刘介绍，他所在的乌兰察布市商都县地黄种植一亩可产7000多斤，比传统作物土豆、向日葵产值高多了！在包头、乌海、巴彦淖尔、乌兰察布、呼和浩特等地掀起了种药材热潮。农民朋友们欢欢喜喜买种子，种药材。",
            date: "2020-01-15"
          },
          {
            newsid: 5,
            imgUrl: "static/img/4-xinwenzhongxin-1.png",
            title:
              "国草园领导跟化德县王兵书记及相关政府部门领导开会，确定2020年度国草园中药材种植模式及扶持政策",
            con:
              "国草园领导跟化德县王兵书记及相关政府部门领导开会，确定2020年度国草园中药材种植模式及扶持政策",
            date: "2020-03-09"
          },
          {
            newsid: 6,
            imgUrl: "static/img/news2.png",
            title: "奈曼旗打造现代蒙中药材全产业链",
            con:
              "奈曼旗提早谋划2018年全产业链发展，围绕通辽市推动“五个结合”打造九个全产业链的战略部署，计划利用三年时间，集中力量打造绿色生态农牧业、蒙中药材、沙产业、镍基合金新材料、民族文化旅游五个全产业链。",
            date: "2020-01-25"
          }
        ],
        [
          {
            newsid: 7,
            imgUrl: "static/img/news/news1.png",
            title:
              "内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式",
            con:
              "阳春三月，犁牛遍地走。今年春天，在内蒙古中西部农民们种植有了新变化，不种庄稼种药材，黄芪、甘草、红花、防风、柴胡等，进入4月，不少村民已开始忙碌起来。“我们都在种黄芪等中药材，一亩地能增收2000元呢。”村民老刘介绍，他所在的乌兰察布市商都县地黄种植一亩可产7000多斤，比传统作物土豆、向日葵产值高多了！在包头、乌海、巴彦淖尔、乌兰察布、呼和浩特等地掀起了种药材热潮。农民朋友们欢欢喜喜买种子，种药材。",
            date: "2020-01-15"
          },
          {
            newsid: 8,
            imgUrl: "static/img/4-xinwenzhongxin-1.png",
            title:
              "国草园领导跟化德县王兵书记及相关政府部门领导开会，确定2020年度国草园中药材种植模式及扶持政策",
            con:
              "国草园领导跟化德县王兵书记及相关政府部门领导开会，确定2020年度国草园中药材种植模式及扶持政策",
            date: "2020-03-09"
          },
          {
            newsid: 9,
            imgUrl: "static/img/news2.png",
            title: "奈曼旗打造现代蒙中药材全产业链",
            con:
              "奈曼旗提早谋划2018年全产业链发展，围绕通辽市推动“五个结合”打造九个全产业链的战略部署，计划利用三年时间，集中力量打造绿色生态农牧业、蒙中药材、沙产业、镍基合金新材料、民族文化旅游五个全产业链。",
            date: "2020-01-25"
          }
        ]
      ],
      /* 国草园产品 */
      productList: [
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
      /* 关于国草园轮播图 */
      aboutgcyList: [
        { imgUrl: "static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "static/img/6-guanyuguocaoyuan-tupian1.png" },
        { imgUrl: "static/img/6-guanyuguocaoyuan-tupian1.png" }
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
    MainScroll
  },
  mounted() {
    this.newsList = this.newsList1[0];
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      // effect: "coverflow",
      speed: 3000,
      //自动播放
      autoplay: {
        delay: 1000000,
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
    /* 专业技术swiper tecnology-swiper */
    new Swiper(".tecnology-swiper", {
      slidesPerView: 4,
      loop: true, // 循环模式选项
      // effect: "coverflow",
      speed: 2000,
      //自动播放
      autoplay: false,
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
    /* product-swiper */
    new Swiper(".product-swiper", {
      slidesPerView: 4,
      loop: true, // 循环模式选项
      // effect: "coverflow",
      speed: 2000,
      //自动播放
      autoplay: false,
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
      this.mySwiper.stopAutoplay();
    },
    on_top_leave() {
      this.mySwiper.startAutoplay();
    },
    on_bot_enter() {
      this.myBotSwiper.stopAutoplay();
    },
    on_bot_leave() {
      this.myBotSwiper.startAutoplay();
    },

    newsTitleChange(e) {
      this.newsTitleActive = e;
      this.newsList = this.newsList1[e];
      console.log(this.newsList);
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
      console.log(e);
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
/* 整体盒子 */
#HomePage {
  margin-top: 3px;
  /* 轮播图 */
  #swiper .banner-swiper {
    width: 100%;
    height: 100%;
    /* border:1px solid blue; */
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
        height: 100%;
      }
    }
  }
  /* 专业的技术 */
  #tecnology {
    background: url("../../static/img/3/home/tecbg.png") no-repeat;
    background-size: 100% 100%;
    // height: 268px;
    padding: 2vw 0 !important;
    margin: 0 auto;
    .tecnologyList {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      // border: 1px solid red;
      .swiper-slide {
        // border: 1px solid blue;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          cursor: pointer;
          .swiper-slide-title {
            color: $mainColor;
            transform: translateX(10px) scale(1.2);
          }
          img {
            animation: imgrotate 2s infinite alternate;
            -webkit-animation: imgrotate 2s infinite alternate;
            -moz-animation: imgrotate 2s infinite alternate;
            -o-animation: imgrotate 2s infinite alternate;
            -ms-animation: imgrotate 2s infinite alternate;
          }
        }
        img {
          height: 80%;
          margin-right: 20px;
        }
        .swiper-slide-title {
          font-size: 24px;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
        }
      }
    }
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
      a {
        color: #000;
      }
      li {
        display: block;
        margin: 30px 0;
        background: url("/static/img/3/home/newsBg.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        // display: flex;
        // align-items: center;
        // justify-content: space-around;
        // border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        .imgbox {
          // position: absolute;
          padding: 5px 0;
          img {
            opacity: 1;
            width: 34%;
            margin-left: 5px;
          }
        }
        .newsContent {
          // border: 1px solid red;
          width: 55%;
          position: absolute;
          right: 7%;
          top: 50%;
          transform: translateY(-50%);
          .newstitle2 {
            font-size: $titleFontSize;
            line-height: 50px;
            font-weight: bold;
          }
          .newsdate {
            background: url("/static/img/3/home/newsdate.png") no-repeat;
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
      transform: translate(-50%);
      -ms-transform: translate(-50%);
      /* background: #81b25b; */
      text-align: center;
      /* margin-bottom: 50px; */
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
      }
    }
    /* 产品列表 */
    .productList {
      // position: relative;
      margin-bottom: -150px;
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
        // border: 1px solid blue;
        .swiper-slide-title {
          // background: #00000050;
          position: absolute;
          bottom: 0;
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
    }
  }
}

/* 关于国草园 */
.aboutcontainer {
  /* border: 1px solid #81b25b; */
  margin-top: 14px;
  &:hover {
    cursor: pointer;
  }
}
/* 关于国草园标题 */
.aboutTitle {
  /* background: blue; */
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
  height: 230px;
  display: flex;
}
.abouttxt .title {
  /* background: #81b25b; */
  writing-mode: tb-rl;
  /* width:10%; */
  font-size: 24px;
  /* font-family:'lv1'; */
  font-weight: bold;
  display: flex;
  align-items: center;
}
.abouttxt .con {
  /* background: blue; */
  /* width:90%; */
  font-size: 13px;
  letter-spacing: 3px;
  /* font-family:'lv1'; */
  writing-mode: tb-rl;
  overflow: auto;
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
  transform: translate(-50%);
  -ms-transform: translate(-50%);
  text-align: center;
  /* margin-bottom: 50px; */
  font-size: 14px;
  position: absolute;
  bottom: 20px;
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
.plantingBox {
  // border: 1px solid red;
  position: relative;
  .planting_model {
    // height: 100%;
    // width: 50%;
    box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.5),
      -10px 10px 10px 10px rgba(255, 255, 255, 0.5);
    position: absolute;
    top: -5%;
    left: 16%;
    // transform: translateX(-50%);
    z-index: 3;
    .closePic {
      position: absolute;
      top: 2%;
      right: 2%;
      // border: 1px solid red;
      color: #00000050;
      box-shadow: 2px 2px 5px 2px rgba(255, 255, 255, 0.3);
      width: 20px;
      height: 20px;
      text-align: center;
      transition: all 0.6s;
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
    img {
      width: 100%;
    }
  }
}
.baseList {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: relative;
}
.baseList .basePicBox {
  width: 270px;
  height: 270px;
  // width: 100%;
  // height: 100%;
  // background: url("/static/img/home/kuang.png");
  // background-size: 100% 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid red;
  /* background: blue; */
  z-index: 2;
  .hoverBox {
    position: absolute;
    bottom: 2.8%;
    left: 50%;
    transform: translate(-45%, 8%);
    // transform: translateY(5%);
    letter-spacing: 6px;
    color: #81b25b;
    z-index: 1;
  }
  img {
    height: 100%;
    &:hover {
      cursor: pointer;
    }
  }
}

/* 国草园文化 */
.scoolingcontainer {
  /* border: 1px solid #81b25b; */
  margin-top: 14px;
}
/* 国草园文化标题 */
.scoolingtitle {
  /* background: blue; */
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
/* 国草园文化导航 */
.scoolingNav {
  /* background: #81b25b; */
  left: 50%;
  transform: translate(-50%);
  -ms-transform: translate(-50%);
  text-align: center;
  /* margin-bottom: 50px; */
  font-size: 14px;
  position: absolute;
  bottom: 20px;
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
  width: 80%;
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
}
.scoolingBox > div .name {
  width: 5%;
  writing-mode: tb-rl;
}
.scoolingBox > div .name span:first-child {
  font-size: 24px;
}
.scoolingBox > div .name span:nth-child(2) {
  font-size: 24px;
  color: #81b25b;
}
.scoolingBox > div .title {
  width: 5%;
  font-size: 18px;
  writing-mode: tb-rl;
}
.scoolingBox > div .con {
  width: 80%;
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
  #tecnology .tecnologyList > ul {
    width: 100%;
  }
  .productList li p:first-child {
    margin-top: -20px;
    margin-left: 50px;
  }
  .productList li p:nth-child(2) {
    margin-top: -10px;
    margin-left: 10px;
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

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
  .newsList li {
    /* border:1px solid #81b25b; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .newsList li > div:nth-child(2),
  .newsList li > div:nth-child(3) {
    height: 60px;
    width: 70%;
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
