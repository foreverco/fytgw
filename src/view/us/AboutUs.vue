<template>
  <div id="aboutUs">
    <div class="row aboutusTitle imgwow zoomIn">
      <img src="static/img/3/us/banner.png" alt />
    </div>
    <div class="container hidden-xs">
      <div class="qylogoBox">
        <img src="static/img/3/us/qyjj.png" alt />
      </div>
      <div class="qykuangBox">
        <img src="static/img/3/us/kuang.png" alt="" />
        <p class="con">
          国草园集团是一家农业+互联网平台化于一体的新型企业，旗下成立了四家子公司，分别是：内蒙古国草园实业科技发展有限公司、内蒙古国草园文旅产业发展有限公司、江苏国草园医药科技有限公司、国草园生物科技有限公司。<br />
          <span style="display:block;width:0.3vw;"></span>
          2018年，国草园集团在四子王旗共投资了千万余元，签订了33万亩的土地合同，并进行了中药材种子采购与1.3万亩土地试种和3000亩育苗试验田，同时在培育、驯化、检测方面也进行大量投入，完成了品种种植试验和土地环评检测，建设完成了种植示范基地，种子仓储库房（现在存储种子几万多斤）及土地规划等。<br />
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
        <div class="gybox">
          <img src="static/img/3/us/dfgy.png" alt="" />
          <p>
            <span>以道地药材立足根本</span>
          </p>
        </div>
      </div>
    </div>
    <div class="tecnolyge container">
      <div class="qylogoBox">
        <img src="static/img/3/us/zjgw.png" alt />
      </div>
      <ul class="leaderList row">
        <li
          class="col-md-3 imgwow zoomIn"
          v-for="(item, index) in leaderList"
          :key="index"
        >
          <img v-lazy="item.imgUrl" alt />
          <div class="leader_msg">
            <div class="leader_msg_box">
              <p v-for="(itemSon, index) in item.msg" :key="index">
                {{ itemSon }}
              </p>
            </div>
          </div>
          <div class="leader_name">
            <p>{{ item.name }}</p>
            <p>{{ item.job }}</p>
          </div>
        </li>
      </ul>

      <!-- <div class="row">
        <div class="tecnolyge_title col-md-4 imgwow bounceInLeft">
          <img src="../../assets/img/aboutUs/tecnolegy.png" alt />
        </div>
        <div class="tecnolyge_content col-md-7 imgwow bounceInRight">
          国草园集团与安徽中医药大学共同成立了中医药产学研合作基地，专家们为合作项目提供人才、技术、信息等方面的支持；并成立专家咨询小组，进行项目咨询、技术指导、技术培训，或开展专项研发等工作。包括土壤分析、蒙中药材选种、育种育苗技术指导、种植布局评估、种植技术指导、加工厂建设指导、蒙中药材加工技术指导、技术人员培训等。
        </div>
      </div> -->
    </div>

    <div class="tecteamBox">
      <img src="static/img/3/us/tecteam2.png" alt="" />
    </div>

    <div class="container">
      <div class="qylogoBox">
        <img src="static/img/3/us/qywh.png" alt />
      </div>
      <ul class="row txtpicBox1">
        <li
          class="col-xs-10 imgwow zoomIn"
          v-for="(item, index) in txtpicList"
          :key="index"
        >
          <img v-lazy="item.imgUrl" alt />
        </li>
      </ul>
    </div>

    <!-- <ul class="row aboutUsList">
      <li>
        企业发展理念
      </li>
      <li>
        以道地药材立足根本 以优质产品健康大众
      </li>
      <li>
        以科技创新引领行业
      </li>
    </ul>-->

    <!-- <div class="container">
      <ul class="row txtpicBox2">
        <li
          class="col-xs-10 imgwow zoomIn"
          v-for="(item, index) in txtpicList2"
          :key="index"
        >
          <p>
            <img src="item.picUrl" alt />
          </p>
          <img :src="item.imgUrl" alt />
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
// import Swiper from "swiper";
import { WOW } from "wowjs";
export default {
  name: "aboutUs",
  data() {
    return {
      /* 轮播图列表 */
      swiperList: [
        {
          img: require("@/assets/img/aboutUs/3-1banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/aboutUs/3-1banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/aboutUs/3-1banner.png"),
          path: "",
          title: "",
          content: ""
        },
        {
          img: require("@/assets/img/aboutUs/3-1banner.png"),
          path: "",
          title: "",
          content: ""
        }
      ],
      /* 企业介绍 */
      company_profile:
        "国草园集团，成立于 2018 年，总部位于北京，注册资本10118万元，主营：中药材种植、育种；中医药技术研发、技术咨询、技术服务；仓储服务；中药饮片、中成药、生物制品销售；中医药科技产业园投资、运营和中医药科技企业孵化等。同时在江苏和内蒙古成立了子公司，分别是国草园智慧医疗技术有限公司和内蒙古国草园实业科技发展有限公司；集团下设总裁办、生产事业部、科研中心部、系统集成部部、经营部、行政人事中心、市场部、财务部等。目前公司已建立起一个集中草药规范种植、加工、研发、销售、鉴定、生态农业观光为一体的产业化体系，成为了国内生态农业产业发展中具有代表性的企业之一。 集团已与步长制药、修正药业、国药集团、江中集团、扬子江药业集团、猪八戒网、太平洋保险、中国人寿、中国中药协会、中华中医药协会、国家中医药管理局等多家单位建立了友好的合作关系，同时还与安徽中医药大学签订了合作协议，聘请各领域教授、专家学者成立有关蒙中药材方面的工作站或实验室，大力推动中医药人才培养、科技创新和药品研发，实现产学研紧密结合和推动科研成果顺利转化，研究分析药理药性及中草药成长实验，为优质的中药材良种繁育和新品种的研发试验提供可靠的保障，为集团稳定、健康、持续发展奠定了坚实的基础。目前国草园已与国药、步长、修正、北京同仁堂、康缘、天士力、扬子江签订订单式了合作协议，打通了中草药的销售渠道。国草园集团将在国家振兴中医药事业战略的指引下，不忘初心，一直秉承“以道地药材立足根本，以优质产品健康大众，以科技创新引领行业”的企业宗旨，以世界前沿的科技创造能力为手段，培育核心竞争力，全面打造“大健康、大数据、大服务”体系，成为中国一流的大健康产业集团。",
      txtpicList: [
        { imgUrl: "static/img/3/us/company_spirit.png" },
        { imgUrl: "static/img/3/us/company_spirit2.png" },
        { imgUrl: "static/img/3/us/company_spirit3.png" },
        { imgUrl: "static/img/3/us/company_spirit4.png" },
        { imgUrl: "static/img/3/us/company_spirit5.png" },
        { imgUrl: "static/img/3/us/company_spirit6.png" }
      ],
      /* 专家介绍 */
      leaderList: [
        {
          imgUrl: "static/img/3/us/hlq.png",
          name: "黄璐琦",
          job: "中国工程院院士",
          msg: [
            "中国工程院院士",
            "中国中医科学院院长",
            "中国中医科学院研究生院院长",
            "中药资源中心主任"
          ]
        },
        {
          imgUrl: "static/img/3/us/zbl.png",
          name: "张伯礼",
          job: "中国工程院院士",
          msg: [
            "中国工程院院士",
            "中国中医科学院院长",
            "天津中医药大学校长",
            "中国中西医结合学会副会长",
            "世界中医药学会联合会教育指导委员会主任委员",
            "第十三届全国人大代表"
          ]
        },
        {
          imgUrl: "static/img/3/us/lzg.png",
          name: "李泽庚",
          job: "安徽中医药大学副校长",
          msg: [
            "安徽中医药大学副校长",
            "国家中医药管理局重点学科中医肺病学学科带头人",
            "国家中医临床研究基地重点病种慢性阻塞性肺疾病学术带头人",
            "安徽省省级学术和技术带头人",
            "安徽省杰出青年中医"
          ]
        },
        {
          imgUrl: "static/img/3/us/csp.png",
          name: "慈书平",
          job: "江苏大学医学院教授",
          msg: [
            "江苏大学医学院教授",
            "世界中医联合会睡眠委员会常务理事",
            "解放军第359医院老年科主任南京军区老年医学专业委员会副主任委员",
            "《实用老年医学》等多家杂志常委、编委"
          ]
        }
      ],
      txtpicList2: [
        {
          imgUrl: "static/img/qiye/guxun1.png",
          picUrl: "static/img/qiye/guxun1.png"
        },
        {
          imgUrl: "static/img/qiye/guxun2.png",
          picUrl: "static/img/qiye/guxun2.png"
        },
        {
          imgUrl: "static/img/qiye/guxun3.png",
          picUrl: "static/img/qiye/guxun3.png"
        }
      ]
    };
  },
  mounted() {
    // new Swiper(".banner-swiper", {
    //   loop: true, // 循环模式选项
    //   effect: "coverflow",
    //   speed: 2000,
    //   //自动播放
    //   autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false
    //   },
    //   // 如果需要分页器
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   },
    //   // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   },
    //   // 延迟加载
    //   lazy: {
    //     loadPrevNext: true
    //   },
    //   observer: true, //修改swiper自己或子元素时，自动初始化swiper
    //   observeParents: true //修改swiper的父元素时，自动初始化swiper
    // });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "imgwow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  }
};
</script>
<style lang="scss" scoped>
/* 轮播图 */
#swiper {
  /* border:1px solid red; */
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  /* border:1px solid blue; */
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
.tecteamBox {
  width: 100%;
  // border: 1px solid red;
  margin: 20px 0;
  img {
    width: 100%;
  }
}
.qylogoBox {
  // border: 1px solid red;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  img {
    // width: 100%;
  }
}
.qykuangBox {
  // border: 1px solid red;
  position: relative;
  > img {
    width: 100%;
  }
  p {
    position: absolute;
    width: 90%;
    margin: 0 auto;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 3px;
  }
  .gybox {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.6s ease;
    &:hover {
      cursor: pointer;
      // transform: scale(1.2) translateX(-50%);
    }
    p {
      // border: 1px solid red;

      width: 100%;
      text-align: center;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: inline-block;
        color: #fff;
        font-family: "lv1";
        font-size: 23px;
        margin-top: -6px;
        letter-spacing: 5px;
      }
    }
    img {
      width: 100%;
    }
  }
}
/* 关于国草园 */
.aboutusTitle {
  position: relative;
  /* background: url('../../assets/img/aboutUs/3-1qiyewenhua-2guanyu-1.png') no-repeat;
    background-size: 100% 100%;
    padding:1vw 0; */
}
.aboutusTitle img {
  width: 100%;
}
.aboutusTitle .container {
  // border: 1px solid red;
  display: flex;
  justify-content: center;

  text-align: center;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.aboutusTitle p {
  text-align: center;
  // border: 1px solid blue;
  overflow: auto;
  // width: 100%;
  color: #fff;
  font-size: 1.3vw;
  letter-spacing: 4px;
  -webkit-writing-mode: tb-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: tb-rl;
  padding: 0;
  margin: 0;
  line-height: 1.6vw;
  font-family: "lv1";
  // background: #00000020;

  // text-shadow: 2px 2px 3px #000;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #81b25b50;
  border-radius: 3px;
}
.tecnolyge {
}
.tecnolyge > div {
  /* border: 1px solid red; */
  /* height: 200px; */
  margin-top: 30px;
}
.tecnolyge > div::after {
  content: "";
  display: block;
  clear: both;
}
.tecnolyge_title {
  float: left;
}
.tecnolyge_title img {
  max-width: 295px;
  height: auto;
}
.tecnolyge_content {
  /* background: red; */
  float: right;
  font-size: 18px;
  line-height: 40px;
}
.leaderList {
  /* height: 100px; */
}
.leaderList li {
  /* background: blue; */
  // border: 1px solid red;
  /* padding: 30px; */
  padding: 10px;
  height: 100%;
  text-align: center;
}
.leaderList li img {
  width: 100%;
}
.leader_msg {
  position: absolute;
  /* width: 50%; */
  width: calc(100% - 20px);
  height: calc(76% - 20px);
  left: 10px;
  top: 10px;
  opacity: 0;
  background: #00000040;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  transition: all 0.8s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  .leader_msg_box {
    width: 85%;
    line-height: 30px;
    // height:70%;
    // background: red;
    color: #fff;
  }
}
.leader_name {
  // border: 1px solid red;
  position: absolute;
  /* width: 50%; */
  width: calc(100% - 20px);
  height: 24%;
  left: 10px;
  bottom: 10px;
  // background: #00000050;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  p {
    color: #000;
    width: 100%;
    margin: 0px;
    &:first-child {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
.aboutUsList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: url("../../assets/img/aboutUs/3-1qiyewenhua-8.png") no-repeat;
  background-size: 100% 100%;
}
.aboutUsList li {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* border:1px solid blue; */
  padding: 10px 0;
  font-family: "lv1";
}
.aboutUsList li:first-child {
  font-size: 22px;
}
.txtpicBox1 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.txtpicBox1 li {
  /* border:1px solid red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.txtpicBox1 li img {
  width: 80%;
}

.txtpicBox2 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.txtpicBox2 li {
  /* border:1px solid red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}
.txtpicBox2 li img {
  width: 80%;
}
</style>
