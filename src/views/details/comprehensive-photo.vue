<template>
     <!-- <div class="energy-container flex-grow-1"> -->
       
            <div class="row comprehensive_body" style=" margin: 0px;">
              
                  <bar-charts title="分布式光伏电源系统" class="col-lg-7 comprehensive_echarts"></bar-charts>
            
              <div class="col-lg-5">
                <div class="row comprehensive_r_text">分析字段选择</div>
                <div class="row comprehensive_d_text" >
                  <div class="col-lg-4" style="padding:0px;text-align: center; font-size: 20px;font-weight:bold;color: #016f6c; ">分析时间选择</div>
                  <div class="col-lg-6" style="padding:0px;text-align: left;">
                    <div class="form-group col-12">
                          <input class="col-12"  type="date"/>
                        </div>
                  </div>
                </div>
                <div class="row comprehensive_b_text">
                  <button type="button" class="btn btn-outline-success">查询</button>
                </div>
              </div>
            </div>

 
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import barCharts from "@/components/utils/bar-charts";
export default {
  name: "home",
  components: { barCharts },
  data: function() {
    return {
      myChart: "",
      option: {
        color: ["#3398DB"],
        title: {
          left: "center",
          text: "分布式光伏能源系统"
        },
        // tooltip : {
        //     trigger: 'axis',
        //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        //         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //     }
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["一", "二", "三", "四", "五", "六", "日"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "40%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ],
        color: ["#2c8185", "#4da29e", "#9ccac8"]
      }
    };
  },
  mounted: function() {
    // this.vcomprehensive_echarts();
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
.comprehensive_body {
  min-height: 300px;
}
.form-control {
  padding: 0px;
  height: calc(2.25rem + 2px);
}
.comprehensive_box {
  border: 1px solid #8eb7af;
  border-radius: 3px;
  min-height: 900px;
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
  margin-top: 100px;
}
.comprehensive_b_text {
  margin-top: 120px;
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
</style>

