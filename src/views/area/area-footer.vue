<template>
    <div class="area-footer" style="overflow-x:hidden;cursor:pointer;" v-on:click="routerToDetail(5)"></div>
</template>
<script>
import scroxt from "scroxt";
export default {
  name: "area-footer",
  data: function() {
    return {
      scroxtHorizontal:''
    };
  },
  created: function() {
     
  },
  mounted:function(){
      this.initScroxt();
  },
  watch:{
    scroxtHorizontal:function(){
     
      this.scroxtHorizontal.startMove();
    }
  },
  methods: {
    initScroxt: function() {
      this.scroxtHorizontal = new scroxt.Horizontal({
        target: ".area-footer",
        data: [
          "<span class='iconfont icon-jinggao' style='color:red;'></span>预警事件：严重故障警报  断电 1#电表箱5号表 2018-07-21 17:52:00",
          "<span class='iconfont icon-jinggao' style='color:red;'></span>预警事件：严重故障警报  断电 1#电表箱5号表 2018-07-21 17:52:00",
          "<span class='iconfont icon-jinggao' style='color:red;'></span>预警事件：严重故障警报  断电 1#电表箱5号表 2018-07-21 17:52:00"
        ],
        speed: -5,
        gap: 1000
      });
    },
    routerToDetail: function() {
      this.$router.push("/detail-main/5/event-alert");
    }
  }
};
</script>
<style scoped>
.area-footer {
  min-height: 25px;
  max-height: 25px;
  color: white;
  background-color: #00706b;
}
</style>
