<template>
  <div id="park">
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
        <img src="../../../../static/img/3/ky/jgpark.png" alt />
      </div>
      <div class="parkplanbox container wow bounceInUp">
        <img src="../../../../static/img/3/ky/parkplanimg.png" alt="" />
        <div>
          <p>
            为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。温室采用目前应用较为广泛的纹洛
          </p>
        </div>
      </div>
      <div class="investmentBox">
        <img src="../../../../static/img/3/ky/investment.png" alt="" />
        <ul class="investmentContent container">
          <li
            v-for="(item, index) in investmentList"
            :key="index"
            class="wow bounceIn"
          >
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>
      <div class="baseBoxTitle">
        <img src="../../../../static/img/3/ky/jgsb.png" alt />
      </div>
      <ul class="plantingimgList container">
        <li
          v-for="(item, index) in newImgList"
          :key="index"
          class="wow bounceIn"
        >
          <img :src="item.imgUrl" alt />
          <div class="plantingimgtitle">{{ item.title }}</div>
          <div class="hoverBox"></div>
          <div class="hoverBox1">{{ item.title }}</div>
          <!-- <div class="plantingimgtitle">123</div> -->
        </li>
      </ul>
    </div>
    <div class="tabListPage">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="PageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
      ></el-pagination>
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
      investmentList: [
        {
          imgUrl: "static/img/3/ky/in1.png",
          content:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。"
        },
        {
          imgUrl: "static/img/3/ky/in2.png",
          content:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。"
        },
        {
          imgUrl: "static/img/3/ky/in3.png",
          content:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。"
        },
        {
          imgUrl: "static/img/3/ky/in4.png",
          content:
            "为打造全国首屈一指的的中药材产业基地，国草园集团斥资3000余万在化德县规划建设占地100亩的智慧型玻璃温室，集种苗培育、科技研发、旅游观光为一体，并结合公司自主研发的智慧农业云平台建立智慧生态综合体。"
        }
      ],
      imgList: [
        {
          newsid: 1,
          title: "敞开式烘箱",
          imgUrl: "static/img/3/ky/sb1.png"
        },
        {
          newsid: 2,
          title: "锻药机",
          imgUrl: "static/img/3/ky/sb2.png"
        },
        {
          newsid: 3,
          title: "滚筒式炒药机",
          imgUrl: "static/img/3/ky/sb3.png"
        },
        {
          newsid: 1,
          title: "滚筒式洗药机",
          imgUrl: "static/img/3/ky/sb4.png"
        },
        {
          newsid: 2,
          title: "润药机",
          imgUrl: "static/img/3/ky/sb5.png"
        },
        {
          newsid: 3,
          title: "直切式切药机",
          imgUrl: "static/img/3/ky/sb6.png"
        },
        {
          newsid: 3,
          title: "直切往复式切药机",
          imgUrl: "static/img/3/ky/sb7.png"
        },
        {
          newsid: 3,
          title: "中药蒸药箱",
          imgUrl: "static/img/3/ky/sb8.png"
        }
        //   {
        //     newsid: 3,
        //     title: "种植基地",
        //     imgUrl: "/static/img/3/planting/planting9.png"
        //   }
      ],
      newImgList: [],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [4, 8, 12, 16],
      // 默认每页显示的条数（可修改）
      PageSize: 8
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
  },
  methods: {
    getData() {
      // 将数据赋值给tableData
      //  this.tableData = data.data.body;
      // 将数据的长度赋值给totalCount
      this.totalCount = this.imgList.length;
      this.newImgList = this.imgList.slice(
        this.PageSize * this.currentPage - this.PageSize,
        this.PageSize * this.currentPage
      );
      console.log(this.PageSize);
      // console.log(this.currentPage)
      // console.log(this.PageSize*this.currentPage-this.PageSize)
      // console.log(this.pageNewsList)
      // console.log(this.pageNewsList)
    },
    // 分页
    // 每页显示的条数
    handleSizeChange(val) {
      console.log(val);
      // 改变每页显示的条数
      this.PageSize = val;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
      this.getData();
    },
    // 显示第几页
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val;
      this.getData();
    }
  },
  created() {
    this.getData();
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
#park {
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
    .parkplanbox {
      // border: 1px solid red;
      margin-bottom: 88px;
      position: relative;
      img {
        width: 100%;
      }
      > div {
        position: absolute;
        width: 42%;
        height: 70%;
        // border: 1px solid blue;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        width: 80%;
        font-size: 13px;
        line-height: 30px;
      }
    }
    .investmentBox {
      position: relative;
      margin-bottom: 40px;
      > img {
        width: 100%;
      }
      .investmentContent {
        // border: 1px solid red;
        // height: 1000px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        li {
          width: 48%;
          margin-left: auto;
          // border: 1px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          &:first-child,
          &:nth-child(3) {
            margin-left: 0;
          }
          &:first-child,
          &:nth-child(2) {
            margin-bottom: 20px;
          }
          img {
            width: 30%;
            margin-bottom: 20px;
          }
          p {
            width: 90%;
            text-align: center;
            line-height: 1.5vw;
            font-size: 12px;
          }
        }
      }
    }
    .plantingimgList {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      li {
        margin: 2.4%;
        width: 20%;
        position: relative;
        background: url("/static/img/3/planting/plantingkuang.png") no-repeat;
        background-size: 100% 100%;
        padding: 2px;
        overflow: hidden;
        &:hover {
          cursor: pointer;
          .hoverBox {
            opacity: 0.3;
          }
          .hoverBox1 {
            opacity: 1;
            font-size: 34px;
          }
          img {
            transform: scale(1.2);
          }
        }
        .hoverBox {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 2px;
          opacity: 0;
          top: 0;
          left: 0;
          transition: all 0.8s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100002;
          border-radius: 15px;
          span {
            color: red;
            font-size: $titleFontSize;
            opacity: 1;
          }
        }
        .hoverBox1 {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 2px;
          opacity: 0;
          top: 0;
          left: 0;
          transition: all 1.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100002;
          border-radius: 5px;
          font-size: 0px;
        }
        img {
          width: 100%;
          transition: all 0.8s ease;
          position: relative;
          z-index: 1;
          border-radius: 11px 11px 0 0;
        }
        .plantingimgtitle {
          height: 4vw;
          border-radius: 0 0 15px 15px;
          background: #fff;
          width: 100.5%;
          margin-left: -0.25%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: bold;
          // font-family: "lv2";
          letter-spacing: 10px;
          position: relative;
          z-index: 100001;
        }
      }
    }
  }
  .tabListPage {
    text-align: center;
  }
}
</style>
