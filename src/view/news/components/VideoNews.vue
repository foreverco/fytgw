<template>
  <div id="company">
    <!-- <div class="row">
      <div class="col-xs-12 videoBox">
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
    </div> -->
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
          @click="getVideoSrc(index, item.videoSrc, item.videoid, $event)"
          :class="{ activeClass: activeList == index }"
        >
          <div class="videoTag">
            <img :src="item.tagSrc" alt />
            <span>{{ item.videostatus }}</span>
          </div>
          <video
            :id="item.videoid"
            :src="item.videoSrc"
            :poster="item.imgSrc || ''"
          ></video>
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
      activeList: -1,
      /* 视频类型 */
      video_type_list: [
        { type: "抖音视频", id: "videoList" },
        { type: "视频直播", id: "dyVideoList" },
        { type: "监控视频", id: "jkvideoList" }
      ],
      /* 选中视频类型 */
      type_active_index: 0,
      old_id: "",
      videoListObj: [
        [
          {
            videoid: "v1",
            title: "中药材产业带",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag1.png",
            videostatus: "直播中",
            videoSrc: "static/video/douyin/douyin1.mp4"
          },
          // {
          //   videoid: "v2",
          //   title: "药材全产业链",
          //   // imgSrc: "static/img/news/videobg.png",
          //   tagSrc: "static/img/news/tag2.png",
          //   videostatus: "录播",
          //   videostatus: "录播",
          //   videoSrc: "static/video/douyin/douyin2.mp4"
          // },
          {
            videoid: "v3",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin3.mp4"
          },
          // {
          //   videoid: "v4",
          //   title: "药材全产业链",
          //   // imgSrc: "static/img/news/videobg.png",
          //   tagSrc: "static/img/news/tag2.png",
          //   videostatus: "录播",
          //   videostatus: "录播",
          //   videoSrc: "static/video/douyin/douyin4.mp4"
          // },
          {
            videoid: "v5",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin5.mp4"
          },
          {
            videoid: "v6",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin6.mp4"
          },
          // {
          //   videoid: "v7",
          //   title: "药材全产业链",
          //   // imgSrc: "static/img/news/videobg.png",
          //   tagSrc: "static/img/news/tag2.png",
          //   videostatus: "录播",
          //   videostatus: "录播",
          //   videoSrc: "static/video/douyin/douyin7.mp4"
          // },
          {
            videoid: "v8",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin8.mp4"
          },
          {
            videoid: "v9",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin9.mp4"
          },
          {
            videoid: "v10",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin10.mp4"
          },
          {
            videoid: "v11",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin11.mp4"
          },
          {
            videoid: "v12",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin12.mp4"
          },
          {
            videoid: "v13",
            title: "药材全产业链",
            // imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/douyin/douyin13.mp4"
          }
        ],
        [
          {
            videoid: "v1",
            title: "中药材产业带",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag1.png",
            videostatus: "直播中",
            videoSrc: "static/video/video1.mp4"
          },
          {
            videoid: "v2",
            title: "药材全产业链",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/video1.mp4"
          },
          {
            videoid: "v3",
            title: "中药材产业带",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag1.png",
            videostatus: "直播中",
            videoSrc: "static/video/video1.mp4"
          },
          {
            videoid: "v4",
            title: "药材全产业链",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/video1.mp4"
          },
          {
            videoid: "v5",
            title: "中药材产业带",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag1.png",
            videostatus: "直播中",
            videoSrc: "static/video/video1.mp4"
          },
          {
            videoid: "v6",
            title: "药材全产业链",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/video1.mp4"
          },
          {
            videoid: "v7",
            title: "发力扶贫",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videoSrc: "static/video/video1.mp4"
          }
        ],
        [
          {
            title: "中药材产业带",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag1.png",
            videostatus: "直播中",
            videoSrc: "static/video/video1.mp4"
          },
          {
            title: "药材全产业链",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/video1.mp4"
          },
          {
            title: "中药材产业带",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag1.png",
            videostatus: "直播中",
            videoSrc: "static/video/video1.mp4"
          },
          {
            title: "药材全产业链",
            imgSrc: "static/img/news/videobg.png",
            tagSrc: "static/img/news/tag2.png",
            videostatus: "录播",
            videostatus: "录播",
            videoSrc: "static/video/video1.mp4"
          }
        ]
      ],
      videoList: [
        // {
        //   title: "中药材产业带",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "直播中",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "药材全产业链",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag2.png",
        //   videostatus: "录播",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "发力扶贫",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag2.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "国草园集团",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag2.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "项目签约仪式",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag2.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "增强免疫，保肝利尿",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // },
        // {
        //   title: "hahaha",
        //   imgSrc: "static/img/news/videobg.png",
        //   tagSrc: "static/img/news/tag1.png",
        //   videostatus: "录播",
        //   videoSrc: "static/video/video1.mp4"
        // }
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
    this.videoList = this.videoListObj[0];
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
      this.videoList = this.videoListObj[e];
      this.getData();
    },
    getVideoSrc(index, src, id, e) {
      this.activeList = index;
      console.log(e.target.id);
      var idx = e.target.id ? e.target.id : e.target.dataset.id;
      var newVis = document.getElementById(idx);
      if (this.old_id == idx) {
        if (newVis.paused) {
          newVis.play();
        } else if (newVis.play()) {
          newVis.pause();
        }
      } else {
        if (this.old_id && document.getElementById(this.old_id).play()) {
          document.getElementById(this.old_id).pause();
        }
        if (newVis.paused) {
          newVis.play();
        }
      }
      this.old_id = idx;
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
  // height: 50vw;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
video {
  width: 100%;
  height: 100%;
}

#videoactive {
  height: 60%;
  // width: 100%;
}
.videoBox img {
  width: 100%;
}
.video_container {
  // border: 1px solid red;
  background: #fff;
  padding-bottom: 10px;
  .video_type_list {
    background: #81b25b;
    padding-top: 3px;
    padding-left: 3px;
    margin-bottom: 20px;
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
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;
}
.videoList li {
  height: 330px;
  overflow: hidden;
  margin: 35px;
  // border: 1px solid #00000030;
  // border-radius: 5px;
  // padding: 6px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  // border: 1px solid blue;
  position: relative;
  transition: all 0.6s;
  .videoTag {
    position: absolute;
    // background: rgb(219, 141, 141);
    top: 0;
    left: 8%;
    img {
      width: 100%;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      padding-top: 5px;
      transform: translate(-50%, -50%);
      height: 100%;
      // border: 1px solid red;
      color: #fff;
      writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
      writing-mode: tb-lr; /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
    }
  }
}

.videoList li #video {
  /* width:100%; */
  height: 100%;
}

.videoList li:hover {
  cursor: pointer;
  // background: url("../../../assets/img/home/8-jidi-kuang1.png") no-repeat;
  // background-size: 100% 100%;
  // box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3);
  // padding: 15px 0;
  // background: #81b25b50;
  // border-radius: 10px;
  // transform: scale(1.3);
  video {
    // border: 1px solid red;
    // width: 100%;
  }
  &:after {
    content: "";
    display: block;
  }
}
.activeClass {
  // background: url("../../../assets/img/home/8-jidi-kuang1.png") no-repeat;
  // background-size: 100% 100%;
  // box-shadow: 5px 5px 10px 5px #81b25b70;
  transform: scale(1.3);
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
@media screen and (max-width: 768px) {
  .videoList li[data-v-d2f3c900] {
    margin: 0 auto;
  }
  .videoList li .videoTag[data-v-d2f3c900] {
    position: absolute;
    top: 8%;
    left: 8%;
  }
  .video_container {
  // border: 1px solid red;
  background: #fff;
  padding-bottom: 10px;
  .video_type_list {
    background: #81b25b;
    padding-top: 3px;
    padding-left: 3px;
    margin-bottom: 20px;
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
      padding: 0 10px;
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
}
</style>
