<template>
    <div id="bar-charts" class="bar-charts flex-grow-1"></div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "bar-charts",
  props: {
    title: {
      default: "",
      type: String
    }
  },
  data: function() {
    return {
      barCharts: ""
    };
  },
  mounted: function() {
    this.initBarCharts();
  },
  methods: {
    initBarCharts: function() {
      this.barCharts = echarts.init(
        document.getElementById("bar-charts"),
        "light"
      );
      this.setChartsOptions();
    },
    setChartsOptions: function() {
      let option = {
        title: {
          text: this.title,
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          data: ["发电量", "储电量", "平均温度"],
          top: "30px"
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#00706b" //坐标轴线颜色
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "kWh",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value}"
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#00706b" //坐标轴线颜色
              }
            }
          },
          {
            type: "value",
            name: "°C",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} "
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#00706b" //坐标轴线颜色
              }
            }
          }
        ],
        color: ["#4da29e", "#9ccac8"],
        series: [
          {
            name: "储电量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "发电量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              90.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              5.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      };
      this.barCharts.setOption(option);
    }
  }
};
</script>
<style scoped>
.bar-charts {
  padding: 8px 16px;
}
</style>