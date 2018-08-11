<template>
    <div class="tower-info d-flex flex-column justify-content-center align-items-center" v-bind:class="{'flex-column-reverse':order>10}">
        <div class="tower-container" @mouseover="showInfo=1" @mouseout="showInfo=0">

        </div>
        <div v-show="showInfo" class="info-container shadow-lg">
            {{no}}
        </div>
    </div>
</template>
<script>
export default {
  name: "tower-info",
  props: {
    order: 0,
    no: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      showInfo: 0
    };
  },
  methods: {}
};
</script>
<style scoped>
.tower-info {
  position: absolute;
  min-width: 72.031px;
  max-width: 72.031px;
  z-index: 9999;
}
.tower-container {
  background-color:transparent;
  width: 26px;
  height: 26px;
  border-radius: 50%;
}
.info-container {
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
  color: #00706b;
  background-color: wheat;
}
</style>
