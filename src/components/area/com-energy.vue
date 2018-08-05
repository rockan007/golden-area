<template>
    <div class="com-energy d-flex flex-grow-1">
        <bar-charts title="分布式光伏电源系统" class="photovoltaic-energy flex-grow-1"></bar-charts>
        <scatter-charts scatterId="scatter-0" title="水电相关性分析" class="water-electricity flex-grow-1"></scatter-charts>
        <scatter-charts scatterId="scatter-1" title="煤电相关性分析" class="gas-electricity flex-grow-1"></scatter-charts>
    </div>
</template>
<script>
import barCharts from "@/components/utils/bar-charts";
import scatterCharts from "@/components/utils/scatter-charts";
export default {
  name: "com-energy",
  components: {
    barCharts,
    scatterCharts
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.water-electricity,
.gas-electricity,
.photovoltaic-energy {
  width: 0;
}
</style>
