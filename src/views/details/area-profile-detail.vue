<template>
    <div class="profile-detail flex-grow-1 d-flex flex-column">
        <div class="profile-detail-header">
            台区各项信息
        </div>
        <operational-paramters ></operational-paramters>
    </div>
</template>
<script>
import operationalParamters from "@/views/details/operational-parameters";
export default {
  name: "profile-detail",
  components: { operationalParamters },
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.profile-detail-header {
  color: white;
  font-size: 20px;
  text-align: left;
  background-color: #00706b;
  line-height: 36px;

  padding-left: 16px;
  min-height: 40px;
  max-height: 40px;
  margin-bottom: 16px;
}
</style>
