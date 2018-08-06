<template>
        <div class="home flex-grow-1 d-flex flex-column">
         <div class="eventAlert-header d-flex justify-content-between comprehensive_top">
           <div class="col-lg-6 comprehensive_top_first">监控分布图</div>
            <div class="col-lg-6 comprehensive_top_seand">下一页</div>
        </div>
        <div class=" flex-grow-1 flex-shrink-1" style="overflow-y:auto; padding:30px;"> 
             <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video1.jpg"  alt="">
               <div class="modl">摄像头1</div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video2.jpg"  alt="">
               <div class="modl">摄像头2</div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video3.jpg"  alt="">
               <div class="modl">摄像头3</div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video4.jpg"  alt="">
               <div class="modl">摄像头4</div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video5.jpg"  alt="">
               <div class="modl">摄像头5</div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video6.jpg" alt="">
               <div class="modl">摄像头6</div>
               </div>
        </div>
    </div>
   
    
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
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

/* 改后 */
* {
  font-family: "Microsoft YaHei" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.comprehensive_li{
  position: relative;
   width: 33%;height: 350px;float: left; margin-right: 6px;
   margin-bottom: 10px;
}
.comprehensive_li img{
  width: 100%;
  height: 100%;
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

</style>

