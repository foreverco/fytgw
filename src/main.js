// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from "vue";
import App from "./App";
import VueLazyLoad from "vue-lazyload"; // 懒加载

/* element-ui */
import {
  Pagination,
  Form,
  FormItem,
  Input,
  Button,
  InputNumber,
  Breadcrumb,
  BreadcrumbItem
} from "element-ui";

Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(InputNumber);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

Vue.use(VueLazyLoad, {
  error: "../static/img/3-3qiyefengcai-5.png", // 加载错误的图片
  loading: "../static/img/3-3qiyefengcai-5.png" // 加载时的图片
});

/* 路由 */
import router from "./router";
/* vuex */
import store from "./store";

/* 路由跳转 页面置顶 */
// router.beforeEach((to, from, next) => {
//   // chrome
//   document.body.scrollTop = 0
//   // firefox
//   document.documentElement.scrollTop = 0
//   // safari
//   window.pageYOffset = 0
//   next()
// })
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

/* axios */
import axios from "./api";
import api from "./api/api";
Vue.prototype.http = axios;
Vue.prototype.api = api;

/* swiper */
import "swiper/dist/css/swiper.min.css";

import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default global options } */);

// vue-seamless-scroll列表滚动
import scroll from "vue-seamless-scroll";
Vue.use(scroll);

/* 重置样式 */
import "./assets/css/reset.min.css";

/* jquery */
import "jquery";
// import jquery from 'jquery'
// window.jquery = window.$ = jquery

/* 引入翻书插件 */

/* bootstarp */
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min";

/* 引入less */
// import less from "less";

/* animate.css */
import "animate.css";

/* 引入特殊字体 */
import "../static/font/font.css";

/* 头部组件 */
import Header from "./components/Header";
Vue.component(Header.name, Header);

/* 尾部组件 */
import Footer from "./components/Footer";
Vue.component(Footer.name, Footer);

/* 回到顶部 */
import GoTop from "./components/GoTop";
Vue.component(GoTop.name, GoTop);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
