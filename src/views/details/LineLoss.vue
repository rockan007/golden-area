//线损分析
<template>
    <div class="lineLoss-container flex-grow-1 d-flex flex-column">
        <div class="lineLoss-header d-flex justify-content-between">
            <div class="lineLoss-title">
              线损分析
            </div>
            <a class="standard-words" href="#"  v-on:click="showInfo"> <span class="iconfont icon-info"></span>线损标准</a>
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
              <div style="padding-top:50px;">
                <data-table :tabId="tableID" v-bind:tableData="tableData"></data-table>
              </div>
            </div>
        </div>
         <!-- <info-dia v-if="showInfo" v-bind:infoHtml="infoHtml" v-bind:showInfo="showInfo" v-on:showNone="showInfo=0"></info-dia> -->
         <modal v-bind:diaInfo="modalData"></modal>
    </div>
</template>
<script>
import $ from "jquery";
import echarts from "echarts";
import { events } from "@/assets/scripts/events.js";
import dataTable from "@/components/utils/data-table";
import modal from "@/components/utils/modal";
import infoDia from "@/components/utils/info-dia";
export default {
  name: "line-loss",
  components: {
    dataTable,
    modal
  },
  data: function() {
    return {
      modalData: {
        id: "lineLoss-standard",
        title: "线损标准",
        html: `<div style="text-align:left;"><div>线损率：0-8%属于合格范围</div><div>一级线损：变压器前线损</div>
      <div>二级线损：变压器开关至表箱总开关的线损</div><div>三级线损：表箱总开关至分开关线损</div></div>`
      },
      tableID: "line-loss",
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
      boxesLoss: [],
      lossData: [], //表格数据
      tableData: {}
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
    this.getBoxesLoss();
  },
  watch: {
    lineLoss: {
      //线路线损
      deep: true,
      handler: function(newVal) {
        this.setOptions(this.lineCharts, newVal[0]);
        this.setOptions(this.DXCharts, newVal[1]);
        this.setOptions(this.XXCharts, newVal[2]);
        // this.lossData = newVal.concat(this.boxesLoss);
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
          this.$nextTick(() => {
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
      this.setOptions(this.boxCharts, newVal);
    },
    boxesLoss: function(newVal) {
      //电表线损
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
        this.changeToTableData(newVal);
      }
    }
  },
  filters: {},
  methods: {
    showInfo: function() {
      $("#" + this.modalData.id).modal("show");
    },
    changeToTableData: function(lossData) {
      let tableRows = [];
      lossData.forEach(lose => {
        let row = [
          lose.Name,
          lose.Series[0].value,
          lose.Series[1].value,
          this.totalEleNo(lose),
          this.filterLosePersent(lose)
        ];
        tableRows.push(row);
      });
      let cols = ["线路名称", "实际用电量", "损耗电量", "总电量", "损耗百分比"];
      this.tableData = {
        name: "线损分析：" + this.startDate + ":" + this.endDate,
        cols: cols,
        rows: tableRows
      };
    },
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
    },
    getBoxesLoss: function() {
      events.TQ_request(
        events.BOXES_LINELOSS,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID,
          DT_Begin: this.startDate,
          DT_End: this.endDate
        },
        function(responseData) {
          console.log("获取的表箱线损结果：" + JSON.stringify(responseData));
          responseData.forEach(item => {
            item.Name = item.Name + "#表箱";
          });
          this.boxesLoss = responseData;
        }.bind(this)
      );
    },
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
          },
          selectedMode: false
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
.standard-words {
  font-size: 16px;
  color: #9ccac8;
  line-height: 40px;
  padding-right: 16px;
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
