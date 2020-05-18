<template>
  <div id="footer" class="container-fluid" style="position:relative">
    <img src="@/assets/img/dibu.png" alt="logo图" />
    <div class="container footer_msg_box">
      <ul class="navList hidden-xs">
        <li v-for="(item, index) in navList" :key="index">
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <p>
        <span class="hidden-xs">版权所有 &copy; 蒙ICP备 18002915号</span>
      </p>
      <p class="copy hidden-xs">
        Copyright &copy; 2018 - 2019 公司名称公司名称
      </p>
    </div>
    <p
      class=" visible-xs"
      style="position:absolute;width:100%;top:50%;left:50%;transform: translate(-50%, -50%);"
    >
      <span>版权所有 &copy;蒙ICP备 18002915号</span>
    </p>
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
          path: "/"
        },
        {
          name: "企业文化",
          path: "/software/aboutUs"
        },
        {
          name: "产品中心",
          path: "/product/productpack"
        },
        {
          name: "新闻中心",
          path: "/news/companynews"
        },

        {
          name: "联系我们",
          path: "/contactus"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  margin-top: 50px;
  position: relative;
  a {
    color: #fff;
  }
  img {
    width: 100%;
  }
  .footer_msg_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
  * {
    color: #fff;
  }
  p {
    width: 100%;
    font-size: 18px;
    height: 30%;
    margin: 0 !important;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
}
.navList {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  // padding: 20px 0;
  width: 100%;
  height: 40%;
  // border: 1px solid red;
}
.navList li {
  // width: 15%;
  padding: 3px 0;
  border-right: 1px solid #fff;
  font-size: 24px;
  // border: 1px solid blue;
  width: 20%;
  /* margin: 50px auto 20px; */
  a {
    // border: 1px solid red;
  }
}
.navList li:last-child {
  border: 0;
}
/* .logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
} */
.title {
  font-size: 25px;
  // margin-bottom: 20px;
}
.address_tel_fax {
  color: #fff;
  // font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #fff;
  font-size: 14px;
}
.copy {
  color: #fff;
  // font-size: 14px;
  // margin: 10px 0 30px;
}
@media screen and (max-width: 997px) {
  .navList li {
    width: 20%;
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
@media screen and (max-width: 2400px) {
  .navList li {
    padding: 3px 0;
    font-size: 16px;
    width: 20%;
  }
  #footer {
    p {
      font-size: 13px;
    }
  }
}
</style>
