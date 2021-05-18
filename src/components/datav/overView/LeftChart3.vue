<template>
  <div class="top-chart-1">
    <div class="rc1-header">
      <div class="head-title alltitle">设备分布情况</div>
    </div>
    <div class="rc1-chart-container">
      <div class="box-left">
        <ul class="clearfix ul-data-second">
          <li>
            <span class="num_val" id="onlineLoginPeopleCount">
              <countTo
                :startVal="startVal"
                :endVal="sbNum"
                :duration="6000"
                class="num_val"
              ></countTo> </span
            ><span class="num_unit">&nbsp;台</span><br /><span>监控设备总数</span
            ><br />
          </li>
          <li>
            <span class="num_val" id="numberOfPeopleLandingTodayCount">
              <countTo
                :startVal="startVal"
                :endVal="onlineNum"
                :duration="6000"
                class="num_val"
              ></countTo> </span
            ><span class="num_unit">&nbsp;台</span><br /><span>在线</span
            ><br />
          </li>
          <li>
            <span class="num_val" id="onLine_nums">
              <countTo
                :startVal="startVal"
                :endVal="outlinebNum"
                :duration="6000"
                class="num_val"
              ></countTo> </span
            ><span class="num_unit">&nbsp;台</span><br /><span>离线</span
            ><br />
          </li>
        </ul>
      </div>
      <dv-charts class="right" :option="option" />
    </div>
    <div class="boxfoot"></div>
  </div>
</template>

<script>
// 引入chart
import Charts from "@jiaminghi/charts";
import countTo from "vue-count-to";

export default {
  components: { countTo },

  name: "leftChart3",
  data() {
    return {
      startVal:0,
      sbNum: 45,
      onlineNum: 43,
      outlinebNum: 54,
      option: {
        title: {
          text: "",
        },
        series: [
          {
            type: "pie",
            data: [
              { name: "触控一体机", value: 21 },
              { name: "投影仪", value: 32 },
              { name: "录播一体机", value: 65 },
              { name: "电子白板", value: 44 },
              { name: "终端", value: 52 },
            ],
            insideLabel: {
              show: true,
              // formatter:(dataItem) => (dataItem.name)
            },
            outsideLabel: {
              formatter: "{name}-{value}-台",
              labelLineBendGap :'15%',
              labelLineEndLength : 10
            },
            roseType: true,
          },
        ],
      },
    };
  },
  created() {
    this.loadSafe();
  },
  methods: {
    loadSafe() {
      const container = document.getElementById("safe");
      const myChart = new Charts(container);
      myChart.setOption(this.option);
    },
  },
};
</script>

<style lang="less" scoped>
.top-chart-1 {

  .rc1-header {
    height: 50px;

    font-weight: 500;
    .head-title {
      height: 30px;
      line-height: 30px;
      color: #b4dff3;
      font-size: 15px;
    }
    .head-year {
      font-size: 12px;
      display: flex;
    }
  }

  .rc1-chart-container {
    display:flex;
    .box-left {
      width:30%;
      .ul-data-second {
          height: 80%;

        margin-left: -0.5rem;
        margin-right: -0.5rem;
        padding: 0.6rem 0 0 0;
        li {
          height: 30%;
          text-align: center;

          span {
            font-size: 0.8rem;
            color: #fff;
            opacity: 0.9;
          }
        }
        .num_val {
          font-size: 1.4rem;
          color: #d5fd65;
        }
      }
    }
    .right {
      height: 300px;
      width: 70%;
      margin-top: -50px;
    }
  }
}
</style>
