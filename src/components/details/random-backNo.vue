<template>
    <div  class="back-no d-flex flex-column justify-content-between isUsing" v-bind:class="{'isBreak':isUsing==0}" v-on:click='emitDiaShow'>
        <div v-if="hasColor&&showBack" v-bind:title="proList[2].name+':'+proList[2].info" class="back line-using" v-bind:class="{'line-break':isUsing==0}"></div>
        <div v-if="proList.length>0" class="no d-flex flex-column">
            <div style="text-align:left"  >{{proList[1].name}}:{{proList[1].info}}</div>
            <div style="text-align:left" >{{proList[0].name}}:{{proList[0].info}}</div>
            <!-- <div style="text-align:left" >{{proList[2].name}}:{{proList[2].info}}</div> -->
        </div>
        <div v-else class="no d-flex flex-column">
            <div style="text-align:left"  >0V</div>
            <div style="text-align:left" >0A</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "back-no",
  props: {
    meterBoxNo: {
      default: 0
    },
    hasColor: {
      default: 1
    },
    showBack: {
      default: true
    },
    boxData: {
      type: Object,
      default: function() {
        return {};
      }
    },
    boxId: {
      type: String,
      default: "0"
    }
  },
  data: function() {
    return {
      isUsing: 0,
      proList: [],
      boxPro: []
    };
  },
  mounted: function() {
    console.log("…………………………是否具有：" + this.meterBoxNo + ":" + this.showBack);
  },
  watch: {
    boxData: function(newVal) {
      console.log("箱子的属性：" + JSON.stringify(newVal));
      if (!newVal.JCX || newVal.JCX.length == 0) {
        this.boxPro = [];
        this.isUsing = 0;
      } else {
        this.boxPro = this.getBoxPro(newVal.JCX);
        this.isUsing = 1;
      }
    },
    isUsing: function(newVal) {
      if (newVal) {
        this.dianY = this.getRandomNo(220, 230);
        this.dianL = this.getRandomNo(10, 50);
      } else {
        this.dianY = 0;
        this.dianL = 0;
      }
    }
  },
  methods: {
    getBoxPro: function(proList) {
      let prosList = [];
      proList.forEach(pro => {
        if (pro.Value && pro.id <= 6) {
          let relPro = {
            name: this.getPro(pro),
            info: pro.Value.toFixed(2) + pro.dw
          };
          prosList.push(relPro);
        } else if (pro.id == 17) {
          let relPro = {
            name: "功率",
            info: pro.Value.toFixed(2) + pro.dw
          };
          prosList.push(relPro);
        }
        
      });
      this.proList = prosList;
    },
    getPro: function(pro) {
      switch (pro.id % 3) {
        case 1:
          return "A";
        case 2:
          return "B";
        case 3:
          return "C";
        default:
          return "";
      }
    },
    randomIsUsing: function() {
      setTimeout(
        function() {
          this.isUsing = Math.round(Math.random());
          this.randomIsUsing();
        }.bind(this),
        5000
      );
    },
    getRandomNo: function(min, max) {
      return (Math.random() * (max - min) + min).toFixed(2);
    },
    emitDiaShow: function(boxId) {
      this.$emit(
        "dialogShow",
        this.boxData.TabIDStr ? this.boxData.TabIDStr : ""
      );
    }
  }
};
</script>
<style scoped>
.back-no {
  position: absolute;
  z-index: 500;
}
.back {
  width: 56px;
  height: 38px;
}
.no {
  font-size: 12px;
}
.line-using {
  background-color: rgba(255, 0, 0, 0.5);
}
.line-break {
  background-color: rgba(0, 128, 0, 0.5);
}
.isUsing {
  color: rgba(255, 0, 0);
}
.isBreak {
  color: rgba(0, 128, 0);
}
</style>

