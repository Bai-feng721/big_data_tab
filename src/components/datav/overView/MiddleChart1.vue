<template>
  <!-- <dv-border-box-8> -->
    <div class="top-chart-2">
      <div class="num-div">
        <number ></number>
        <div class="viewNum">平台访问量</div>
      </div>

      <ul class="clearfix ul-data-second">
        <li>
          <span class="num_val" id="onlineLoginPeopleCount">
            <countTo
              :startVal="startVal"
              :endVal="jsNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;人</span><br /><span>用户总数</span><br />
        </li>
        <li>
          <span class="num_val" id="numberOfPeopleLandingTodayCount">
            <countTo
              :startVal="startVal"
              :endVal="xsNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;人</span><br /><span>在线人数</span><br />
        </li>
        <li>
          <span class="num_val" id="onLine_nums">
            <countTo
              :startVal="startVal"
              :endVal="ssbNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;人</span><br /><span>今日登录</span><br />
        </li>
      </ul>

      <ul class="clearfix ul-data-second">
        <li>
          <span class="num_val" id="onlineLoginPeopleCount">
            <countTo
              :startVal="startVal"
              :endVal="xxmNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;所</span><br /><span
            >学校</span
          ><br />
        </li>
        <li>
          <span class="num_val" id="numberOfPeopleLandingTodayCount">
            <countTo
              :startVal="startVal"
              :endVal="xxjzNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;名</span><br /><span
            >教师</span
          ><br />
        </li>
        <li>
          <span class="num_val" id="onLine_nums">
            <countTo
              :startVal="startVal"
              :endVal="xxydNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;名</span><br /><span
            >学生</span
          ><br />
        </li>
      </ul>
      <div class="boxfoot"></div>
    </div>
  <!-- </dv-border-box-8> -->
</template>

<script>
import countTo from "vue-count-to";
import Number from "./number.vue";

export default {
  components: { countTo ,Number},
  data() {
    return {
      num: 201256,
      startVal:0,
      jsNum: 45,
      xsNum: 2999,
      ssbNum: 54,
      xxmNum: 4289,
      xxjzNum: 2017,
      xxydNum: 2017,
    };
  },
  created() {
    // this.area.schoolCount = 12434;
    // this.$store.commit("ADD_ERROR_LOG", this.area);
  },
};
</script>

<style lang="less" scoped>
.top-chart-2 {
  width: 104%;
  height: 24%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  margin-bottom: 10px;
  .clearfix:after,
  .clearfix:before {
    display: table;
    content: " ";
  }
  .clearfix:after {
    clear: both;
  }
  .num-div{
    width:100%;
    text-align: center;
  
  }
 .ul-data-second {
    height: 50%;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    padding: 0.6rem 0 0 0;
    li {
      width: 33.33%;
      float: left;
      text-align: center;
      position: relative;
      span {
        font-size: 1.2rem;
        color: #fff;
        opacity: 0.9;
      }
    }
    .num_val {
      font-size: 1.6rem;
      color: #d5fd65;
    }
  }
el-col {
  width: 50%;
}

el-row {
  display: flex;
  width: 100%;
}

img {
  height: 30px;
  margin-top: 10px;
}

.content {
  width: 50%;
  display: flex;
}

.first_span {
  display: block;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
}
</style>
