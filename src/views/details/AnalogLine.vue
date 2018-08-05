<template>
    <div class="analog-line-container flex-grow-1 d-flex flex-column">
        <div class="analog-body flex-grow-1 d-flex align-items-center justify-content-center">
            <template v-if="id==1">
              <img src="http://wx.dianliangliang.com/sucai/hikd.2635fc5c.png" class="analog-image" alt="">
              <line-info class="line-info"></line-info>
              <back-no v-bind:showBack='meterNo<35' v-for="meterNo in 37" v-bind:meterBoxNo="meterNo" :key="meterNo" v-on:dialogShow="getDialogShow" v-bind:class="['meterNo-'+meterNo,{'flex-column-reverse':meterNo>16}]"></back-no>
            </template>
            <template v-else>
              <img src="http://wx.dianliangliang.com/sucai/analog-line.1b8ec1ef.png" class="analog-image" alt="">
              <dynamic-no  v-for="no in 6" v-bind:key="no" v-bind:class="'dynamic-bottom-'+no" v-bind:dynamicItem="getRandomBottom(no)"></dynamic-no>
            </template> 
            <div v-if="showDialog&&selectMeterBox" class="meter-dialog d-flex flex-column">
              <div class="dia-header d-flex justify-content-center">
                <div class="flex-grow-1">电表箱</div>
                <div class="close-icon align-self-right" v-on:click.stop="cancelDia">X</div>
              </div>
              <div class="dia-body flex-grow-1 d-flex flex-wrap">
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
import LineInfo from "@/components/details/LineInfo";
import { meterNoMap, meterBoxes } from "@/assets/scripts/meters-data.js";
export default {
  name: "analog-line",
  components: {
    "dynamic-no": DynamicNo,
    "back-no": BackNo,
    "meter-item": MeterItem,
    "line-info": LineInfo
  },
  data: function() {
    return {
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
      this.selectMeterBox = this.meterBoxList[newVal-1];
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
.line-info {
  left: -50px;
  bottom: 0px;
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
  width: 90%;
}
.dynamic-bottom-1 {
  left: 330px;
  top: 590px;
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
  left: 292px;
  bottom: 75px;
}
.meterNo-2 {
  left: 340px;
  bottom: 75px;
}
.meterNo-3 {
  left: 406px;
  bottom: 75px;
}
.meterNo-4 {
  left: 452px;
  bottom: 75px;
}
.meterNo-5 {
  left: 519px;
  bottom: 75px;
}
.meterNo-6 {
  left: 566px;
  bottom: 75px;
}
.meterNo-7 {
  left: 630px;
  bottom: 75px;
}
.meterNo-8 {
  left: 677px;
  bottom: 75px;
}
.meterNo-9 {
  right: 460px;
  bottom: 75px;
}
.meterNo-10 {
  right: 412px;
  bottom: 75px;
}
.meterNo-11 {
  right: 346px;
  bottom: 75px;
}
.meterNo-12 {
  right: 299px;
  bottom: 75px;
}
.meterNo-13 {
  right: 233px;
  bottom: 75px;
}
.meterNo-14 {
  right: 186px;
  bottom: 75px;
}
.meterNo-15 {
  right: 122px;
  bottom: 75px;
}
.meterNo-16 {
  right: 75px;
  bottom: 75px;
}
.meterNo-17 {
  left: 76px;
  top: 152px;
}
.meterNo-18 {
  left: 124px;
  top: 152px;
}
.meterNo-19 {
  left: 194px;
  top: 152px;
}
.meterNo-20 {
  left: 241px;
  top: 152px;
}
.meterNo-21 {
  left: 307px;
  top: 152px;
}
.meterNo-22 {
  left: 354px;
  top: 152px;
}
.meterNo-23 {
  left: 420px;
  top: 152px;
}
.meterNo-24 {
  left: 467px;
  top: 152px;
}
.meterNo-25 {
  left: 532px;
  top: 152px;
}
.meterNo-26 {
  left: 578px;
  top: 152px;
}
.meterNo-27 {
  right: 580px;
  top: 152px;
}
.meterNo-28 {
  right: 532px;
  top: 152px;
}
.meterNo-29 {
  right: 465px;
  top: 152px;
}
.meterNo-30 {
  right: 418px;
  top: 152px;
}
.meterNo-31 {
  right: 352px;
  top: 152px;
}
.meterNo-32 {
  right: 305px;
  top: 152px;
}
.meterNo-33 {
  right: 240px;
  top: 152px;
}
.meterNo-34 {
  right: 194px;
  top: 152px;
}
.meterNo-35 {
  left: 696px;
  top: 180px;
}
.meterNo-36 {
  right: 700px;
  top: 230px;
}
.meterNo-37 {
  left: 710px;
  top: 230px;
}
</style>
