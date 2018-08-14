<template>
<div class="flex-grow-1 d-flex flex-column" style="overflow-y:auto">
  <!-- <div class="comprehensive_box"> -->
    <div class="flex-grow-1 d-flex flex-column">
      <!-- <p  style="margin-bottom:0">
              <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>日</span>
              <span style="color:white;">/</span>
              <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>周</span>
               <span style="color:white;">/</span>
              <span v-on:click="period=2" v-bind:class='{"chose-period":period==2}'>月</span>
       </p> -->
    </div>
    <div class="row comprehensive_body" style=" margin: 0px;">
       <!-- <div class="row comprehensive_echarts_text">用电量-用水量相关分析</div> -->
      <div class="col-lg-6 comprehensive_echarts">
        <div id="lwater" class="row"></div>
      </div>
      <div class="col-lg-6 comprehensive_echarts">
       <div id="rwater" class="row"></div>  
      </div>
    </div>
    <div class="row comprehensive_tow">
      <!-- <div class="row comprehensive_echarts_text">用电量-燃气量相关分析</div> -->
      <div class="col-lg-6 comprehensive_echarts"> 
        <div id="lgas" class="row"></div>
      </div>
      <div class="col-lg-6 comprehensive_echarts">
          <div id="rgas" class="row"></div>
      </div>  
    </div>
  </div>
 <!-- </div>       -->
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "echarts/dist/echarts.min.js";
import echarts from "echarts";
export default {
  name: "about",
  components: {},
  data: function() {
    return {
      period: 0,
      rbarCharts: "",
      lbarCharts: "",
      rechartgas: "",
      lechartgas: "",
      towdata: {
                title:'用电量-用水量(周)相关分析',
                data: ["平均用电", "平均用水"],
                pw:"平均用水",
                lmax:6,
                rmin:0,
                rmax:0.05,
                xLine:  [ "0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
                lyline: [1.2,1,1.4,1.2,1.7,1.5,1.9,1.4,1.8,2.8,2.9,1.7],
                ryLine:[ 0.01,0.01,0.024,0.017,0.008,0.004,0.031,0.019,0.022,0.044,0.022,0.008],
                tabledata: [{ photographtime: "周一",photographlong: "15466kw/h", updatetime: "2014-5-6 11:26:30"},
                            {photographtime: "周二",photographlong: "15466kw/h",updatetime: "2014-5-6 12:53:30"},
                            {photographtime: "周三",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "周四",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "周五",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "周六", photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "周日",photographlong: "15466kw/h",updatetime: "2014-5-6 12:56:30"}],
                },
      fourdata: {
                title:'用电量-用气量(周)相关分析',
                data: ["平均用电", "平均用气"],
                pw:"平均用气",
                lmax:6,
                rmin:0,
                rmax:0.3,
                 xLine:  [ "0:00","2:00","4:00","6:00","8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
                lyline: [1.2,1,1.4,1.2,1.7,1.5,1.9,1.4,1.8,2.8,2.9,1.7],
                ryLine:[ 0.0,0.0,0.0,0.18,0.0,0.02,0.09,0.0,0.25,0.0,0.0,0.0],
                tabledata: [{ photographtime: "周一",photographlong: "15466kw/h", updatetime: "2014-5-6 11:26:30"},
                            { photographtime: "周二",photographlong: "15466kw/h",updatetime: "2014-5-6 12:53:30"},
                            { photographtime: "周三",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "周四",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "周五",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "周六", photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "周日",photographlong: "15466kw/h",updatetime: "2014-5-6 12:56:30"}],
                },
        threedata: {
                title:'用电量-用水量(年))相关分析',
                data: ["平均用电", "平均用水"],
                pw:"平均用水",
                lmax:50,
                rmin:0,
                rmax:0.3,
                xLine: ["1号","2号","3号","4号","5号","6号","7号","8号","9号","10号","11号","12号",
                      "13号","14号","15号","16号","17号","18号","19号","20号","21号",
                     "22号","23号","24号","25号","26号","27号","28号","29号","30号"],
                lyline: [20.5,21.5,23.4,22.5,19.7,25.5,20.5,27.3,20.5,21.5,23.4,19.7,24.6,19.7,23.4,21.5,24.6,23.4,2.5,2.4,3.7,25.3,21.5,26.7,22.4,27.3,19.7,21.5,24.6,23.4],
                ryLine:[0.201,0.241,0.198,0.266,0.222,0.217,0.214,0.237,0.213,0.249,0.243,0.253,0.201,0.222,0.207,0.255,0.201,0.244,0,0,0.096,0.273,0.266,0.222,0.201,0.237,0.255,0.232,0.208,0.242],
                tabledata: [{ photographtime: "一月",photographlong: "15466kw/h", updatetime: "2014-5-6 11:26:30"},
                            {photographtime: "二月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:53:30"},
                            {photographtime: "三月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "四月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "五月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "六月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "七月",photographlong: "15466kw/h", updatetime: "2014-5-6 12:56:30"},
                            {photographtime: "八月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"},
                            {photographtime: "九月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"},
                            {photographtime: "十月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"},
                            {photographtime: "十一月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"},
                            {photographtime: "十二月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"}],
                    },
         fifdata: {
                title:'用电量-用气量(年)相关分析',
                 data: ["平均用电", "平均用气"],
                 pw:"平均用气",
                lmax:50,
                rmin:0,
                rmax:0.7,
                xLine: ["1号","2号","3号","4号","5号","6号","7号","8号","9号","10号","11号","12号",
                      "13号","14号","15号","16号","17号","18号","19号","20号","21号",
                     "22号","23号","24号","25号","26号","27号","28号","29号","30号"],
                 lyline: [20.5,21.5,23.4,22.5,19.7,25.5,20.5,27.3,20.5,21.5,23.4,19.7,24.6,19.7,23.4,21.5,24.6,23.4,2.5,2.4,3.7,25.3,21.5,26.7,22.4,27.3,19.7,21.5,24.6,23.4],
                 ryLine: [0.54,0.48,0.52,0.44,0.38,0.41,0.39,0.57,0.21,0.47,0.51,0.46,0.44,0.57,0.24,0.45,0.48,0.56,0,0,0,0.21,0.54,0.49,0.47,0.53,0.42,0.55,0.58,0.53],
                 tabledata: [{ photographtime: "一月",photographlong: "15466kw/h", updatetime: "2014-5-6 11:26:30"},
                            {photographtime: "二月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:53:30"},
                            {photographtime: "三月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "四月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "五月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "六月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:43:30"},
                            {photographtime: "七月",photographlong: "15466kw/h", updatetime: "2014-5-6 12:56:30"},
                            {photographtime: "八月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"},
                            {photographtime: "九月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"},
                            {photographtime: "十月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"},
                            {photographtime: "十一月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"},
                            {photographtime: "十二月",photographlong: "15466kw/h",updatetime: "2014-5-6 12:24:30"}],
                },
    }
  },
  mounted: function() {
    this.setecharts();
    // this.gas();
  },
  watch:{
        period: function(newVal) {
            let optionData = "";
            switch (parseInt(newVal)) {
              case 0:
              optionData = this.monthData;
                break;
              case 1:
               optionData = this.dayData;
                break;
              case 2:
                optionData = this.weekData; 
                break;
              default:
                break;
            }
            this.setwaterChartsOptions(optionData);
            this.setgasChartsOptions(optionData);
          }
  },
  methods: {
    
    setecharts: function() {
      this.lbarCharts = echarts.init(
        document.getElementById("lwater"),
        "light"
      );
      this.rbarCharts = echarts.init(
        document.getElementById("rwater"),
        "light"
      );
      this.rechartgas = echarts.init(
        document.getElementById("rgas"),
        "light"
      );
      this.lechartgas = echarts.init(
        document.getElementById("lgas"),
        "light"
      );
      this.setlwaterChartsOptions(this.lbarCharts,this.towdata);
      this.setlwaterChartsOptions(this.rbarCharts,this.threedata);
      this.setlwaterChartsOptions(this.rechartgas,this.fifdata);
      this.setlwaterChartsOptions(this.lechartgas,this.fourdata);
      console.log("你奶奶的")
    },
    // gas: function() {
      
     
    // },
    setlwaterChartsOptions: function(echarts,optionData) {
       console.log("你奶奶的1"+JSON.stringify(optionData));
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
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          data:optionData.data,
          top: "30px"
        },
        xAxis: [
          {
            type: "category",
            data: optionData.xLine,
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
            max:optionData.lmax,
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
            min: optionData.rmin,
            max: optionData.rmax,
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
            name: "平均用电",
            type: "bar",
            areaStyle: {normal: {}},
            data:optionData.lyline
          },
          {
            name: optionData.pw,
            type: "line",
            yAxisIndex: 1,
            // areaStyle: {normal: {}},
            data: optionData.ryLine
          }
        ]
      };
      console.log("你奶奶的11"+optionData.ryline)
      echarts.setOption(option);
    },
  }
}
</script>
<style scoped>

* {
  font-family: "Microsoft YaHei" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#sel1 {
  padding: 0px;
}
#lwater,#rwater,#lgas,#rgas
 {
  height: 400px;
}
.form-control {
  height: calc(1.25rem + 2px);
}
.comprehensive_top {
  padding: 5px 0px;
  border-radius: 3px;
  background-color: #016f6c;
}
.comprehensive_top_first {
  border-right: 2px solid #8eb7af;
  color: #fff;
}
.comprehensive_top_seand {
  color: #8eb7af;
}
.comprehensive_body {
  min-height: 500px;
}
.comprehensive_echarts {
  padding: 70px 90px;
}
.comprehensive_echarts_text {
  text-align: center !important;
  color: #016f6c;
}
h1,
h4 {
  text-align: left;
  width: 100%;
  margin: 100px auto;
  font-weight: bold;
}
.comprehensive_tow .comprehensive_echarts {
  padding: 0px 90px;
}
</style>

