<template>
  <div id="productpack">
    <!-- <ul class="maodianBtn">
            <li v-for="(item, index) in listType" :key="index">
               <a :href="'#'+item.typeId">{{item.type}}</a> 
            </li>
    </ul>-->
    <div class="row productpackBanner">
      <img src="@/assets/img/chanpin/4-1chanpin-banner.png" alt />
    </div>
    <div class="container">
      <div class="row listNavRow">
        <ul class="col-xs-12 col-md-8 listNav">
          <li
            v-for="(item, index) in listType"
            :key="index"
            :class="{navActive: index==navIndex}"
            @click="changeList(index)"
          >{{item.type}}</li>
        </ul>
      </div>
      <ul class="row productContainer" v-for="(items, index) in newlistType" :key="index">
        <li class="row productTitle col-xs-12 wowProduct bounceInRight" :id="items.typeId">
          <span>{{items.type}}</span>
        </li>
        <li
          class="productList col-md-3 col-xs-5"
          v-for="(item, index) in pagecpList"
          :key="index"
        >
          <div class="productImgBox wowProduct zoomIn">
            <img :src="item.imgUrl" alt />
          </div>
          <p class="productnameBox">{{item.name}}</p>
          <p class="productpriceBox">{{item.price}}</p>
          <p class="productBtnBox">
            <button>立即了解</button>
          </p>
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
  name: "Productpack",
  data() {
    return {
      navIndex: 0,
      newlistType: [],
      pagecpList:[],
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [3, 6, 9, 12],
      // 默认每页显示的条数（可修改）
      PageSize: 6,
      listType: [
        {
          type: "主打饮品",
          typeId: "box1",
          imgList: [
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
          ]
        },
        {
          type: "传统蒙药",
          typeId: "box2",
          imgList: [
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
          ]
        },
        {
          type: "药食同源",
          typeId: "box3",
          imgList: [
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
            {
              imgUrl: "static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price: "￥67.00"
            },
          ]
        }
      ]
    };
  },
  created() {
     this.changeList()
  },
  mounted() {
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wowProduct",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  },
  watch: {
    newlistType() {
      this.$nextTick(() => { // 在dom渲染完后,再执行动画
      var wow = new WOW({
         boxClass: "wowProduct",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: false
      })
      wow.init()
    })
  }
  },
  methods: {
    changeList(e) {
      console.log(e)
      if(!e){
        e=0
      }
      this.navIndex = e
      let arr = []
      arr.push(this.listType[e])
      console.log(this.listType[e])
      this.newlistType = arr
      console.log(this.newlistType[0].imgList)
      this.pagecpList = this.newlistType[0].imgList.slice(this.PageSize*this.currentPage-this.PageSize,this.PageSize*this.currentPage)
      this.totalCount = this.newlistType[0].imgList.length;
    },
        // 分页
    // 每页显示的条数
    handleSizeChange(val) {
      // 改变每页显示的条数
      this.PageSize = val;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
      this.changeList();
    },
    // 显示第几页
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val;
      this.changeList()
    }
  }
};
</script>
<style scoped>
#productpack .productpackBanner img {
  width: 100%;
}
#productpack .productContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
#productpack .productContainer .productTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  background: url("../../../assets/img/chanpin/4-1chanpin-biaoti-1.png")
    no-repeat;
  background-position: center;
  height: 10vh;
  background-size: contain;
}
#productpack .productContainer .productTitle span {
  margin-left: -3%;
  letter-spacing: 5px;
}
#productpack .productContainer .productList {
  margin: 10px;
}
#productpack .productContainer .productImgBox {
}
#productpack .productContainer .productImgBox img {
  width: 100%;
}
#productpack .productContainer .productBtnBox,
#productpack .productContainer .productpriceBox,
#productpack .productContainer .productnameBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
#productpack .productContainer .productBtnBox button {
  border: 0;
  outline: 0;
  background: #c5000d;
  color: #fff;
  padding: 0.2vw 0.5vw;
}
#productpack .productContainer .productpriceBox {
  font-size: 24px;
  font-weight: bold;
  color: #c5000d;
}
#productpack .productContainer .productnameBox {
  font-size: 1.2vw;
  font-weight: bold;
  color: #000;
}
p {
  margin: 0;
  padding: 0;
}
/* 锚点链接 */
.maodianBtn {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid red;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #c5000d80;
}
.maodianBtn li {
  padding: 1vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.maodianBtn li:hover {
  background: #ffff0050;
}
.maodianBtn li a {
  font-size: 16px;
  color: #fff;
}
a {
  text-decoration: none;
}
/* 分类导航 */
.listNavRow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.listNav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.listNav li {
  background: url("../../../assets/img/chanpin/4-1chanpin-annui-xvanzhong.png")
    no-repeat;
  background-size: 100% 100%;
  color: #fff;
  width: 110px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.listNav li:hover{
  cursor: pointer;
}
.navActive {
  background: url("../../../assets/img/chanpin/4-1chanpin-annui-weixvan.png")
    no-repeat !important;
  background-size: 100% 100% !important;
}
</style>