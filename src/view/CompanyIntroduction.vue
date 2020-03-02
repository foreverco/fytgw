<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive center-block" src="@/assets/img/about_img.png" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2>富宇通集团</h2>
          <h4>FUYUTONG TECHNOLOGY</h4>
          <p
            class=".text-justify"
          >{{aboutfyt.one}}</p>
          <p
            class=".text-justify"
          >{{aboutfyt.two}}</p>
                    <p
            class=".text-justify"
          >{{aboutfyt.three}}</p>
                    <p
            class=".text-justify"
          >{{aboutfyt.four}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "CompanyIntroduction",
  data() {
    return {
      aboutfyt: {
        one:
          "富宇通集团成立于2012年，注册资本2000万元，是一家集研发、制造、销售为一体的智能化产业高新技术企业。随着公司的不断发展，2018年公司总部由沈阳迁址到南京，同明还设有沈阳、济南分公司及宿迁办事处。我公司主要专注于智慧校园、智能交通、平安城市、警用电子、刑侦装备、智慧城市、数据中心、系统集成和软件研发领域，通过对“物联感知、智能识别、数据融合、智慧应用”等信息技术的研究和自主应用开发，为用户提供系统、专业的解决方案。",
        two: '目前公司拥有近50人的自主软件开发团队，近年来依托南京邮电大学、成都电子科技大学、东南大学、哈尔滨工业大学等高校，通过校企合作的模式，成立了多个联合实验室，在提升企业竞争力的同时，也为高校提供就业机会。此外，我公司还取得了《质量管理体系认证证书》、《环境管理体系认证证书》、《职业健康安全管理体系认证证书》、辽宁省安防协会颁发的《安全技术防范设施工资信证（三级）》、中国国际电子商务中心颁发的《3A级企业信用等级证书》和省科学技术厅颁发的《高新技术企业证书》等多项资质证书；同时也获得了国家商务部设立的中小企业协会评定的AAA级信誉企业，能过了国家认证中心对我公司申报的城市智能交通设备开发与系统集成认证的考核评定。我公司也拥有多项软件产品的著作权以及国家的专利证书，这些都是公司科研技术的力量在不断的强大和创新的结果，我们希望通过自身科研实力的提升更好的服务于客户。',
        three: '我公司自成立以来，就秉承专业精致的开发设计理念，在公安警用智能化领域，参与了多个地区指挥中心、平安城市与智能交通的建设。客户遍布全国多个省市，覆盖了辽宁省，山东省，江苏省，黑龙江省等多个地区，主要客户有丹东振安区交警大队，营口市公安局交通警察支队，青岛市城阳区交警大队，威海市乳山交警大队，扬州仪征市交警大队、江苏泗阳县公安局、沭阳县公安局、沭阳县公安局交通警察大队等。在教育信息化领域，与江苏、山东等省内地方教育局开展深度合作，提供行业领先的解决方案，运用高清、智能、物联网等核心技术，集成为校园内异构的安防业务系统，形成事前预警，事中控制，事后可追溯的应急防控体系，提高校园安保的管理和服务水平。富宇通定位高新软件企业，目前年盈利在8000万元至1.2亿元，目标预计在2021年实现总盈利翻翻，我公司致力于开发全国市场；立志成为公安警用系统及教育系统软件研发、销售的高新标杆企业，力争上市，实现公司的新跨越。',
        four: '富宇通的目标及宗旨是“不断创新、持续开发、循序渐进、稳步发展”，我们始终遵循客户至上的原则，坚持“用心服务”的理念。以最新的技术和完善服务态度及体系，为客户提供最佳的产品、更好地技术支持和更贴心的服务。'
    }
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

