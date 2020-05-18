<template>
  <div id="newsmsg">
    <div class="row breadBox">
      <Menu :pathList="pathList"></Menu>
    </div>
    <p class="row newsmsgtitle">{{ newsMsgObj.title }}</p>
    <p class="row newsmsgtime">
      <span>来源: {{ newsMsgObj.from }}</span>
      <span>日期: {{ newsMsgObj.date }}</span>
    </p>
    <div
      class="row newsPicBox"
      v-for="(item, index) in newsMsgObj.imgList"
      :key="index"
    >
      <img :src="item.imrUrl" alt />
    </div>
    <div class="row newsmsgCon" v-html="newsMsgObj.con"></div>
  </div>
</template>

<script>
import Menu from "../../../components/Breadcrumb";
export default {
  data() {
    return {
      newsMsgObj: {
        title:
          "内蒙古化德县和国草园集团举行百万亩蒙中道地药材产业发展合作项目签约仪式",
        from: "天地网讯",
        date: "2020-01-15",
        imgList: [
          { imrUrl: "static/img/news/qy.png" },
          { imrUrl: "static/img/news/ws.png" }
        ],
        con: `<p>1月15号上午，我县举行农业项目合作签约仪式，与国草园集团正式签订百万亩蒙中道地药材产业发展合作项目合作协议，
                并就全县农牧业产业化发展规划编制召开座谈会。县委书记王兵，县委副书记、政法委书记白俊伟，县委常委、县委办主任郝晓光，
                政府副县长张国荣与内蒙古国草园实业科技发展有限公司副董事长兼执行董事慈平凡共同出席签约仪式。</p>

            　　<p>签约仪式上，国草园集团介绍了企业及合作项目相关情况，政府副县长张国荣就合作协议的有关条款进行了说明，
            签约双方进行了深入的交流与探讨并现场签订了合作协议。</p>
            　

            　<p>按照协议，内蒙古国草园实业科技发展有限公司将在化德县组建一个50万亩的蒙中道地药材种植基地，
            以政府+企业+合作社+农户模式进行合作，培育种植野生道地蒙中药材，并在县经济技术开发区建立一个大型蒙中药材的初加工区，
            将利用我县土地资源、产业扶贫政策优势，在优质农产品基地、盐碱地改造示范基地建设等绿色蒙中药产品基地领域开展广泛合作。</p>

            　　<p>王兵在讲话中指出，此次合作协议的签订，对我县农业产业化发展具有重要的意义，
            是做好扶贫减贫工作的一个重要举措。下一步，我们将因地制宜，从化德县的实际出发，
            坚持走有机旱作农业的路子，大力发展蒙中药龙头产业，引领我县农业产业纵深向好发展，
            切实增加农民收入。王兵要求，各乡镇、各部门要进一步解放思想，要有服务意识，要有发展好我县有机旱作农业的意识，
            大力支持，服务好合作项目，在项目推进的过程中提高效率，在“后扶贫时代”把化德产业发展起来。 各乡镇、各部门领导干部要发挥关键少数和头雁作用，
            扎实工作，勇于担当，抓好各项工作的落实，上下共同努力，推动我县农业产业化发展再上新台阶。</p>

            <p>各乡镇和相关部门主要负责人及国草园集团主要人员参加了会议。</p>`
      }
    };
  },
  components: {
    Menu
  },
  computed: {
    pathList() {
      return this.$route.matched.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
#newsmsg {
  background: #efefef;
  //   height: 1000px;
}
.breadBox {
  border-bottom: 1px solid #cccccc;
  padding: 10px 0;
  margin: 0 10px;
}
.newsmsgtitle {
  // border:1px solid red;
  text-align: center;
  font-size: 24px;
}
.newsmsgtime {
  text-align: center;
  // border:1px solid red;
  padding: 7px 0;
}
.newsmsgtime span {
  width: 20%;
  display: inline-block;
}
.newsPicBox {
  // border:1px solid red;
  margin: 20px 0;
}
.newsPicBox img {
  width: 100%;
}
.newsmsgCon {
  // border:1px solid red;
  padding: 10px 20px;
  margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
  .newsmsgtime span {
    width: 100%;
    display: inline-block;
  }
}
</style>
