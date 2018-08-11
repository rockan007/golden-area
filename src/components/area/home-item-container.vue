<template>
    <div class="home-item-container d-flex flex-column" v-on:click="routerToDetail(item)">
        <div class="item-title align-self-start" style="cursor:pointer;">
            {{item.title}} <span class="iconfont icon-shuangjiantou3-copy "></span>
        </div>
        <div class="item-content flex-grow-1 d-flex" style="cursor:pointer;">
            <area-profile v-if="item.order==0" isMainPage=1 ></area-profile>
            <GIS-map  style="margin:16px 16px;" v-else-if="item.order==1" v-bind:item="item" v-bind:isDetail="0"></GIS-map>
            <pie-charts v-else-if="item.order==2" v-bind:item="item"></pie-charts>
            <com-energy v-else-if="item.order==5" v-bind:item="item"></com-energy>
              <line-charts  v-else-if="item.order==3" v-bind:item="item"></line-charts>
            <fault-analysis v-else-if="item.order==4"></fault-analysis>
            <div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center" v-else>
               <img  src="http://wx.dianliangliang.com/sucai/video-img-1.27534f14.png" style="width:50%;height:auto"/>
               <div class="online-video-title">实时在线监控</div>
            </div>
           
        </div>
    </div>
</template>
<script>
import GISMap from "./GIS-map.vue";
import areaProfile from "@/components/area/area-profile";
import lineCharts from "../utils/line-charts";
import faultAnalysis from "@/components/area/fault-statistics";
import pieCharts from "@/components/utils/pie-charts";
import comEnergy from "@/components/area/com-energy";
export default {
  name: "home-item-container",
  components: {
    "GIS-map": GISMap,
    "line-charts": lineCharts,
    "pie-charts": pieCharts,
    "com-energy": comEnergy,
    areaProfile,
    faultAnalysis
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
      console.log("**********************" + item.order);
      let routerPath = "/detail-main/" + item.order;
      switch (item.order) {
        case 0:
          routerPath += "/area-profile-detail";
          break;
        case 1:
          routerPath += "/sample-graph/0";
          break;
        case 2:
          routerPath += "/line-loss";
          break;
        case 3:
          routerPath += "/ele-analysis";
          break;
        case 4:
          routerPath += "/fault-statistics-detail/0";
          break;
        case 5:
          routerPath += "/com-energy/0";
          break;
        case 6:
          routerPath += "/video-surveillance";
          break;
        default:
          break;
      }
      console.log(routerPath);
      this.$router.push(routerPath);
    }
  }
};
</script>
<style scoped>
.home-item-container {
  padding: 8px 16px;
}
.item-title {
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  background: linear-gradient(
    to bottom,
    rgba(0, 112, 107, 0.6),
    rgba(0, 112, 107, 1)
  );
  padding: 8px 16px;
}
.item-content {
  margin-top: 16px;
  border: 5px solid transparent;
  -moz-border-image: url("../../assets/imgs/border-image.png") 5 5 5 round; /* Old Firefox */
  -webkit-border-image: url("../../assets/imgs/border-image.png") 5 5 5 round; /* Safari and Chrome */
  -o-border-image: url("../../assets/imgs/border-image.png") 5 5 5 round;
  border-image: url("../../assets/imgs/border-image.png") 5 5 5 round;
}
.online-video-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;
  color: #00706b;
}
.main-card-container {
  width: 100%;
}
</style>
