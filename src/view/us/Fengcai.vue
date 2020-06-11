<template>
  <div id="fengcai">
    <div class="row qiyebg">
      <img src="static/img/3/us/bannerfc.png" alt />
    </div>
    <div class="container">
      <div class="row">
        <ul class="col-md-12 imgBox">
          <li
            class="imgone imgwow"
            v-for="(item, index) in imgBox"
            :key="index"
          >
            <div class="imgSpace1">
              <img v-lazy="item.imgUrl" alt />
            </div>

            <!-- <p>{{ item.title }}</p> -->
          </li>
        </ul>
      </div>
      <ul class="row imgList">
        <li
          class="col-md-3 col-sm-4 imgwow zoomIn"
          v-for="(item, index) in newImgList"
          :key="index"
          @click="gotoImgMsg(item.imgUrl)"
        >
          <div class="imgSpace">
            <img v-lazy="item.imgUrl" alt />
          </div>
          <!-- <div class="txtSpace">{{ item.title }}</div> -->
        </li>
      </ul>
      <div class="row tabListPage">
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
  name: "fengcai",
  data() {
    return {
      picover: -1,
      newImgList: [],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [3, 6, 9, 12],
      // 默认每页显示的条数（可修改）
      PageSize: 6,
      imgBox: [
        { imgUrl: "static/img/3-3qiyefengcai-1.png", title: "种植奠基仪式" },
        { imgUrl: "static/img/3-3qiyefengcai-2.png", title: "种植奠基仪式" },
        { imgUrl: "static/img/3-3qiyefengcai-3.png", title: "种植奠基仪式" },
        { imgUrl: "static/img/3-3qiyefengcai-4.png", title: "种植奠基仪式" }
      ],
      fengeImgList: [
        { num: "壹" },
        { num: "貮" },
        { num: "叁" },
        { num: "肆" },
        { num: "伍" },
        { num: "陸" },
        { num: "柒" },
        { num: "捌" }
        // {num:'玖'},
      ],
      imgList: [
        {
          imgUrl: "static/img/qiye/3-3qiyefengcai-8.png",
          title: "国草园与化德县建立了友好的合作关系"
        },
        {
          imgUrl: "static/img/qiye/3-3qiyefengcai-9.png",
          title: "国草园与化德县建立了友好的合作关系"
        },
        {
          imgUrl: "static/img/qiye/3-3qiyefengcai-10.png",
          title: "国草园与化德县建立了友好的合作关系"
        },
        {
          imgUrl: "static/img/qiye/3-3qiyefengcai-11.png",
          title: "国草园与化德县建立了友好的合作关系"
        },
        {
          imgUrl: "static/img/qiye/3-3qiyefengcai-12.png",
          title: "国草园与化德县建立了友好的合作关系"
        },
        {
          imgUrl: "static/img/qiye/3-3qiyefengcai-13.png",
          title: "国草园与化德县建立了友好的合作关系"
        },
        {
          imgUrl: "static/img/qiye/3-3qiyefengcai-8.png",
          title: "国草园与化德县建立了友好的合作关系"
        },
        {
          imgUrl: "static/img/qiye/3-3qiyefengcai-9.png",
          title: "国草园与化德县建立了友好的合作关系"
        }
      ]
    };
  },
  watch: {
    picover() {
      this.$nextTick(() => {
        // 在dom渲染完后,再执行动画
        var wow = new WOW({
          boxClass: "pic1wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: false
        });
        wow.init();
      });
    }
  },
  mounted() {
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "imgwow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  },
  methods: {
    gotoImgMsg(e) {
      console.log(e);
    },
    getIndex(e) {
      console.log(e);
      this.picover = e;
    },

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
    },
    gotoImgMsg(e) {
      this.$router.push("/news/newsmsg/1");
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.qiyebg img {
  width: 100%;
  // height: 700px;
}
.imgBox {
  /* border:1px solid blue; */
  margin-top: -20%;
  margin-bottom: 3vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.imgBox li {
  /* height:430px; */
  /* border:1px solid red; */
  position: relative;
}
.imgBox li:hover {
  cursor: pointer;
}
.imgBox li p {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 10%;
  background: rgba(0, 0, 0, 0.5);
  width: 98%;
  padding-left: 5%;
  color: #fff;
  display: flex;
  align-items: center;
  transition: all 0.6s;
}
.imgSpace1 {
  height: 100%;
  overflow: hidden;
}
.imgSpace1 img {
  transition: all 0.6s;
}
.imgSpace1:hover {
  img {
    transform: scale(1.4);
  }
}
.imgBox li:hover .imgSpace1::after {
  content: "奠基仪式 点击了解更多";
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 102;
  transition: all 400ms ease;
}
.imgBox li:hover p {
  width: 100%;
  height: 14%;
  bottom: -2%;
}
.imgBox li:first-child,
.imgBox li:last-child {
  width: 60%;
}
.imgBox li:nth-child(2),
.imgBox li:nth-child(3) {
  width: 40%;
}
.imgBox li img {
  width: 100%;
  height: 100%;
}
.fengeImg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vw 0;
  /* border:1px solid red; */
  height: 8vw;
}
.fengeImg li {
  width: 5vw;
  height: 5vw;
  font-size: 2vw;
  /* font-weight:bold; */
  color: #81b25b;
  background: url("../../assets/img/qiye/3-3qiyefengcai-5.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s;
  span {
    transition: all 0.6s;
  }
}
.fengeImg li:hover {
  transform: scale(1.4);
  cursor: pointer;
  background: url("../../assets/img/qiye/3-3qiyefengcai-6.png") no-repeat;
  background-size: 100% 100%;
  span {
    opacity: 0;
  }
}
/* .fengeImg li:nth-child(3) {

} */
.imgList {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.imgList li {
  /* width:22%; */
  margin: 4%;
  position: relative;
  // border: 1px solid red;
}
.imgList li .imgSpace {
  height: 50%;
  z-index: 1;
  position: relative;
  overflow: hidden;
}
.imgList li .imgSpace img {
  transition: all 0.6s;
}
.imgList li .imgSpace:hover img {
  cursor: pointer;
  transform: scale(1.4);
}
.imgList li:hover .txtSpace {
  background: rgba(0, 0, 0, 0.5);
}
.imgList li:hover .imgSpace::after {
  content: "点击了解更多";
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 102;
  transition: all 400ms ease;
}
.imgList li .txtSpace {
  height: 20%;
  width: 100%;
  font-size: 11px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* background: #325815; */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 103;
}
.imgList li .imgSpace img {
  width: 100%;
}

@media screen and (max-width: 800px) {
  .fengeImg li[data-v-489fac63] {
    width: 8vw;
    height: 8vw;
    font-size: 2vw;
    color: #325815;
    background: url(/static/img/3-3qiyefengcai-5.bb9823c.png) no-repeat;
    background-size: 100% 100%;
    transform: all 0.6s;
  }
  .fengeImg li:hover {
    transform: scale(1.4);
    cursor: pointer;
    background: url("../../assets/img/qiye/3-3qiyefengcai-6.png") no-repeat;
    background-size: 100% 100%;
  }
}
@media screen and (min-width: 1600px) {
  .fengeImg li {
    width: 3vw;
    height: 3vw;
    font-size: 1vw;
    /* font-weight:bold; */
    color: #325815;
    background: url("../../assets/img/qiye/3-3qiyefengcai-5.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s;
  }
  .fengeImg li:hover {
    transform: scale(1.4);
    cursor: pointer;
    background: url("../../assets/img/qiye/3-3qiyefengcai-6.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
