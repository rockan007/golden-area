<template>
     <div id="echarts-container"  class="Fault-level echarts-container flex-grow-1" style="overflow-y:auto">     
       <div class="d-flex flex-grow-1">
          <div class="col-lg-7" id="pie-container"></div>
          <div class="col-lg-5">
             <div class="analysis-body flex-grow-1 d-flex flex-column" style="cursor:pointer;">
                <h2 style=" text-align: left;padding-left: 30px;">选择时间：</h2>
                <p  style="margin-bottom:0">
                  <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>日</span>
                  <span style="color:white;">|</span>
                  <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>周</span>
                  <span style="color:white;">|</span>
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
                  <th>等级</th>
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
  name: "Fault-level",
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
       period:0,
       tabledata:[],
       eCharts:'',
       DayData:{
           seriesdata:[{value:350, name:'一般故障', selected:true},{value:90, name:'严重故障'},],
           seriestowdata:[{value:50, name:'一般（未处理）'},{value:300, name:'一般（已处理）'},{value:20, name:'严重（未处理）'},{value:70, name:'严重（已处理）'},],
       },
       WeekData:{
           seriesdata:[ {value:220, name:'一般故障'},{value:50, name:'严重故障'},],
            seriestowdata:[{value:50, name:'一般（未处理）'},{value:170, name:'一般（已处理）'},{value:10, name:'严重（未处理）'},{value:40, name:'严重（已处理）'},],
       },
       monthData:{
           seriesdata:[ {value:600, name:'一般故障'},{value:200, name:'严重故障'},],
          seriestowdata:[{value:200, name:'一般（未处理）'},{value:400, name:'一般（已处理）'},{value:50, name:'严重（未处理）'},{value:150, name:'严重（已处理）'},],
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
          this.tabledata =this.DayData.seriestowdata;
          break;
        case 1:
          optionData = this.WeekData;
          this.tabledata = WeekData.seriestowdata;
          break;
        case 2:
          optionData = this.monthData;
          this.tabledata =this.monthData.seriestowdata;
          break;
        default:
          optionData = this.DayData;
          this.tabledata =this.DayData.seriestowdata;
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
      this.tabledata =this.DayData.seriestowdata;
      console.log(JSON.stringify(this.tabledata));
    },
    setOptions: function(optionData) {
      let option = {
                  tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    // orient: 'vertical',
                    x: 'center',
                    data:['一般','严重','一般（未处理）','一般（已处理）','严重（未处理）','严重（已处理）']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:optionData.seriesdata
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['40%', '55%'],
                        label: {
                            normal: {
                                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                backgroundColor: '#eee',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                // shadowBlur:3,
                                // shadowOffsetX: 2,
                                // shadowOffsetY: 2,
                                // shadowColor: '#999',
                                // padding: [0, 7],
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    // abg: {
                                    //     backgroundColor: '#333',
                                    //     width: '100%',
                                    //     align: 'right',
                                    //     height: 22,
                                    //     borderRadius: [4, 4, 0, 0]
                                    // },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data:optionData.seriestowdata
                    }
                ],
               color:['rgb(0,112,107)','rgb(155,62,7)','rgb(0,159,152)','rgb(0,73,70)','rgb(197,75,2)','rgb(101,40,4)']
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
p{
  margin-top: 100px;
}
span{
  font-size: 20px;
  padding: 5px 10px;
}
</style>