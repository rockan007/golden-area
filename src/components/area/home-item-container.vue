<template>
    <div class="home-item-container d-flex flex-column" v-on:click="routerToDetail(item)">
        <div class="item-title-container">
          <div class="item-title">
             {{item.title}} <span class="iconfont icon-shuangjiantou3-copy"></span>
          </div>
        </div>
        <div class="item-content flex-grow-1 d-flex">
            <line-charts v-if="item.order==0" v-bind:item="item"></line-charts>
            <GIS-map v-else-if="item.order==1" v-bind:item="item" v-bind:isDetail="0"></GIS-map>
            <pie-charts v-else-if="item.order==2" v-bind:item="item"></pie-charts>
            <com-energy v-else-if="item.order==3" v-bind:item="item"></com-energy>
            <div class="flex-grow-1 d-flex justify-content-center align-items-center" v-else>
               <img  src="../../assets/imgs/video-img.png" style="width:80%;height:auto"/>
            </div>
           
        </div>
    </div>
</template>
<script>
import GISMap from "./GIS-map.vue";
import lineCharts from "../utils/line-charts";
import pieCharts from "@/components/utils/pie-charts";
import comEnergy from "@/components/area/com-energy";
export default {
  name: "home-item-container",
  components: {
    "GIS-map": GISMap,
    "line-charts": lineCharts,
    "pie-charts": pieCharts,
    "com-energy": comEnergy
  },
  props: {
    item: {
      default: function() {
        return {};
      },
      type: Object
    }
  },
  data: function() {
    return {};
  },
  methods: {
    routerToDetail: function(item) {
      let routerPath = "/detail-main/" + item.order;
      switch (item.order) {
        case 0:
          routerPath += "/ele-analysis";
          break;
        case 1:
          routerPath += "/sample-graph/0";
          break;
        case 2:
          routerPath += "/line-loss";
          break;
        case 3:
          routerPath += "/com-energy/0";
          break;
        case 4:
          routerPath += "/video-surveillance";
          break;
        default:
          break;
      }
      this.$router.push(routerPath);
    }
  }
};
</script>
<style scoped>
.item-title {
  color: white;
  border-radius: 4px;
  width: 120px;
  background: linear-gradient(to bottom, rgba(0, 112, 107,0.6), rgba(0, 112, 107,1));
}
.item-content {
  margin-top: 16px;
  border: 5px solid transparent;
  -moz-border-image: url("../../assets/imgs/border-image.png") 5 5 5 round; /* Old Firefox */
  -webkit-border-image: url("../../assets/imgs/border-image.png") 5 5 5 round; /* Safari and Chrome */
  -o-border-image: url("../../assets/imgs/border-image.png") 5 5 5 round;
  border-image: url("../../assets/imgs/border-image.png") 5 5 5 round;
}
</style>
