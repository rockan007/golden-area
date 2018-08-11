<template>
    <div class="com-energy d-flex flex-grow-1">
        <bar-charts title="分布式光伏电源系统" class="photovoltaic-energy flex-grow-1"></bar-charts>
        <!-- <scatter-charts scatterId="scatter-0" title="水电相关性分析" v-bind:lineData="waterData" class="water-electricity flex-grow-1"></scatter-charts>
        <scatter-charts scatterId="scatter-1" title="气电相关性分析" v-bind:lineData='gasData' class="gas-electricity flex-grow-1"></scatter-charts> -->
    </div>
</template>
<script>
import barCharts from "@/components/utils/bar-charts";
import scatterCharts from "@/components/utils/scatter-charts";
export default {
  name: "com-energy",
  components: {
    barCharts,
    scatterCharts
  },
  data: function() {
    return {
      waterData: [
        {
          title: "用电量",
          data: [
            26.7,
            53.5,
            17.0,
            23.2,
            25.6,
            76.7,
            135.6,
            162.2,
            32.6,
            20.0,
            19.4,
            24.4
          ]
        },
        {
          title: "用水量",
          data: [
            10.6,
            9.9,
            9.0,
            26.4,
            28.7,
            90.7,
            175.6,
            132.2,
            48.7,
            18.8,
            6.0,
            15.3
          ]
        }
      ],
      gasData: [
        {
          title: "用电量",
          data: [
            26.7,
            53.5,
            17.0,
            23.2,
            25.6,
            76.7,
            135.6,
            162.2,
            32.6,
            20.0,
            19.4,
            24.4
          ]
        },
        {
          title: "煤气量",
          data: [
            2.6,
            36.9,
            45.0,
            26.4,
            28.7,
            30.7,
            25.6,
            56.2,
            48.7,
            78.8,
            26.0,
            15.3
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.water-electricity,
.gas-electricity,
.photovoltaic-energy {
  width: 0;
}
</style>
