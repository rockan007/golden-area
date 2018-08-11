<template>
    <div id="fault-statistics" class="fault-statistics flex-grow-1">
        
    </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "fault-statistics",
  data: function() {
    return {
      faultCharts: ""
    };
  },
  mounted: function() {
    this.initEcharts();
  },
  methods: {
    initEcharts: function() {
      this.faultCharts = echarts.init(
        document.getElementById("fault-statistics")
      );
      this.setOptions();
    },
    setOptions: function() {
      let optionParams = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["未处理", "已处理", "严重", "一般"]
        },
        series: [
          {
            name: "故障统计",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "未处理" },
              { value: 679, name: "已处理" }
            ]
          },
          {
            name: "故障统计",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              normal: {
                formatter: "{b}：\n{c}\n{per|{d}%}  ",
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 22,
                    align: "center"
                  },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: "#eee",
                    backgroundColor: "#334455",
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              { value: 335, name: "严重" },
              { value: 310, name: "一般" },
              { value: 135, name: "严重" },
              { value: 1048, name: "一般" }
            ]
          }
        ],
        color: ["#ff7171","#2c8185", 'rgba(255,0,0,0.4)', "#9ccac8",]
      };
      this.faultCharts.setOption(optionParams);
    }
  }
};
</script>
<style scoped>
</style>
