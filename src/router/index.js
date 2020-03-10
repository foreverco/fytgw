import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }, {
          path: '/software',
          name: 'software',
          component: resolve => require(['@/view/Software'], resolve),
          meta: {
            title: '企业文化'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/aboutUs'
            },
            {
              path: '/software/aboutUs',
              name: 'aboutUs',
              component: resolve => require(['@/view/us/AboutUs'], resolve),
              meta: {
                title: '企业文化丨企业简介'
              }
            },
            {
              path: '/software/rongyu',
              name: 'software',
              component: resolve => require(['@/view/us/Rongyu'], resolve),
              meta: {
                title: '企业文化丨荣誉历程'
              }
            },
            {
              path: '/software/jiagou',
              name: 'software',
              component: resolve => require(['@/view/us/Jiagou'], resolve),
              meta: {
                title: '企业文化丨组织架构'
              }
            },
            {
              path: '/software/fengcai',
              name: 'software',
              component: resolve => require(['@/view/us/Fengcai'], resolve),
              meta: {
                title: '企业文化丨企业风采'
              }
            }
          ]
        }, 
        {
          path: '/news',
          name: 'newsinformation',
          component: resolve => require(['@/view/news/News'], resolve),
          meta: {
            title: '新闻动态'
          },
          children: [
            {
              path: '/news',
              redirect: '/news/companynews'
            },
            {
              path: '/news/companynews',
              name: 'companynews',
              component: resolve => require(['@/view/news/components/Company'], resolve),
              meta: {
                title: '公司新闻'
              }
            },
            {
              path:'/news/videonews',
              name: 'videonews',
              component: resolve => require(['@/view/news/components/VideoNews'], resolve),
              meta: {
                title: '视频展示'
              }
            }
          ]
        },
        {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '相关服务'
          }
        }, 
         {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '公司介绍'
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component: resolve => require(['@/view/JobChance'], resolve),
          meta: {
            title: '工作机会'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: '相关服务'
          }
        }
      ]
    }
  ]
})
