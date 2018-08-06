<template>
  
       
          <div class="col-lg-12">
              <div class="row comprehensive_top">
                <div class="col-lg-3 comprehensive_top_first">用电量变化分析</div>
              </div>
        <div class="row comprehensive_body">
          <div class="col-lg-6 comprehensive_echarts" id="line_loss_echarts"></div>
          <div class="col-lg-1" style="padding-top:200px;">
          </div>
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
                        <tr   v-for="(nav,index) in tabledata" v-bind:key="index">
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
    
   
</template>
<script>
import echarts from "echarts";
export default {
  name: "line-loss",
  components: {},
  data: function() {
    return {
      tabledata: [
        {
          photographtime: "2018-7-6 08:30:30",
          photographlong: "15466",
          updatetime: "2014-5-6 11:26:30"
        },
        {
          photographtime: "2018-7-8 05:33:30",
          photographlong: "15466",
          updatetime: "2014-5-6 12:53:30"
        },
        {
          photographtime: "2018-8-1 12:11:30",
          photographlong: "15466",
          updatetime: "2014-5-6 12:43:30"
        },
        {
          photographtime: "2018-8-2 12:26:30",
          photographlong: "15466",
          updatetime: "2014-5-6 12:56:30"
        },
        {
          photographtime: "2018-8-5 12:53:30",
          photographlong: "15466",
          updatetime: "2014-5-6 12:24:30"
        }
      ],
      lineChart: "",
      option: {
        title: {
          text: "总体周线损分析",
          x: "left"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: 10,
          top: 150,
          bottom: 20,
          data: ["线损用电量", "实际用电量"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "线损用电量" },
              { value: 3100, name: "实际用电量" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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
      this.lineChart = echarts.init(
        document.getElementById("line_loss_echarts")
      );
      this.lineChart.setOption(this.option);
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
  padding-top: 70px;
  padding-left: 20px;
  height: 400px;
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

