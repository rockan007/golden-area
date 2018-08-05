<template>
    <div v-bind:id="scatterId" class="scatter-charts">

    </div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "scatter-charts",
  props:{
      scatterId:{
          type:String,
          default:""
      }
  },
  data: function() {
      return {
          scatterCharts:''
      };
  },
  mounted: function() {
    this.initECharts();
  },
  methods: {
    initECharts: function() {
      this.scatterCharts = echarts.init(document.getElementById(this.scatterId));
      this.setOptions();
    },
    setOptions: function() {
      let option = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.0, 6.95],
              [13.0, 7.58],
              [9.0, 8.81],
              [11.0, 8.33],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 5.68]
            ],
            type: "scatter"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.scatterCharts.setOption(option);
    }
  }
};
</script>
<style scoped>
</style>
