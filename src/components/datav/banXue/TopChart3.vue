<template>
  <!-- <dv-border-box-12> -->
    <div class="top-chart-1 ">
      <div class="rc1-header">
        <div class="head-title alltitle">教学设备分布</div>
      </div>
      <div class="rc1-chart-container">
        <dv-charts class="right" :option="option" />
        <!-- <dv-charts class="right" :option="option" /> -->
      </div>
      <div class="boxfoot"></div>
    </div>
  <!-- </dv-border-box-12> -->
</template>

<script>
// 引入chart
import Charts from "@jiaminghi/charts";

export default {
  name: "TopChart1",
  data() {
    return {
      option: {
        title: {
          text: "",
        },
        series: [
          {
            type: "pie",
            data: [
              { name: "美术器材", value: 21 },
              { name: "体育器材", value: 32 },
              { name: "化学器材", value: 65 },
              { name: "音乐器材", value: 44 },
              { name: "物理器材", value: 52 },
              { name: "图书", value: 80 },
            ],
            insideLabel: {
              show: true,
              // formatter:(dataItem) => (dataItem.name)
            },
            outsideLabel: {
              formatter: "{name}-{value}-件",
              // labelLineBendGap :'20%',
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
  // height: 100%;
  // display: flex;
  // flex-direction: column;
  // padding: 6px;
  .rc1-header {
    height: 50px;
    // text-align: center;
    // line-height: 50px;
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
    // flex: 1;
    // display: flex;
  }

  .right {
    // flex: 1;
    // padding-bottom: 20px;
    // padding-right: 20px;
    // box-sizing: border-box;
    // padding:50px;
    height: 300px;
    // width: 150px;
    margin-top: -50px;
  }
}
</style>
