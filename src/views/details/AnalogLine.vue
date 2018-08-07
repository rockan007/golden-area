<template>
    <div class="analog-line-container flex-grow-1 d-flex flex-column">
        <div class="analog-body flex-grow-1 d-flex flex-column  justify-content-center">
          <div class="charts-select btn-group ml-auto" role="group">
            <button type="button" class="btn btn-secondary" v-on:click="selectType=0" v-bind:class='{"active":selectType==0}'>图表</button>
            <button type="button" class="btn btn-secondary" v-on:click="selectType=1" v-bind:class='{"active":selectType==1}'>表格</button>
          </div>
          <div v-if="selectType==0" style="height:0;padding:16px 16px 32px 16px;" class="flex-grow-1 flex-shrink-1 d-flex align-items-stretch position-relative">
            <template v-if="id==1">  
              <img src="../../assets/imgs/analog-map.png" class="analog-image flex-grow-1" alt="">
              <back-no v-bind:showBack='meterNo<48' v-for="meterNo in 50" v-bind:meterBoxNo="meterNo" :key="meterNo" v-on:dialogShow="getDialogShow" v-bind:class="['meterNo-'+meterNo,{'flex-column-reverse':meterNo<21}]"></back-no>
            </template>
            <template v-else>
              <img src="http://wx.dianliangliang.com/sucai/analog-line.1b8ec1ef.png" class="analog-image " alt="">
              <dynamic-no  v-for="no in 6" v-bind:key="no" v-bind:class="'dynamic-bottom-'+no" v-bind:dynamicItem="getRandomBottom(no)"></dynamic-no>
            </template> 
          </div>
          <opertional-parameters v-else></opertional-parameters>
            <div v-if="showDialog&&selectMeterBox" class="meter-dialog d-flex flex-column shadow-lg">
              <div class="dia-header d-flex justify-content-center">
                <div class="flex-grow-1">54#电表箱</div>
                <div class="close-icon align-self-right" v-on:click.stop="cancelDia">X</div>
              </div>
              <div class="dia-body flex-grow-1 d-flex  flex-wrap-reverse">
                  <meter-item  v-for="m in 9" :type="getRandomType()" v-bind:meterData="selectMeterBox.C[m-1]?selectMeterBox.C[m-1]:{}" :key="m" v-bind:meterOrder="m" class="col-4"></meter-item>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import DynamicNo from "@/components/details/DynamicNo";
import BackNo from "@/components/details/random-backNo";
import MeterItem from "@/components/details/Meter-Item";
import opertionalParameters from "@/views/details/operational-parameters";
import { meterNoMap, meterBoxes } from "@/assets/scripts/meters-data.js";
export default {
  name: "analog-line",
  components: {
    "dynamic-no": DynamicNo,
    "back-no": BackNo,
    "meter-item": MeterItem,
    opertionalParameters
  },
  data: function() {
    return {
      selectType: 0,
      id: 0,
      showDialog: 0,
      selectMap: 0,
      selectMeterBoxNo: 0,
      meterBoxList: "",
      selectMeterBox: ""
    };
  },
  mounted: function() {
    this.id = this.$route.params.id;
    this.getMeterBoxList();
    console.log("meterNoMap:" + meterNoMap.has("373000500000240440833"));
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    },
    showDialog: function() {},
    meterBoxList: {
      deep: true,
      handler: function() {}
    },
    selectMeterBoxNo: function(newVal) {
      this.selectMeterBox = this.meterBoxList[newVal - 1];
    }
  },
  filters: {
    filterMeterClass: function(no) {
      return "meterNo-" + no;
    }
  },
  methods: {
    getMeterBoxList: function() {
      meterBoxes.forEach(meterBox => {
        meterBox.order = meterNoMap.get(meterBox.JLXBH);
      });
      meterBoxes.sort(function(a, b) {
        return a.order - b.order;
      });
      this.meterBoxList = meterBoxes;
    },
    getRandomType: function() {
      return parseInt(Math.round(Math.random() * 3));
    },
    getRandomBottom: function(no) {
      let dianYa = 0;
      let dianLiu = 0;
      if (no == 2 || no == 3 || no == 6) {
        dianYa = this.getRandomNo(220, 235);
        dianLiu = this.getRandomNo(1, 110);
      }
      return {
        电压: dianYa,
        电流: dianLiu
      };
    },
    makeNoDynamic: function() {
      return setTimeout(this.getRandomBottom, 1000);
    },
    getRandomNo: function(minNo, maxNo) {
      return (Math.random() * (maxNo - minNo) + minNo).toFixed(2);
    },
    getDialogShow: function(no) {
      this.selectMeterBoxNo = no;
      this.showDialog = 1;
    },
    cancelDia: function() {
      this.showDialog = 0;
    }
  }
};
</script>
<style scoped>
.charts-select {
  margin: 8px 16px 0 0;
  min-height: 36px;
}
.btn-secondary.active {
  background-color: #00706b !important;
  border-color: #00706b !important;
}
.line-info {
  right: 16px;
  top: 16px;
}
.close-icon {
  float: right;
}
.dia-header {
  font-size: 36px;
  color: lightskyblue;
}
.meter-dialog {
  position: absolute;
  left: 60px;
  top: 60px;
  bottom: 60px;
  right: 60px;
  z-index: 999;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
}
.analog-line-container {
  color: white;
}
.analog-header {
  font-size: 24px;
}
.analog-body {
  position: relative;
}
.analog-image {
  width: 100%;
  /* margin-top: 10px;
  margin-left: -560px;
  height: 400px; */
}
.dynamic-bottom-1 {
  left: 100px;
  top: 500px;
}
.dynamic-bottom-2 {
  left: 450px;
  top: 590px;
}
.dynamic-bottom-3 {
  left: 550px;
  top: 590px;
}
.dynamic-bottom-4 {
  left: 670px;
  top: 590px;
}
.dynamic-bottom-5 {
  left: 750px;
  top: 590px;
}
.dynamic-bottom-6 {
  left: 850px;
  top: 590px;
}
.meterNo-1 {
  left: 16px;
  top: 224px;
}
.meterNo-2 {
  left: 88px;
  top: 224px;
}
.meterNo-3 {
  left: 195px;
  top: 224px;
}
.meterNo-4 {
  left: 268px;
  top: 224px;
}
.meterNo-5 {
  left: 367px;
  top: 224px;
}
.meterNo-6 {
  left: 439px;
  top: 224px;
}
.meterNo-7 {
  left: 540px;
  top: 224px;
}
.meterNo-8 {
  left: 612px;
  top: 224px;
}
.meterNo-9 {
  left: 709px;
  top: 224px;
}
.meterNo-10 {
  left: 780px;
  top: 224px;
}
.meterNo-11 {
  right: 784px;
  top: 224px;
}
.meterNo-12 {
  right: 710px;
  top: 224px;
}
.meterNo-13 {
  right: 608px;
  top: 224px;
}
.meterNo-14 {
  right: 536px;
  top: 224px;
}
.meterNo-15 {
  right: 435px;
  top: 224px;
}
.meterNo-16 {
  right: 365px;
  top: 224px;
}
.meterNo-17 {
  right: 273px;
  top: 224px;
}
.meterNo-18 {
  right: 182px;
  top: 224px;
}
.meterNo-19 {
  right: 95px;
  top: 224px;
}
.meterNo-20 {
  right: 22px;
  top: 224px;
}
.meterNo-21 {
  right: 487px;
  top: 74px;
}
.meterNo-22 {
  right: 412px;
  top: 74px;
}
.meterNo-23 {
  right: 340px;
  top: 74px;
}
.meterNo-24 {
  right: 262px;
  top: 74px;
}
.meterNo-25 {
  right: 190px;
  top: 74px;
}
.meterNo-26 {
  right: 109px;
  top: 74px;
}
.meterNo-27 {
  right: 37px;
  top: 74px;
}
.meterNo-28 {
  left: 345px;
  bottom: 190px;
}
.meterNo-29 {
  left: 417px;
  bottom: 190px;
}
.meterNo-30 {
  left: 517px;
  bottom: 190px;
}
.meterNo-31 {
  left: 589px;
  bottom: 190px;
}
.meterNo-32 {
  left: 688px;
  bottom: 190px;
}
.meterNo-33 {
  left: 760px;
  bottom: 190px;
}
.meterNo-34 {
  left: 858px;
  bottom: 190px;
}
.meterNo-35 {
  left: 930px;
  bottom: 190px;
}
.meterNo-36 {
  right: 786px;
  bottom: 190px;
}
.meterNo-37 {
  right: 714px;
  bottom: 190px;
}
.meterNo-38 {
  right: 610px;
  bottom: 190px;
}
.meterNo-39 {
  right: 538px;
  bottom: 190px;
}
.meterNo-40 {
  right: 430px;
  bottom: 190px;
}
.meterNo-41 {
  right: 358px;
  bottom: 190px;
}
.meterNo-42 {
  right: 257px;
  bottom: 190px;
}
.meterNo-43 {
  right: 172px;
  bottom: 190px;
}
.meterNo-44 {
  right: 88px;
  bottom: 190px;
}
.meterNo-45 {
  right: 16px;
  bottom: 190px;
}
.meterNo-46 {
  right: 582px;
  bottom: -5px;
}
.meterNo-47 {
  right: 510px;
  bottom: -5px;
}
.meterNo-48 {
  left: 960px;
  top: 260px;
}
.meterNo-49 {
  right: 966px;
  top: 300px;
}
.meterNo-50 {
  left: 976px;
  top: 300px;
}
</style>
