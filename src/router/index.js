import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: resolve => require(["@/view/Welcome"], resolve)
    },
    {
      path: "/home",
      name: "PageView",
      component: resolve => require(["@/view/PageView"], resolve),
      children: [
        // {
        //   path: "/",
        //   redirect: "/home"
        // },
        {
          path: "/home",
          name: "home",
          component: resolve => require(["@/view/HomePage"], resolve),
          meta: {
            title: "首页",
            navIndex: 0
          }
        },
        {
          path: "/software",
          name: "software",
          component: resolve => require(["@/view/Software"], resolve),
          meta: {
            title: "企业文化",
            navIndex: 1
          },
          children: [
            {
              path: "/software",
              redirect: "/software/aboutUs"
            },
            {
              path: "/software/aboutUs",
              name: "aboutUs",
              component: resolve => require(["@/view/us/AboutUs"], resolve),
              meta: {
                title: "企业文化丨企业简介",
                navIndex: 1
              }
            },
            {
              path: "/software/rongyu",
              name: "rongyu",
              component: resolve => require(["@/view/us/Rongyu"], resolve),
              meta: {
                title: "企业文化丨荣誉历程",
                navIndex: 1
              }
            },
            {
              path: "/software/jiagou",
              name: "jiagou",
              component: resolve => require(["@/view/us/Jiagou"], resolve),
              meta: {
                title: "企业文化丨组织架构",
                navIndex: 1
              }
            },
            {
              path: "/software/fengcai",
              name: "fengcai",
              component: resolve => require(["@/view/us/Fengcai"], resolve),
              meta: {
                title: "企业文化丨企业风采",
                navIndex: 1
              }
            }
          ]
        },
        {
          path: "/news",
          name: "newsinformation",
          component: resolve => require(["@/view/news/News"], resolve),
          meta: {
            title: "新闻动态",
            navIndex: 4
          },
          children: [
            {
              path: "/news",
              redirect: "/news/companynews"
            },
            {
              path: "/news/newsmsg/:newsId",
              name: "NewsMsg",
              component: resolve =>
                require(["@/view/news/components/NewsMsg"], resolve),
              meta: {
                title: "新闻详情",
                navIndex: 4
              },
              children: []
            },
            {
              path: "/news/companynews",
              name: "companynews",
              component: resolve =>
                require(["@/view/news/components/Company"], resolve),
              meta: {
                title: "公司新闻",
                navIndex: 4
              }
            },
            {
              path: "/news/videonews",
              name: "videonews",
              component: resolve =>
                require(["@/view/news/components/VideoNews"], resolve),
              meta: {
                title: "视频展示",
                navIndex: 4
              }
            }
          ]
        },
        {
          path: "/product",
          name: "Product",
          component: resolve => require(["@/view/product/Product"], resolve),
          meta: {
            title: "产品中心",
            navIndex: 2
          },
          children: [
            {
              path: "/product/productpack",
              name: "Productpack",
              component: resolve =>
                require(["@/view/product/components/Productpack"], resolve),
              meta: {
                title: "产品包装",
                navIndex: 2
              }
            },
            {
              path: "/product/productpack1",
              name: "Productpack",
              component: resolve =>
                require(["@/view/product/components/Productpack1"], resolve),
              meta: {
                title: "产品包装",
                navIndex: 2
              }
            },
            {
              path: "/product/productpack2",
              name: "Productpack",
              component: resolve =>
                require(["@/view/product/components/Productpack2"], resolve),
              meta: {
                title: "产品包装",
                navIndex: 2
              }
            },
            {
              path: "/product/stockshow",
              name: "Stockshow",
              component: resolve =>
                require(["@/view/product/components/Stockshow"], resolve),
              meta: {
                title: "原料展示",
                navIndex: 2
              }
            }
          ]
        },
        /* 中草药基地 */
        {
          path: "/base",
          name: "Base",
          component: resolve => require(["@/view/base/index.vue"], resolve),
          meta: {
            title: "产品中心",
            navIndex: 3
          },
          children: [
            {
              path: "/base/plantingbase",
              name: "plantingbase",
              component: resolve =>
                require(["@/view/base/components/plantingbase"], resolve),
              meta: {
                title: "种植基地",
                navIndex: 3
              }
            },
            {
              path: "/base/inteligentAg",
              name: "inteligentAg",
              component: resolve =>
                require(["@/view/base/components/IntelligentAg"], resolve),
              meta: {
                title: "智慧农业",
                navIndex: 3
              }
            },
            {
              path: "/base/kytown",
              name: "Kytown",
              component: resolve =>
                require(["@/view/base/components/Kytown"], resolve),
              meta: {
                title: "康养小镇",
                navIndex: 3
              }
            },
            {
              path: "/base/park",
              name: "Park",
              component: resolve =>
                require(["@/view/base/components/Park"], resolve),
              meta: {
                title: "加工产业园",
                navIndex: 3
              }
            }
          ]
        },

        {
          path: "/goods/:goodsId",
          name: "Goods",
          component: resolve => require(["@/view/goods/Goods"], resolve),
          meta: {
            title: "商品详情"
          },
          children: []
        },
        {
          path: "/companyintroduction",
          name: "companyintroduction",
          component: resolve =>
            require(["@/view/CompanyIntroduction"], resolve),
          meta: {
            title: "公司介绍"
          }
        },
        {
          path: "/contactus",
          name: "contactus",
          component: resolve => require(["@/view/ContactUs"], resolve),
          meta: {
            title: "联系我们",
            navIndex: 5
          }
        }
      ]
    }
  ]
});
