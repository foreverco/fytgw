<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <!-- <img class="img-responsive" src="@/assets/img/home/1-head-logo.png" alt="国草园LOGO"> -->
          <span class="navTxt">国草园集团</span>
        </div>
        <div class="shejiao pull-right">
          <b>
            <span class="glyphicon glyphicon-music"></span>
            <!-- <span></span> -->
            <div class="erweiBox">
              <img src="../assets/img/home/douyinerwm.jpg" alt />
            </div>
          </b>
          <b>
            <span class="glyphicon glyphicon-phone"></span>
            <!-- <span></span> -->
            <div class="erweiBox">
              <img src="../assets/img/home/erweima.jpg" alt />
            </div>
          </b>
          <b>
            <span class="glyphicon glyphicon-time"></span>
            <!-- <span></span> -->
            <!-- 7x24小时为您服务 -->
          </b>
          <!-- <span class="glyphicon glyphicon-hand-right"></span>
          赶快联系我们吧！
          <span class="glyphicon glyphicon-hand-left"></span>-->
        </div>
      </div>
    </div>
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <div class="row">
        <div class="header-nav-logo">
          <p>
            <img src="@/assets/img/home/1-head-pinpai .png" alt />
          </p>
        </div>
      </div>
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
              <span class="navTxt">{{ item.name1 }}</span>
              <!-- <span
                v-if="item.children.length>0"
                class="glyphicon glyphicon-menu-down"
              ></span>
              <i class="underline"></i>-->
            </router-link>
            <dl v-if="item.children.length > 0">
              <dt v-for="(i, n) in item.children" :key="n">
                <router-link :to="i.path">{{ i.name }}</router-link>
              </dt>
            </dl>
          </li>
        </ul>
        <ul class="loginBox">
          <li>登录 /</li>
          <li>注册</li>
        </ul>
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
      if (scrollTop > 500) {
        this.tabNav = true;
        console.log(1111);
      } else if (scrollTop < 500) {
        this.tabNav = false;
        console.log(222);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
/* 顶部 */
#header {
  /* background: #f7f7f7; */
  transition: all ease 0.6s;
  width: 100%;
  border-bottom: 1px solid #81b25b;
  background: url("../assets/img/dingbu.png") no-repeat;
  background-size: auto;
  background-position: bottom;
}
#header .header-top {
  height: 40px;
  color: #81b25b;
  font-size: 12px;
  line-height: 40px;
  background: #dcdcdc50;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  /* height: 500px; */
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  /* border: 1px solid red; */
  /* width: 240px; */
  height: 100%;
  /* float: left; */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 223px;
  /* height: 145px; */
  margin: auto;
  margin-bottom: 10px;
}
#header .header-nav .header-nav-logo p {
  margin: auto;
  width: 100%;
  font-weight: bold;
  text-align: center;
  /* border:1px solid blue; */
}
#header .header-nav .header-nav-logo p img {
  width: 60%;
  /* height:75px; */
}
/* 导航栏 导航容器 */
.navCon {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: fixed;
  top:0; */
}
.navShow {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10001;
}
#navshowLogo {
  /* border:1px solid blue; */
  height: 100%;
  display: flex;
  align-items: center;
}
#navshowLogo img {
  height: 60%;
  /* position: absolute; */
  /* left:15%; */
  /* margin-left:250px; */
}
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  height: 80px;
  /* border:1px solid red; */
  /* width:700px; */
  /* line-height: 40px; */
  /* float: right; */
  margin: 0;
  /* max-width: 800px; */
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 105px;
  margin-left: 10px;
  margin-right: 10px;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  display: inline-block;
  height: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  /* border:1px solid red;
  display:inline-block;
  width:100px; */
}
#header .header-nav .header-nav-wrapper > li > a .navTxt {
  /* border:1px solid red; */
  display: inline-block;
  width: 100%;
  font-size: 18px;
  text-align: center;
}
#header .header-nav .header-nav-wrapper > li:hover {
  background: #81b25b20;
}
#header .header-nav .header-nav-wrapper > li:hover a {
  text-decoration: none;
}
#header .header-nav .header-nav-wrapper > li > a .navTxt:last-child {
  font-size: 9px;
}
#header .header-nav .navShow .header-nav-wrapper > li > a {
  color: #fff;
}
#header .header-nav .navShow {
  /* border:1px solid red; */
  display: flex;
  justify-content: space-between;
}
#header .header-nav .navShow .header-nav-wrapper {
  /* background: blue; */
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active {
  background: #81b25b;
}
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #fff;
  text-decoration: none;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 105px;
  top: 100%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #81b25b;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  /* padding: 10px; */
  color: #fff;
  height: 100%;
  width: 100%;
  text-align: center;
}
li > dl > dt a {
  color: #fff;
  border-bottom: 1px solid #fff;
  text-align: center;
  text-decoration: none;
  height: 100%;
  width: 90%;
  display: inline-block;
  padding: 10px;
}
li > dl > dt:last-child a {
  border-bottom: 0;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ffffff30;
}
@media screen and (max-width: 1199px) {
  #navshowLogo {
    display: none;
  }
  .loginBox {
    display: none !important;
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
.loginBox li {
}
</style>
