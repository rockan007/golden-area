<template>
  <div class="home">
     <div class="container">
        <div class="row comprehensive_box">
          <div class="col-lg-12">
              <div class="row comprehensive_top">
                <div class="col-lg-6 comprehensive_top_first">监控分布图</div>
                <div class="col-lg-6 comprehensive_top_seand">下一页</div>
              </div>
               <div class="row comprehensive_body">
                     <div class="comprehensive_body_li">
                         <img src="../../assets/imgs/jian_03.png" alt="">
                         <div class="modl">摄像头1</div>
                     </div>
                     <div class="comprehensive_body_li">
                         <img src="../../assets/imgs/jian_05.png" alt="">
                         <div class="modl">摄像头2</div>
                     </div>
                     <div class="comprehensive_body_li">
                         <img src="../../assets/imgs/jian_06.png" alt="">
                         <div class="modl">摄像头3</div>
                     </div>
                    <div class="comprehensive_body_li">
                         <img src="../../assets/imgs/jian_11.png" alt="">
                         <div class="modl">摄像头4</div>
                     </div>
                     <div class="comprehensive_body_li">
                         <img src="../../assets/imgs/jian_12.png" alt="">
                         <div class="modl">摄像头5</div>
                     </div>
                     <div class="comprehensive_body_li">
                         <img src="../../assets/imgs/jian_13.png" alt="">
                         <div class="modl">摄像头6</div>
                     </div>
               </div>
           </div>
        </div>
       </div>
    </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
export default {
  name: "home",
  components: {},
  data: function() {
    return {};
  },
  mounted: function() {},
  watch: {},
  methods: {}
};
</script>
<style scoped>
* {
  font-family: "Microsoft YaHei" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
tr {
  line-height: 1rem;
}
#sel1 {
  padding: 0px;
}
.form-control {
  height: calc(1.25rem + 2px);
}
.comprehensive_box {
  border: 1px solid #8eb7af;
  border-radius: 3px;
  min-height: 900px;
}
.comprehensive_top {
  padding: 5px 0px;
  border-radius: 3px;
  background-color: #016f6c;
}
.comprehensive_top_first {
  text-align: left;
  padding-left: 20px;
  color: #fff;
}
.comprehensive_top_seand {
  text-align: right;
  padding-right: 20px;
  color: #fff;
}
.comprehensive_body {
  padding: 50px;
  min-height: 200px;
}
.comprehensive_body_li {
  position: relative;
  width: 33%;
  padding: 0px;
  margin: 0 auto;
  min-height: 200px;
  margin-bottom: 10px;
}
.modl {
  width: 85px;
  height: 35px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 66;
  background: rgba(255, 255, 255, 0.5);
  color: #016f6c;
  border-bottom-right-radius: 10px;
  padding-top: 5px;
}
.comprehensive_body div img {
  width: 100%;
  height: 100%;
}
.comprehensive_echarts {
  padding: 50px;
  padding-top: 80px;
}
.comprehensive_r_text {
  margin-top: 75px;
  color: #016f6c;
}
.comprehensive_d_text {
  margin-top: 50px;
}
.comprehensive_b_text {
  margin-top: 120px;
}
.btn {
  line-height: 0.5rem;
}
.btn-outline-success {
  margin: 0 auto;

  color: #fff;
  width: 190px;
  background-color: #016f6c;
}
/* 下td */
.Lfei_table {
  margin-bottom: 30px;
  color: #016f6c;
  font-size: 17px;
  padding-left: 20px;
  text-align: left;
}
</style>

