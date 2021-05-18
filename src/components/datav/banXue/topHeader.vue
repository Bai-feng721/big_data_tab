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
    <dv-decoration-5 class="header-center-decoration" :dur='6'/>
    <!-- <div class="header-right-decoration">
      <dv-decoration-11 style="width: 170px; height: 60px">
        <a
          :href="href"
          target="_blank"
          :class="{ isActive: active === 5 }"
          @click="jumpPage(5)"
          >用户发展</a
        >
      </dv-decoration-11>
     
    </div> -->
    <div class="center-title">平凉市智慧教育</div>
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
    return {
    };
  },
  created() {
  },
  methods: {
    
  },
};
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-center-decoration {
    width: 100%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
    display: flex;
    margin-top: 19px;
    margin-left: 2%;
    margin-right: 2%;
    a {
      color: #fff;
      text-decoration: none;
    }
  }

  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
  .center-select{
    display:flex;
    position: absolute;
    left: 5%;
    bottom: 5px;
    #yearSelect{
      // transform: scale(1.5);
      // width:100px;
      font-size:16px;
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
