//用电分析
<template>
        <div class="row comprehensive_box">
          <div class="col-lg-12">
              <div class="row comprehensive_top">
                <div class="col-lg-3 comprehensive_top_first">用电量变化分析</div>
              </div>
        <div class="row comprehensive_body">
          <div class="col-lg-7 comprehensive_echarts" id="comprehensive_echarts"></div>
          <div class="col-lg-5">
            <div class="row comprehensive_r_text">分析字段选择</div>
            <div class="row comprehensive_d_text" >
              <div class="col-lg-4" style="padding:0px;text-align: left;">分析对象选择</div>
              <div class="col-lg-6" style="padding:0px;text-align: left;">
                 <div class="form-group">
                      <select class="form-control" id="sel1">
                        <option>全部支线</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
              </div>
            </div>
              <div class="row comprehensive_d_text" >
              <div class="col-lg-4" style="padding:0px;text-align: left;">分析时间选择</div>
              <div class="col-lg-6" style="padding:0px;text-align: left;">
                 <div class="form-group">
                      <select class="form-control" id="sel1">
                        <option>本周</option>
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
        <div class="row" style="padding:0px 50px;font-size:15px;">
          <div class="col-lg-12 Lfei_table">数据视图</div>
          <div class="col-lg-12">
              <div class="row">
                  <table class="table">
                        <thead class="thead-light">
                        <tr>
                            <th>编号</th>
                            <th>拍照时间</th>
                            <th>拍照长度</th>
                            <th>更新时间</th>
                            <th>查看</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>01</td>
                            <td>2014-5-6 12:30:30</td>
                            <td>1544</td>
                            <td>2014-5-6 12:30:30</td>
                            <td style="color:#016f6c">查看图片</td>
                        </tr>
                        <tr>
                             <td>01</td>
                            <td>2014-5-6 12:30:30</td>
                            <td>1544</td>
                            <td>2014-5-6 12:30:30</td>
                            <td style="color:#016f6c">查看图片</td>
                        </tr>
                        <tr>
                             <td>01</td>
                            <td>2014-5-6 12:30:30</td>
                            <td>1544</td>
                            <td>2014-5-6 12:30:30</td>
                            <td style="color:#016f6c">查看图片</td>
                        </tr>
                        <tr>
                             <td>01</td>
                            <td>2014-5-6 12:30:30</td>
                            <td>1544</td>
                            <td>2014-5-6 12:30:30</td>
                            <td style="color:#016f6c">查看图片</td>
                        </tr>
                        </tbody>
                    </table>
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
  height: calc(1.25rem + 2px);
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
  text-align: left;
  padding-left: 20px;
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
  margin-top: 75px;
  color: #016f6c;
}
.comprehensive_d_text {
  margin-top: 50px;
}
.comprehensive_b_text {
  margin-top: 120px;
}
.btn {
  line-height: 0.5rem;
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

