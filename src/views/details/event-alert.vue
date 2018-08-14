<template>
    <div class="eventAlert-container flex-grow-1 d-flex flex-column">
        <div class="eventAlert-header d-flex justify-content-between">
            <div class="eventAlert-title ">事件预警</div> 
  
              <a class="standard-words" href="#"  v-on:click="showInfo=1"> <span class="iconfont icon-info"></span>故障标准</a>
          
        </div>
        <div class="eventAlert-body flex-grow-1 flex-shrink-1" style="overflow-y:auto">
            <data-table tabId="alert-table" v-bind:tableData="tableData"></data-table>
        </div>
        <info-dia v-if="showInfo" v-bind:infoHtml="infoHtml" v-bind:showInfo="showInfo" v-on:showNone="showInfo=0"></info-dia>
    </div>
</template>
<script>
import $ from "jquery";
import "datatables.net/js/jquery.dataTables.min";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import dataTable from "@/components/utils/data-table";
import infoDia from "@/components/utils/info-dia";
import { events } from "@/assets/scripts/events";
export default {
  name: "event-alert",
  components: {
    dataTable,
    infoDia
  },
  data: function() {
    return {
      infoHtml:
        `<h2>故障标准</h2>
        <div style="text-align:left;">
        <div><h3>表上检测</h3><div>1、过负荷：实时电流超过额定电流1.2-2倍</div><div>2、过载：实时电流超过额定电流2-6倍</div>
        <div>3、单相接地（漏电）：实时电流超过额定电流＞6倍</div><div>4、断电：开关量采集模块直接判定是否断电</div>
        </div>
        <div><h3>JP柜上检测</h3><div><h4>1、三相不平衡</h4><div><h5>三相单项不平衡度（每日一出）</h5><div>A相:（日低压侧A相最大电流-日低压侧A相最小电流）/(低压侧A相最大电流x100%)</div>
        <div>B相:（日低压侧B相最大电流-日低压侧B相最小电流）/(低压侧B相最大电流x100%)</div><div>C相:（日低压侧C相最大电流-日低压侧C相最小电流）/(低压侧C相最大电流x100%)</div></div>
        <div><h5>三相间不平衡（每月一出）：</h5><div>Yyn0接法型变压器：a、b、c三项不平衡度≤15%且中性线电流≤变压器低压侧额定电流的25%</div><div>每月越限日累计≥5判定三相不平衡</div>
        </div>
        </div>
        </div>
        </div>`,
      showInfo: 0,
      tableData: "",
      alertList: [
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "东线东支",
          reason: "单相接地（漏电）",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "表箱异常打开",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: ""
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "过载",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "表箱异常打开",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "用户侧过负荷",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "断电",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "单相接地（漏电）",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "用户侧过负荷",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "表箱异常打开",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: ""
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "用户侧过负荷",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "表箱异常打开",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: ""
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "用户侧过负荷",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        }
      ]
    };
  },
  mounted: function() {
    this.getTableData();
  },
  methods: {
    getTableData: function() {
      let rows = [];
      this.alertList.forEach((alert, index) => {
        let row = [
          index + 1,
          alert.title,
          alert.level > 5 ? "严重" : "一般",
          alert.equipment,
          alert.reason,
          alert.errTime,
          alert.repairTime,
          alert.repairDuration
        ];
        rows.push(row);
      });
      let cols = [
        "#",
        "事件名称",
        "故障级别",
        "故障设备",
        "故障原因",
        "故障时间",
        "修复时间",
        "处理时间"
      ];
      this.tableData = {
        name: "事件预警-" + events.formatDate(new Date(), "yyyy/MM/dd"),
        cols: cols,
        rows: rows
      };
    }
    // exportAlert: function() {
    //   window.open(
    //     "http://wx.dianliangliang.com/sucai/courts-manage/courts-manage/事件警报.xlsx"
    //   );
    // }
  }
};
</script>
<style scoped>
.eventAlert-title {
  font-size: 20px;
  line-height: 40px;
}
.standard-words {
  font-size: 16px;
  color: #9ccac8;
  line-height: 40px;
  padding-right: 16px;
}
.eventAlert-header {
  min-height: 40px;
  padding-left: 16px;
  color: white;
  background-color: #00706b;
}
.event-severity {
  color: red;
}
</style>
