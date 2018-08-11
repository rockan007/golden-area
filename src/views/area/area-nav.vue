<template>
    <nav class="area-nav navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand d-flex" href="#">
            <img class="logo-img" src="http://wx.dianliangliang.com/sucai/logo.302273b8.png" alt="">
            <div class="title-container d-flex flex-column justify-content-center ">
                <div class="title">
                      精品台区智能管理系统
                </div>
                 <div class="sub-title">
                      国家电网山东电力公司德州供电公司
                 </div>
            </div>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                     <a class="nav-link" href="#">德州</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">何庄一号</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
  name: "area-nav",
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.area-nav {
  color: white;
  height: 76px;
  min-height: 76px;
  max-height: 76px;
}
.bg-dark {
  background: linear-gradient(
    to bottom,
    rgba(0, 112, 107, 0.6),
    rgba(0, 112, 107, 1)
  ) !important;
}
.logo-img {
  height: 70px;
  line-height: 0;
}
.title-container {
  margin-left: 12px;
}
.title{

}
.title,
.sub-title {
  text-align: left;
}
.title {
  margin-top: -3px;
  font-weight: bold;
  font-size: 18px;
}
.sub-title {
  font-size: 12px;
}
</style>
