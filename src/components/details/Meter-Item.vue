<template>
    <div class="meter-container d-flex justify-content-center align-items-center position-relative" v-bind:class='[{"meter-stopping":type==1},{"meter-noUsing":type==2}]'>
        <div class="meter-no-container d-flex flex-column justify-content-between align-items-stretch flex-grow-1">
            <div class="meter-no">{{filterMeterNo}}</div>
        </div>
        <div class="meter-info d-flex flex-column">
          <div class="name">
            姓名:{{meterData.name?meterData.name:"无"}}
          </div>
          <div>
            户号：{{meterData.no?meterData.no:'无'}}
          </div>
          <div>
            电压：220v
          </div>
          <div>
            电流：15.3A
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
      type: 0
    };
  },
  mounted: function() {
    this.type=this.meterData.name?0:2;
    this.getRandomMeterNo();
  },
  watch:{
    meterData:{
      deep:true,
      handler:function(newVal){
        console.log(newVal)
        this.type=newVal.name?0:2;
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
  min-height: 100px;
  background-image: url(../../assets/imgs/meter.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.meter-no {
  font-size: 26px;
  letter-spacing: 7px;
  margin-top: 18px;
  margin-left: 10px;
}
.meter-info {
  text-align: left;
  min-width: 136.98px;
}
</style>
