import Vue from 'vue'
import Router from 'vue-router'
import areaHome from '@/views/area/area-home';
import areaProfileDetail from '@/views/details/area-profile-detail'
import detailMain from '@/views/details/detail-main'
import sampleGraph from '@/views/details/sample-graph'
import GISMap from '@/views/details/GIS-map'
import planGraph from '@/views/details/PlanGraph'
import comprehensivePhoto from '@/views/details/comprehensive-photo';
import comprehensiveEnergy from '@/views/details/comprehensive-energy'
import comprehensiveEGW from '@/views/details/comprehensive-EGW'
import eleAnalysis from '@/views/details/ele-analysis';
import videoSurveillance from '@/views/details/video-surveillance'
import eventAlert from '@/views/details/event-alert'
import lineLoss from '@/views/details/LineLoss'
import faultStatisticsDetail from '@/views/details/fault-statistics-detail'
import Faultlevel from '@/views/details/Fault-level'
import faulttype from '@/views/details/fault-type'
import faultyline from '@/views/details/faulty-line'
import Metaanalysis from '@/views/details/Meta-analysis'
import analogLine from '@/views/details/analog-line';
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'area-home',
    component: areaHome
  }, {
    path: '/detail-main/:id',
    name: 'detail-main',
    component: detailMain,
    children: [{
      path: 'area-profile-detail',
      name: 'area-profile-detail',
      component: areaProfileDetail
    }, {
      path: 'sample-graph/:mapId',
      name: 'sample-graph',
      component: sampleGraph,
      children: [{
        path: '',
        name: 'GIS-map',
        component: GISMap
      }, {
        path: 'plan-graph',
        name: 'plan-graph',
        component: planGraph
      }, {
        path: 'analog-line',
        name: 'analog-line',
        component: analogLine
      }]
    }, {
      path: 'fault-statistics-detail/:fid',
      name: 'fault-statistics-detail',
      component: faultStatisticsDetail,
      children: [{
        path: '',
        name: 'Fault-level',
        component: Faultlevel
      }, {
        path: 'fault-type',
        name: 'fault-type',
        component: faulttype
      }, {
        path: 'faulty-line',
        name: 'faulty-line',
        component: faultyline
      }, {
        path: 'Meta-analysis',
        name: 'Meta-analysis',
        component: Metaanalysis
      }]
    }, {
      path: 'com-energy/:eId',
      name: 'com-energy',
      component: comprehensiveEnergy,
      children: [{
        path: '',
        name: 'com-photo',
        component: comprehensivePhoto
      }, {
        path: 'com-EGW',
        name: 'com-EGW',
        component: comprehensiveEGW
      }]
    }, {
      path: "ele-analysis",
      name: 'ele-analysis',
      component: eleAnalysis
    }, {
      path: 'video-surveillance',
      name: 'video-surveillance',
      component: videoSurveillance
    }, {
      path: 'line-loss',
      name: 'line-loss',
      component: lineLoss
    }, {
      path: 'event-alert',
      name: 'event-alert',
      component: eventAlert
    }]
  }]
})