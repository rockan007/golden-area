<template>
    <div class="area-home d-flex flex-column">
      <div  class="home-row-0 flex-grow-1 d-flex">
        <home-item-container v-for="item in row0List" v-bind:key="item.order" v-bind:item="item" class="col-3" v-bind:class="{'col-6':item.order==1}">
        </home-item-container>
      </div>
      <div  class="home-row-1 flex-grow-1 d-flex" >
        <home-item-container v-for="item in row1List" v-bind:key="item.order" v-bind:item="item" class="col-2" v-bind:class="{'col-10':item.order==3}">
        </home-item-container>
      </div>
    </div>
</template>
<script>
import homeItemContainer from "@/components/area/home-item-container";
export default {
  name: "area-home",
  components: {
    homeItemContainer
  },
  data: function() {
    return {
      row0List: [
        {
          title: "用电分析",
          order: 0
        },
        {
          title: "示意图",
          order: 1
        },
        {
          title: "线损分析",
          order: 2
        }
      ],
      row1List: [
        {
          title: "综合能源分析",
          order: 3
        },
        {
          title: "视频监控",
          order: 4
        }
      ]
    };
  },
  methods: {
  
  }
};
</script>
<style scoped>
.home-row-0,
.home-row-1 {
  height: 0;
  padding: 8px 16px;
}
</style>