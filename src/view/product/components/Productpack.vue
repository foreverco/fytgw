<template>
  <div id='productpack'>
      	<ul class="maodianBtn">
            <!-- 锚点的名称 -->
            <li v-for="(item, index) in listType" :key="index">
               <a :href="'#'+item.typeId">{{item.type}}</a> 
            </li>
            <!-- <li>
                 <a href="#box1" >主打饮品</a>
            </li>
             <li>
                 <a href="#box2" >传统蒙药</a>
            </li>
             <li>
                 <a href="#box3" >药食同源</a>
            </li> -->
        </ul>
    <div class='row productpackBanner'>
      <img
        src="@/assets/img/chanpin/4-1chanpin-banner.png"
        alt=""
      >
    </div>
    <div class='container'>
      <ul
        class='row productContainer'
        v-for="(items, index) in listType"
        :key="index"
      >
        <li class='row productTitle col-xs-12 wowProduct bounceInRight' :id='items.typeId'>
            <span>
                {{items.type}}
            </span>
        </li>
        <li
          class='productList col-md-3  col-xs-5'
          v-for="(item, index) in items.imgList"
          :key="index"
        >
          <div class='productImgBox wowProduct zoomIn'>
            <img
              :src="item.imgUrl"
              alt=""
            >
          </div>
          <p class='productnameBox'>
              {{item.name}}
          </p>
          <p class='productpriceBox'>
              {{item.price}}
          </p>
          <p class='productBtnBox'>
            <button>立即了解</button>
          </p>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "Productpack",
  data() {
    return {
      listType: [
        {
          type: "主打饮品",
          typeId:'box1',
          imgList: [
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            },
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            },
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            }
          ]
        },
        {
          type: "传统蒙药",
          typeId:'box2',
          imgList: [
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            },
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            },
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            }
          ]
        },
        {
          type: "药食同源",
          typeId:'box3',
          imgList: [
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            },
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            },
            {
              imgUrl: "../../../../static/img/chanpin/4-1chanpin-tu1.png",
              name: "国草园黄氏饮片",
              price:'￥67.00'
            }
          ]
        }
      ]
    };
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
  margin:20px 0;
}
#productpack .productContainer .productTitle {
    display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  font-size:20px;
  background: url("../../../assets/img/chanpin/4-1chanpin-biaoti-1.png") no-repeat;
  background-position: center;
  height:10vh;
  background-size:contain;
}
#productpack .productContainer .productTitle span{
    margin-left:-3%;
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
#productpack .productContainer .productBtnBox, #productpack .productContainer .productpriceBox, #productpack .productContainer .productnameBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
#productpack .productContainer .productBtnBox button{
    border: 0;
    outline: 0;
    background: #c5000d;
    color:#fff;
    padding: 0.2vw 0.5vw;
}
#productpack .productContainer .productpriceBox{
    font-size:24px;
    font-weight: bold;
    color:#c5000d;
}
#productpack .productContainer .productnameBox {
   font-size:1.2vw;
    font-weight: bold;
    color:#000;

}
p{
    margin:0;
    padding:0;
}
/* 锚点链接 */
.maodianBtn{
    position:fixed;
    right:0;
    top:50%;
    transform: translateY(-50%);
    border:1px solid red;
    border:1px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    background: #c5000d80;
}
.maodianBtn li{
    padding:1vw;
    border-bottom:1px solid rgba(0,0,0,0.2)
}
.maodianBtn li:hover{
    background: #ffff0050;
}
.maodianBtn li a{
    font-size:16px;
    color:#fff;
}
a{
    text-decoration: none;
}
</style>