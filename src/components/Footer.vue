<template>
  <div id="footer" class="container-fluid">
    <div class="container footercontainer">
      <div class="imgbox">
        <div class="imgboxsmall">
          <img src="../../static/img/3/home/dy.png" alt="" />
          <p>加入抖音了解更多</p>
        </div>
        <div class="imgboxsmall">
          <img src="../../static/img/3/home/wx.png" alt="" />
          <p>加入微信了解更多</p>
        </div>
      </div>
      <div class="logobox">
        <img src="../../static/img/3/home/footerlogo.png" alt="" />
      </div>
      <div class="telBox">
        400 168 5665
      </div>
      <ul class="navBox">
        <li
          v-for="(item, index) in navList"
          :key="index"
          @click="navClick(index, item.name)"
        >
          <router-link :to="item.path">
            <span class="navTxt">{{ item.name }}</span>
            <div id="line"></div>
          </router-link>
          <dl v-if="item.children.length > 0">
            <dt v-for="(i, n) in item.children" :key="n">
              <router-link :to="i.path">{{ i.name }}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      navList: [
        {
          name: "首页",
          name1: "SHOWYE",
          path: "/",
          children: []
        },
        {
          name: "企业文化",
          name1: "QIYEWENHUA",
          path: "/software/aboutUs",
          // path: "/software",
          children: [
            {
              name: "企业简介",
              path: "/software/aboutUs"
            },
            // {
            //   name: "荣誉历程",
            //   path: "/software/rongyu"
            // },
            {
              name: "组织架构",
              path: "/software/jiagou"
            },
            {
              name: "企业风采",
              path: "/software/fengcai"
            }
          ]
        },
        {
          name: "产品中心",
          name1: "CPZHONGXIN",
          path: "/product/productpack",
          // path: "/service",
          children: [
            // {
            //   name: "原料展示",
            //   path: "/product/bigData"
            // },
            {
              name: "产品包装",
              path: "/product/productpack"
            },
            {
              name: "种植实力",
              path: "/product/stockshow"
            }
            // {
            //   name: "防伪查询",
            //   path: "/software/bigData"
            // }
          ]
        },
        {
          name: "中药材基地",
          name1: "XWZHONGXIN",
          path: "/news/companynews",
          // path: "/newsinformation",
          children: [
            {
              name: "种植基地",
              path: "/base/plantingbase"
            },
            {
              name: "智慧农业",
              path: "/base/inteligentAg"
            },
            {
              name: "康养小镇",
              path: "/base/kytown"
            },
            {
              name: "加工产业园",
              path: "/base/park"
            }
          ]
        },
        {
          name: "新闻中心",
          name1: "XWZHONGXIN",
          path: "/news/companynews",
          // path: "/newsinformation",
          children: [
            {
              name: "公司新闻",
              path: "/news/companynews"
            },
            {
              name: "视频展示",
              path: "/news/videonews"
            }
            // {
            //   name: "重要公告",
            //   path: "/software/bigData"
            // },
            // {
            //   name: "行业动态",
            //   path: "/software/smartTown"
            // },
            // {
            //   name: "专题报道",
            //   path: "/software/bigData"
            // },
            //  {
            //   name: "视频展示",
            //   path: "/software/bigData"
            // }
          ]
        },
        // {
        //   name: "公司介绍",
        //   path: "/companyintroduction",
        //   children: []
        // },
        // {
        //   name: "工作机会",
        //   path: "/jobchance",
        //   children: []
        // },
        {
          name: "联系我们",
          name1: "LIANXIWOMEN",
          path: "/contactus",
          children: [
            // {
            //   name: "人力资源",
            //   path: "/software/bigData"
            // },
            //  {
            //   name: "联系我们",
            //   path: "/contactus"
            // }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/main.scss";
#footer {
  width: 100%;
  // height: 800px;
  text-align: center;
  margin-top: 50px;
  position: relative;
  background: #1e2322;
  .footercontainer {
    padding: 40px 0 10px 0;

    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .imgbox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 38px;
      .imgboxsmall {
        margin: 0 2vw;

        &:hover {
          img {
            transform: scale(1.2);
            cursor: pointer;
          }
          p {
            transform: translateY(0.7vw) scale(1.2);
            color: $mainColor;
          }
        }
        p {
          width: 100%;
          text-align: center;
          font-size: 0.8vw;
          color: #888;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
        }
        img {
          width: 100%;
          margin-bottom: 0.7vw;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
        }
      }
    }
    .logobox {
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      img {
        width: 100%;
      }
    }
    .telBox {
      font-size: 30px;
      text-align: center;
      color: #c1bb98;
      margin-bottom: 32px;
      width: 100%;
      text-align: center;
      letter-spacing: 6px;
    }
    .navBox {
      display: flex;
      width: 100%;
      // align-items: center;
      justify-content: center;
      li {
        line-height: 30px;
        width: 12%;
        a {
          color: #ccc;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
        }
        dl {
          dt {
            line-height: 30px;
            a {
              color: #888;
              transition: all 0.4s ease-in-out;
              -webkit-transition: all 0.4s ease-in-out;
              -moz-transition: all 0.4s ease-in-out;
              -o-transition: all 0.4s ease-in-out;
              &:hover {
                color: $mainColor;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
