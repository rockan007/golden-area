<template>
     <div id="lineCharts-container"  class="echarts-container flex-grow-1"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "line-charts",
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
      lineCharts: "",
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
      this.lineCharts = echarts.init(
        document.getElementById("lineCharts-container"),
        "light"
      );
      this.setOptions(this.monthData);
    },
    setOptions: function(optionData) {
      let option = {
        title: {
          text: '台区用电分析',
          x: "center",
          textStyle: {
            //标题内容的样式
            color: "#00706b", //京东红
            fontStyle: "normal", //主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: "bold", //可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: "san-serif", //主题文字字体，默认微软雅黑
            fontSize: 18 //主题文字字体大小，默认为18px
          }
        },
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
            type: "line",
            areaStyle: {}
          }
        ],
        color: ["#9ccac8"]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.lineCharts.setOption(option);
    }
  }
};
</script>
<style scoped>
.echarts-container {
  padding: 8px 16px;
}
</style>