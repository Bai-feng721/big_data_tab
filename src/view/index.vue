<template>
  <div id="main-view">
    <dv-full-screen-container>
      <div class="canvas" >
        <iframe
          src="xuehua/index.html"
          style="width: 100%; height: 100%"
          frameborder="0"
        ></iframe>
      </div>
      <div class="top-head">
        <common-header :title="headTitle"/>
      </div>

      <div class="main">
        <div class="meun">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#07185F"
            text-color="#fff"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <!-- <i class="el-icon-menu"></i> -->
              <div >
                <img src="@/assets/images/school.png" alt="" />
                <span slot="title" style="display:block">信息化应用</span>
              </div>
            </el-menu-item>
            <el-menu-item index="2">
              <!-- <i class="el-icon-menu"></i> -->
              <img src="@/assets/images/online.png" alt="" />
              <span slot="title" style="display:block">办学情况</span>
            </el-menu-item>
            <!-- <el-menu-item index="3">
              <img src="@/assets/images/registUser.png" alt="" />
              <span slot="title" style="display:block">教育管理</span>
            </el-menu-item> -->
            <el-menu-item index="3">
              <img src="@/assets/images/teacher.png" alt="" />
              <span slot="title" style="display:block">教学资源</span>
            </el-menu-item>
            <el-menu-item index="4">
              <img src="@/assets/images/student.png" alt="" />
              <span slot="title" style="display:block">用户发展</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="tab-main">
          <overView v-if="activeIndex == 1" />
          <banXue v-if="activeIndex == 2" />
          <!-- <div v-if="activeIndex == 3" style="height: 100%">
            <iframe
              src="http://pljy.plzhjy.cn/bigDataRunSchoolView/index.html"
              style="width: 100%; height: 100%"
              frameborder="0"
            ></iframe>
          </div> -->

         
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import banXue from "@/components/datav/banXue/banXue";
import overView from "@/components/datav/overView/overView";
import commonHeader from "./commonHeader";

export default {
  name: "DataView",
  components: {
    banXue,
    overView,
    commonHeader,
  
  },
  data() {
    return {
      activeIndex: "1",
      headTitle:'信息化应用大数据'//默认头部标题
    };
  },
  watch: {
    activeIndex(val, oldVal) {
         if(val=='1'){
           this.headTitle = '信息化应用大数据'
         }else if(val=='2'){
           this.headTitle = '办学情况大数据'
         }else if(val=='3'){
           this.headTitle = '教学资源大数据'
         }else if(val=='4'){
           this.headTitle = '用户发展大数据'
         }
     }
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
    handleSelect(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-item.is-active {
  background-color: #17245c !important;
}
.el-menu-item, .el-submenu__title {
    line-height:40px !important;
}
.el-menu {
  border-right: none !important;
}
li{
  height:90px !important;
  text-align: center !important;
}
img{
  margin-top:20px;
}
#main-view {
  width: 100%;
  height: 100%;
  background-color: #001b8b;
  color: #fff;
  background-image: url("../components/datav/img/bg.jpg");
  background-size: 100% 100%;

  #dv-full-screen-container {
    height: 926px !important;
    // background-image: url("@/assets/img/bg.jpg");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .canvas {
    position: absolute;
    opacity: 0.6;
    width: 100%;
    left: 0;
    top: 0;
    height: 99%;
    z-index: -99;
  }
  .top-head {
    height: 8%;
  }
  .main {
    height: 90%;
    display: flex;
    .meun {
      width: 6%;
      height: 100%;
    }
    .tab-main {
      width: 94%;
      height: 100%;
      // background-color: rgb(144, 243, 157);
    }
  }
}
</style>
