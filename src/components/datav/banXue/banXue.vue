<template>
  <div id="data-view">
    <!-- <dv-full-screen-container> -->
      <!-- <div class="top-head">
        <top-header />
      </div> -->
      <div class="container-top">
        <div class="top-1 boxall"><TopChart1 /><div class="boxfoot"></div></div>
        <div class="top-1 boxall"><TopChart2 /></div>
        <div class="top-1 boxall"><TopChart3 /></div>
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
      <div class="container-bottom">
        <div class="top-1 boxall"><BottomChart1 /></div>
        <div class="top-1 boxall">
          <BottomChart2 />
          </div>
      </div>
    <!-- </dv-full-screen-container> -->
  </div>
</template>

<script>
import topHeader from "./topHeader";

import TopChart1 from "./TopChart1";
import TopChart2 from "./TopChart2";
import TopChart3 from "./TopChart3";

import MiddleChart1 from "./MiddleChart1";
import MiddleChart2 from "./MiddleChart2";
import MiddleChart3 from "./MiddleChart3";

import BottomChart1 from "./BottomChart1";
import BottomChart2 from "./BottomChart2";

export default {
  name: "DataView",
  components: {
    topHeader,
    TopChart1,
    TopChart2,
    TopChart3,
    MiddleChart1,
    MiddleChart2,
    MiddleChart3,
    BottomChart1,
    BottomChart2,
  },
  data() {
    return {};
  },
  created() {
    this.getParameter();
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
    flex-direction: column;
    justify-content: space-around;
  // #dv-full-screen-container {
  //   height: 926px !important;
  //   background-image: url("./img/bg.jpg");
  //   background-size: 100% 100%;
  //   box-shadow: 0 0 3px blue;
  // }
  
  .container-top {
    height: 30%;
    display: flex;
    justify-content: space-around;
    // align-items: flex-end;
    .top-1 {
      width: 32%;
      // height: 100%;
    }
  }
  .container-middle {
    height: 30%;
    display: flex;
    justify-content: space-around;
    // align-items: flex-end;
    .top-1 {
      width: 32%;
      // height: 100%;
    }
  }
 .container-bottom {
    height: 30%;
    display: flex;
    justify-content: space-around;
    // align-items: flex-end;
    .top-1 {
      width: 48%;
      // height: 100%;
    }
  }
  // .main-container {
  //   height: calc(~"100% - 80px");
  // }
}
</style>
