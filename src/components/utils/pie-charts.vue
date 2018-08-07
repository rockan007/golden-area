<template>
    <div id="pie-charts" class="pie-charts flex-grow-1">

    </div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "pie-charts",
  data: function() {
    return {
      pieCharts: "",
      areaData: {
        title: "台区线损统计",
        data: [
          { value: 3500, name: "实际用电量" },
          { value: 300, name: "线损电量" }
        ]
      }
    };
  },
  mounted: function() {
    this.initCharts(this.areaData);
  },
  methods: {
    initCharts: function(optionData) {
      this.pieCharts = echarts.init(document.getElementById("pie-charts"));
      this.setOptions(optionData);
    },
    setOptions: function(optionData) {
      let option = {
        title: {
          text: optionData.title,
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
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: "right",
          data: ["实际用电量", "线损电量"],
          textStyle: {
            color: "rgba(0, 0, 0, 0.8)"
          }
        },
        series: [
          {
            name: "线损分析",
            type: "pie",
            radius: "60%",
            center: ["50%", "50%"],
            data: optionData.data,
            label: {
              normal: {
                formatter: "{b}\n{c}({d}%)",
                textStyle: {
                  fontWeight: "normal",
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              emphasis: {
                label: {
                  show: true,
                  formatter: "{b}\n{d}%"
                }
              }
            }
          }
        ],
        color: ["#2c8185", "#ff7171", "#9ccac8"]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.pieCharts.setOption(option);
    }
  }
};
</script>
<style scoped>
.pie-charts {
  padding: 8px 16px;
}
</style>