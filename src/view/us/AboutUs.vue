<template>
  <div id="aboutUs">
    <div id="swiper" class="newsswiper">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
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

    <div class='row aboutusTitle'>
        <div class='container'>
            <div class='row rowBox'>
                <div class='col-xs-6 imgBox'>
                    <img src="../../assets/img/aboutUs/3-1qiyewenhua-2guanyu-3.png" alt="">
                </div>
                <div class='col-xs-6 txtBox'>
                    <h3>
                        <span>
                            关于国草园
                        </span>
                    </h3>
                    <p>
                        国草园集团，成立于 2018 年，总部位于北京，注册资本10118万元，主营：中药材种植、育种；中医药技术研发、技术咨询、技术服务；仓储服务；中药饮片、中成药、生物制品销售；中医药科技产业园投资、运营和中医药科技企业孵化等。同时在江苏和内蒙古成立了子公司，分别是国草园智慧医疗技术有限公司和内蒙古国草园实业科技发展有限公司；集团下设总裁办、生产事业部、科研中心部、系统集成部部、经营部、行政人事中心、市场部、财务部等。目前公司已建立起一个集中草药规范种植、加工、研发、销售、鉴定、生态农业观光为一体的产业化体系，成为了国内生态农业产业发展中具有代表性的企业之一。 集团已与步长制药、修正药业、国药集团、江中集团、扬子江药业集团、猪八戒网、太平洋保险、中国人寿、中国中药协会、中华中医药协会、国家中医药管理局等多家单位建立了友好的合作关系，同时还与安徽中医药大学签订了合作协议，聘请各领域教授、专家学者成立有关蒙中药材方面的工作站或实验室，大力推动中医药人才培养、科技创新和药品研发，实现产学研紧密结合和推动科研成果顺利转化，研究分析药理药性及中草药成长实验，为优质的中药材良种繁育和新品种的研发试验提供可靠的保障，为集团稳定、健康、持续发展奠定了坚实的基础。目前国草园已与国药、步长、修正、北京同仁堂、康缘、天士力、扬子江签订订单式了合作协议，打通了中草药的销售渠道。国草园集团将在国家振兴中医药事业战略的指引下，不忘初心，一直秉承“以道地药材立足根本，以优质产品健康大众，以科技创新引领行业”的企业宗旨，以世界前沿的科技创造能力为手段，培育核心竞争力，全面打造“大健康、大数据、大服务”体系，成为中国一流的大健康产业集团。
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class='container'>
        <ul class='row txtpicBox1'>
            <li class='col-xs-10 imgwow zoomIn' v-for="(item, index) in txtpicList" :key="index">
              <img :src="item.imgUrl" alt="">
            </li>
            
        </ul>
    </div>

    <ul class='row aboutUsList'>
        <li>
            企业发展理念
        </li>
        <li>
            以道地药材立足根本 以优质产品健康大众
        </li>
        <li>
            以科技创新引领行业
        </li>
    </ul>

    <div class='container'>
        <ul class='row txtpicBox2'>
            <li class='col-xs-10 imgwow zoomIn' v-for="(item, index) in txtpicList2" :key="index">
              <p>
                <img src="item.picUrl" alt="">
              </p>
              <img :src="item.imgUrl" alt="">
            </li>
            
        </ul>
    </div>

  </div>
</template>
<script>
import Swiper from "swiper"
import { WOW } from "wowjs"
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
      txtpicList: [
        {imgUrl:'static/img/qiye/aa1.png'},
        {imgUrl:'static/img/qiye/aa2.png'},
        {imgUrl:'static/img/qiye/aa3.png'},
        {imgUrl:'static/img/qiye/aa4.png'}
      ],
      txtpicList2: [
        {imgUrl:'static/img/qiye/a1.png',picUrl:'static/img/qiye/pic1.png'},
        {imgUrl:'static/img/qiye/a2.png',picUrl:'static/img/qiye/pic2.png'},
      ]
    };
  },
  mounted() {
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
<style scoped>
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
/* 关于国草园 */
.aboutusTitle{
    background: url('../../assets/img/aboutUs/3-1qiyewenhua-2guanyu-1.png') no-repeat;
    background-size: 100% 100%;
    padding:1vw 0;
    /* height:671px; */
}
.aboutusTitle .rowBox{
    position: relative;

}
.aboutusTitle .imgBox img {
    width:90%;
}
.aboutusTitle .txtBox {
    /* width: 100%; */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    /* background-color: pink; */
    /* border:1px solid pink; */
}
.aboutusTitle .txtBox h3{
    margin:0;
    padding:0;
    display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  font-size:2vw;
    font-family: 'lv1';
    background: url('../../assets/img/aboutUs/3-1qiyewenhua-2guanyu-2.png') no-repeat;
  background-position: center;
  height:20%;
  background-size:contain;
    /* border:1px solid blue; */
}
.aboutusTitle .txtBox h3 span{
    margin-left:-10%;
}
.aboutusTitle .txtBox p {
    /* border:1px solid red; */
    height:80%;
    line-height: 20px;
    letter-spacing: 3px;
    color:#fff;
     font-size:12px;
    /* font-family: 'lv1'; */
    padding:1vw;
    overflow: hidden;
}

.aboutUsList{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color:#fff;
    background: url('../../assets/img/aboutUs/3-1qiyewenhua-8.png') no-repeat;
    background-size: 100% 100%;
}
.aboutUsList li {
  width:100%;
  display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* border:1px solid blue; */
    padding:10px 0;
    font-family: 'lv1';
}
.aboutUsList li:first-child{
  font-size:22px;

}
.txtpicBox1{
      display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin:20px 0;
}
.txtpicBox1 li{
  /* border:1px solid red; */
    display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin:20px 0;
}
.txtpicBox1 li img{
  width:80%;
}

.txtpicBox2{
      display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin:20px 0;
}
.txtpicBox2 li{
  /* border:1px solid red; */
    display: flex;
      flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin:40px 0;
}
.txtpicBox2 li img{
  width:80%;
}
</style>

