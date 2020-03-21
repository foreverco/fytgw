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
          发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军
          人不能你嗡嗡发v,发GV我深Vwe大Vwig吗教你玩家GV
          给文化部二号布军人不能你嗡嗡发v
          发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军
          人不能你嗡嗡发v,发GV我深Vwe大Vwig吗教你玩家GV
          给文化部二号布军人不能你嗡嗡发v
          发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军
          人不能你嗡嗡发v,发GV我深Vwe大Vwig吗教你玩家GV
          给文化部二号布军人不能你嗡嗡发v
          发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军
          人不能你嗡嗡发v,发GV我深Vwe大Vwig吗教你玩家GV
          给文化部二号布军人不能你嗡嗡发v
          发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军
          人不能你嗡嗡发v,发GV我深Vwe大Vwig吗教你玩家GV
          给文化部二号布军人不能你嗡嗡发v
        </p>
        <div class="btnBox">
          <button>查看详情</button>
        </div>
      </div>
    </div>
    <hr>
    <ul class="newsList">
      <li class="row listBox" v-for="(item, index) in pageNewsList" :key="index">
        <div class="col-md-3 col-xs-12">
          <img :src="item.imgUrl" alt>
        </div>
        <div class="col-md-9 col-xs-12" style='padding-left:10px'>
          <h4>{{item.title}}</h4>
          <div class="titleBox">
            <span>{{item.date}}</span>
          </div>
          <p>{{item.con}}</p>
          <div class="btnBox">
            <button>查看详情</button>
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
          date: "2020-03-11",
          con: "发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军",
          title: "内蒙古见覅全家福IQ而服务签约仪式",
          imgUrl: "static/img/xinwen-2.png"
        },
        {
          date: "2020-03-12",
          con: "发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军",
          title: "内蒙古见覅全家福IQ而服务签约仪式",
          imgUrl: "static/img/xinwen-2.png"
        },
        {
          date: "2020-03-13",
          con: "发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军",
          title: "内蒙古见覅全家福IQ而服务签约仪式",
          imgUrl: "static/img/xinwen-2.png"
        },
        {
          date: "2020-03-14",
          con: "发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军",
          title: "内蒙古见覅全家福IQ而服务签约仪式",
          imgUrl: "static/img/xinwen-2.png"
        },
        {
          date: "2020-03-15",
          con: "发GV我深Vwe大Vwig吗教你玩家GV给文化部二号布军",
          title: "内蒙古见覅全家福IQ而服务签约仪式",
          imgUrl: "static/img/xinwen-2.png"
        }
      ],
      pageNewsList:[],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [1, 2, 3, 4],
      // 默认每页显示的条数（可修改）
      PageSize: 2
    };
  },
  methods: {
    getData() {
          // 将数据赋值给tableData
         //  this.tableData = data.data.body;
          // 将数据的长度赋值给totalCount
          this.totalCount = this.newsList.length;
          this.pageNewsList = this.newsList.slice(this.PageSize*this.currentPage-this.PageSize,this.PageSize*this.currentPage)
          console.log(this.PageSize)
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
      this.getData()
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

  color: #e5000d;
}
.conBox h4 {
  height: 10%;
  width: 100%;
    line-height: 30PX;
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
  border: 1px solid #c5000d;
  color: #c5000d;
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
  /* color: `  #e5000d; */
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
  border: 1px solid #c5000d;
  color: #c5000d;
}
.tabListPage{
  text-align: center;
}
.el-pagination {
    white-space: inherit;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
}
</style>