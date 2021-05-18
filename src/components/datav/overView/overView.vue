<template>
  <div id="data-view">
    <!-- <div class="top-head">
        <top-header />
      </div> -->
    <div class="container-left">
      <div class="top-1 boxall">
        <LeftChart1 />
        <div class="boxfoot"></div>
      </div>
      <div class="top-1 boxall"><LeftChart2 /></div>
      <div class="top-1 boxall"><LeftChart3 /></div>
    </div>
    <div class="container-middle">
      <div class="top-1 boxall"><MiddleChart1 /></div>
      <div class="top-1 boxall">
       <MiddleChart2 />
      </div>
      <div class="top-1 boxall">
       <MiddleChart3 />
      </div>
    </div>
    <div class="container-right">
      <div class="top-1 boxall"><RightChart1 /></div>
      <div class="top-2 boxall"><RightChart2 /></div>
    </div>
  </div>
</template>

<script>
import topHeader from "./topHeader";

import LeftChart2 from "./LeftChart2";
import LeftChart1 from "./LeftChart1";
import LeftChart3 from "./LeftChart3";

import MiddleChart1 from "./MiddleChart1";
import MiddleChart2 from "./MiddleChart2";
import MiddleChart3 from "./MiddleChart3";

import RightChart1 from "./RightChart1";
import RightChart2 from "./RightChart2";

export default {
  name: "DataView",
  components: {
    topHeader,
    LeftChart2,
    LeftChart1,
    LeftChart3,
    MiddleChart1,
    MiddleChart2,
    MiddleChart3,
    RightChart1,
    RightChart2,
  },
  data() {
    return {};
  },
  created() {
    // this.getParameter();
  },
  methods: {
    getParameter() {
      let Request = this.GetRequest();
      let contents = Request["JsonInfo"];
      this.$store.commit("ADD_JSONINFO", contents);
    },
    GetRequest() {
      var url = location.search; //获取url中"?"符后的字串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]); //这个可以解决中文乱码的问题；
        }
      }
      return theRequest;
    },
  },
};
</script>

<style lang="less" scoped>
#data-view {
  width: 100%;
  height: 100%;
  background-color: #001b8b;
  color: #fff;
  // background-image: url("../img/bg.jpg");
    background: transparent;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  .container-left {
    height: 100%;
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top-1 {
      height: 32%;
    }
  }
  .container-middle {
    width: 32%;
    height: 100%;
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top-1 {
      height: 32%;
    }
  }
  .container-right {
    width: 32%;
    height: 100%;
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top-1 {
      height: 44%;
    }
    .top-2 {
      height: 54%;
    }
  }
  // .main-container {
  //   height: calc(~"100% - 80px");
  // }
}
</style>
