//线损分析
<template>
    <div class="lineLoss-container flex-grow-1 d-flex flex-column">
        <div class="lineLoss-header d-flex justify-content-between">
            <div class="lineLoss-title">
              线损分析
            </div>
            <button class="btn btn-outline-info" v-on:click="exportLineLoss()">导出表格</button>
        </div>
        <div class="lineLoss-body flex-grow-1 d-flex flex-column">
            <div class="date-select d-flex align-items-center justify-content-center ">
                <div class="input-group mb-3 col-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">开始时间</span>
                  </div>
                  <input type="date" class="form-control" v-model="startDate">
                </div>
                 <div class="input-group mb-3 col-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">结束时间</span>
                  </div>
                  <input type="date" class="form-control" v-model="endDate">
                </div>
            </div>
            <div  class="lineLoss-echarts flex-grow-1 d-flex flex-column" style="overflow-y:auto;">
              <div style="min-height:300px"  class="d-flex">
                  <div id="lineLoss-echarts" style="width:0;" class="echarts-container flex-grow-1 border border-info"></div>
                  <div id="select-line-container" style="width:0;" class="flex-grow-1 border border-info d-flex align-items-stretch">
                    <div class="select-container">
                      <select name="" id="" v-model="selectMeterBoxNo">
                        <option v-for="(box,index) in areaBoxes" v-bind:key="index" :value="index">{{box.Text}}#表箱</option>
                      </select>
                    </div>
                    <div id="box-charts" class="echarts-container flex-grow-1"></div>
                  </div>
              </div>
              <div style="min-height:300px;" class="d-flex ">
                <div id="line-D" style="width:0;" class="echarts-container flex-grow-1 border border-info"></div>
                <div id="line-X" style="width:0;" class="echarts-container flex-grow-1 border border-info"></div>
              </div>
              <table class="table-container table table-striped table-light">
                <thead>
                  <tr>
                    <th scope="col">线路名称</th>
                    <th scope="col">实际用电量(kWh)</th>
                    <th scope="col">损耗电量(kWh)</th>
                    <th scope="col">总电量(kWh)</th>
                    <th scope="col">损耗百分比</th>
                  </tr>
                </thead>
                <tbody style="overflow-y:auto;">
                  <tr v-for="(loss,index) in lossData" v-bind:key="index">
                    <th scope="row">{{loss.Name}}</th>
                    <td>{{loss.Series[0].value}}</td>
                    <td>{{loss.Series[1].value}}</td>
                    <td>{{loss|totalEleNo}}</td>
                    <td>{{loss|filterLosePersent}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from "echarts";
import { events } from "@/assets/scripts/events.js";
export default {
  name: "line-loss",
  data: function() {
    return {
      selectMeterBoxNo: 0,
      selectBox: {},
      startDate: events.formatDate(
        new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        "yyyy-MM-dd"
      ),
      endDate: events.formatDate(new Date(), "yyyy-MM-dd"),
      lineCharts: {},
      DXCharts: {},
      XXCharts: {},
      boxCharts: {},
      line1: "",
      line: "",
      lineLoss: "",
      boxLoss: {
        title: ""
      },
      areaBoxes: [],
      lossData: [] //表格数据
    };
  },
  created: function() {
    this.getAreaBoxes();
  },
  mounted: function() {
    this.lineCharts = this.initCharts("lineLoss-echarts");

    this.DXCharts = this.initCharts("line-D");
    this.XXCharts = this.initCharts("line-X");
    this.getAreaLoss();
  },
  watch: {
    lineLoss: {
      //线路线损
      deep: true,
      handler: function(newVal) {
        this.setOptions(this.lineCharts, newVal[0]);
        this.setOptions(this.DXCharts, newVal[1]);
        this.setOptions(this.XXCharts, newVal[2]);
        this.lossData = newVal.concat(this.boxLoss);
      }
    },
    startDate: function() {
      this.getAreaLoss();
    },
    endDate: function() {
      this.getAreaLoss();
    },
    areaBoxes: {
      deep: true,
      handler: function(newVal, oldVal) {
        if (oldVal.length == 0) {
          this.$nextTick(function() {
            this.boxCharts = this.initCharts("box-charts");
          });
        }
        this.selectBox = newVal[this.selectMeterBoxNo];
      }
    },
    selectMeterBoxNo: function(newVal) {
      this.selectBox = this.areaBoxes[newVal] ? this.areaBoxes[newVal] : {};
    },
    selectBox: function(newVal) {
      console.log("****新选择的表箱：" + JSON.stringify(newVal));
      this.getBoxLoss(newVal.Value);
    },
    boxLoss: function(newVal) {
      //电表线损
      this.setOptions(this.boxCharts, newVal);
      if (this.lineLoss.length > 0) {
        this.lossData = this.lineLoss.concat(newVal);
      } else {
        this.lossData = [newVal];
      }
    },
    lossData: {
      deep: true,
      handler: function(newVal) {
        console.log("列表信息数据：" + JSON.stringify(newVal));
      }
    }
  },
  filters: {
    totalEleNo: function(loss) {
      return parseInt(loss.Series[0].value) + parseInt(loss.Series[1].value);
    },
    filterLosePersent: function(loss) {
      let useNo = parseInt(loss.Series[0].value);
      let loseNo = parseInt(loss.Series[1].value);
      let totalNo = useNo + loseNo;
      if (totalNo == 0) {
        return "0%";
      }
      return loseNo / totalNo * 100 + "%";
    }
  },
  methods: {
    getBoxLoss: function(boxId) {
      events.TQ_request(
        events.METER_BOX_LINELOSS,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID,
          BXIDstr: boxId,
          DT_Begin: this.startDate,
          DT_End: this.endDate
        },
        function(responseData) {
          console.log("获取的电表箱线损：" + JSON.stringify(responseData));
          this.boxLoss = Object.assign({}, this.boxLoss, responseData, {
            Name: this.selectBox.Text + "#表箱"
          });
        }.bind(this)
      );
    },
    getAreaLoss: function() {
      events.TQ_request(
        events.LINE_LOSS,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID,
          DT_Begin: this.startDate,
          DT_End: this.endDate
        },
        function(responseData) {
          console.log("获取的线路信息：" + JSON.stringify(responseData));
          this.lineLoss = responseData;
        }.bind(this)
      );
    },
    getAreaBoxes: function() {
      events.TQ_request(
        events.AREA_BOXES,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID
        },
        function(responseData) {
          console.log("获取的台区表箱数据：" + JSON.stringify(responseData));
          this.areaBoxes = responseData;
        }.bind(this)
      );
    },
    exportLineLoss: function() {
      window.open(
        "http://wx.dianliangliang.com/sucai/courts-manage/courts-manage/%E7%BA%BF%E6%8D%9F%E5%88%86%E6%9E%90.xlsx"
      );
    },
    initCharts: function(id) {
      let charts = echarts.init(document.getElementById(id));
      return charts;
    },
    setOptions: function(charts, optionData) {
      let option = {
        title: {
          text: optionData.Name ? optionData.Name : "",
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
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        legend: {
          orient: "vertical",
          right: "right",
          bottom: "middle",
          data: optionData.Legend,
          textStyle: {
            // color: "rgba(255, 255, 255, 0.8)"
          }
        },
        series: [
          {
            name: "线损分析",
            type: "pie",
            radius: "70%",
            center: ["50%", "60%"],
            data: optionData.Series,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            label: {
              normal: {
                formatter: "{b}\n{c}\n{d}%",
                textStyle: {
                  fontWeight: "normal",
                  fontSize: 15
                }
              }
            }
          }
        ],
        color: ["#2c8185", "#ff7171", "#9ccac8"]
      };
      console.log(charts);
      console.log("*******" + JSON.stringify(optionData));
      // 使用刚指定的配置项和数据显示图表。
      charts.setOption(option);
    }
  }
};
</script>
<style scoped>
.date-select {
  margin-bottom: 16px;
}
.lineLoss-header {
  padding-left: 16px;
  color: white;
  min-height: 40px;
  background-color: #00706b;
}
.select-container {
  font-size: 20px;
  line-height: 36px;
}
.lineLoss-title {
  font-size: 20px;
  line-height: 40px;
}
.border-info {
  border-color: #00706b;
}
.lineLoss-body {
  margin-top: 16px;
  padding: 8px 16px;
}
.table-container {
  margin-top: 32px;
}
</style>
