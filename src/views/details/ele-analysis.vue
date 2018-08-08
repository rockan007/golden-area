//用电分析
<template>
        <div class="flex-grow-1 d-flex flex-column" style="">
              <div class="flex-grow-1 d-flex flex-column comprehensive_top">
                <div class=" comprehensive_top_first">用电量变化分析</div>
              </div>
            <div class="flex-grow-1 d-flex flex-column" style="overflow-y:auto">      
            <div class="row comprehensive_body" style=" margin: 0px;">
              <div class="col-lg-7 comprehensive_echarts" id="comprehensive_echarts"></div>
              <div class="col-lg-5">
                <div class="row comprehensive_r_text">分析字段选择</div>
                <div class="row comprehensive_d_text" >
                  <div class="col-lg-4" style="padding:0px;padding:0px;text-align: center; font-size: 20px;font-weight:bold;color:#016f6c;">选择线路</div>
                  <div class="col-lg-6" style="padding:0px;text-align: left;">
                    <div class="form-group">
                          <select class="form-control" id="sel1" v-model="selectLineIndex">
                            <option value="0" key="0">全部支线</option>
                            <option v-for="(line,index) in lines" v-bind:key="index+1" v-bind:value="index+1">{{line.name}}</option>              
                          </select>
                        </div>
                  </div>
                </div>
                  <div class="row comprehensive_d_text" >
                  <div class="col-lg-4" style="padding:0px;text-align: left;"></div>
                  <div class="col-lg-6" style="padding:0px;text-align: left;">
                    <div class="form-group">
                          <select class="form-control" id="sel1" v-if="selectLineIndex>0" v-model="selectMeterIndex">
                            <option value="0" key="meter-0">全部表箱</option>
                            <option v-for="(meter,index) in selectLine.meters" v-bind:key="'meter-'+ index+1" v-bind:value="index+1">{{meter.name}}</option>
                          </select>
                        </div>
                  </div>
                </div>
                <div class="row comprehensive_d_text" >
                  <div class="col-lg-4" style="padding:0px;font-size: 20px;font-weight:bold;color:#016f6c;">选择时间</div>
                  <div class="col-lg-6" style="padding:0px;text-align: left;">
                    <div class="form-group">
                          <select class="form-control" id="sel1" v-model="timeIndex">
                            <option v-for="(time,index) in timedata" v-bind:key="index" v-bind:value="index">{{time.name}}</option>
                          </select>
                        </div>
                  </div>
                </div>
                <div class="row comprehensive_b_text">
                  <button type="button" class="btn btn-outline-success" v-on:click="period=timeIndex">查询</button>
                </div>
              </div>
            <div class="col-lg-12" style="padding:0px 50px;font-size:15px;">
              
                  <div class="col-lg-12 Lfei_table">数据视图</div>
              <div class="col-lg-12">
              <div class="row">
                  <table class="table">
                        <thead class="thead-light">
                        <tr>
                            <th>编号</th>
                            <th>时间</th>
                            <th>用电量</th>
                            <th>更新时间</th>
                            <th>查看</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(nav,index) in tabledata" v-bind:key="index">
                            <td>{{index}}</td>
                            <td>{{nav.photographtime}}</td>
                            <td>{{nav.photographlong}}</td>
                            <td>{{nav.updatetime}}</td>
                            <td style="color:#016f6c">查看图片</td>
                        </tr>
                        </tbody>
                    </table>
              </div>
          </div>
        </div>
        </div>
      </div>
        </div>
      
</template>

<script>
import $ from "jquery";
import "echarts/dist/echarts.min.js";
import echarts from "echarts";
export default {
  name: "home",
  components: {},
  data: function() {
    return {
      tabledata:0,
      timedata:[
        {name:"日"},
        {name:"周"},
        {name:"月"}
      ],
      timeIndex:0,
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
        yLine: [100, 80, 90, 70, 150, 200, 150, 251, 340, 360, 380, 270, 200],
         tabledata: [
        {
          photographtime: "0:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 11:26:30"
        },
        {
          photographtime: "2:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:53:30"
        },
        {
          photographtime: "4:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "6:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "8:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "10:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "12:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:56:30"
        },
        {
          photographtime: "14:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "16:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "18:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "20:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "12:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "24:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        }
      ],
      },
      weekData: {
        xLine: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        yLine: [800, 700, 350, 600, 420, 790, 900],
         tabledata: [
        {
          photographtime: "周一",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 11:26:30"
        },
        {
          photographtime: "周二",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:53:30"
        },
        {
          photographtime: "周三",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "周四",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "周五",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "周六",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "周日",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:56:30"
        }
      ],
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
        ],
         tabledata: [
        {
          photographtime: "一月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 11:26:30"
        },
        {
          photographtime: "二月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:53:30"
        },
        {
          photographtime: "三月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "四月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "五月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "六月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "七月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:56:30"
        },
        {
          photographtime: "八月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "九月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "十月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "十一月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "十二月",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        }
      ],
      },
        tabledata: [
        {
          photographtime: "0:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 11:26:30"
        },
        {
          photographtime: "2:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:53:30"
        },
        {
          photographtime: "4:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "6:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "8:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "10:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "12:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:56:30"
        },
        {
          photographtime: "14:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "16:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "18:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "20:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "12:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        },
        {
          photographtime: "24:00",
          photographlong: "15466kw/h",
          updatetime: "2014-5-6 12:24:30"
        }
      ],
      myChart: "",
      option: {
        title: {
          text: "电水煤气相关分析",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },
        xAxis: {
          type: "category",
          name: "x",
          splitLine: { show: false },
          data: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: {
          type: "log",
          name: "y"
        },
        series: [
          {
            name: "3的指数",
            type: "line",
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
          },
          {
            name: "2的指数",
            type: "line",
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
          }
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
    timeIndex:function(newVal){
       
    },
    selectMeterIndex: function() {},
    period: function(newVal) {
      let optionData = "";
      switch (parseInt(newVal)) {
        case 0:
        optionData = this.monthData;
         this.tabledata = this.monthData.tabledata;
          
          console.log("日"+this.tabledata);
          break;
        case 1:
         optionData = this.dayData;
        
          this.tabledata = this.dayData.tabledata;
         
          console.log("周"+this.tabledata);
          break;
        case 2:
          optionData = this.weekData;
          
           this.tabledata = this.weekData.tabledata;
          console.log("月"+this.tabledata);
          break;
        default:
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
        document.getElementById("comprehensive_echarts"),
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
              color: "#2c8185" //坐标轴线颜色
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel:{formatter:'{value} kWh'},
          axisLine: {
            lineStyle: {
              color: "#2c8185" //坐标轴线颜色
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
* {
  font-family: "Microsoft YaHei" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
tr {
  line-height: 1rem;
}
#sel1 {
  padding: 0px;
}
.form-control {
  height: calc(2.25rem + 2px);
}
.comprehensive_box {
  border: 1px solid #8eb7af;
  border-radius: 3px;
  min-height: 900px;
}
.comprehensive_top {
    font-size: 20px;
    background-color: #00706b;
    color: #4da29e;
    min-height: 40px;
}
.comprehensive_top_first {
  margin-top: 4px;
  text-align: left;
  padding-left: 20px;
  color: #fff;
  min-height: 40px;
}
.comprehensive_top_seand {
  color: #8eb7af;
}
.comprehensive_body {
  min-height: 500px;
}
.comprehensive_echarts {
  padding: 50px;
  padding-top: 80px;
}
.comprehensive_r_text {
  font-size: 24px;
  font-weight:bold;
  margin-top: 75px;
  color: #016f6c;
}
.comprehensive_d_text {
  margin-top: 50px;
}
.comprehensive_b_text {
  margin-top: 90px;
}
.btn {
  line-height: 1.5rem;
}
.btn-outline-success {
  margin: 0 auto;

  color: #fff;
  width: 190px;
  background-color: #016f6c;
}
/* 下td */
.Lfei_table {
  margin-bottom: 30px;
  color: #016f6c;
  font-size: 17px;
  padding-left: 20px;
  text-align: left;
}

</style>

