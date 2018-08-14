//故障统计详情
<template>
       <div id="fault-statistics-detail" class="fault-statistics-detail  maps-container d-flex flex-column flex-shrink-1">
        <div class="maps-header" style="text-align:left;">
          <div>
            <span class="option-map" style="cursor:pointer;" v-on:click="setSelectMap(0)" v-bind:class="{'active':selectMap==0}">故障原因</span>|
            <span class="option-map" style="cursor:pointer;" v-on:click="setSelectMap(1)" v-bind:class="{'active':selectMap==1}">故障类型</span>|
            <span class="option-map" style="cursor:pointer;" v-on:click="setSelectMap(2)" v-bind:class="{'active':selectMap==2}">故障线路</span>|
            <span class="option-map" style="cursor:pointer;" v-on:click="setSelectMap(3)" v-bind:class="{'active':selectMap==3}">故障汇总</span>
          </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "fault-statistics-detail",
 data: function() {
    return {
      selectMap: 0,
      fid: 0
    };
  },
  mounted: function() {
    this.fid = this.$route.params.id;
  },
  watch: {
    $route(to, from) {
      console.log("fault-statistics-detail id:" + JSON.stringify(to.params));
      this.fid = to.params.fid;
    },
    selectMap: function(newVal) {
      let routerPath = "/detail-main/4/fault-statistics-detail/" + this.selectMap;
      switch (parseInt(newVal)) {
        case 0:
          routerPath += "/";
          break;
        case 1:
          routerPath += "/fault-type";
          break;
        case 2:
          routerPath += "/faulty-line";
          break;
        case 3:
          routerPath += "/Meta-analysis";
          break;
        default:
          routerPath += "/Fault-level";
          break;
      }
      this.$router.push(routerPath);
    }
  },
  methods: {
    setSelectMap: function(no) {
      this.selectMap = no;
    }
  }
};
</script>
<style scoped>
.option-map {
  color: #4da29e;
}
.fault-statistics-detail {
  width: 100%;
}
.maps-header {
  font-size: 20px;
  background-color: #00706b;
  color: #4da29e;
  padding: 8px 16px;
}
.active {
  color: white;
}
</style>
