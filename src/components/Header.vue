<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <!-- <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
           <img class="img-responsive" src="@/assets/img/logo_hp.png" alt="国草园LOGO">
          <span>国草园集团</span>
          <span class="glyphicon glyphicon-earphone"></span>(025)66088177
          <span class="glyphicon glyphicon-envelope"></span>liyunkun_11@163.com
          <span class="glyphicon glyphicon-time"></span>7x24小时为您服务
        </div>
        <div class="shejiao pull-right">
          <span class="glyphicon glyphicon-hand-right"></span>赶快联系我们吧！
          <span class="glyphicon glyphicon-hand-left"></span>
        </div>
      </div>
    </div> -->
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class='row'>
        <div class="header-nav-logo">
          <img src="@/assets/img/home/1-head-logo.png" alt="">
          <p>
            <img src="@/assets/img/home/1-head-pinpai .png" alt="">
          </p>
        </div>
      </div>
      <!-- 导航内容 -->
      <div class='navCon row'>
          <ul class="header-nav-wrapper">
            <li
              v-for="(item,index) in navList"
              :key="index"
              :class="index==navIndex?'active':''"
              @click="navClick(index,item.name)"
            >
              <router-link :to="item.path">
                {{item.name}}
                <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
                <i class="underline"></i>
              </router-link>
              <dl v-if="item.children.length>0">
                <dt v-for="(i,n) in item.children" :key="n">
                  <router-link :to="i.path">{{i.name}}</router-link>
                </dt>
              </dl>
            </li>
          </ul>
      </div>

    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img src="@/assets/img/logo.png" alt="logo">
        <span class='logotxt'>国草园集团</span>
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}<span v-if='sonName' style="font-size:13px;"> - {{sonName}}</span>

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
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            data-toggle="collapse"
            aria-expanded="false"
            :data-target="targetId"
            @click="navClick(index,item.name)"
          >
            <router-link :to="item.path">
              {{item.name}}
              <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
              <i class="underline"></i>
            </router-link>
             <ul :class="'navClass'+index" v-if="item.children.length>0" class="header-nav-m-wrapper1 collapse">
            <li 
              v-for="(i,n) in item.children" 
              :key="n" 
              @click.stop="getsonName(i.name)"
              data-toggle="collapse"
              data-target="#menu"
               >
              <router-link :to="i.path">{{i.name}}</router-link>
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
      targetId: '333',
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "首页",
      sonName: "",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: []
        },
        {
          name: "企业文化",
          path: "",
          // path: "/software",
          children: [
            {
              name: "企业简介",
              path: "/software/aboutUs"
            },
            {
              name: "荣誉历程",
              path: "/software/rongyu"
            },
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
          path: "",
          // path: "/service",
          children: [
            {
              name: "原料展示",
              path: "/software/smartTown"
            },
            {
              name: "产品包装",
              path: "/software/bigData"
            },
            {
              name: "种植实力",
              path: "/software/smartTown"
            },
            {
              name: "防伪查询",
              path: "/software/bigData"
            }
          ]
        },
        {
          name: "新闻中心",
          path: "",
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
  methods: {
    navClick(index, name) {
      console.log(444)
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.sonName = ''
      this.menuName = name;
      this.targetId = ".navClass" + index
    },
    menuClick() {
      console.log(123)
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    },
    getsonName(name) {
        this.sonName = name
        console.log(this.sonName)
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  /* background: #f7f7f7; */
  transition: all ease 0.6s;
  background: url('../assets/img/home/toubu.png') no-repeat;
  background-size: 100%;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  /* height: 500px; */
  padding-top:100px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  /* border:1px solid red; */
  /* width: 240px; */
  height: 100%;
  /* float: left; */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 223px;
  /* height: 145px; */
  margin: auto;
  margin-bottom:10px;
}
#header .header-nav .header-nav-logo p {
  margin: auto;
  width:100%;
  font-weight: bold;
  text-align: center;
  /* border:1px solid blue; */
}
#header .header-nav .header-nav-logo p img{
  width:60%;
  /* height:75px; */
}
/* 导航栏 导航容器 */
.navCon{
  /* border:1px solid red; */
  height:110px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 110px;
  /* float: right; */
  margin: 0;
  /* max-width: 800px; */
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 20px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
  /* border:1px solid red;
  display:inline-block;
  width:100px; */
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #1e73be;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #1e73be;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #1e73be;
  text-decoration: none;
  border-bottom: 2px solid #1e73be;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
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
  background: #ccc;
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
  .logotxt{
    font-size:25px;
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
.header-nav-m-wrapper1{
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
.pull-left{
  /* border:1px solid red; */
  display:flex;
  align-items: center;
}
.pull-left img{
  height:50px;
}
.pull-left span{
  font-size:18px;
  font-weight: bold;
}
</style>
