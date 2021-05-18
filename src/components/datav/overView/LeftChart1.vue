<template>
  <!-- <dv-border-box-8> -->
  <div class="top-chart-2">
    <div class="head-title alltitle">应用系统接入情况</div>

    <ul class="clearfix ul-data-second">
      <li>
        <span class="num_val" id="onlineLoginPeopleCount">
          <countTo
            :startVal="startVal"
            :endVal="jsNum"
            :duration="6000"
            class="num_val"
          ></countTo> </span
        ><span class="num_unit">&nbsp;个</span><br /><span>已对接</span><br />
      </li>
      <li>
        <span class="num_val" id="numberOfPeopleLandingTodayCount">
          <countTo
            :startVal="startVal"
            :endVal="xsNum"
            :duration="6000"
            class="num_val"
          ></countTo> </span
        ><span class="num_unit">&nbsp;个</span><br /><span>本地部署</span><br />
      </li>
      <li>
        <span class="num_val" id="onLine_nums">
          <countTo
            :startVal="startVal"
            :endVal="ssbNum"
            :duration="6000"
            class="num_val"
          ></countTo> </span
        ><span class="num_unit">&nbsp;个</span><br /><span>异地部署</span><br />
      </li>
    </ul>
    <div class="head-title alltitle">应用系统交换情况</div>

    <ul class="clearfix ul-data-second">
      <li>
        <span class="num_val" id="onlineLoginPeopleCount">
          <countTo
            :startVal="startVal"
            :endVal="xxmNum"
            :duration="6000"
            class="num_val"
          ></countTo> </span
        ><span class="num_unit">&nbsp;个</span><br /><span>累计采集应用</span
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
        ><span class="num_unit">&nbsp;个</span><br /><span>资产目录清单</span
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
        ><span class="num_unit">&nbsp;个</span><br /><span>累计采集数据</span
        ><br />
      </li>
    </ul>
    <div class="boxfoot"></div>
  </div>
  <!-- </dv-border-box-8> -->
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return {
      startVal:0,
      jsNum: 45,
      xsNum: 43,
      ssbNum: 54,
      xxmNum: 3289,
      xxjzNum: 344,
      xxydNum: 655,
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // margin-bottom: 10px;
  .head-title {
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    color: #b4dff3;
  }

  .clearfix:after,
  .clearfix:before {
    display: table;
    content: " ";
  }
  .clearfix:after {
    clear: both;
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
}
.first_div,
.second_div {
  height: 50% !important;
  display: flex;
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
</style>
