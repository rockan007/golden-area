<template>
     <div id="echarts-container"  class="faulty-line echarts-container flex-grow-1"  style="overflow-y:auto">
       <div class="d-flex">
          <div class="col-lg-7" id="pie-container"></div>
          <div class="col-lg-5">
              <div class="analysis-body flex-grow-1 d-flex flex-column" style="cursor:pointer;">
                <h2 style=" text-align: left;padding-left: 30px;">选择时间：</h2>
                <p  style="margin-bottom:0">
                  <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>日</span>
                  <span style="color:white;">/</span>
                  <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>周</span>
                  <span style="color:white;">/</span>
                  <span v-on:click="period=2" v-bind:class='{"chose-period":period==2}'>月</span>
              </p>
           </div>
          </div>
       </div>
        <div class="d-flex">
         <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>序号</th>
                  <th>线路</th>
                  <th>数量</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(nav,index) in tabledata" v-bind:key="index">
                  <td>{{index+1}}</td>
                  <td>{{nav.name}}</td>
                  <td>{{nav.value}}</td>
                </tr>      
              </tbody>
          </table>
       </div>
     </div>
</template>
<script>
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "faulty-line",
  props: {
    // chartsData: {
    //   type: Object,
    //   default: function() {
    //     return {};
    //   }
    // }
  },
  data: function() { 
    return {
       tabledata:[],
       period:0,
       eCharts:'',
       DayData:{
           seriesdata:[ 52, 200, 334, 330],
           tabedata:[{name:"西线",value:52}, {name:"东线",value:200},{name:"东线西支",value:334},{name:"东线东支",value:330}]
       },
       WeekData:{
           seriesdata:[ 30, 120, 305, 350],
             tabedata:[{name:"西线",value:30}, {name:"东线",value:120},{name:"东线西支",value:305},{name:"东线东支",value:350}]
       },
       monthData:{
           seriesdata:[ 90, 320, 105, 320],
            tabedata:[{name:"西线",value:90}, {name:"东线",value:320},{name:"东线西支",value:105},{name:"东线东支",value:320}]
       },
    };
  },
  mounted: function() {
    this.initECharts();
  },
  watch:{
           period: function(newVal) {
            let optionData = "";
            switch (parseInt(newVal)) {
              case 0:
                optionData = this.DayData;
                this.tabledata =this.DayData.tabedata;
                break;
              case 1:
                optionData = this.WeekData;
                this.tabledata =this.WeekData.tabedata;
                break;
              case 2:
                optionData = this.monthData;
                this.tabledata =this.monthData.tabedata;
                break;
              default:
                optionData = this.DayData;
                this.tabledata =this.DayData.tabedata;
                break;
            }
            this.setOptions(optionData);
          }
  },
  methods: {
    initECharts: function() {
      this.eCharts = echarts.init(
        document.getElementById("pie-container"),
        "light"
      );
      this.setOptions(this.monthData);
        this.tabledata =this.DayData.tabedata;
    },
    setOptions: function(optionData) {
      let option = {
                    color: ['#3398DB'],
                      tooltip : {
                          trigger: 'axis',
                          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis : [
                          {
                              type : 'category',
                              data : ['东线', '西线', '东线东支', '东线西支'],
                              axisTick: {
                                  alignWithLabel: true
                              }
                          }
                      ],
                      yAxis : [
                          {
                              type : 'value'
                          }
                      ],
                      series : [
                          {
                              name:'直接访问',
                              type:'bar',
                              barWidth: '30%',
                              data:optionData.seriesdata
                          }
                      ]
                      //  color:['rgb(150,200,101)','rgb(80,220,154)','rgb(110,205,173)','rgb(100,200,169)','rgb(131,175,155)']
            };
            // 使用刚指定的配置项和数据显示图表。
            this.eCharts.setOption(option);
          }
        }
      };
</script>
<style scoped>
.echarts-container {
  padding: 8px 16px;
}
#pie-container{
 min-height: 500px;
}
.analysis-body {
  margin: 60px 30px 60px 100px;
}
.chose-period {
  color: #56fdff;
}
span{
  padding: 5px 10px;
}
p{
   font-size: 20px;
  margin-top: 100px;
}
</style>