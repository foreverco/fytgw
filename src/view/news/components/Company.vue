<template>
  <div id="company">
    <!-- <div class='container'> -->
    <div class="row firstNews">
      <div class="col-md-4 col-xs-12 imgBox">
        <img src="@/assets/img/news/xinwen-1.png" alt>
      </div>
      <div class="col-md-8 col-xs-12 conBox">
        <div class="titleBox">
          <span>NEWS</span>
          <span>2020.01.25</span>
        </div>
        <h4>内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式</h4>
        <p>
          1月15号上午，我县举行农业项目合作签约仪式，与国草园集团正式签订百万亩蒙中道地药材产业发展合作项目合作协议，并就全县农牧业产业化发展规划编制召开座谈会。县委书记王兵，县委副书记、政法委书记白俊伟，县委常委、县委办主任郝晓光，政府副县长张国荣与内蒙古国草园实业科技发展有限公司副董事长兼执行董事慈平凡共同出席签约仪式。
          签约仪式上，国草园集团介绍了企业及合作项目相关情况，政府副县长张国荣就合作协议的有关条款进行了说明，签约双方进行了深入的交流与探讨并现场签订了合作协议。
          按照协议，内蒙古国草园实业科技发展有限公司将在化德县组建一个50万亩的蒙中道地药材种植基地，以政府+企业+合作社+农户模式进行合作，培育种植野生道地蒙中药材，并在县经济技术开发区建立一个大型蒙中药材的初加工区，将利用我县土地资源、产业扶贫政策优势，在优质农产品基地、盐碱地改造示范基地建设等绿色蒙中药产品基地领域开展广泛合作。
          王兵在讲话中指出，此次合作协议的签订，对我县农业产业化发展具有重要的意义，是做好扶贫减贫工作的一个重要举措。下一步，我们将因地制宜，从化德县的实际出发，坚持走有机旱作农业的路子，大力发展蒙中药龙头产业，引领我县农业产业纵深向好发展，切实增加农民收入。王兵要求，各乡镇、各部门要进一步解放思想，要有服务意识，要有发展好我县有机旱作农业的意识，大力支持，服务好合作项目，在项目推进的过程中提高效率，在“后扶贫时代”把化德产业发展起来。
          各乡镇、各部门领导干部要发挥关键少数和头雁作用，扎实工作，勇于担当，抓好各项工作的落实，上下共同努力，推动我县农业产业化发展再上新台阶。
          各乡镇和相关部门主要负责人及国草园集团主要人员参加了会议。
        </p>
        <div class="btnBox">
          <router-link :to="{ name: 'NewsMsg' }">
            <button>查看详情</button>
          </router-link>
        </div>
      </div>
    </div>
    <hr>
    <ul class="newsList">
      <li class="row listBox" v-for="(item, index) in pageNewsList" :key="index">
        <div class="col-md-3 col-xs-12">
          <img :src="item.imgUrl" alt>
        </div>
        <div class="col-md-9 col-xs-12" style="padding-left:10px">
          <h4>{{ item.title }}</h4>
          <div class="titleBox">
            <span>{{ item.date }}</span>
          </div>
          <p>{{ item.con }}</p>
          <div class="btnBox">
            <router-link :to="{ name: 'NewsMsg', params: { newsId: item.newsid } }">
              <button>查看详情</button>
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
export default {
  name: "aboutUs",
  data() {
    return {
      newsList: [
        {
          newsid: 1,
          date: "2020-01-15",
          con: `1月15号上午，我县举行农业项目合作签约仪式，与国草园集团正式签订百万亩蒙中道地药材产业发展合作项目合作协议，
                并就全县农牧业产业化发展规划编制召开座谈会。县委书记王兵，县委副书记、政法委书记白俊伟，县委常委、县委办主任郝晓光，
                政府副县长张国荣与内蒙古国草园实业科技发展有限公司副董事长兼执行董事慈平凡共同出席签约仪式。`,
          title:
            "内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式",
          imgUrl: "static/img/news1.png"
        },
        {
          newsid: 2,
          date: "2020-03-14",
          con: `2020年3月14日上午，国草园集团与内蒙古化德县当地种植大户就百万亩中草药种植合作模式举行会议宣讲。会上，国草园集团代表就项目进展以及种植收益等方面进行了详细讲解，并就种植户提出的种植、合作问题进行了深入探讨`,
          title:
            "国草园集团代表与内蒙古化德县种植大户关于中草药种植合作形式举行会议宣讲",
          imgUrl: "static/img/news2.png"
        },
        {
          newsid: 3,
          date: "2020-03-30",
          con: `2020年3月30日，国草园集团董事长慈平凡、总裁唐琳与化德县领导在当地有关部门的陪同下到林西县东山生态扶贫产业园和蒙中草药种植基地设施农业项目进行实地考察调研。`,
          title:
            "国草园集团代表与化德县领导于近日在林西县扶贫产业园和蒙中草药种植基地进行考察",
          imgUrl: "static/img/news1.png"
        },
        {
          newsid: 1,
          date: "2020-01-15",
          con: `1月15号上午，我县举行农业项目合作签约仪式，与国草园集团正式签订百万亩蒙中道地药材产业发展合作项目合作协议，
                并就全县农牧业产业化发展规划编制召开座谈会。县委书记王兵，县委副书记、政法委书记白俊伟，县委常委、县委办主任郝晓光，
                政府副县长张国荣与内蒙古国草园实业科技发展有限公司副董事长兼执行董事慈平凡共同出席签约仪式。`,
          title:
            "内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式",
          imgUrl: "static/img/news1.png"
        },
        {
          newsid: 2,
          date: "2020-03-14",
          con: `2020年3月14日上午，国草园集团与内蒙古化德县当地种植大户就百万亩中草药种植合作模式举行会议宣讲。会上，国草园集团代表就项目进展以及种植收益等方面进行了详细讲解，并就种植户提出的种植、合作问题进行了深入探讨`,
          title:
            "国草园集团代表与内蒙古化德县种植大户关于中草药种植合作形式举行会议宣讲",
          imgUrl: "static/img/news2.png"
        },
        {
          newsid: 3,
          date: "2020-03-30",
          con: `2020年3月30日，国草园集团董事长慈平凡、总裁唐琳与化德县领导在当地有关部门的陪同下到林西县东山生态扶贫产业园和蒙中草药种植基地设施农业项目进行实地考察调研。`,
          title:
            "国草园集团代表与化德县领导于近日在林西县扶贫产业园和蒙中草药种植基地进行考察",
          imgUrl: "static/img/news1.png"
        }
      ],
      pageNewsList: [],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [1, 2, 3, 4],
      // 默认每页显示的条数（可修改）
      PageSize: 3
    };
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
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
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
.conBox p {
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
}
.newsList li {
  padding: 10px 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}
.newsList img {
  width: 100%;
}
.listBox {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.listBox .titleBox {
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.listBox .titleBox span {
  font-size: 17px;
  /* color: `  #81b25b; */
}
.listBox h4 {
  height: 10%;
  width: 100%;
}
.listBox p {
  height: 60%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.listBox .btnBox {
  width: 100%;
  height: 10%;
  text-align: right;
}
.listBox .btnBox button {
  background: transparent;
  border: 0;
  outline: 0;
  border: 1px solid #81b25b;
  color: #81b25b;
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
