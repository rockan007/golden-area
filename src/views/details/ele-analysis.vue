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
                            <option value="0" key="0">台区</option>
                            <option v-for="(line,index) in lines" v-bind:key="index+1" v-bind:value="index+1">{{line.XLName}}</option>              
                          </select>
                        </div>
                  </div>
                </div>
                  <div class="row comprehensive_d_text" >
                  <div class="col-lg-4" style="padding:0px;text-align: left;"></div>
                  <div class="col-lg-6" style="padding:0px;text-align: left;">
                    <div class="form-group">
                          <select class="form-control" id="sel1" v-if="selectLineIndex>0" v-model="selectMeterIndex">
                            <option value="0" key="meter-0">线路</option>
                            <option v-for="(meter,index) in selectLine.list_BX" v-bind:key="'meter-'+ index+1" v-bind:value="index+1">{{meter.BXH}}</option>
                          </select>
                        </div>
                  </div>
                </div>
                <div class="row comprehensive_d_text" >
                  <div class="col-lg-4" style="padding:0px;font-size: 20px;font-weight:bold;color:#016f6c;">选择时间</div>
                  <div class="col-lg-6" style="padding:0px;text-align: left;">
                    <div class="form-group">
                          <select class="form-control" id="sel1" v-model="timeIndex">
                            <option v-for="(time,index) in timedata" v-bind:key="index" v-bind:value="index==3?4:index">{{time.name}}</option>
                          </select>
                        </div>
                  </div>
                </div>
                <div class="row comprehensive_b_text">
                  <button type="button" class="btn btn-outline-success" v-on:click="linerequestData(optionData)">查询</button>
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
                            <th>用电量(kWh)</th>
                           
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(nav,index) in tabledata" v-bind:key="index">
                            <td>{{index}}</td>
                            <td>{{nav.name}}</td>
                            <td>{{nav.value}}</td>
                            
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
import { events } from "@/assets/scripts/events.js";
import $ from "jquery";
import "echarts/dist/echarts.min.js";
import echarts from "echarts";
import { map } from "bluebird";
export default {
  name: "home",
  components: {},
  data: function() {
    return {
      tabledata: [],
      timedata: [
        { name: "日" },
        { name: "周" },
        { name: "月" },
        { name: "前四周" }
      ],
      timeIndex: 0,
      lines: [],
      selectLineIndex: 0,
      selectMeterIndex: 0,
      selectLine: {},
      selectMeter: {},
      myChart: "",
      period: 0,
      option: 0,
      optionData: {
        XLIDstr: "",
        BXIDstr: "",
        Type: 0
      }
    };
  },
  mounted: function() {
    this.initCharts();
    this.requestData();
    this.linerequestData(this.optionData);
  },
  watch: {
    selectLineIndex: function(newVal) {
      console.log("******选择的：" + newVal);
      this.selectMeterIndex = 0;
      this.selectLine = this.lines[newVal];
      console.log("this.selectLine:" + JSON.stringify(this.selectLine));
    },
    option: function(newVal) {
      this.setOptions(newVal);
      let tableboxdata = [];
      newVal.xAxisData.forEach((ele, index) => {
        let datatable = {
          name: ele,
          value: newVal.seriesData[index]
        };
        tableboxdata.push(datatable);
      });
      this.tabledata = tableboxdata;
      console.log(JSON.stringify(this.tabledata));
    },
    period: function(newVal) {
      this.optionData.Type = parseInt(newVal);
      if (newVal != 3) {
        this.optionData.XLIDstr =
          this.lines[this.selectLineIndex - 1].TabIDstr == undefined
            ? ""
            : this.lines[this.selectLineIndex - 1].TabIDstr;
        this.optionData.BXIDstr =
          this.selectLine.list_BX[this.selectMeterIndex - 1].TabIDstr ==
          undefined
            ? ""
            : this.selectLine.list_BX[this.selectMeterIndex - 1].TabIDstr;
      }

      this.linerequestData(this.optionData);
    },
    timeIndex: function(newVal) {
      this.period = newVal;
    },
    selectMeterIndex: function() {}
  },

  methods: {
    exportAnaly: function() {
      window.open(
        "http://wx.dianliangliang.com/sucai/courts-manage/courts-manage/用电分析(周).xlsx"
      );
    },
    initCharts: function() {
      this.myChart = echarts.init(
        document.getElementById("comprehensive_echarts"),
        "light"
      );
    },
    requestData: function() {
      let params = {
        UIDstr: events.USER_ID,
        TaskIDstr: events.AREA_ID
      };
      let url = "JPTQ_Get_XL_BX_BY_TaskID";
      events.TQ_request(
        url,
        params,
        function(response) {
          this.lines = response;
        }.bind(this)
      );
    },
    linerequestData: function(linedata) {
      let params = {
        UIDstr: events.USER_ID,
        TaskIDstr: events.AREA_ID,
        XLIDstr: linedata.XLIDstr,
        BXIDstr: linedata.BXIDstr,
        Type: linedata.Type
      };
      console.log("xxxxxxxxxxx请求的参数：" + JSON.stringify(params));
      events.TQ_request(events.ELE_ANALYSIS, params, response => {
        console.log(
          "********************这就是大吉" + JSON.stringify(response)
        );
        this.option = response;
      });
    },
    setOptions: function(optionData) {
      let option = {
        xAxis: {
          type: "category",
          data: optionData.xAxisData,
          axisLine: {
            lineStyle: {
              color: "#2c8185" //坐标轴线颜色
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: { formatter: "{value} kWh" },
          axisLine: {
            lineStyle: {
              color: "#2c8185" //坐标轴线颜色
            }
          }
        },
        series: [
          {
            data: optionData.seriesData,
            type: "line",
            areaStyle: {}
          }
        ],
        color: ["#4da29e"]
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
  font-weight: bold;
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

