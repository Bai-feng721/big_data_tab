<template>
  <div class="top-chart-1">
    <div class="rc1-header">
      <div class="head-title alltitle">平台最新动态</div>
    </div>
    <vueSeamlessScroll :data="List" class="seamless-warp" :class-option="classOption">
      <div class="mess-list" v-for="item in List" :key="item">
      <el-avatar :src="headSrc" :size="50"></el-avatar>
      <div class="mess">
        <div class="mess-top">
          <div class="info">
            <p>马冬梅&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>老师&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>平凉市一中</p>
          </div>
          <div class="mess-time">2021-6-1 10:11:22</div>
        </div>
        <div class="mess-bottom">
          {{item.title}}
            在教师空间,发表了文章 《奔跑中的犀牛》和
            多久才能大数据大数据大数据大数据大数据
        </div>
      </div>
    </div>
  </vueSeamlessScroll>

    
    <div class="boxfoot"></div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  name: "RightChart2",
  components:{
      vueSeamlessScroll
  },
  data() {
    return {
      List:[1,2,3,4,5,6],
      headSrc:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    };
  },
  computed: {
   classOption() {
      return {
        step: 0.4, // 数值越大速度滚动越快
        limitMoveNum: 6, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: false, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0;
}
.top-chart-1 {
  height: 100%;
  .rc1-header {
    // height: 50px;
    font-weight: 500;
    .head-title {
      font-size: 15px;
      height: 30px;
      line-height: 30px;
      color: #b4dff3;
    }
    .head-year {
      font-size: 12px;
      display: flex;
    }
  }
  .seamless-warp {
  width: 100%;
  height: calc(100% - 16px);
  overflow: hidden;
  .mess-list {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid #bbbbbb;
    .mess {
      width: 85%;
      .mess-top {
        height:35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info {
          width: 60%;
          display: flex;
        }
        .mess-time {
          text-align: end;
          width: 40%;
        }
      }
      .mess-bottom {
        height:35px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
  }
  }
  
}
</style>
