<template>
  <div id="intelligentag">
    <div class="topimgbox">
      <img src="../../../../static/img/3/planting/basetop.png" alt>
    </div>
    <div class="baseNav">
      <ul class="baseNavList">
        <li
          v-for="(item, index) in tecnologyList"
          :key="index"
          class="wow bounceInRight"
          data-wow-delay="0"
        >
          <img class="swiper-lazy" :src="item.imgUrl" alt="轮播图">
          <div class="baseNavListtitle">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <div class="baseBox">
      <div class="baseBoxTitle">
        <img src="/static/img/3/planting/zhny2.png" alt>
      </div>
      <ul class="plantingimgList container">
        <li v-for="(item, index) in newImgList" :key="index" class="wow bounceIn">
          <img :src="item.imgUrl" alt>
          <div class="plantingimgtitle">{{item.title}}</div>
          <div class="hoverBox"></div>
          <div class="hoverBox1">种植基地</div>
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
  name: "plantingbase",
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
        font-size: 21px;
        letter-spacing: 10px;
        position: relative;
        z-index: 100001;
      }
    }
  }
  .tabListPage {
    text-align: center;
  }
}
</style>
