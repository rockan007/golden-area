<template>
     <div id="echarts-container solo_box"  class=" Meta-analysis echarts-container flex-grow-1"  style="overflow-y:auto">
        <div class="date-select d-flex align-items-center justify-content-center ">
                <div class="input-group mb-3 col-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">开始时间</span>
                  </div>
                  <input type="date" class="form-control" v-model="startLLDate">
                </div>
                 <div class="input-group mb-3 col-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">结束时间</span>
                  </div>
                  <input type="date" class="form-control" v-model="endLLDate">
                </div>
            </div>
       <div class="analysis-body flex-grow-1 d-flex flex-column" style="cursor:pointer;">
             <p  style="">
              <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>设备名称</span>
              <span style="color:green;">|</span>
              <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>故障等级</span>
               <span style="color:green;">|</span>
              <span v-on:click="period=2" v-bind:class='{"chose-period":period==2}'>故障类型</span>
                <span style="color:green;">|</span>
              <span v-on:click="period=3" v-bind:class='{"chose-period":period==3}'>线路名称</span>
              <button class="btn btn-outline-info" v-on:click="exportLineLoss()">导出表格</button>
            </p>
        </div>
       <div class="d-flex  flex-grow-1 flex-column">
           <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>序号</th>
                  <th>{{dataname}}</th>
                  <th>数量</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(nav,index) in navs" v-bind:key="index">
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
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "Meta-analysis",
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
      period: 0,
      navs: [],
      startLLDate: "2018-08-01",
      endLLDate: "2018-08-07",
      dataname: "",
      Device_Name: [
        { name: "1#变压器", value: 35 },
        { name: "变压器东支出线", value: 62 },
        { name: "变压器母排", value: 32 },
        { name: "54#表箱", value: 14 },
        { name: "54#表箱2#表", value: 3 },
        { name: "1#变压器", value: 25 },
        { name: "变压器东支出线", value: 36 },
        { name: "变压器母排", value: 2 },
        { name: "54#表箱", value: 76 },
        { name: "54#表箱2#表", value: 8 },
        { name: "1#变压器", value: 96 },
        { name: "变压器东支出线", value: 69 },
        { name: "变压器母排", value: 56 },
        { name: "54#表箱", value: 4 },
        { name: "54#表箱2#表", value: 71 },
        { name: "1#变压器", value: 12 },
        { name: "变压器东支出线", value: 35 },
        { name: "变压器母排", value: 111 },
        { name: "54#表箱", value: 83 },
        { name: "54#表箱2#表", value: 68 }
      ],
      Failure_Level: [
        { name: "一般", value: 987 },
        { name: "严重", value: 213 }
      ],
      Type_of_failure: [
        { name: "断电", value: 35 },
        { name: "三相不平衡", value: 22 },
        { name: "温度过高", value: 36 },
        { name: "表箱异常打开", value: 45 },
        { name: "用户侧断电", value: 86 }
      ],
      line: [
        { name: "东线", value: 40 },
        { name: "西线", value: 32 },
        { name: "东线东支", value: 55 },
        { name: "东线西支", value: 27 }
      ]
    };
  },
  mounted: function() {
    this.setdata();
  },
  watch: {
    period: function(newVal) {
      let datalist = "";
      let Firstname = "";
      switch (parseInt(newVal)) {
        case 0:
          datalist = this.Device_Name;
          Firstname = "设备名称";
          break;
        case 1:
          datalist = this.Failure_Level;
          Firstname = "故障等级";
          break;
        case 2:
          datalist = this.Type_of_failure;
          Firstname = "故障类型";
          break;
        case 3:
          datalist = this.line;
          Firstname = "线路名称";
          break;
        default:
          datalist = this.Device_Name;
          Firstname = "设备名称";
          break;
      }
      this.getdata(datalist.sort(this.compare("value")), Firstname);
    }
  },
  methods: {
    exportLineLoss: function() {
      window.open(
        "http://wx.dianliangliang.com/sucai/courts-manage/courts-manage/%E7%BA%BF%E6%8D%9F%E5%88%86%E6%9E%90.xlsx"
      );
    },
    setdata: function() {
      this.getdata(this.Device_Name.sort(this.compare("value")), "设备名称");
    },
    getdata: function(datalist, Firstname) {
      this.navs = datalist;
      this.dataname = Firstname;
    },
    compare: function(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
      };
    }
  }
};
</script>
<style scoped>
.form-control {
  height: calc(2.25rem + 7px);
}
.btn {
  margin-top: 5px;
  float: right;
}
.echarts-container {
  padding: 8px 16px;
}
#pie-container {
  min-height: 500px;
}
table {
  text-align: left;
}
.solo_box {
  padding: 0px 50px;
}
.time_box {
  margin: 0 auto;
}
.time_box div {
  margin-right: 50px;
}
p {
  /* background-color: #016f6c; */
  text-align: left;
  margin-bottom: 0;
  line-height: 50px;
  padding-right: 10px;
}
.chose-period {
  color: #016f6c;
}
.input-group-text {
  color: black;
}
span {
  color: #b2b2b2;
  font-size: 20px;
  padding: 5px 10px;
}
.event-severity {
  color: red;
}
</style>