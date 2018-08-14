<template>
     <div id="echarts-container"  class="fault-type echarts-container flex-grow-1"  style="overflow-y:auto">
       <div class="d-flex">
          <div class="col-lg-7" id="pie-container"></div>
          <div class="col-lg-5">
              <div class="analysis-body flex-grow-1 d-flex flex-column" style="cursor:pointer;">
                <h2 style=" text-align: left;padding-left: 30px;">选择时间：</h2>
                <p  style="margin-bottom:0">
                  <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>日</span>
                  <span style="color:white;">/</span>
                  <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>周</span>
                  <span style="color:white;">/</span>
                  <span v-on:click="period=2" v-bind:class='{"chose-period":period==2}'>月</span>
              </p>
           </div>
          </div>
       </div>
      <div class="d-flex">
         <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>序号</th>
                  <th>类型</th>
                  <th>数量</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(nav,index) in tabledata" v-bind:key="index">
                  <td>{{index+1}}</td>
                  <td>{{nav.name}}</td>
                  <td>{{nav.value}}</td>
                </tr>      
              </tbody>
          </table>
       </div>
     </div>
</template>
<script>
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "fault-type",
  props: {
    // chartsData: {
    //   type: Object,
    //   default: function() {
    //     return {};
    //   }
    // }
  },
  data: function() {
    return {
      tabledata: [],
      period: 0,
      eCharts: "",
      DayData: {
        legenddata: [
          "断电",
          "三相不平衡",
          "温度过高",
          "表箱异常打开",
          "用户侧断电"
        ],
        seriesdata: [
          { value: 545, name: "断电" },
          { value: 310, name: "三相不平衡" },
          { value: 100, name: "温度过高" },
          { value: 660, name: "表箱异常打开" },
          { value: 1012, name: "用户侧断电" }
        ]
      },
      WeekData: {
        legenddata: [
          "断电",
          "三相不平衡",
          "温度过高",
          "表箱异常打开",
          "用户侧断电"
        ],
        seriesdata: [
          { value: 130, name: "断电" },
          { value: 205, name: "三相不平衡" },
          { value: 360, name: "温度过高" },
          { value: 363, name: "表箱异常打开" },
          { value: 586, name: "用户侧断电" }
        ]
      },
      monthData: {
        legenddata: [
          "断电",
          "三相不平衡",
          "温度过高",
          "表箱异常打开",
          "用户侧断电"
        ],
        seriesdata: [
          { value: 335, name: "断电" },
          { value: 310, name: "三相不平衡" },
          { value: 234, name: "温度过高" },
          { value: 135, name: "表箱异常打开" },
          { value: 325, name: "用户侧断电" }
        ]
      }
    };
  },
  mounted: function() {
    this.initECharts();
  },
  watch: {
    period: function(newVal) {
      let optionData = "";
      switch (parseInt(newVal)) {
        case 0:
          optionData = this.DayData;
          this.tabledata = this.DayData.seriesdata;
          break;
        case 1:
          optionData = this.WeekData;
          this.tabledata = this.WeekData.seriesdata;
          break;
        case 2:
          optionData = this.monthData;
          this.tabledata = this.monthData.seriesdata;
          break;
        default:
          optionData = this.DayData;
          this.tabledata = this.DayData.seriesdata;
          break;
      }
      this.setOptions(optionData);
    }
  },
  methods: {
    initECharts: function() {
      this.eCharts = echarts.init(
        document.getElementById("pie-container"),
        "light"
      );
      this.setOptions(this.monthData);
      this.tabledata = this.DayData.seriesdata;
    },
    setOptions: function(optionData) {
      let option = {
         title : {
        text: '故障类型',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: optionData.legenddata
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:optionData.seriesdata,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
     color: [
          "rgb(11,58,72)",
          "rgb(11,75,94)",
          "rgb(8,101,128)",
          "rgb(1,160,139)",
          "rgb(15,173,152)"
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.eCharts.setOption(option);
    }
  }
};
</script>
<style scoped>
.echarts-container {
  padding: 8px 16px;
}
#pie-container {
  min-height: 500px;
}
.analysis-body {
  margin: 60px 30px 60px 100px;
}
.chose-period {
  color: #56fdff;
}
span {
  font-size: 20px;
  padding: 5px 10px;
}
p {
  margin-top: 100px;
}
</style>