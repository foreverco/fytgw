<template>
  <div id="company">
    <div class="row">
      <div class="col-xs-12 videoBox">
        <!-- <h1>富宇通的快乐生活</h1> -->
        <!-- <img src="@/assets/img/news/datu-1.png" alt=""> -->
        <!-- 播放器的方向， landscape横屏，portraint竖屏，默认值为竖屏 -->
        <!-- <video src="static/video/yyb.mp4"></video> -->
        <video
          id="videoactive"
          autoplay
          :src="videoActive"
          controls="true"
          preload="auto"
          webkit-playsinline="true"
          playsinline="true"
          x-webkit-airplay="allow"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-orientation="portraint"
          style="object-fit:fill"
        ></video>
      </div>
    </div>
    <div class="video_container">
      <ul class="video_type_list">
        <li
          v-for="(item, index) in video_type_list"
          :key="index"
          :class="{ video_type_active: type_active_index == index }"
          @click="changevideotype(index)"
        >
          {{ item.type }}
        </li>
      </ul>
      <ul class="row videoList">
        <li
          class="col-md-3 col-xs-5 videowow zoomIn"
          v-for="(item, index) in newVideoList"
          :key="index"
          @click="getVideoSrc(index, item.videoSrc)"
          :class="{ activeClass: activeList == index }"
        >
          <video id="video" :src="item.videoSrc"></video>
          <p>
            {{ item.title }}
          </p>
        </li>
      </ul>
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
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "aboutUs",
  data() {
    return {
      videoActive: "",
      activeList: 0,
      /* 视频类型 */
      video_type_list: [
        { type: "视频直播" },
        { type: "抖音视频" },
        { type: "监控视频" }
      ],
      /* 选中视频类型 */
      type_active_index: 0,
      videoList: [
        {
          title: "中药材产业带",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "药材全产业链",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "发力扶贫",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "国草园集团",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "项目签约仪式",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "增强免疫，保肝利尿",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        },
        {
          title: "hahaha",
          videoSrc: "static/video/video1.mp4"
        }
      ],
      newVideoList: [],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [6, 9, 12, 15],
      // 默认每页显示的条数（可修改）
      PageSize: 6
    };
  },
  created() {
    this.getData();
    this.videoActive = this.newVideoList[0].videoSrc;
  },
  mounted() {
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "videowow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  },
  methods: {
    changevideotype(e) {
      this.type_active_index = e;
    },
    getVideoSrc(index, e) {
      this.videoActive = e;
      console.log(e);
      this.activeList = index;
    },
    getData() {
      // 将数据赋值给tableData
      //  this.tableData = data.data.body;
      // 将数据的长度赋值给totalCount
      this.totalCount = this.videoList.length;
      this.newVideoList = this.videoList.slice(
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
  }
};
</script>
<style lang="scss" scoped>
.videoBox {
  /* border:1px solid red; */
  height: 50vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

#videoactive {
  height: 80%;
  width: 100%;
}
.videoBox img {
  width: 100%;
}
.video_container {
  // border: 1px solid red;
  background: #fff;
  .video_type_list {
    background: #81b25b;
    padding-top: 3px;
    padding-left: 3px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    li {
      float: left;
      height: 40px;
      line-height: 40px;
      // border: 1px solid red;
      color: #fff;
      padding: 0 30px;
      &.video_type_active {
        background: #fff;
        color: #81b25b;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.videoList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
.videoList li {
  height: 200px;
  overflow: hidden;
  margin: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.videoList li #video {
  /* width:100%; */
  height: 80%;
}
.videoList li p {
  width: 100%;
  height: 15%;
  margin-top: 5%;
  background: url("../../../assets/img/news/biaoti-1.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
}
.videoList li:hover {
  cursor: pointer;
  background: url("../../../assets/img/home/8-jidi-kuang1.png") no-repeat;
  background-size: 100% 100%;
}
.activeClass {
  background: url("../../../assets/img/home/8-jidi-kuang1.png") no-repeat;
  background-size: 100% 100%;
}
.tabListPage {
  text-align: center;
}
.el-pagination {
  white-space: inherit;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
}
</style>
