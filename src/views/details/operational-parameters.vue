<template>
    <div class="operational-parameters flex-grow-1 d-flex flex-column justify-content-stretch">
        <div v-for="(table,index) in tableList" v-bind:key="index" class="table-container">
            <div class="table-title"> 
                {{table.title}}
            </div>
             <table class="table-body table-striped border">
                <thead>
                    <tr>
                        <th scope="col">属性</th>
                        <th scope="col">值</th>
                        <th scope="col">属性</th>
                        <th scope="col">值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="line in (Math.ceil( table.params.length/2.0))" v-bind:key="line">
                        <th scope="row">{{table.params[line*2-2].title}}</th>
                        <td>{{table.params[line*2-2].param}}</td>
                        <th scope="row">{{table.params[line*2-1].title}}</th>
                        <td>{{table.params[line*2-1].param}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: "operational-parameters",
  data: function() {
    return {
      tableList: [
        {
          title: "基本信息",
          params: [
            {
              title: "电压",
              param: "400V"
            },
            {
              title: "电流",
              param: "1000A"
            },
            {
              title: "功率因数",
              param: 0.8
            },
            {
              title: "负载率",
              param: 0.9
            }
          ]
        },
        {
          title: "用户信息",
          params: [
            {
              title: "用户数",
              param: 156
            },
            {
              title: "光伏用户数",
              param: 12
            },
            {
              title: "高压用户数",
              param: 6
            },
            {
              title: "低压用户数",
              param: 150
            }
          ]
        },
        {
          title: "基本信息",
          params: [
            {
              title: "电压",
              param: "400V"
            },
            {
              title: "电流",
              param: "1000A"
            },
            {
              title: "功率因数",
              param: 0.8
            },
            {
              title: "负载率",
              param: 0.9
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.operational-parameters {
  color: black;
}
.table-container + .table-container {
  margin-top: 50px;
}
.table-body {
  width: 80%;
  margin: 0 10%;
  /* text-align: left; */
}
</style>
