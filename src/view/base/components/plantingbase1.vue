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
      <ul class="plantingimgList container">
        <li
          v-for="(item, index) in newImgList"
          :key="index"
          class="wow bounceIn"
        >
          <div>
            <div class="box">
              <img :src="item.imgUrl" />
              <div class="box-content">
                <h3 class="title">{{ item.title }}</h3>
                <span class="post">种植 基地</span>
              </div>
              <p>
                {{ item.title }}
              </p>
            </div>
          </div>
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
  name: "plantingbase",
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
      imgList: [
        {
          newsid: 1,
          title: "种植基地",
          imgUrl: "/static/img/3/planting/planting1.png"
        },
        {
          newsid: 2,
          title: "种植基地",
          imgUrl: "/static/img/3/planting/planting2.png"
        },
        {
          newsid: 3,
          title: "种植基地",
          imgUrl: "/static/img/3/planting/planting3.png"
        },
        {
          newsid: 1,
          title: "种植基地",
          imgUrl: "/static/img/3/planting/planting4.png"
        },
        {
          newsid: 2,
          title: "种植基地",
          imgUrl: "/static/img/3/planting/planting5.png"
        },
        {
          newsid: 3,
          title: "种植基地",
          imgUrl: "/static/img/3/planting/planting6.png"
        },
        {
          newsid: 3,
          title: "种植基地",
          imgUrl: "/static/img/3/planting/planting7.png"
        },
        {
          newsid: 3,
          title: "种植基地",
          imgUrl: "/static/img/3/planting/planting8.png"
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
            // transform: scale(1.05);
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
  }
  .plantingimgList {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    li {
      &:hover {
        cursor: pointer;
      }
      margin: 2.4%;
      width: 20%;
      position: relative;
      background: url("/static/img/3/planting/plantingkuang.png") no-repeat;
      background-size: 100% 100%;
      padding: 1px;
      overflow: hidden;
      // border: 1px solid red;
      .box {
        background: linear-gradient(#245852, #24585220);
        font-family: "Merriweather Sans", sans-serif;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        p {
          position: absolute;
          bottom: 0;
          color: #ffffff80;
          width: 100%;
          height: 3vw;
          line-height: 3vw;
          text-align: center;
          letter-spacing: 0.6vw;
          font-size: 1.5vw;
        }
        &:hover {
          p {
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
        height: auto;
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
      @media only screen and (max-width: 990px) {
        .box {
          margin: 0 0 30px;
        }
      }
      @media only screen and (max-width: 479px) {
        .box .title {
          font-size: 20px;
        }
      }
    }
  }
  .tabListPage {
    text-align: center;
  }
}
</style>
