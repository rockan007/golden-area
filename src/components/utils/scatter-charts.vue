<template>
    <div v-bind:id="scatterId" class="scatter-charts">

    </div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "scatter-charts",
  props: {
    scatterId: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    lineData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      scatterCharts: ""
    };
  },
  mounted: function() {
    this.initECharts();
  },
  methods: {
    initECharts: function() {
      this.scatterCharts = echarts.init(
        document.getElementById(this.scatterId)
      );
      this.setOptions();
    },
    setOptions: function() {
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
          data: [this.lineData[0].title, this.lineData[1].title],
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
            name: "m³",
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
        color: ["#4da29e", "rgba(255,0,0,0.5)"],
        series: [
          {
            name: this.lineData[0].title,
            type: "line",
            data: this.lineData[0].data,
            areaStyle: {}
          },
          {
            name: this.lineData[1].title,
            type: "line",
            data: this.lineData[1].data,
            areaStyle: {}
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
.scatter-charts {
  padding: 8px 16px;
}
</style>
