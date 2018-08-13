<template>
    <div class="eventAlert-container flex-grow-1 d-flex flex-column">
        <div class="eventAlert-header d-flex justify-content-between">
            <div class="eventAlert-title ">事件预警</div> 
            <!-- <button class="btn btn-outline-info" v-on:click="exportAlert">导出表格</button> -->
        </div>
        <div class="eventAlert-body flex-grow-1 flex-shrink-1" style="overflow-y:auto">
            <data-table tabId="alert-table" v-bind:tableData="tableData"></data-table>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import "datatables.net/js/jquery.dataTables.min";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import dataTable from "@/components/utils/data-table";
import {events} from "@/assets/scripts/events"
export default {
  name: "event-alert",
  components: {
    dataTable
  },
  data: function() {
    return {
      tableData: "",
      alertList: [
        {
          title: "故障警报",
          level: 9,
          equipment: "1#变压器",
          reason: "断电",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器东支出线",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器母排",
          reason: "温度过高",
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
          level: 5,
          equipment: "54#表箱2#表",
          reason: "用户侧断电",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 9,
          equipment: "1#变压器",
          reason: "断电",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器东支出线",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器母排",
          reason: "温度过高",
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
          level: 5,
          equipment: "54#表箱2#表",
          reason: "用户侧断电",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 9,
          equipment: "1#变压器",
          reason: "断电",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器东支出线",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器母排",
          reason: "温度过高",
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
          level: 5,
          equipment: "54#表箱2#表",
          reason: "用户侧断电",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 9,
          equipment: "1#变压器",
          reason: "断电",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器东支出线",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器母排",
          reason: "温度过高",
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
          level: 5,
          equipment: "54#表箱2#表",
          reason: "用户侧断电",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 9,
          equipment: "1#变压器",
          reason: "断电",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器东支出线",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "变压器母排",
          reason: "温度过高",
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
          level: 5,
          equipment: "54#表箱2#表",
          reason: "用户侧断电",
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
        name: "事件预警-" +events.formatDate(new Date(),'yyyy/MM/dd') ,
        cols: cols,
        rows: rows
      };
    },
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
  font-size: 24px;
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
