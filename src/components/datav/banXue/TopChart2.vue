<template>
  <!-- <dv-border-box-8> -->
    <div class="top-chart-2">
      <ul class="clearfix ul-data-first">
        <li>
          <span class="num_val" id="ptTotal">
            <countTo
              :startVal="startVal"
              :endVal="totalNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;所</span><br /><span>学校</span
          ><br /><!-- <span>较昨日+21</span> -->
        </li>
        <li>
          <span class="num_val" id="areaRes">
            <countTo
              :startVal="startVal"
              :endVal="yeyNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;所</span><br /><span>幼儿园</span><br />
        </li>
        <li>
          <span class="num_val" id="schoolRes">
            <countTo
              :startVal="startVal"
              :endVal="xxNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;所</span><br /><span>小学</span><br />
        </li>
        <li>
          <span class="num_val" id="myRes">
            <countTo
              :startVal="startVal"
              :endVal="zxNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;所</span><br /><span>中学</span><br />
        </li>
      </ul>

      <ul class="clearfix ul-data-second">
        <li>
          <span class="num_val" id="onlineLoginPeopleCount">
            <countTo
              :startVal="startVal"
              :endVal="jsNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;名</span><br /><span>教师</span><br />
        </li>
        <li>
          <span class="num_val" id="numberOfPeopleLandingTodayCount">
            <countTo
              :startVal="startVal"
              :endVal="xsNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;名</span><br /><span>学生</span><br />
        </li>
        <li>
          <span class="num_val" id="onLine_nums">
            <countTo
              :startVal="startVal"
              :endVal="ssbNum"
              :duration="6000"
              class="num_val"
            ></countTo> </span
          ><span class="num_unit">&nbsp;%</span><br /><span>师生比</span><br />
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
          ><span class="num_unit">&nbsp;平米</span><br /><span
            >学校占地面积</span
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
          ><span class="num_unit">&nbsp;平米</span><br /><span
            >学校建筑面积</span
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
          ><span class="num_unit">&nbsp;平米</span><br /><span
            >运动场地面积</span
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
      startVal: 0,
      totalNum: 80,
      yeyNum: 34,
      xxNum: 23,
      zxNum: 23,
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
  ul li {
    list-style-type: none;
  }
  .ul-data-first {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    padding: 0.6rem 0 0 0;
  }
  .ul-data-second {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    padding: 0.6rem 0 0 0;
  }
  li {
    float: left;
    text-align: center;
    position: relative;
  }
  .ul-data-first li {
    width: 25%;
  }
  .ul-data-second li {
    width: 33.33%;
  }
  .num_val {
    font-size: 1.4rem;
    color: #d5fd65;
  }
  li span {
    font-size: 0.8rem;
    color: #fff;
    opacity: 0.9;
  }
  .num_unit {
    font-size: 0.8rem;
    color: #fcfbf6;
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
