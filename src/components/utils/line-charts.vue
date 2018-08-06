<template>
     <div id="echarts-container" class="echarts-container flex-grow-1"></div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "e-charts",
  props: {
    chartsData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      eCharts: "",
      monthData: {
        xLine: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        yLine: [
          5000,
          5200,
          4000,
          3000,
          2600,
          2900,
          3600,
          4700,
          3600,
          3200,
          3800,
          4200
        ]
      }
    };
  },
  mounted: function() {
    this.initECharts();
  },
  methods: {
    initECharts: function() {
      this.eCharts = echarts.init(
        document.getElementById("echarts-container"),
        "light"
      );
      this.setOptions(this.monthData);
    },
    setOptions: function(optionData) {
      let option = {
        xAxis: {
          type: "category",
          data: optionData.xLine,
          axisLine: {
            lineStyle: {
              color: "#00706b" //坐标轴线颜色
            }
          }
        },
        yAxis: {
          type: "value",
          name: "kWh",
          axisLabel: { formatter: "{value}" },
          axisLine: {
            lineStyle: {
              color: "#00706b" //坐标轴线颜色
            }
          }
        },
        series: [
          {
            data: optionData.yLine,
            type: "line"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.eCharts.setOption(option);
    }
  }
};
</script>
<style scoped>
.echarts-container{
  padding: 8px 16px;
}
</style>