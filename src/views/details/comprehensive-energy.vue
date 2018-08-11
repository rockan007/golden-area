<template>
     <div class="com-eng maps-container d-flex flex-column flex-shrink-1">
        <div class="energy-header" style="text-align:left;">
          <div>
            <span v-on:click="setSelectEnergy(0)" style="cursor:pointer;" v-bind:class="{'active':selectEnergy==0}">分布式光能和储能管理</span>|
            <span v-on:click="setSelectEnergy(1)" style="cursor:pointer;" v-bind:class="{'active':selectEnergy==1}">电、水、气相关性分析</span>
          </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "",
  data: function() {
    return {
      selectEnergy: 0
    };
  },
  mounted: function() {
    this.selectEnergy = this.$route.params.eId;
  },
  watch: {
    selectEnergy: function(newVal) {
      console.log(newVal);
      let routerPath = "/detail-main/3/com-energy/" + this.selectEnergy;
      switch (parseInt(newVal)) {
        case 0:
          routerPath += "/";
          break;
        case 1:
          routerPath += "/com-EGW";
          break;
        default:
          routerPath += "/";
          break;
      }
      this.$router.push(routerPath);
    }
  },
  methods: {
    setSelectEnergy: function(no) {
      this.selectEnergy = no;
    }
  }
};
</script>
<style scoped>
.com-eng {
  width: 100%;
}
.energy-header {
  font-size: 20px;
  background-color: #00706b;
  color:  #4da29e;;
  padding: 8px 16px;
}
.active {
  color: white;
}
</style>