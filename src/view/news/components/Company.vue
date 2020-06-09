<template>
  <div id="company">
    <ul class="newsList">
      <li
        class="row listBox"
        v-for="(item, index) in pageNewsList"
        :key="index"
        @click="
          $router.push({ name: 'NewsMsg', params: { newsId: item.newsid } })
        "
      >
        <div class="newslistimgbox col-md-3 ol-xs-12">
          <img :src="item.imgUrl" alt />
          <ul class="dateBox">
            <li>{{ item.dateD }}</li>
            <li>{{ item.dateM }}</li>
          </ul>
        </div>
        <div
          class="newslistconbox col-md-9 col-xs-12"
          style="padding-left:10px"
        >
          <h4>{{ item.title }}</h4>
          <p class="contentbox">{{ item.con }}</p>
          <div class="btnBox">
            <router-link
              :to="{ name: 'NewsMsg', params: { newsId: item.newsid } }"
            >
              <button>查看详情 >></button>
            </router-link>
          </div>
        </div>
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
</template>
<script>
import { getNewsList } from "../../../util/newsList";
const newsListObj = getNewsList();
export default {
  name: "aboutUs",
  props: {
    newsType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newsList: [
        // {
        //   newsid: 1,
        //   dateM: "01",
        //   dateD: "15",
        //   con: `1月15号上午，我县举行农业项目合作签约仪式，与国草园集团正式签订百万亩蒙中道地药材产业发展合作项目合作协议，
        //         并就全县农牧业产业化发展规划编制召开座谈会。县委书记王兵，县委副书记、政法委书记白俊伟，县委常委、县委办主任郝晓光，
        //         政府副县长张国荣与内蒙古国草园实业科技发展有限公司副董事长兼执行董事慈平凡共同出席签约仪式。`,
        //   title:
        //     "内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式",
        //   imgUrl: "static/img/news/news1.png"
        // },
        // {
        //   newsid: 2,
        //   dateM: "03",
        //   dateD: "14",
        //   con: `2020年3月14日上午，国草园集团与内蒙古化德县当地种植大户就百万亩中草药种植合作模式举行会议宣讲。会上，国草园集团代表就项目进展以及种植收益等方面进行了详细讲解，并就种植户提出的种植、合作问题进行了深入探讨`,
        //   title:
        //     "国草园集团代表与内蒙古化德县种植大户关于中草药种植合作形式举行会议宣讲",
        //   imgUrl: "static/img/4-xinwenzhongxin-1.png"
        // },
        // {
        //   newsid: 3,
        //   dateM: "03",
        //   dateD: "30",
        //   con: `2020年3月30日，国草园集团董事长慈平凡、总裁唐琳与化德县领导在当地有关部门的陪同下到林西县东山生态扶贫产业园和蒙中草药种植基地设施农业项目进行实地考察调研。`,
        //   title:
        //     "国草园集团代表与化德县领导于近日在林西县扶贫产业园和蒙中草药种植基地进行考察",
        //   imgUrl: "static/img/3/news/news_fuping3.png"
        // },
        // {
        //   newsid: 1,
        //   dateM: "01",
        //   dateD: "15",
        //   con: `1月15号上午，我县举行农业项目合作签约仪式，与国草园集团正式签订百万亩蒙中道地药材产业发展合作项目合作协议，
        //         并就全县农牧业产业化发展规划编制召开座谈会。县委书记王兵，县委副书记、政法委书记白俊伟，县委常委、县委办主任郝晓光，
        //         政府副县长张国荣与内蒙古国草园实业科技发展有限公司副董事长兼执行董事慈平凡共同出席签约仪式。`,
        //   title:
        //     "内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式",
        //   imgUrl: "static/img/news/news1.png"
        // },
        // {
        //   newsid: 2,
        //   dateM: "03",
        //   dateD: "14",
        //   con: `2020年3月14日上午，国草园集团与内蒙古化德县当地种植大户就百万亩中草药种植合作模式举行会议宣讲。会上，国草园集团代表就项目进展以及种植收益等方面进行了详细讲解，并就种植户提出的种植、合作问题进行了深入探讨`,
        //   title:
        //     "国草园集团代表与内蒙古化德县种植大户关于中草药种植合作形式举行会议宣讲",
        //   imgUrl: "static/img/4-xinwenzhongxin-1.png"
        // },
        // {
        //   newsid: 3,
        //   dateM: "03",
        //   dateD: "30",
        //   con: `2020年3月30日，国草园集团董事长慈平凡、总裁唐琳与化德县领导在当地有关部门的陪同下到林西县东山生态扶贫产业园和蒙中草药种植基地设施农业项目进行实地考察调研。`,
        //   title:
        //     "国草园集团代表与化德县领导于近日在林西县扶贫产业园和蒙中草药种植基地进行考察",
        //   imgUrl: "static/img/news1.png"
        // }
      ],
      pageNewsList: [],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [5, 10, 15, 20],
      // 默认每页显示的条数（可修改）
      PageSize: 5
    };
  },
  watch: {
    newsType(val) {
      console.log(Number(val));
      this.newsList = newsListObj.newsList.filter(item => {
        // console.log(item);
        return item.type == Number(val);
      });
      this.getData();
    }
  },
  methods: {
    getData() {
      // 将数据赋值给tableData
      //  this.tableData = data.data.body;
      // 将数据的长度赋值给totalCount
      this.totalCount = this.newsList.length;
      this.pageNewsList = this.newsList.slice(
        this.PageSize * this.currentPage - this.PageSize,
        this.PageSize * this.currentPage
      );
      // console.log(this.PageSize);
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
      // 滚动条自动滚动到顶部
      window.scrollTo(50, 400);
    }
  },
  created() {
    // this.newsList = newsListObj.newsList;
    this.newsList = newsListObj.newsList.filter(item => {
      console.log(item);
      return item.type == this.newsType;
    });
    this.getData();
    console.log(this.newsList);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.firstNews {
  /* height:326px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
}
.imgBox {
  /* border: 1px solid red; */
}
.imgBox img {
  width: 100%;
}
.conBox {
  height: 100%;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.conBox .titleBox {
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.conBox .titleBox span {
  font-size: 17px;

  color: #81b25b;
}
.conBox h4 {
  height: 10%;
  width: 100%;
  line-height: 30px;
}
.conBox > p {
  height: 60%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.conBox .btnBox {
  width: 100%;
  height: 10%;
  text-align: right;
  align-self: flex-end;
}
.conBox .btnBox button {
  background: transparent;
  border: 0;
  outline: 0;
  border: 1px solid #81b25b;
  color: #81b25b;
}
.newsList {
  width: 100%;
  margin-top: 30px;
  > .listBox {
    padding: 30px 0;
    // border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
    display: flex;
    background: url("../../../assets/img/3.0/newsBg.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 2vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &:hover {
      cursor: pointer;
      box-shadow: 3px 3px 6px 3px #24585250,
        -0px 0px 0px 0px rgba(255, 255, 255, 0.5);
      .newsContent {
        color: $mainColor;
      }
    }
    .newslistimgbox {
      border-right: 1px solid #ccc;
      margin: 0 1%;
      padding: 0.5vw;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80%;
      }
      .dateBox {
        // border: 1px solid blue;
        width: 20%;
        height: 6vw;
        margin-left: 0.5vw;
        // position: relative;
        > li {
          // border: 1px solid red;
          text-align: center;
          width: 80%;
          margin: 0 auto;
          height: 3vw;
          line-height: 3vw;
          &:last-child {
            border-top: 1px solid #ccc;
            font-size: 1.8vw;
          }
        }
      }
    }
    .newslistconbox {
      // outline: 1px solid red;
      width: 61%;
      height: 100%;
      margin-left: 3% !important;
      h4 {
        // border: 1px solid red;
      }
      .contentbox {
        // border: 1px solid red;
        height: 60%;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 1.5vw 0;
      }
      .btnBox {
        width: 100%;
        height: 10%;
        text-align: right;
        align-self: flex-end;
        button {
          background: $mainColor;
          border: 0;
          outline: 0;
          border: 1px solid #81b25b;
          color: #fff;
          padding: 8px 10px;
        }
      }
    }
  }
}
// .newsList .listBox {
//   height: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
// }
// .listBox .titleBox {
//   height: 10%;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }
// .listBox .titleBox span {
//   font-size: 17px;
//   /* color: `  #81b25b; */
// }
// .listBox h4 {
//   height: 10%;
//   width: 100%;
// }
// .listBox p {
//   height: 60%;
//   width: 100%;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
// }
// .listBox .btnBox {
//   width: 100%;
//   height: 10%;
//   text-align: right;
// }
// .listBox .btnBox button {
//   background: transparent;
//   border: 0;
//   outline: 0;
//   border: 1px solid #81b25b;
//   color: #81b25b;
// }
// .tabListPage {
//   text-align: center;
// }
// .el-pagination {
//   white-space: inherit;
//   padding: 2px 5px;
//   color: #303133;
//   font-weight: 700;
// }
</style>
