<template>
    <div class="sample-graph maps-container d-flex flex-column flex-shrink-1">
        <div class="maps-header" style="text-align:left;">
          <div>
            <span class="option-map" v-on:click="setSelectMap(0)" v-bind:class="{'active':selectMap==0}">GIS图</span>|
            <span class="option-map" v-on:click="setSelectMap(1)" v-bind:class="{'active':selectMap==1}">平面图</span>|
            <span class="option-map" v-on:click="setSelectMap(2)" v-bind:class="{'active':selectMap==2}">模拟图</span>
          </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "sample-graph",
  data: function() {
    return {
      selectMap: 0,
      mapId: 0
    };
  },
  mounted: function() {
    this.mapId = this.$route.params.id;
  },
  watch: {
    $route(to, from) {
      console.log("sample-graph id:" + JSON.stringify(to.params));
      this.mapId = to.params.mapId;
    },
    selectMap: function(newVal) {
      let routerPath = "/detail-main/1/sample-graph/"+this.selectMap;
      switch (parseInt(newVal)) {
        case 0:
          routerPath += "/";
          break;
        case 1:
          routerPath += "/plan-graph";
          break;
        case 2:
          routerPath += "/analog-line";
          break;
        default:
          routerPath += "/GIS-map";
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
.option-map{
  color: #4da29e;
}
.sample-graph {
  width: 100%;
}
.maps-header {
  font-size: 24px;
  background-color: #00706b;
  color:  #4da29e;
  padding: 8px 16px;
}
.active{
  color: white;
}
</style>