<template>
    <table v-bind:id="tabId" class="table table-striped" >
        <thead>
            <tr>
                <th scope="col" v-for="(col,index) in tableData.cols" v-bind:key="'col-'+index">{{col}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row,index) in tableData.rows" v-bind:class="{'alert-severity':row[2]=='严重'}" v-bind:key='"row-"+index'>
                <td v-for="(data,order) in row" v-bind:key="'data-'+order">
                    {{data}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import "datatables.net-buttons-dt/css/buttons.dataTables.min.css";
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from "jquery";
import jsZip from "jszip";
import "datatables.net/js/jquery.dataTables.min.js";
import "datatables.net-bs4/js/dataTables.bootstrap4.min";
import "datatables.net-buttons/js/dataTables.buttons.min.js";
import "datatables.net-buttons/js/buttons.html5.min.js";
import { events } from "@/assets/scripts/events.js";
window.JSZip = jsZip;
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
      if (this.dataTable) {
        this.dataTable.draw();
      } else {
        this.dataTable = $("#" + this.tabId).DataTable({
          dom: "Bfrtip",
          buttons: [
            {
              extend: "excelHtml5", //使用 excel扩展
              text: "导出表格", // 显示文字
              filename: this.tableData.name,
              messageTop: this.tableData.name,
            }
          ],
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
.alert-severity {
  color: red;
}
</style>
