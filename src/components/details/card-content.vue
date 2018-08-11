<template>
    <div class="card-content col-12 d-flex flex-column" v-bind:class='[{"main-card-content":isMainPage}]'>
          <div class="card-subtitles d-flex justify-content-around">
                <div class="subTitle-container col-3 d-flex flex-column" 
                v-bind:style='{"background-color":bgColors[(parseInt(cardData.isEle)*3+index)]}' 
                v-for="(subTitle,index) in cardData.subTitles" v-bind:key="index" v-bind:class='[{"main-subTitle-container":isMainPage}]'>
                    <div class="subTitle-title algn-self-start" v-bind:class='[{"main-subTitle-title":isMainPage}]'>{{subTitle.title}}:</div>
                    <div class="subTitle-info align-self-end" v-bind:class='[{"main-subTitle-info":isMainPage}]'>{{subTitle.info}}</div>
                </div>
            </div>
            <div class="card-infoes flex-grow-1 d-flex flex-column justify-content-around align-items-start">
                <div class="card-info" v-bind:class='[{"main-card-info":isMainPage}]' v-for="(info,index) in cardData.infoList" v-bind:key="index">
                        {{info.title}}:{{info.info}}
                </div>
            </div>
    </div>
</template>
<script>
export default {
  name: "card-content",
  props: {
    isMainPage: 0,
    cardData: {
      default: function() {
        return {
          title: "台区基本信息",
          subTitles: [
            {
              title: "容量",
              info: "400kVA"
            },
            {
              title: "负载率",
              info: "78.356%"
            },
            {
              title: "总表数",
              info: "138个"
            }
          ],
          infoList: [
            {
              title: "总用户数",
              info: "358"
            },
            {
              title: "高压用户数",
              info: "41"
            },
            {
              title: "低压用户数",
              info: "304"
            },
            {
              title: "表箱数",
              info: "36"
            }
          ],
          isEle: 0
        };
      },
      type: Object
    }
  },
  data: function() {
    return {
      bgColors: [
        "#bcd473",
        "#96b2ea",
        "#eaa286",
        "#eee726",
        "#80e47d",
        "#e97a4e"
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.card-content {
  color: #00706b;
}
.main-card-content {
  padding: 16px 32px;
}

.card {
  color: #00706b;
  min-height: 380px;
  padding: 8px 16px;
}
.card-title {
  font-size: 24px;
  font-weight: bold;
  text-align: left;
}
.card-infoes {
  text-align: left;
  line-height: 50px;
}
.subTitle-container {
  padding: 16px 32px;
  color: white;
}
.main-subTitle-container {
  padding: 4px 8px;
  color: white;
}
.subTitle-title {
  font-size: 20px;
  text-align: left;
}
.main-subTitle-title {
  font-size: 14px;
}
.subTitle-info {
  font-size: 28px;
  text-align: right;
}
.main-subTitle-info {
  font-size: 16px;
}
.card-infoes {
  padding: 0 40px;
}
.card-info {
  font-size: 18px;
}
.main-card-info {
  font-size: 14px;
}
</style>
