<template>
    <div id="GIS-map" class="GIS-map flex-grow-1">

    </div>
</template>
<script>
import { events } from "@/assets/scripts/events.js";
export default {
  name: "GIS-map",
  data: function() {
    return {
      GISMap: "",
      facilities: "",
      points: "",
      lines: "",
      curPoint: "",
      curInfoWin: ""
    };
  },
  mounted: function() {
    this.initMap();
    this.requestData();
  },
  watch: {
    points: function(newVal) {
      console.log("获取的锚点信息：" + JSON.stringify(newVal));
      this.initPoints(newVal);
    },
    lines: function(newVal) {
      console.log("获取的线路信息：" + JSON.stringify(newVal));
      this.initLines(newVal);
    }
  },
  methods: {
    initLines: function(lines) {
      lines.forEach(line => {
        let coordinates = [
          {
            lat: line.P_S_Lat,
            lng: line.P_S_Lng
          },
          {
            lat: line.P_E_Lat,
            lng: line.P_E_Lng
          }
        ];
        let path = new google.maps.Polyline({
          path: coordinates,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        path.setMap(this.GISMap);
      });
    },
    initPoints: function(points) {
      points.forEach(point => {
        let marker = new google.maps.Marker({
          position: { lat: point.Lat, lng: point.Lng },
          map: this.GISMap,
          icon: "http://wx.dianliangliang.com/sucai/GIS-map/" + point.CIDStr+'.png'
        });
        this.initMarkListener(marker, point);
      });
    },
    initMarkListener: function(marker, point) {
      marker.addListener(
        "click",
        function() {
          if (this.curInfoWin) {
            this.curInfoWin.close();
          }
          this.curPoint = point;
          var infowindow = new google.maps.InfoWindow({
            content: this.getWinInfo(point),
            maxWidth: 300
          });
          infowindow.open(this.GISMap, marker);
          this.curInfoWin = infowindow;
        }.bind(this)
      );
    },
    getWinInfo: function(point) {
      console.log("要展示的位置信息：" + JSON.stringify(point));
      return point.SBMName.replace(/\./g, "");
    },
    initMap: function() {
      this.GISMap = new google.maps.Map(document.getElementById("GIS-map"), {
        center: { lat: 37.393872, lng: 116.344969 },
        zoom: 18,
        mapTypeId: "hybrid"
      });
    },
    requestData: function() {
      events.request(
        function(response) {
          this.facilities = response.result.Data_Obj;
          console.log("获取的数据：" + JSON.stringify(this.facilities));
          this.points = this.changePoints(this.facilities.Arr_P);
          this.lines = this.facilities.Arr_L;
        }.bind(this)
      );
    },
    changePoints: function(points) {
      points.forEach(point => {
        point.CIDStr = events.FACILITY_MAP.get(point.CIDStr);
      });
      return points;
    }
  }
};
</script>
<style scoped>
</style>