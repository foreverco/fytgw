<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild" :class="tabNav ? 'navscroll' : ''">
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航内容 -->
      <div class="navCon row">
        <div id="navshowLogo">
          <img src="@/assets/img/home/1-head-logo.png" alt />
        </div>
        <ul class="header-nav-wrapper">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navIndex ? 'active' : ''"
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
        <!-- <ul class="loginBox">
          <li>
            <span class="glyphicon glyphicon-user"></span>
          </li>
          <li>登录</li>
          <li>/</li>
          <li>注册</li>
        </ul> -->
      </div>
    </div>

    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img src="@/assets/img/logo.png" alt="logo" />
        <span class="logotxt">国草园集团</span>
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <span v-if="sonName" style="font-size:13px;">- {{ sonName }}</span>

        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navIndex ? 'active' : ''"
            data-toggle="collapse"
            aria-expanded="false"
            :data-target="item.children.length > 0 ? targetId : '#menu'"
            @click="navClick(index, item.name)"
          >
            <router-link :to="item.path">
              {{ item.name }}
              <span
                v-if="item.children.length > 0"
                class="glyphicon glyphicon-menu-down"
              ></span>
              <i class="underline"></i>
            </router-link>
            <ul
              :class="'navClass' + index"
              v-if="item.children.length > 0"
              class="header-nav-m-wrapper1 collapse"
            >
              <li
                v-for="(i, n) in item.children"
                :key="n"
                @click="getsonName(i.name)"
                data-toggle="collapse"
                data-target="#menu"
              >
                <router-link :to="i.path">{{ i.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      /* 滚动监听导航条 */
      tabNav: false,
      targetId: "333",
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "首页",
      sonName: "",
      menuClass: "glyphicon glyphicon-menu-down",
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
              name: "养生茶",
              path: "/product/productpack"
            },
            {
              name: "传统中药",
              path: "/product/productpack1"
            },
            {
              name: "药食同源",
              path: "/product/productpack2"
            }
            // {
            //   name: "种植实力",
            //   path: "/product/stockshow"
            // }
            // {
            //   name: "防伪查询",
            //   path: "/software/bigData"
            // }
          ]
        },
        {
          name: "中药材基地",
          name1: "XWZHONGXIN",
          path: "/base/plantingbase",
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
              name: "企业新闻",
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
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.meta.navIndex) {
        this.navIndex = to.meta.navIndex;
      }
      console.log("我变了");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(this.$route.path);
  },
  methods: {
    navClick(index, name) {
      console.log(index);
      this.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      this.sonName = "";
      this.menuName = name;
      this.targetId = ".navClass" + index;
    },
    menuClick() {
      console.log(123);
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    },
    getsonName(name) {
      this.sonName = name;
      console.log(this.sonName);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 400) {
        this.tabNav = true;
        console.log(1111);
      } else if (scrollTop < 400) {
        this.tabNav = false;
        console.log(222);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.navscroll {
  // opacity: 0.3;
  background: #ffffff !important;
  position: fixed;
}
/* 顶部 */
#header {
  transition: all ease 0.6s;
  width: 100%;
  // border-bottom: 1px solid $mainColor;
  background: #fff;
  z-index: 100001;
  // background: url("../assets/img/dingbu.png") no-repeat;
  // background-size: auto;
  // background-position: bottom;
  .header-nav {
    .navCon {
      // border: 1px solid red;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      #navshowLogo {
        height: 60%;
        img {
          height: 100%;
        }
      }
      .header-nav-wrapper {
        height: 100%;
        margin: 0;
        li {
          float: left;
          // border: 1px solid blue;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 105px;
          margin-left: 10px;
          margin-right: 10px;
          &.active {
            background: #24585210;
            #line {
              width: 100%;
            }
          }
          &:hover {
            // background: #81b25b20;
            cursor: pointer;
            > a {
              color: $mainColor;
              span {
                transform: translateY(-5px);
              }
            }
            dl {
              display: block;
            }
            #line {
              width: 100%;
            }
          }
          > a {
            color: #000;
            display: inline-block;
            height: 50px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
            span {
              transition: all 0.2s linear;
            }
            #line {
              width: 0px;
              height: 2px;
              border-radius: 2px;
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              background-color: $mainColor;
              margin: 0 auto;
              transition: all 0.6s ease;
            }
            &:hover {
              text-decoration: none;
            }
            .navTxt {
              display: inline-block;
              width: 100%;
              font-size: 18px;
              text-align: center;
            }
          }
          dl {
            display: none;
            position: absolute;
            width: 105px;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10000001;
            // box-shadow: 0 0 3px 1px #ccc;
            background: #fff;
            padding: 0 20px;
            box-sizing: content-box;
            // border-top: 1px solid red;

            dt {
              width: 100%;
              /* padding: 10px; */
              color: #fff;
              height: 100%;
              width: 100%;
              text-align: center;
              transition: all 0.2s linear;
              &:hover {
                transform: translateX(5px);
                a {
                  color: #24585290;
                }
              }
              a {
                color: $mainColor;
                border-bottom: 1px solid #fff;
                font-size: 14px;
                text-align: center;
                text-decoration: none;
                height: 100%;
                width: 90%;
                display: inline-block;
                padding: 10px;
                transition: all 0.2s linear;
              }
            }
          }
        }
      }
      .loginBox {
        li {
          float: left;
          font-size: 18px;
          span {
            font-size: 16px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}

@keyframes hideIndex {
  0% {
    opacity: 0;
    width: 0px;
    // transform: translate(800px, 0);
    // transform: translateX(-50%) scale(0);
  }
  100% {
    opacity: 1;
    width: 100px;
    // transform: translate(0, 0);
    // transform: translateX(-50%) scale(1.2);
  }
}

@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 95px;
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    /* margin: auto; */
  }
  .logotxt {
    font-size: 25px;
    font-weight: bold;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    /* height: 40px; */
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
.header-nav-m-wrapper1 {
  background: #555;
}
/* 导航栏 每个导航 */
#header .header-nav-m .header-nav-m-wrapper1 > li {
  /* height: 40px; */
  line-height: 35px;
  border-bottom: 1px solid #ccc;
}
#header .header-nav-m .header-nav-m-wrapper1 > li > a {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}
.pull-right {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  height: 40px;
}
.pull-right b {
  /* border:1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  /* padding: 0 5px; */
}
.pull-right b:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
}
.erweiBox {
  position: absolute;
  top: 80px;
  right: -5%;
  width: 0;
  /* height: 100px; */
  /* border: 1px solid rgba(0, 0, 0, 0.4); */
  border-radius: 10px;
  /* background: rgba(0, 0, 0, 0.2); */
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  img {
    width: 100%;
  }
}
.pull-right b:hover .erweiBox {
  width: 150px;
  opacity: 1;
  transform: scale(1.5);
  z-index: 10002;
}
.erweiBox img {
  width: 90%;
  height: 90% !important;
}
.pull-left {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pull-left img {
  height: 30px;
}
.pull-left span {
  font-size: 14px;
  letter-spacing: 10px;
  /* font-weight: bold; */
}
.loginBox {
  /* border:1px solid red; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  #header .header-nav-m .header-nav-m-wrapper > li > a[data-v-61dd7a3d] {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 0;
    position: relative;
    width: 100%;
    display: inline-block;
  }
}
</style>
