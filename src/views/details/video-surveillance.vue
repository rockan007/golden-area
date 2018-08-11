<template>
       <div class="home flex-grow-1 d-flex flex-column">
         <div class="eventAlert-header d-flex justify-content-between comprehensive_top">
           <div class="col-lg-6 comprehensive_top_first">监控分布图</div>
            <div class="col-lg-6 comprehensive_top_seand">下一页</div>
        </div>
        <div class=" flex-grow-1 flex-shrink-1" style="overflow-y:auto; padding:30px; position: relative;"> 
          <div class="row" >
          <div class="col-lg-6" id="g-map"></div>
           <div class="col-lg-6" style="overflow-y:auto; height:800px">
              <div class="comprehensive_li" v-show="comprehensiveli" v-for="(nav,index) in positions" @mouseover="pressure_survey(nav)" @mouseleave="pressure_hide(nav)" v-bind:key="index" v-on:click="getdevideo(nav,index)">
               <img v-bind:src="nav.src"  alt="">
               <div class="modl">摄像头{{index+1}}</div>
               <div class="modltext">
                 <div class="">{{nav.UName}}</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
               <!-- <div class="comprehensive_li" style="">
               <img  v-bind:src="video4.jpg"  alt="">
               <div class="modl">摄像头4</div>
               <div class="modltext">
                 <div class="">村北头</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
               <div class="comprehensive_li" style="">
               <img v-bind:src="video5.jpg"  alt="">
               <div class="modl">摄像头5</div>
               <div class="modltext">
                 <div class="">老孟家</div>
                 <div class="">{{t}}</div>
                </div>
               </div>
               <div class="comprehensive_li" style="">
               <img v-bind:src="video6.jpg" alt="">
               <div class="modl">摄像头6</div>
               <div class="modltext">
                 <div class="">老安家</div>
                 <div class="">{{t}}</div>
                </div>
               </div> -->
              
                 <div class="video_comprehensive_li" v-show="danvideoshow" v-on:click="getdanvideoshow()">
                  <img v-bind:src="curInfo.src"  alt="">
                     <div class="modltext">
                      <div class="">{{curInfo.UName}}</div>
                      <div class="">{{t}}</div>
                     </div>
                    </div>
           </div>
           <div class="videomold" v-show="videoshow" v-on:click="hidevideo()">
             <div class="videomold_img">
               <div class="videomold_modl">摄像头{{videoindex+1}}</div>
               <img v-bind:src="videodata.src" alt="">
               <div class="videomold_modltext">
                 <div class="">{{videodata.UName}}</div>
                 <div class="">{{t}}</div>
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
export default {
  name: "home",
  data: function() {
    return {
      comprehensiveli:true,
      danvideoshow:false,
      videoindex:'',
      videoshow:false,
      videodata:'',
      m: 0,

      t: "2018-8-8 9:35:20",
       geocoder: "",
      positions: [
        {
          TabIDstr: "QjlFNEREOTAzODk4NTEzNQ",
          src:'http://wx.dianliangliang.com/sucai/golden/video3.jpg',
          UName:"老孟家",
          Lng: 116.345191955566,
          Lat: 37.3936996459961,
        },
        {
          TabIDstr: "QjlFNEREOTAzODk4NTEzNQ",
          src:'http://wx.dianliangliang.com/sucai/golden/video4.jpg',
          UName: "老李家",
          Lng: 116.346374511719,
          Lat: 37.3925514221191,
        },
        {
          TabIDstr: "QjlFNEREOTAzODk4NTEzNQ",
           src:'http://wx.dianliangliang.com/sucai/golden/video5.jpg',
          UName: "老王家",
          Lng: 116.342872619629,
          Lat: 37.3940086364746,
        },
        {
          TabIDstr: "QjlFNEREOTAzODk4NTEzNQ",
           src:'http://wx.dianliangliang.com/sucai/golden/video6.jpg',
          UName: "老安家",
          Lng: 116.34587097168 ,
          Lat:  37.3954620361328,
        }
        
      ],
      infoWs: [],
      curInfo: {}
    };
  },
  mounted: function() {
    this.initMap();
    this.gettime();
  },
  watch: {
    curInfo: {
      handler: function() {
        this.getLocAddress();
      },
      deep: true
    },
    t: function(Newval) {
     
    }
  },
  methods: {
    pressure_hide:function(nav){
                this.clearInfoWindows();
                 this.initMap();
    },
    pressure_survey:function(info){
        this.clearInfoWindows();
         var marker = new google.maps.Marker({
            position: {
              lat: info.Lat,
              lng: info.Lng
            },
            icon:
              "http://wx.dianliangliang.com/sucai/video1.png",
            map: this.gMap
          });
          this.curInfo = info;
          var infowindow = new google.maps.InfoWindow({
            content: this.getWinInfo(info)
            // maxWidth: 300
          });
          infowindow.open(this.gMap, marker);
          this.infoWs.push(infowindow); 
    },
    getdanvideoshow:function(){
            this.danvideoshow=false;
            this.comprehensiveli=true;
    },
    hidevideo:function(){
            this.videoshow=false;  
    },
    getdevideo:function(nav,index){
             this.videoindex = index;
             this.videodata=nav;
             this.videoshow=true;   
    },
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
    },
    getLocAddress: function() {
      var latlng = { lat: this.curInfo.Lat, lng: this.curInfo.Lng };
      this.geocoder.geocode(
        {
          location: latlng
        },
        function(results, status) {
          if (status == "OK") {
            this.$set(this.curInfo, "address", results[0].formatted_address);
          }
        }.bind(this)
      );
    },
    initMap: function() {
      var dll = { lat: 37.3925514221191, lng: 116.346374511719 };
      // document.getElementById("g-map").innerHTML="地图"
      this.gMap = new google.maps.Map(document.getElementById("g-map"), {
        zoom: 16,
        center: dll,
        mapTypeId: "hybrid"
      });
      this.geocoder = new google.maps.Geocoder();
      this.setPositions();
    },

    setPositions: function() {
      this.positions.forEach(
        function(pos) {
          var marker = new google.maps.Marker({
            position: {
              lat: pos.Lat,
              lng: pos.Lng
            },
            icon:
              "http://wx.dianliangliang.com/sucai/video1.png",
            map: this.gMap
          });
          this.initMarkListener(marker, pos);
        }.bind(this)
      );
    },
    initMarkListener: function(marker, info) {
      marker.addListener(
        "click",
        function() {
          this.clearInfoWindows();
          this.curInfo = info;
          this.danvideoshow=true;
          this.comprehensiveli=false;
          var infowindow = new google.maps.InfoWindow({
            content: this.getWinInfo(info)
            // maxWidth: 300
          });
          infowindow.open(this.gMap, marker);
          this.infoWs.push(infowindow);
        }.bind(this)
      );
    },
    getWinInfo: function(info) {
      return (
        '<div class="info-container">'+
        '<h6>'+  
        info.UName +
        "</h6></div>"
      );
    },
    clearInfoWindows: function() {
      this.infoWs.forEach(function(infoW) {
        infoW.close();
      });
      this.infoWs = [];
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
#g-map{
  max-height: 800px;
}
.comprehensive_li {
  position: relative;
  width: 45%;
  height: 350px;
  float: left;
  margin: 0px 20px;
  margin-bottom: 40px
}
.video_comprehensive_li{
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
  margin: 0px 20px;
  margin-bottom: 40px
}
.comprehensive_li img,.video_comprehensive_li img{
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
.modl,.videomold_modl{
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
.modltext,.videomold_modltext,danvideo_box_modltext{
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
.videomold{
  position:absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.videomold_img{
  width: 100%;
  height: 100%;
}
.videomold_img img{
  width: 100%;
  height: 100%;
}
.danvideo{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 688;
}
.danvideo_box{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

