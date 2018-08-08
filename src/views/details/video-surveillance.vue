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
               <div class="modltext">
                 <div class="">村东头</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video2.jpg"  alt="">
               <div class="modl">摄像头2</div>
               <div class="modltext">
                 <div class="">村西头</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video3.jpg"  alt="">
               <div class="modl">摄像头3</div>
               <div class="modltext">
                 <div class="">村南头</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video4.jpg"  alt="">
               <div class="modl">摄像头4</div>
               <div class="modltext">
                 <div class="">村北头</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video5.jpg"  alt="">
               <div class="modl">摄像头5</div>
               <div class="modltext">
                 <div class="">老孟家</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
               <div class="comprehensive_li" style="">
               <img src="../../assets/imgs/video6.jpg" alt="">
               <div class="modl">摄像头6</div>
               <div class="modltext">
                 <div class="">老安家</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
        </div>
    </div>
   
    
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "home",
  data: function() {
    return {
      m: 0,
      t: "2018-8-8 9:35:20"
    };
  },
  mounted: function() {
    this.gettime();
  },
  watch: {
    t: function(Newval) {
      console.log(Newval);
    }
  },
  methods: {
    gettime: function() {
      setInterval(
        function() {
          this.t =this.formatDate(new Date(),'yyyy-MM-dd HH:mm:ss')
          // console.log(this.t);
        }.bind(this),
        1000
      );
    },
    formatDate: function(date,fmt) {
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "H+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    }
  }
};
</script>
<style scoped>
/* 改后 */
* {
  font-family: "Microsoft YaHei" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.comprehensive_li {
  position: relative;
  width: 33%;
  height: 350px;
  float: left;
  margin-right: 6px;
  margin-bottom: 10px;
}
.comprehensive_li img {
  width: 100%;
  height: 100%;
}
.eventAlert-header {
  text-align: left;
  padding-left: 20px;
  color: #fff;
  min-height: 40px;
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
  font-size: 20px;
}
.comprehensive_top_seand {
  text-align: right;
  padding-right: 20px;
  font-size: 16px;
  color: #fff;
  line-height: 30px;
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
.modltext {
  text-align: right;
  width: 100%;
  line-height: 30px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 66;
  background: rgba(255, 255, 255, 0);
  color: white;
}
</style>

