<template>
  <div id="app" class="container container-fluid d-flex flex-column">
    <area-nav></area-nav>
    <router-view class="flex-grow-1"/>
    <area-footer></area-footer>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/fonts/iconfont.css";
import areaNav from "@/views/area/area-nav";
import areaFooter from "@/views/area/area-footer";
export default {
  name: "app",
  components: {
    "area-nav": areaNav,
    "area-footer": areaFooter
  },
  data: function() {
    return {
      id: 0
    };
  },
  watch: {
  
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 100%;
  height: 100%;
  padding: 0;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6)),url(assets/imgs/home-back.png); 
}
@media (min-width: 1200px) {
  .container {
    max-width: 100%;
  }
}
</style>
