<template>
    <div class="modal-container modal fade " :id="diaInfo.id" tabindex="-1" role='dialog'>
        <div class="modal-dialog mx-auto" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{diaInfo.title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" v-html="diaInfo.html">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    diaInfo: {
      default: function() {
        return {
          id: "modal-id",
          title: "",
          html: ""
        };
      },
      type: Object
    }
  },
  data: function() {
    return { diaTitle: "" };
  }
};
</script>
<style scoped>

</style>
