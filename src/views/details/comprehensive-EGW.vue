<template>
<div class="flex-grow-1 d-flex flex-column" style="overflow-y:auto">
  <!-- <div class="comprehensive_box"> -->
    <div class="row comprehensive_body" style=" margin: 0px;">
      <div class="col-lg-7 comprehensive_echarts">
        <div class="row comprehensive_echarts_text">用电量-用水量相关分析</div>
        <div id="water" class="row"></div>
      </div>
      <div class="col-lg-5 comprehensive_echarts_text">
        <h4 class="row">用电量-用水量相关系数</h4>
        <h1 class="row">7.89%</h1>
      </div>
    </div>
    <div class="row comprehensive_tow">
      <div class="col-lg-7 comprehensive_echarts">
        <div class="row comprehensive_echarts_text">用电量-燃气量相关分析</div>
        <div id="gas" class="row"></div>
      </div>
      <div class="col-lg-5 comprehensive_echarts_text">
        <h4 class="row">用电量-燃气量相关系数</h4>
        <h1 class="row">7.89%</h1>
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
      echartwater: "",
      echartgas: "",
      option: {
        xAxis: {
          scale: true
        },
        yAxis: {
          scale: true
        },
        series: [
          {
            type: "effectScatter",
            symbolSize: 20,
            data: [[172.7, 105.2], [153.4, 42]]
          },
          {
            type: "scatter",
            data: [
              [161.2, 51.6],
              [167.5, 59.0],
              [159.5, 49.2],
              [157.0, 63.0],
              [155.8, 53.6],
              [170.0, 59.0],
              [159.1, 47.6],
              [166.0, 69.8],
              [176.2, 66.8],
              [160.2, 75.2],
              [172.5, 55.2],
              [170.9, 54.2],
              [172.9, 62.5],
              [153.4, 42.0],
              [160.0, 50.0],
              [154.4, 46.2],
              [162.0, 55.0],
              [176.5, 83.0],
              [160.0, 54.4],
              [152.0, 45.8],
              [162.1, 53.6],
              [170.0, 73.2],
              [160.2, 52.1],
              [161.3, 67.9],
              [166.4, 56.6],
              [170.0, 69.4],
              [162.5, 58.2],
              [170.3, 64.8],
              [164.1, 71.6],
              [169.5, 52.8],
              [163.2, 59.8],
              [154.5, 49.0],
              [159.8, 50.0],
              [173.2, 69.2],
              [170.0, 55.9],
              [175.3, 63.6],
              [171.4, 53.4],
              [157.5, 54.5],
              [165.1, 53.6],
              [160.0, 60.0],
              [174.0, 73.6],
              [162.6, 61.4],
              [174.0, 55.5],
              [162.6, 63.6],
              [161.3, 60.9],
              [156.2, 60.0],
              [149.9, 46.8],
              [169.5, 57.3],
              [160.0, 64.1],
              [175.3, 63.6],
              [169.5, 67.3],
              [160.0, 75.5],
              [172.7, 68.2],
              [162.6, 61.4],
              [157.5, 76.8],
              [176.5, 71.8],
              [164.4, 55.5],
              [160.7, 48.6],
              [174.0, 66.4],
              [163.8, 67.3]
            ]
          }
        ]
      },
      optiona: {
        xAxis: {
          scale: true
        },
        yAxis: {
          scale: true
        },
        series: [
          {
            type: "effectScatter",
            symbolSize: 20,
            data: [[172.7, 105.2], [153.4, 42]]
          },
          {
            type: "scatter",
            data: [
              [161.2, 51.6],
              [167.5, 59.0],
              [159.5, 49.2],
              [157.0, 63.0],
              [155.8, 53.6],
              [172.5, 55.2],
              [170.9, 54.2],
              [172.9, 62.5],
              [153.4, 42.0],
              [160.0, 50.0],
              [154.4, 46.2],
              [162.0, 55.0],
              [176.5, 83.0],
              [160.0, 54.4],
              [152.0, 45.8],
              [170.0, 69.4],
              [162.5, 58.2],
              [170.3, 64.8],
              [164.1, 71.6],
              [169.5, 52.8],
              [161.4, 63.4],
              [169.0, 58.2],
              [166.2, 58.6],
              [159.4, 45.7],
              [162.5, 52.2],
              [172.7, 75.9],
              [168.9, 55.0],
              [161.3, 57.3],
              [167.6, 55.0],
              [165.1, 65.5],
              [175.3, 65.5],
              [157.5, 48.6],
              [163.8, 58.6],
              [167.6, 63.6],
              [165.1, 55.2],
              [176.5, 71.8],
              [164.4, 55.5],
              [160.7, 48.6],
              [174.0, 66.4],
              [163.8, 67.3]
            ]
          }
        ]
      }
    };
  },
  mounted: function() {
    this.water();
    this.gas();
  },
  watch: {},
  methods: {
    water: function() {
      this.echartwater = echarts.init(document.getElementById("water"));
      this.echartwater.setOption(this.option);
    },
    gas: function() {
      this.echartgas = echarts.init(document.getElementById("gas"));
      this.echartgas.setOption(this.optiona);
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
#sel1 {
  padding: 0px;
}
#water,
#gas {
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

