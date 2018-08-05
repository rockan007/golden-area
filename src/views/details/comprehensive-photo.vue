<template>
     <div class="energy-container flex-grow-1">
       
            <div class="row comprehensive_body">
              <div class="col-lg-7 comprehensive_echarts" id="comprehensive_echarts"></div>
              <div class="col-lg-5">
                <div class="row comprehensive_r_text">分析字段选择</div>
                <div class="row comprehensive_d_text" >
                  <div class="col-lg-4" style="padding:0px;text-align: left;">分析时间选择</div>
                  <div class="col-lg-6" style="padding:0px;text-align: left;">
                    <div class="form-group">
                          <select class="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                  </div>
                </div>
                <div class="row comprehensive_b_text">
                  <button type="button" class="btn btn-outline-success">查询</button>
                </div>
              </div>
            </div>
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6"></div>
        </div>
    </div>
 
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
export default {
  name: "home",
  components: {},
  data: function() {
    return {
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
        // legend: {
        //     left: 'left',
        //     data: ['2的指数', '3的指数']
        // },
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
    this.vcomprehensive_echarts();
  },
  watch: {},
  methods: {
    vcomprehensive_echarts: function() {
      this.myChart = echarts.init(
        document.getElementById("comprehensive_echarts")
      );
      this.myChart.setOption(this.option);
    }
  }
};
</script>
<style scoped>
.comprehensive_top {
  background-color: #00706b;
}
.comprehensive_body{
  min-height: 300px;
}
</style>

