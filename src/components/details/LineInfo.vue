<template>
    <table class="line-info-container table table-striped table-dark">
        <tbody>
            <tr v-for="(info,index) in lineInfo" v-bind:key="index">
                <th scope="row" class="border border-info">{{info.name}}</th>
                <td class="border border-info">{{info.content}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
  name: "line-info",
  data: function() {
    return {
      lineInfo: [
        {
          name: "容量",
          content: '20kVA'
        },
        {
          name: "表箱数",
          content: 28
        },
        {
          name: "表数",
          content: 109
        },
        {
          name: "运行状况",
          content: "正常"
        },
        {
          name: "用户数",
          content: 109
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.line-info-container {
  position: absolute;
    max-width: 200px;
}
</style>
