<template>
    <div class="operational-parameters flex-grow-1 d-flex flex-wrap" style="overflow-y:auto;">
        <info-card class="col-6" v-for="(card,index) in cardList" v-bind:cardData="card" v-bind:order="index" v-bind:key="index"></info-card>
    </div>
</template>
<script>
import infoCard from "../../components/details/info-card";
export default {
  name: "operational-parameters",
  components: {
    infoCard
  },
  data: function() {
    return {
      cardList: [
        {
          title: "台区基本信息",
          subTitles: [
            {
              title: "容量",
              info: "400kVA"
            },
            {
              title: "负载率",
              info: "78.356%"
            },
            {
              title: "总表数",
              info: "138个"
            }
          ],
          infoList: [
            {
              title: "总用户数",
              info: "358"
            },
            {
              title: "高压用户数",
              info: "41"
            },
            {
              title: "低压用户数",
              info: "304"
            },
            {
              title: "表箱数",
              info: "36"
            }
          ],
          isEle: 0
        },
        {
          title: "变压器相关信息",
          subTitles: [
            {
              title: "A相电电压",
              info: "219.80V"
            },
            {
              title: "B相电电压",
              info: "221.08V"
            },
            {
              title: "C相电电压",
              info: "220.12V"
            }
          ],
          infoList: [
            {
              title: "负载率",
              info: "78%"
            },
            {
              title: "容量",
              info: "400kVA"
            },
            {
              title: "低压用户数",
              info: "304"
            },
            {
              title: "实时温度",
              info: "36℃"
            }
          ],
          isEle: 1
        },
        {
          title: "GP柜相关信息",
          subTitles: [
            {
              title: "A相电电流",
              info: "50.1A"
            },
            {
              title: "B相电电流",
              info: "46.9A"
            },
            {
              title: "C相电电流",
              info: "48.6A"
            }
          ],
          infoList: [
            {
              title: "A相电电压",
              info: "219.08V"
            },
            {
              title: "B相电电压",
              info: "220.08V"
            },
            {
              title: "C相电电压",
              info: "221.08V"
            },
            {
              title: "实时温度",
              info: "36℃"
            }
          ],
          isEle: 1
        },
        {
          title: "东线相关信息",
          subTitles: [
            {
              title: "表数",
              info: "69"
            },
            {
              title: "高电压用户",
              info: "12"
            },
            {
              title: "低电压用户",
              info: "57"
            }
          ],
          infoList: [
            {
              title: "表箱数",
              info: "12"
            }
          ],
           isEle: 0
        }
      ],
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
          ],
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
}
</style>
