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
      <div class="header-nav-logo">
        <img src="@/assets/img/logo_black.png">
        <span>国草园集团</span>
      </div>
      <!-- 导航内容 -->
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
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/logo_black.png" alt="logo">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
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
            @click="navClick(index,item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
            
          </li>
        </ul>
      </div>
    </div>

  <nav class="navbar navbar-default">
    <div class="container-fluid">
        <!--Brand and toggle get grouped for better mobile display-->
        <!--响应式导航栏必须包含.collapse .navbar-collapse
            折叠起来的导航栏实际上是由class .navbar-toggle 以及两个data-组成
            第一个data-用于告诉JavaScript要做什么，第二个data-用于指定切换到哪一个元素,为了更具体化的显示折叠之后的展示页面
            用了三个class属性为.icon-bar 的<span>创建了所谓的汉堡按钮(可以更改为任意喜欢样式。-->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#example-navbar-collapse"
                    aria-expanded="false">
                <!--只用于屏幕阅读器，普通浏览器不显示，给无法看到屏幕显示的人士（比如盲人）提供方便-->
                <span class="sr-only">Toggle Navigation</span>
                <!--汉堡按钮-->
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <!--.navbar-brand默认是添加文字的，也可以添加图片，必须是小图片，图片太大位置就会靠下-->
            </button>
            <!--.navbar-brand会让文本更大一号-->
            <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!--Collect the nav links,forms,and other content for toggling-->
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <!--向导航栏添加链接，只需要简单添加带有.nav .navbar-nav的无序列表即可
            注意此处：写成.nav .navbar仅仅只是展示为列表，不会在导航条进行展示-->
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Link<span class="sr-only">(Current)</span></a></li>
                <li><a href="#">Link</a></li>
                <li class="dropdown">
                    <!--.aria-haspopup表示点击会出现菜单或是浮动元素 .aria-expanded表示展开状态-->
                    <a type="button" class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Action another</a></li>
                        <li><a href="#">Action more</a></li>
                        <!--分隔符-->
                        <li class="divider" role="separator"></li>
                        <li><a href="#">Action</a></li>
                        <li class="divider" role="separator"></li>
                        <li><a href="#">Action</a></li>
                    </ul>
                </li>
            </ul>
            <!-- <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Search">
                </div>
                <button class="btn btn-default" type="submit">Submit</button>
            </form> -->
            <ul class="nav navbar-nav navbar-right">
                <!-- <li><a href="#">Link</a></li> -->
                <li class="dropdown"
                 v-for="(item,index) in navList"
                :key="index"
                data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false"
                :class="index==navIndex?'active':''"
                @click="navClick(index,item.name)">
                    <!--.aria-haspopup表示点击会出现菜单或是浮动元素 .aria-expanded表示展开状态-->
                    <router-link :to="item.path">
                      {{item.name}}
                      <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
                      <i class="underline"></i>
                    </router-link>
                    <ul class="dropdown-menu" v-if="item.children.length>0">
                        <li  v-for="(i,n) in item.children" :key="n">
                           <router-link :to="i.path">{{i.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>

  </div>


</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: []
        },
        {
          name: "企业文化",
          path: "/software",
          children: [
            {
              name: "企业简介",
              path: "/software/smartTown"
            },
            {
              name: "荣誉历程",
              path: "/software/bigData"
            },
             {
              name: "组织架构",
              path: "/software/smartTown"
            },
            {
              name: "企业风采",
              path: "/software/bigData"
            },
             {
              name: "企业文化",
              path: "/software/smartTown"
            }
          ]
        },
        {
          name: "产品中心",
          path: "/service",
          children: [
            {
              name: "产品展示",
              path: "/software/smartTown"
            },
            {
              name: "研发包装",
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
          path: "/newsinformation",
          children: [
            {
              name: "公司新闻",
              path: "/software/smartTown"
            },
            {
              name: "重要公告",
              path: "/software/bigData"
            },
            {
              name: "行业动态",
              path: "/software/smartTown"
            },
            {
              name: "专题报道",
              path: "/software/bigData"
            },
             {
              name: "视频展示",
              path: "/software/bigData"
            }
          ]
        },
        {
          name: "公司介绍",
          path: "/companyintroduction",
          children: []
        },
        {
          name: "工作机会",
          path: "/jobchance",
          children: []
        },
        {
          name: "联系我们",
          path: "/contactus",
          children: [
            {
              name: "人力资源",
              path: "/software/bigData"
            },
             {
              name: "联系我们",
              path: "/contactus"
            }
          ]
        }
      ]
    };
  },
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
/* 顶部 */
#header {
  background: #f4f4f4;
  transition: all ease 0.6s;
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
  height: 110px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 240px;
  height: 100%;
  float: left;
  position: relative;
  display: flex;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 95px;
  height: 45px;
  margin: auto;
}
#header .header-nav .header-nav-logo span {
  margin: auto;
  font-size: 25px;
  font-weight: bold;

}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 110px;
  float: right;
  margin: 0;
  max-width: 800px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
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
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
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
    height: 40px;
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
.pull-left{
  /* border:1px solid red; */
  display:flex;
}
.pull-left img{
  height:50px;
}
.pull-left span{
  font-size:18px;
  font-weight: bold;
}
</style>
