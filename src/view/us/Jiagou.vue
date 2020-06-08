<template>
  <div id="jiagou">
      <div class='row'>
        <div class='col-xs-12 picBox'>
            <img src="static/img/3/us/zuzhitop.png" alt="">
        </div>
      </div>
    <div class='container'>
      <div class='row'>
        <!-- <div class='col-xs-12 logoBox'>
          <img
            src="@/assets/img/qiye/3-2zuzhijiagou-2.png"
            alt=""
          >
        </div> -->
        <div class='col-xs-12 concTxt'>
          <img
            src="static/img/3/us/zuzhicon.png"
            alt=""
          >
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "Jiagou",
  data() {
    return {};
  }
};
</script>
<style scoped>
#jiagou {
}
.picBox img{
    width:100%;
}
.logoBox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.concTxt {
  margin: 80px 0;
    display: flex;
  align-items: center;
  justify-content: center;
}
.concTxt img {
  width: 80%;
}
</style>

