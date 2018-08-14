<template>
    <div class="info-container position-absolute  d-flex justify-content-center align-items-center"
     v-bind:class='{"display-none":showInfo==0}' v-on:click="$emit('showNone')">
        <div class="info-dia shadow" v-html="infoHtml" v-on:click.stop>
        </div>
    </div>
</template>
<script>
export default {
  name: "info-dia",
  props: {
    infoHtml: {
      default: "",
      type: String
    },
    showInfo: {
      default: 0,
      type: Number
    }
  },
  created:function(){
      console.log("获取info-dia:"+this.showInfo)
  },
  data: function() {
    return {};
  },
  methods: {

  }
};
</script>
<style scoped>
.info-container {
  z-index: 456;
  background-color: rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.info-dia {
  background-color: white;
  border-radius: 8px;
  padding: 8px 16px;
}
.info-dia   .ul{
    list-style-type:  none !important;
}
.display-none {
  display: none;
}
.display-block {
  display: block;
}
</style>
