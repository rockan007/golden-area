<template>
    <div class="back-no d-flex flex-column justify-content-between isUsing" v-bind:class="{'isBreak':isUsing==0}" v-on:click='emitDiaShow'>
        <div v-if="hasColor&&showBack" class="back line-using" v-bind:class="{'line-break':isUsing==0}"></div>
        <div class="no d-flex flex-column">
            <div style="text-align:left"  >{{dianY}}V</div>
            <div style="text-align:left" >{{dianL}}A</div>
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
    }
  },
  data: function() {
    return {
      isUsing: 1,
      dianY: 220.0,
      dianL: 15.07
    };
  },
  mounted: function() {
    this.randomIsUsing();
    console.log("…………………………是否具有：" + this.meterBoxNo + ":" + this.showBack);
  },
  watch: {
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
    emitDiaShow: function() {
      this.$emit("dialogShow", this.meterBoxNo);
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

