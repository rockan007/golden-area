<template>
    <table v-bind:id="tabId" class="table table-striped" >
        <thead>
            <tr>
                <th scope="col" v-for="(col,index) in tableData.cols" v-bind:key="'col-'+index">{{col}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row,index) in tableData.rows" v-bind:key='"row-"+index'>
                <td v-for="(data,order) in row" v-bind:key="'data-'+order">
                    {{data}}
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import $ from "jquery";
import "datatables.net/js/jquery.dataTables.min";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { events } from "@/assets/scripts/events.js";
export default {
  name: "data-table",
  props: {
    tabId: {
      type: String,
      default: "data-table"
    },
    tabUrl: {
      type: String,
      default: events.BOXES_LINELOSS
    },
    tableData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      dataTable: ""
    };
  },
  created: function() {},
  watch: {
    tableData: {
      deep: true,
      handler: function(newVal) {
        console.log("****************************************初始化DataTable");
        console.log("***********newVal:" + JSON.stringify(newVal));
        if (newVal.cols) {
          this.$nextTick(() => {
            this.initialDataTable();
          });
        }
      }
    }
  },
  methods: {
    initialDataTable: function() {
      console.log("当前ID:" + this.tabId);
      if (this.dataTable) {
        console.log("重绘页面")
        this.dataTable.draw();
      } else {
        this.dataTable = $("#" + this.tabId).DataTable({
          language: {
            sProcessing: "处理中...",
            sLengthMenu: "显示 _MENU_ 项结果",
            sZeroRecords: "没有匹配结果",
            sInfo: "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            sInfoEmpty: "显示第 0 至 0 项结果，共 0 项",
            sInfoFiltered: "(由 _MAX_ 项结果过滤)",
            sInfoPostFix: "",
            sSearch: "搜索:",
            sUrl: "",
            sEmptyTable: "表中数据为空",
            sLoadingRecords: "载入中...",
            sInfoThousands: ",",
            oPaginate: {
              sFirst: "首页",
              sPrevious: "上页",
              sNext: "下页",
              sLast: "末页"
            },
            oAria: {
              sSortAscending: ": 以升序排列此列",
              sSortDescending: ": 以降序排列此列"
            }
          }
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
