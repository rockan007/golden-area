<template>
    <div class="dynamic-no">
        <div v-for="(dynamicNo,key) in dynamicItem" v-bind:key="key">
            <div>{{key}}:{{dynamicNo|getDymnicNo(randomNo)}}{{key=="电压"?"V":"A"}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "dynamic-no",
  props: {
    dynamicItem: {
      default: function() {
        return {};
      },
      type: Object
    }
  },
  data: function() {
    return {
      randomNo: 0
    };
  },
  mounted: function() {
    this.getRandomNo();
  },
  watch: {
    randomNo: function(newVal) {
      // console.log("新值：" + newVal);
      setTimeout(this.getRandomNo, 1000);
    }
  },
  filters: {
    getDymnicNo: function(no,randomNo) {
      console.log("获取的随机数"+randomNo)
      if (no == 0) {
        return 0;
      }
      return (parseFloat(no) + randomNo).toFixed(2);
    }
  },
  methods: {
    getRandomNo: function() {
      this.randomNo = parseFloat((Math.random() * 10).toFixed(2));
    }
  }
};
</script>
<style scoped>
.dynamic-no {
  position: absolute;
  text-align: left;
  display: inline;
  font-size: 12px;
  color: aqua;
}
</style>
