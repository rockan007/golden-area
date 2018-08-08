//用电分析
<template>
    <div class="analysis-container d-flex flex-column flex-grow-1" >
        <div v-if="isDetail" class="analysis-header d-flex justify-content-center">
          <div class="flex-grow-1">
             <select class="select-lines"  v-model="selectLineIndex">
                <option value="0" key="0">全部支线</option>
                <option v-for="(line,index) in lines" v-bind:key="index+1" v-bind:value="index+1">{{line.name}}</option>
            </select>
            <select class="select-meters" v-if="selectLineIndex>0"  v-model="selectMeterIndex">
                <option value="0" key="meter-0">全部表箱</option>
                <option v-for="(meter,index) in selectLine.meters" v-bind:key="'meter-'+index+1" v-bind:value="index+1">{{meter.name}}</option>
            </select>
          </div>
           <button class="btn btn-outline-primary" v-on:click="exportAnaly">导出表格</button>
        </div>
        <div class="analysis-body flex-grow-1 d-flex flex-column">
             <p  style="margin-bottom:0">
              <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>日</span>
              <span >/</span>
              <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>周</span>
               <span >/</span>
              <span v-on:click="period=2" v-bind:class='{"chose-period":period==2}'>月</span>
            </p>
            <div id="echarts-container" class="echarts-container flex-grow-1"></div>
        </div>
    </div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "ele-anys",
  props:{
    isDetail:{
      default:0,
      type:Number
    }
  },
  data: function() {
    return {
      lines: [
        {
          name: "东线",
          meters: [
            {
              name: "表箱01#"
            },
            {
              name: "表箱02#"
            },
            {
              name: "表箱03#"
            },
            {
              name: "表箱04#"
            },
            {
              name: "表箱05#"
            },
            {
              name: "表箱06#"
            },
            {
              name: "表箱07#"
            },
            {
              name: "表箱08#"
            }
          ]
        },
        {
          name: "西线",
          meters: [
            {
              name: "表箱09#"
            },
            {
              name: "表箱10#"
            },
            {
              name: "表箱11#"
            },
            {
              name: "表箱12#"
            },
            {
              name: "表箱13#"
            },
            {
              name: "表箱14#"
            },
            {
              name: "表箱15#"
            },
            {
              name: "表箱16#"
            },
            {
              name: "表箱17#"
            },
            {
              name: "表箱18#"
            }
          ]
        },
        {
          name: "东线西支",
          meters: [
            {
              name: "表箱19#"
            },
            {
              name: "表箱20#"
            },
            {
              name: "表箱21#"
            },
            {
              name: "表箱22#"
            },
            {
              name: "表箱23#"
            },
            {
              name: "表箱24#"
            },
            {
              name: "表箱25#"
            },
            {
              name: "表箱26#"
            }
          ]
        },
        {
          name: "东线东支",
          meters: [
            {
              name: "表箱27#"
            },
            {
              name: "表箱28#"
            },
            {
              name: "表箱30#"
            },
            {
              name: "表箱31#"
            },
            {
              name: "表箱32#"
            },
            {
              name: "表箱33#"
            },
            {
              name: "表箱34#"
            }
          ]
        }
      ],
      selectLineIndex: 0,
      selectMeterIndex: 0,
      selectLine: {},
      selectMeter: {},
      myChart: "",
      period: 0,
      dayData: {
        xLine: [
          "0:00",
          "2:00",
          "4:00",
          "6:00",
          "8:00",
          "10:00",
          "12:00",
          "14:00",
          "16:00",
          "18:00",
          "20:00",
          "22:00",
          "24:00"
        ],
        yLine: [100, 80, 90, 70, 150, 200, 150, 251, 340, 360, 380, 270, 200]
      },
      weekData: {
        xLine: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        yLine: [800, 700, 350, 600, 420, 790, 900]
      },
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
    this.initCharts();
  },
  watch: {
    selectLineIndex: function(newVal) {
      console.log("******选择的：" + newVal);
      if (newVal == 0) {
        this.selectLine = {};
        return;
      }
      this.selectMeterIndex = 0;
      this.selectLine = this.lines[newVal-1];
      console.log("this.selectLine:" + JSON.stringify(this.selectLine));
    },
    selectMeterIndex: function() {},
    period: function(newVal) {
      let optionData = "";
      switch (parseInt(newVal)) {
        case 0:
          optionData = this.dayData;
          break;
        case 1:
          optionData = this.weekData;
          break;
        case 2:
          optionData = this.monthData;
          break;
        default:
          optionData = this.dayData;
          break;
      }
      this.setOptions(optionData);
    }
  },
  methods: {
    exportAnaly:function(){
         window.open('http://wx.dianliangliang.com/sucai/courts-manage/courts-manage/用电分析(周).xlsx')
    },
    initCharts: function() {
      this.myChart = echarts.init(
        document.getElementById("echarts-container"),
        "light"
      );
      this.setOptions(this.dayData);
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
          axisLabel:{formatter:'{value} kWh'},
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
      this.myChart.setOption(option);
    }
  }
};
</script>
<style scoped>

.analysis-header {
  font-size: 24px;
}
.select-lines,
.select-meters {
  background-color: transparent;
}
option {
  background-color: rgb(0, 0, 53);
}
.chose-period {
  color: #00706b;
}
</style>
