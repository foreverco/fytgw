<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center"></div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 formBox">
            <!-- <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10 col-xs-12">
                  <input type="text" class="form-control" id="name" placeholder="请输入名字">
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">邮箱</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="email" placeholder="请输入邮箱">
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">电话</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="tel" placeholder="请输入电话">
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">内容</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="content" rows="8" placeholder="请输入内容"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-12">
                  <button type="submit" class="btn btn-default btn-block">提交</button>
                </div>
              </div>
            </form> -->

            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="60px"
              class="demo-ruleForm"
              label-position="left"
            >
              <el-form-item
                label="姓名"
                prop="name"
              >
                <el-input
                  clearable
                  v-model="ruleForm.name"
                  autocomplete="off"
                  placeholder="请输入姓名"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="邮箱"
                prop="email"
              >
                <el-input
                  clearable
                  v-model="ruleForm.email"
                  autocomplete="off"
                  placeholder="请输入邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="手机号"
                prop="phone"
              >
                <el-input
                  v-model.number="ruleForm.phone"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="留言"
                prop="content"
              >
                <el-input
                  v-model.number="ruleForm.content"
                  placeholder="请输入留言"
                  type="textarea"
                  :rows="2"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                >提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-8 mapBox">
            <div
              id="map"
              class="wow zoomIn"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import BMap from "BMap";
export default {
  name: "ContactUs",
  data() {
    // 设置手机号的验证规则
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入联系方式"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的电话"));
        }
      }
    };

    // 中名验证
    const chnName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入中文名"));
      } else {
        const reg = /^[\u4e00-\u9fa5]+$/;
        if (value.length < 100 && reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的中文名"));
        }
      }
    };

    // 验证邮箱
    const validateEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入邮箱地址"));
      } else {
        if (
          /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value) ||
          !value
        ) {
          callback();
        } else {
          callback(new Error("请输入正确邮箱"));
        }
      }
    };

    return {
      ruleForm: {
        name: "",
        email: "",
        phone: "",
        content: ""
      },
      rules: {
        name: [{ validator: chnName, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(118.747697, 31.942793); // 创建点坐标
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "国草园集团" // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow("1", opts); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/callme/6-1lianxiwom-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  /* padding: 80px 0; */
  margin: 50px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
}
.formBox {
  padding: 40px;
}
/* .form-horizontal {
  border:1px solid red;
  display: flex;
  flex-wrap:wrap;

} */
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
@media screen and (min-width: 997px) {
  .ContactUs-container {
    background: url("../assets/img/callkuang.png") no-repeat;
    background-size: 100% 100%;
  }
  .mapBox {
    padding: 10px;
  }
}
</style>

