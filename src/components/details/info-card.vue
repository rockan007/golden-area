<template>
    <div class="info-card" v-on:click="emitInfo">
        <div class="card shadow d-flex flex-column">
            <div class="card-title">{{cardData.title}}</div>
            <card-content class="flex-grow-1" v-bind:cardData="cardData"></card-content>
        </div>
    </div>
</template>
<script>
import cardContent from "@/components/details/card-content";
export default {
  name: "info-card",
  components: { cardContent },
  props: {
    order: {
      default: 0,
      type: Number
    },
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
          ]
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
  methods: {
    emitInfo:function(){
        if(this.order==1){
          this.$emit("showTrans");
        }
    }
  }
};
</script>
<style scoped>
.info-card{
  padding: 8px 16px;
}
.card {
  color: #00706b;
  min-height: 400px;
  max-height: 400px;
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
.subTitle-title {
  font-size: 20px;
  text-align: left;
}
.subTitle-info {
  font-size: 28px;
  text-align: right;
}
.card-infoes {
  padding: 0 40px;
}
.card-info {
  font-size: 18px;
}
</style>
