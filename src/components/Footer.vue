<template>
  <div id="footer" class="container-fluid">
      <!-- <img src="@/assets/img/logo_white.png" alt="logo图"> -->
      <ul class='container navList'>
        <li v-for="(item, index) in navList" :key="index">
          <router-link :to='item.path'>
            {{item.name}}
          </router-link>
        </li>
      </ul>
    <!-- <p class="title">国草园集团有限公司</p> -->
    <p class="address_tel_fax">
      <span>地址：南京市雨花台区凤展路30号A1幢9楼</span>
      <span>Tel：025-66088155</span>
      <!-- <span>Fax：8888-88888888</span> -->
    </p>
    <p class="email_wx">
      <span>版权所有 &copy; 蒙ICP备 18002915号</span>
      <!-- <span>公司微信号：ilyk_gg</span> -->
    </p>
    <p class="copy">Copyright &copy; 2018 - 2019 公司名称公司名称</p>
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
          path: "/",
        },
        {
          name: "企业文化",
          path: "/software/fengcai",
        },
        {
          name: "产品中心",
          path: "/product/productpack",
        },
        {
          name: "新闻中心",
          path: "/news/companynews",
        },
        
        {
          name: "联系我们",
          path: "/contactus",
        }
      ]
    };
  }
};
</script>
<style scoped>
 #footer a{
    color:#fff;
  }
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  /* background: #474747; */
  overflow: hidden;
  text-align: center;
  background: url('../assets/img/home/footer.png') no-repeat;
  background-size: 100% 100%;
  margin-top:50px;
}
.navList{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin-top:30px;
}
.navList li{
  width:15%;
  padding:3px 0;
  border-right:1px solid #fff;
  /* margin: 50px auto 20px; */
}
.navList li:last-child{
  border: 0;
}
/* .logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
} */
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0 30px;
}
@media screen and (max-width: 997px) {
  .navList li{
  width:20%;
}
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

