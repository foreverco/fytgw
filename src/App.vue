<template>
  <div id="app">
    <Header v-if="$route.name !== 'Welcome'"></Header>
    <router-view />
    <Footer v-if="$route.name !== 'Welcome'"></Footer>
    <GoTop v-if="$route.name !== 'Welcome'"></GoTop>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //  :class='{fengcaiBg:isFengcai==this.$route.path}'
      // isFengcai:'/software/fengcai'
    };
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style lang="scss">
@import "./common/fonts/font.css";
@import "./styles/main.scss";

#app {
  background: url("./assets/img/bg1.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.container-fluid {
  padding: 0 !important;
  margin: 0 !important;
}
.row {
  padding: 0;
  margin: 0;
}
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  padding: 0;
  margin: 0;
}
.el-pager {
}
.el-pager li {
  border: 1px solid $mainColor !important;
  min-width: 30px;
  height: 30px;
  line-height: 30px;
  margin: 0 0.5vw;
  // border-radius: 10px;
  // transform: rotate(45deg);
}
.el-pager li.active {
  color: #fff;
  border: 1px solid $mainColor !important;
  background: $mainColor;
  cursor: default;
}
a {
  color: $mainColor;
  text-decoration: none;
}
.el-pagination .btn-prev {
  margin-right: 0.5vw;
}
.el-pagination .btn-next {
  margin-left: 0.5vw;
}
/*修改滚动条样式*/
p::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  /**/
}
p::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}
p::-webkit-scrollbar-thumb {
  background: #bfbfbf50;
  border-radius: 10px;
}
p::-webkit-scrollbar-thumb:hover {
  background: #bfbfbf70;
}
p::-webkit-scrollbar-corner {
  background: #179a16;
}
/* .fengcaiBg{
    background: url('./assets/img/qiye/qiyebg.png') no-repeat !important;
    background-size:contain !important;
  } */

/* 分页样式 */
.tabListPage {
  text-align: center;
}
.el-pagination {
  white-space: inherit;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  margin: 20px 0;
}
@media screen and (max-width: 768px) {
  .el-pagination__total {
    border: 1px solid red;
    display: none !important;
  }
  .el-pagination__sizes {
    border: 1px solid red;
    display: none !important;
  }
}
</style>
