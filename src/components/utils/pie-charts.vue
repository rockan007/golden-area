<template>
    <div id="pie-charts" class="pie-charts flex-grow-1">

    </div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
import { events } from "@/assets/scripts/events.js";
export default {
  name: "pie-charts",
  props: {
    startDate: {
      default: events.formatDate(
        new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 60 * 1000),
        "yyyy-MM-dd"
      ),
      type: String
    },
    endDate: {
      default: events.formatDate(new Date(), "yyyy-MM-dd")
    }
  },
  data: function() {
    return {
      pieCharts: "",
      areaData: {
        title: "台区线损统计"
      }
    };
  },
  created: function() {
    this.requestDate();
  },
  mounted: function() {
    this.initCharts();
  },
  watch:{
    areaData:{
      deep:true,
      handler:function(newVal){
        console.log("台区线损信息有新值啦："+JSON.stringify(newVal))
        this.setOptions(newVal);
      }
    }
  },
  methods: {
    requestDate: function() {
      events.TQ_request(
        events.LINE_LOSS,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID,
          DT_Begin: this.startDate,
          DT_End: this.endDate
        },
        function(responseData) {
          let changedData = this.changeData(responseData[0]);
          this.areaData=Object.assign({},this.areaData, changedData);
        }.bind(this)
      );
    },
    changeData: function(pieData) {
      pieData.Series.forEach(serie => {
        serie.value = Math.abs(Math.round(serie.value));
      });
      return pieData;
    },
    initCharts: function() {
      this.pieCharts = echarts.init(document.getElementById("pie-charts"));
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
          data: this.areaData.Legend,
          textStyle: {
            color: "rgba(0, 0, 0, 0.8)"
          },
          selectedMode:false
        },
        series: [
          {
            name: "线损分析",
            type: "pie",
            radius: "60%",
            center: ["50%", "50%"],
            data: this.areaData.Series,
            label: {
              normal: {
                formatter: "{b}\n{c}\n{d}%",
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