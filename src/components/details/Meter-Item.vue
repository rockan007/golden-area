<template>
    <div class="meter-container d-flex justify-content-center align-items-center position-relative" v-bind:class='[{"meter-stopping":type==1},{"meter-noUsing":type==2}]'>
        <div class="meter-no-container d-flex flex-column justify-content-between align-items-stretch flex-grow-1">
            <div class="meter-no">{{meterInfo.meterNo}}</div>
        </div>
        <div class="meter-info d-flex flex-column">
          <div class="name">
            姓名:{{meterInfo.YHM?meterInfo.YHM:"无"}}
          </div>
          <div>
            户号:{{meterInfo.HH?meterInfo.HH:'无'}}
          </div>
          <div v-if="meterInfo.dianY">
            电压:{{meterInfo.dianY}}
          </div>
          <div v-if="meterInfo.dianL">
            电流:{{meterInfo.dianL}}
          </div>
          <div v-if="meterInfo.onOffState">
            开关状态:{{meterInfo.onOffState}}
          </div>
        </div>
        <div class="meter-order position-absolute">{{meterOrder}}</div>
    </div>
</template>
<script>
export default {
  name: "meter-item",
  props: {
    meterOrder: {
      default: 0
    },
    meterData: {
      default: function() {
        return {};
      },
      type: Object
    }
  },
  data: function() {
    return {
      meterNo: "000000",
      type: 0,
      meterInfo: {}
    };
  },
  mounted: function() {
    this.type = this.meterData.YHM ? 0 : 2;
    this.getRandomMeterNo();
  },
  watch: {
    meterData: {
      deep: true,
      handler: function(newVal) {
        let meterInfo = {};
        meterInfo.TabIDStr = newVal.TabIDStr;
        meterInfo.YHM = newVal.YHM;
        meterInfo.HH = newVal.HH;
        meterInfo.XH = newVal.XH;
        this.getMeterInfo(meterInfo, newVal.JCX);
        this.type = newVal.YHM ? 0 : 2;
      }
    }
  },
  filters: {},
  computed: {
    filterMeterNo: function() {
      switch (parseInt(this.type)) {
        case 0:
          return this.meterNo;
        case 1:
          return this.meterNo;
        case 2:
          return "000000";
        default:
          return this.meterNo;
      }
    }
  },
  methods: {
    getMeterInfo: function(meterInfo, infoList) {
      infoList.forEach(info => {
        if (info.Value) {
          if (info.id <= 3) {
            meterInfo.dianL =
              this.getPhase(info.id) + "-" + info.Value.toFixed(2) + info.dw;
          } else if (info.id <= 6) {
            meterInfo.dianY =
              this.getPhase(info.id) + "-" + info.Value.toFixed(2) + info.dw;
          } else if (info.id == 31) {
            meterInfo.meterNo = this.getFixLengthNo(info.Value + "", 8);
          } else if (info.id == 683) {
            meterInfo.onOffState = info.Value ? "闭合" : "断开";
          }
        }
      });
      this.meterInfo = meterInfo;
    },
    getPhase: function(id) {
      switch (id % 3) {
        case 1:
          return "A";
        case 2:
          return "B";
        case 0:
          return "C";
        default:
          return "";
      }
    },
    getRandomCCharacter: function() {
      let word = "%u" + this.getRandomIntStr(19968, 40869);
      return unescape(word);
    },
    getrandomInt: function(minNo, maxNo) {
      return parseInt(Math.round(Math.random() * (maxNo - minNo) + minNo));
    },
    getRandomFloat: function(minNo, maxNo) {
      return (Math.random() * (maxNo - minNo) + minNo).toFixed(2);
    },
    getRandomIntStr: function(minNo, maxNo) {
      return this.getrandomInt(minNo, maxNo).toString(16);
    },
    getRandomMeterNo: function() {
      setTimeout(
        function() {
          this.meterNo = this.getRandomNo(100, 100000, 6);
          this.getRandomMeterNo();
        }.bind(this),
        2000
      );
    },
    getFixLengthNo: function(noStr, length) {
      let len = noStr.length;
      if (noStr.length < length) {
        for (let i = 0; i < length - len; i++) {
          noStr = "0" + noStr;
        }
      }
      return noStr;
    },
    getRandomNo: function(minNo, maxNo, length) {
      let noStr = parseInt(Math.random() * (maxNo - minNo) + minNo).toString();
      let len = noStr.length;
      if (noStr.length < length) {
        for (let i = 0; i < length - len; i++) {
          noStr = "0" + noStr;
        }
      }
      return noStr;
    }
  }
};
</script>
<style scoped>
.meter-order {
  bottom: -5px;
  left: 220px;
}
.meter-container {
  color: red;
  margin: 8px 0;
}
.meter-stopping {
  color: green;
}
.meter-noUsing {
  color: gray;
}
.meter-no-container {
  min-height: 120px;
  background-image: url(../../assets/imgs/meter.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.meter-no {
  font-size: 28px;
  letter-spacing: 11px;
  margin-top: 24px;
  margin-left: 10px;
}
.meter-info {
  text-align: left;
  min-width: 136.98px;
}
</style>
