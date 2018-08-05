<template>
    <div class="detail-main flex-grow-1 d-flex flex-column">
        <div class="detail-header d-flex">
            <div class="header-title">{{title}} <span class="iconfont icon-shuangjiantou3-copy"></span> </div>
            <div class="back-home ml-auto" v-on:click="$router.push('\/')">返回台区首页</div>
        </div>
        <div class="detail-body flex-grow-1 d-flex">
            <router-view ></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: "detail-main",
  data: function() {
    return {
      id: 0,
      title: "示意图"
    };
  },
  mounted: function() {
    this.id = this.$route.params.id;
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
      console.log(to.params.id);
    },
    id: function(newVal) {
      this.getTitle(newVal);
    }
  },
  methods: {
    getTitle: function(style) {
      switch (parseInt(style)) {
        case 0:
          this.title = "用电分析";
          break;
        case 1:
          this.title = "示意图";
          break;
        case 2:
          this.title = "线损分析";
          break;
        case 3:
          this.title = "综合能源分析";
          break;
        case 4:
          this.title = "视频监控";
          break;
        default:
          this.title = "用电分析";
          break;
      }
    }
  }
};
</script>
<style scoped>
.detail-header {
  padding: 8px 24px;
}
.back-home {
  color: #00706b;
}
.header-title {
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #00706b;
}
.detail-body {
  margin: 8px 16px;
  border: solid 1px #00706b;
}
</style>

