<template>
    <div class="analog-line-container flex-grow-1 d-flex flex-column">
        <div class="analog-body flex-grow-1 d-flex flex-column  justify-content-center">
          <div class="map-title" >
            何庄一号模拟图
          </div>
          <div v-if="selectType==0" style="height:0;padding:16px 16px 32px 16px;" class="flex-grow-1 flex-shrink-1 d-flex align-items-stretch position-relative">
              <img src="http://wx.dianliangliang.com/sucai/analog-map.png" class="analog-image flex-grow-1" alt="">
              <tower-info v-for="order in 30" v-bind:key="'tower-'+order"  v-bind:order="order" v-bind:no="towerList[order-1]" v-bind:class='"tower-"+order'></tower-info>
              <back-no v-bind:showBack='meterNo<48' v-for="meterNo in 50"  v-bind:boxData="getBoxData(meterNo-1,boxesProes)"
               v-bind:meterBoxNo="meterNo" :key="meterNo" v-on:dialogShow="getDialogShow" v-bind:class="['meterNo-'+meterNo,{'flex-column-reverse':meterNo<21}]"></back-no>
          </div>
            <div v-if="showDialog" class="meter-dialog d-flex flex-column shadow-lg">
              <div class="dia-header d-flex justify-content-center">
                <div class="flex-grow-1">{{selectMeterBoxNo}}#电表箱</div>
                <div class="close-icon align-self-right" v-on:click.stop="cancelDia"><span class="icon-close iconfont icon-htmal5icon21"></span></div>
              </div>
              <div class="dia-body flex-grow-1 d-flex  flex-wrap-reverse">
                  <meter-item  v-for="m in 9"  v-bind:meterData="selectMeters[m-1]" :key="m" v-bind:meterOrder="m" class="col-4"></meter-item>
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
import towerInfo from "@/components/details/tower-info";
import {
  meterNoMap,
  meterBoxes,
  boxNos
} from "@/assets/scripts/meters-data.js";
import { events } from "@/assets/scripts/events";
export default {
  name: "analog-line",
  components: {
    "dynamic-no": DynamicNo,
    "back-no": BackNo,
    "meter-item": MeterItem,
    opertionalParameters,
    towerInfo
  },
  data: function() {
    return {
      selectType: 0,
      id: 0,
      showDialog: 0,
      selectMap: 0,
      selectMeterBoxNo: 0,
      boxIdStr: "", //表箱IDstr
      meterBoxList: "",
      selectMeterBox: "",
      towerList: [
        "06",
        "05",
        "04",
        "03",
        "02",
        "01",
        "02",
        "03",
        "04",
        "05",
        "04-05",
        "04-04",
        "04-03",
        "04-03-01",
        "04-02",
        "04-01",
        "01-01-05",
        "01-01-04",
        "01-01-03",
        "01-01-02",
        "01-01-01",
        "01-01",
        "01-01-01",
        "01-01-02",
        "01-01-03",
        "01-01-04",
        "01-01-03-01",
        "01-01-03-02",
        "无",
        "无"
      ],
      areaBoxesPro: [], //属性
      areaBoxesRel: [], //级联关系
      relsMap: "",
      boxesProes: new Map(),
      selectMeters: []
    };
  },
  created: function() {
    this.getAreaBoxesRelation();
    this.getJPData();
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
    boxIdStr: function() {
      this.getSelectMeters();
    },
    meterBoxList: {
      deep: true,
      handler: function() {}
    },
    selectMeterBoxNo: function(newVal) {
      // this.selectMeterBox = this.meterBoxList[newVal - 1];
    },
    areaBoxesRel: {
      deep: true,
      handler: function(newVal) {
        console.log("获取的表箱列表：" + JSON.stringify(newVal));
        this.getBoxIdMap(newVal);
      }
    },
    relsMap: function(newVal) {
      console.log(
        "**************************************************" +
          newVal.get("NTIzRTFEODM4NkFDREZGMg")
      );
      this.getAreaBoxesProperties(); //获取表箱属性
    },
    areaBoxesPro: {
      deep: true,
      handler: function(newVal) {
        let boxProes = new Map();
        newVal.forEach(boxPro => {
          if (this.relsMap.get(boxPro.TabIDStr)) {
            console.log(this.relsMap.get(boxPro.TabIDStr));
            boxProes.set(this.relsMap.get(boxPro.TabIDStr), boxPro);
          }
        });
        this.boxesProes = boxProes;
      }
    },
    boxesProes: {
      deep: true,
      handler: function(newVal) {
        console.log("新获取的new boxesProes");
      }
    }
  },
  filters: {
    filterMeterClass: function(no) {
      return "meterNo-" + no;
    }
  },
  methods: {
    getJPData: function() {
      events.TQ_request(
        events.POWER_CABINET,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID
        },
        function(responseData) {
          console.log(
            "***********获取的JP柜数据：" + JSON.stringify(responseData)
          );
        }
      );
    },
    getSelectMeters: function() {
      events.TQ_request(
        events.METER_PROPERTIES,
        {
          UIDstr: events.USER_ID,
          BXIDstr: this.boxIdStr
        },
        responseData => {
          console.log("获取的响应数据：" + JSON.stringify(responseData));
          this.selectMeters = responseData;
        }
      );
    },
    getBoxData: function(index, boxesProes) {
      if (!boxesProes || boxesProes.size == 0) {
        return {};
      }
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&1" + index);
      if (index < boxNos.length) {
        console.log("XXXXXXXXXXXXXXXXXX" + boxesProes.get(boxNos[index]));
        return boxesProes.get(boxNos[index] + "");
      }
      return {};
    },
    getBoxIdMap: function(rels) {
      let idMap = new Map();
      rels.forEach(rel => {
        idMap.set(rel.TabIDstr, rel.BXH);
      });
      this.relsMap = idMap;
    },
    getAreaBoxesRelation: function() {
      events.TQ_request(
        events.LINE_BOXES_RELATION,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID
        },
        responseData => {
          this.changeToBoxRelList(responseData);
        }
      );
    },
    changeToBoxRelList: function(data) {
      let relList = [];
      data.forEach(item => {
        relList = relList.concat(item.list_BX);
      });
      this.areaBoxesRel = relList;
    },
    getAreaBoxesProperties: function() {
      //获取表箱属性
      events.TQ_request(
        events.METER_BOX_PROPERTIES,
        {
          UIDStr: events.USER_ID,
          TaskIDstr: events.AREA_ID
        },
        responseData => {
          console.log("获取的台区表象数据：" + JSON.stringify(responseData));
          this.areaBoxesPro = responseData;
        }
      );
      setTimeout(() => {
        this.getAreaBoxesProperties();
      }, 60000);
    },
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
      console.log("获取的电表箱：" + no);
      this.boxIdStr = no;
      this.selectMeterBoxNo = this.relsMap.get(no);
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
.map-title {
  font-size: 24px;
  font-weight: bold;
  color: #00706b;
  height: 38px;
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
.icon-close {
  font-size: 36px;
}
.dia-header {
  font-size: 36px;
  color: #00706b;
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
}
.tower-1 {
  left: 234px;
  top: 323px;
}
.tower-2 {
  left: 367px;
  top: 323px;
}
.tower-3 {
  left: 499px;
  top: 323px;
}
.tower-4 {
  left: 633px;
  top: 323px;
}
.tower-5 {
  left: 766px;
  top: 323px;
}
.tower-6 {
  right: 761px;
  top: 323px;
}
.tower-7 {
  right: 627px;
  top: 323px;
}
.tower-8 {
  right: 495px;
  top: 323px;
}
.tower-9 {
  right: 362px;
  top: 323px;
}
.tower-10 {
  right: 229px;
  top: 323px;
}
.tower-11 {
  right: 631px;
  bottom: 754px;
}
.tower-12 {
  right: 497px;
  bottom: 754px;
}
.tower-13 {
  right: 364px;
  bottom: 754px;
}
.tower-14 {
  right: 232px;
  bottom: 754px;
}
.tower-15 {
  right: 363px;
  bottom: 660px;
}
.tower-16 {
  right: 363px;
  bottom: 573px;
}
.tower-17 {
  left: 388px;
  bottom: 301px;
}
.tower-18 {
  left: 522px;
  bottom: 301px;
}
.tower-19 {
  left: 654px;
  bottom: 301px;
}
.tower-20 {
  left: 788px;
  bottom: 301px;
}
.tower-21 {
  left: 920px;
  bottom: 301px;
}
.tower-22 {
  right: 761px;
  bottom: 301px;
}
.tower-23 {
  right: 627px;
  bottom: 301px;
}
.tower-24 {
  right: 495px;
  bottom: 301px;
}
.tower-25 {
  right: 362px;
  bottom: 301px;
}
.tower-26 {
  right: 229px;
  bottom: 301px;
}
.tower-27 {
  right: 361px;
  bottom: 204px;
}
.tower-28 {
  right: 361px;
  bottom: 120px;
}
.tower-29 {
  right: 450px;
  bottom: 120px;
}
.tower-30 {
  right: 533px;
  bottom: 120px;
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
  left: 210px;
  top: 213px;
}
.meterNo-2 {
  left: 268px;
  top: 213px;
}
.meterNo-3 {
  left: 346px;
  top: 214px;
}
.meterNo-4 {
  left: 404px;
  top: 215px;
}
.meterNo-5 {
  left: 478px;
  top: 213px;
}
.meterNo-6 {
  left: 536px;
  top: 213px;
}
.meterNo-7 {
  left: 610px;
  top: 213px;
}
.meterNo-8 {
  left: 668px;
  top: 213px;
}
.meterNo-9 {
  left: 740px;
  top: 214px;
}
.meterNo-10 {
  left: 798px;
  top: 214px;
}
.meterNo-11 {
  right: 798px;
  top: 213px;
}
.meterNo-12 {
  right: 740px;
  top: 213px;
}
.meterNo-13 {
  right: 665px;
  top: 213px;
}
.meterNo-14 {
  right: 606px;
  top: 213px;
}
.meterNo-15 {
  right: 532px;
  top: 213px;
}
.meterNo-16 {
  right: 475px;
  top: 213px;
}
.meterNo-17 {
  right: 405px;
  top: 213px;
}
.meterNo-18 {
  right: 333px;
  top: 213px;
}
.meterNo-19 {
  right: 270px;
  top: 213px;
}
.meterNo-20 {
  right: 212px;
  top: 213px;
}
.meterNo-21 {
  right: 616px;
  top: 85px;
}
.meterNo-22 {
  right: 536px;
  top: 86px;
}
.meterNo-23 {
  right: 477px;
  top: 85px;
}
.meterNo-24 {
  right: 407px;
  top: 85px;
}
.meterNo-25 {
  right: 333px;
  top: 85px;
}
.meterNo-26 {
  right: 269px;
  top: 86px;
}
.meterNo-27 {
  right: 211px;
  top: 86px;
}
.meterNo-28 {
  left: 502px;
  bottom: 202px;
}
.meterNo-29 {
  left: 559px;
  bottom: 202px;
}
.meterNo-30 {
  left: 635px;
  bottom: 202px;
}
.meterNo-31 {
  left: 692px;
  bottom: 202px;
}
.meterNo-32 {
  left: 768px;
  bottom: 202px;
}
.meterNo-33 {
  left: 825px;
  bottom: 202px;
}
.meterNo-34 {
  left: 898px;
  bottom: 201px;
}
.meterNo-35 {
  left: 955px;
  bottom: 201px;
}
.meterNo-36 {
  right: 800px;
  bottom: 202px;
}
.meterNo-37 {
  right: 743px;
  bottom: 202px;
}
.meterNo-38 {
  right: 666px;
  bottom: 202px;
}
.meterNo-39 {
  right: 608px;
  bottom: 202px;
}
.meterNo-40 {
  right: 530px;
  bottom: 202px;
}
.meterNo-41 {
  right: 472px;
  bottom: 202px;
}
.meterNo-42 {
  right: 400px;
  bottom: 202px;
}
.meterNo-43 {
  right: 333px;
  bottom: 202px;
}
.meterNo-44 {
  right: 254px;
  bottom: 202px;
}
.meterNo-45 {
  right: 210px;
  bottom: 202px;
}
.meterNo-46 {
  right: 572px;
  bottom: 4px;
}
.meterNo-47 {
  right: 514px;
  bottom: 4px;
}
.meterNo-48 {
  left: 950px;
  top: 250px;
}
.meterNo-49 {
  right: 960px;
  top: 300px;
}
.meterNo-50 {
  left: 966px;
  top: 300px;
}
</style>
