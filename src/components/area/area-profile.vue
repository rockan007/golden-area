//主页台区概况
<template>
    <div class="area-profile flex-grow-1 d-flex flex-column justify-content-around">
        <div v-for="(profile,index) in profileList" v-bind:key="index" class="d-flex">
            <div class="profile-icon-container"><span class="profile-icon iconfont" v-bind:class="profile.icon"></span></div>
            <div class="profile-title">{{profile.title}}</div>
            <div class="profile-info ml-auto">{{profile.info}}</div>
        </div>
    </div>
</template>
<script>
import { events } from "@/assets/scripts/events.js";
export default {
  name: "area-profile",
  data: function() {
    return {
      profileList: [
        {
          title: "容量",
          info: "400kVA",
          icon: "icon-rongliang-copy"
        },
        {
          title: "负载率",
          info: "85%",
          icon: "icon-fuzaijunheng"
        },
        {
          title: "总表数",
          info: 300,
          icon: "icon-zhinengdianbiao"
        },
        {
          title: "高压用户数",
          info: 15,
          icon: "icon-gaoya"
        },
        {
          title: "低压用户数",
          info: 285,
          icon: "icon-diya"
        }
      ]
    };
  },
  created: function() {
    this.requestProfile();
  },
  watch: {
    profileList: {
      deep: true,
      handler: function() {}
    }
  },
  methods: {
    requestProfile: function() {
      events.TQ_request(
        events.AREA_PROFILE,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID
        },
        responseData => {
          this.getProfileList(responseData);
          setTimeout(() => {
            this.requestProfile();
          }, 500);
        }
      );
    },
    getProfileList: function(data) {
      Object.keys(data).forEach((key, index) => {
        this.profileList[index].info = data[key];
      });
    }
  }
};
</script>
<style scoped>
.area-profile {
  padding: 16px 32px;
}
.profile-icon-container {
  background-color: #00706b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.profile-icon {
  color: white;
  font-size: 24px;
  font-weight: bold;
  line-height: 40px;
}
.profile-title {
  color: #00706b;
  font-size: 18px;
  line-height: 50px;
  margin-left: 8px;
}
.profile-info {
  color: #00706b;
  font-size: 24px;
}
</style>