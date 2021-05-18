<template>
  <div id="top-header">
    <!-- <div class="header-left-decoration">
      <dv-decoration-11 style="width: 170px; height: 60px"
        ><a
          :href="href"
          :class="{ isActive: active === 1 }"
          @click="jumpPage(1)"
          >首页</a
        ></dv-decoration-11
      > 
     
    </div>-->
    <!-- <dv-decoration-5 class="header-center-decoration" :dur='6'/> -->
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="" />
      <p>平凉市智慧教育</p>
    </div>

    <div class="center-title">{{title}}</div>
    <div class="back">
      <img src="" alt="">
      <a id="back_a" href="http://pljy.plzhjy.cn/bigDataView/docking/bigDataViewClouds"
        ><span class="backtxt">返回首页</span></a
      >
    </div>
    <!-- <div class="center-select">
      <div style="color:#44BEF7">学期:&nbsp;&nbsp;</div>
      <select name="" id="yearSelect" >
   			<option>2020年-2021年上学期</option>
   			<option>2019年-2020年下学期</option>
   			<option>2019年-2020年上学期</option>
      </select>  
    </div> -->
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {};
  },
  props:['title'],
  created() {},
  methods: {},
};
</script>

<style lang="less">
#top-header {
  width: 100%;
  height: 66px;
  max-width: 1920px;
  background: url("../assets/images/headbg1.png") 56.5% no-repeat;
  background-size: 50% 100%;
  margin-top: 10px;
  .logo {
  margin-top: 20px;

    width: 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
      width: 50px;
      height: 30px;
    }
    p{
      color: #fff;
      // margin-bottom: 10px;
    }
  }

  .center-title {
    position: absolute;
    color: #7ab0ff;
    font-size: 26px;
    letter-spacing: 4px;
    // font-weight: bold;
    left: 53.5%;
    top: 10px;
  }
  .back{
    line-height: 66px;
    .back_img{
      background: url('../assets/images/noselBack.png') no-repeat center;
    }
    #back_a{
      text-decoration: none;
      .backtxt{
        color: #7ab0ff;
        font-weight: bold;
        font-size: 16px;
        margin-right: 18px;
        margin-top: 50px;
      }
    }
  }
  .center-select {
    display: flex;
    position: absolute;
    left: 5%;
    bottom: 5px;
    #yearSelect {
      // transform: scale(1.5);
      // width:100px;
      font-size: 16px;
      background: transparent;
      color: rgb(199, 194, 194);
    }
  }
}

.isActive {
  color: #ffc637 !important;
  text-shadow: 0px 0px 5px #ffc637 !important;
}
</style>
