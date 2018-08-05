<template>
    <div class="plan-container flex-grow-1 d-flex flex-column align-items-center position-relative " >
        <div id="plan-body" class="plan-body flex-grow-1 flex-shrink-1 d-flex align-items-center justify-content-center position-absolute"  data-spy="scroll" style="overflow-x: scroll">
            <!-- <img src="http://wx.dianliangliang.com/sucai/plan-graph.74a0cb6d.png" alt=""> -->
            <div id="plan-img" class="" style="padding:0px 20px 0px 2380px" >
                <img class=""  src="http://wx.dianliangliang.com/sucai/pmt.png" alt="">
            </div>
            <!-- <img class="marginal-data position-absolute" src="http://wx.dianliangliang.com/sucai/marginal-data.png" alt=""> -->
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "plan-graph",
  components: {

  },
  mounted: function() {
    var myDiv = $("#plan-body");
    var scrollto = myDiv.offset().left + myDiv.width() / 2;
    myDiv.animate({ scrollLeft: scrollto+150 });
    // let body=document.getElementById('plan-body');
    // body.scrollLeft=2000;
    // // body.scrollTo(5000,1000);
    // console.log(body.scrollLeft);
  },
  data: function() {
    return {
      showDialog: 0
    };
  },
  methods: {
    cancelDia: function() {
      this.showDialog = 0;
    },
    getRandomType: function() {
      return parseInt(Math.round(Math.random() * 3));
    },
    showDia: function() {
      this.showDialog = 1;
    }
  }
};
</script>
<style scoped>
.plan-body {
  max-width: 100%;
}
.plan-graph-container {
  width: 100%;
}
.meter-dialog {
  position: absolute;
  left: 60px;
  top: 60px;
  bottom: 60px;
  right: 60px;
  z-index: 999;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1.0);
  padding: 16px;
}
.dia-header {
  font-size: 36px;
  color: lightskyblue;
}
.plan-header {
  font-size: 24px;
  color: white;
}
.plan-body {
  top: 60px;
  right: 30px;
  bottom: 60px;
  left: 100px;
}
.marginal-data {
  width: 270px;
  left: 30px;
  bottom: 20px;
}
.click-item-1 {
  top: 236px;
}
.click-item-2 {
  top: 236px;
  left: 170px;
}
.click-item-3 {
  top: 236px;
  left: 250px;
}
.click-item-4 {
  top: 236px;
  left: 300px;
}
.click-item-5 {
  top: 236px;
  left: 370px;
}
.click-item-6 {
  top: 236px;
  left: 426px;
}
.click-item-7 {
  top: 236px;
  left: 496px;
}
.click-item-8 {
  top: 236px;
  left: 550px;
}
.click-item-9 {
  top: 236px;
  left: 620px;
}
.click-item-10 {
  top: 236px;
  left: 672px;
}
.click-item-11 {
  top: 236px;
  left: 860px;
}
.click-item-12 {
  top: 236px;
  right: 550px;
}
.click-item-13 {
  top: 236px;
  right: 480px;
}
.click-item-14 {
  top: 236px;
  right: 426px;
}
.click-item-15 {
  top: 236px;
  right: 350px;
}
.click-item-16 {
  top: 236px;
  right: 300px;
}
.click-item-17 {
  top: 236px;
  right: 230px;
}
.click-item-18 {
  top: 236px;
  right: 180px;
}
.click-item-19 {
  bottom: 156px;
  left: 360px;
}
.click-item-20 {
  bottom: 156px;
  left: 410px;
}
.click-item-21 {
  bottom: 156px;
  left: 480px;
}
.click-item-22 {
  bottom: 156px;
  left: 530px;
}
.click-item-23 {
  bottom: 156px;
  left: 610px;
}
.click-item-24 {
  bottom: 156px;
  left: 660px;
}
.click-item-25 {
  bottom: 156px;
  left: 730px;
}
.click-item-26 {
  bottom: 156px;
  left: 780px;
}
.click-item-27 {
  bottom: 156px;
  right: 470px;
}
.click-item-28 {
  bottom: 156px;
  right: 420px;
}
.click-item-29 {
  bottom: 156px;
  right: 350px;
}
.click-item-30 {
  bottom: 156px;
  right: 300px;
}
.click-item-31 {
  bottom: 156px;
  right: 220px;
}
.click-item-32 {
  bottom: 156px;
  right: 170px;
}
.click-item-33 {
  bottom: 156px;
  right: 100px;
}
.click-item-34 {
  bottom: 156px;
  right: 50px;
}
.no-item-1 {
  right: 1368px;
  top: 190px;
}
.no-item-2 {
  right: 1368px;
  top: 270px;
}
.no-item-3 {
  left: 190px;
  top: 190px;
}
.no-item-4 {
  left: 190px;
  top: 270px;
}
.no-item-5 {
  left: 270px;
  top: 190px;
}
.no-item-6 {
  left: 270px;
  top: 270px;
}
.no-item-7 {
  left: 325px;
  top: 190px;
}
.no-item-8 {
  left: 325px;
  top: 270px;
}
.no-item-9 {
  left: 396px;
  top: 190px;
}
.no-item-10 {
  left: 396px;
  top: 270px;
}
.no-item-11 {
  left: 450px;
  top: 190px;
}
.no-item-12 {
  left: 450px;
  top: 270px;
}
.no-item-13 {
  left: 520px;
  top: 190px;
}
.no-item-14 {
  left: 520px;
  top: 270px;
}
.no-item-15 {
  left: 574px;
  top: 190px;
}
.no-item-16 {
  left: 574px;
  top: 270px;
}
.no-item-17 {
  left: 642px;
  top: 190px;
}
.no-item-18 {
  left: 642px;
  top: 270px;
}
.no-item-19 {
  left: 696px;
  top: 190px;
}
.no-item-20 {
  left: 696px;
  top: 270px;
}
.no-item-21 {
  left: 880px;
  top: 190px;
}
.no-item-22 {
  left: 880px;
  top: 270px;
}
.no-item-23 {
  left: 936px;
  top: 190px;
}
.no-item-24 {
  left: 936px;
  top: 270px;
}
.no-item-25 {
  left: 1004px;
  top: 190px;
}
.no-item-26 {
  left: 1004px;
  top: 270px;
}
.no-item-27 {
  left: 1060px;
  top: 190px;
}
.no-item-28 {
  left: 1060px;
  top: 270px;
}
.no-item-29 {
  left: 1132px;
  top: 190px;
}
.no-item-30 {
  left: 1132px;
  top: 270px;
}
.no-item-31 {
  left: 1185px;
  top: 190px;
}
.no-item-32 {
  left: 1185px;
  top: 270px;
}
.no-item-33 {
  left: 1256px;
  top: 190px;
}
.no-item-34 {
  left: 1256px;
  top: 270px;
}
.no-item-35 {
  left: 1310px;
  top: 190px;
}
.no-item-36 {
  left: 1310px;
  top: 270px;
}
.no-item-37 {
  right: 1130px;
  bottom: 110px;
}
.no-item-38 {
  right: 1130px;
  bottom: 188px;
}
.no-item-39 {
  left: 430px;
  bottom: 110px;
}
.no-item-40 {
  left: 430px;
  bottom: 188px;
}
.no-item-41 {
  left: 504px;
  bottom: 110px;
}
.no-item-42 {
  left: 504px;
  bottom: 188px;
}
.no-item-43 {
  left: 556px;
  bottom: 110px;
}
.no-item-44 {
  left: 556px;
  bottom: 188px;
}
.no-item-45 {
  left: 630px;
  bottom: 110px;
}
.no-item-46 {
  left: 630px;
  bottom: 188px;
}
.no-item-47 {
  left: 680px;
  bottom: 110px;
}
.no-item-48 {
  left: 680px;
  bottom: 188px;
}
.no-item-49 {
  left: 750px;
  bottom: 110px;
}
.no-item-50 {
  left: 750px;
  bottom: 188px;
}
.no-item-51 {
  left: 806px;
  bottom: 110px;
}
.no-item-52 {
  left: 806px;
  bottom: 188px;
}
.no-item-53 {
  right: 500px;
  bottom: 110px;
}
.no-item-54 {
  right: 500px;
  bottom: 188px;
}
.no-item-55 {
  left: 1066px;
  bottom: 110px;
}
.no-item-56 {
  left: 1066px;
  bottom: 188px;
}
.no-item-57 {
  left: 1138px;
  bottom: 110px;
}
.no-item-58 {
  left: 1138px;
  bottom: 188px;
}
.no-item-59 {
  left: 1190px;
  bottom: 110px;
}
.no-item-60 {
  left: 1190px;
  bottom: 188px;
}
.no-item-61 {
  left: 1262px;
  bottom: 110px;
}
.no-item-62 {
  left: 1262px;
  bottom: 188px;
}
.no-item-63 {
  left: 1316px;
  bottom: 110px;
}
.no-item-64 {
  left: 1316px;
  bottom: 188px;
}
.no-item-65 {
  left: 1386px;
  bottom: 110px;
}
.no-item-66 {
  left: 1386px;
  bottom: 188px;
}
.no-item-67 {
  left: 1440px;
  bottom: 110px;
}
.no-item-68 {
  left: 1440px;
  bottom: 188px;
}
</style>
