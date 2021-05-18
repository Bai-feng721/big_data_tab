<template>
  <!-- <dv-border-box-8 :reverse="true"> -->
    <div class="top-chart-1">
      <div class="rc1-header">
        <div class="head-title alltitle">教学资源学科</div>
      </div>

      <div class="rc1-chart-container">
        <dv-charts class="right" :option="option" />
      </div>
          <div class="boxfoot"></div>

    </div>
  <!-- </dv-border-box-8> -->
</template>

<script>
// 引入chart
import Charts from "@jiaminghi/charts";

export default {
  name: "TopChart1",
  data() {
    return {
      option: {
        radar: {
          polygon: true,
          indicator: [
            { name: "语文", max: 300 },
            { name: "数学", max: 300 },
            { name: "英语", max: 300 },
            { name: "化学", max: 300 },
            { name: "物理", max: 300 },
            { name: "生物", max: 300 },
            { name: "政治", max: 300 },
          ],
          axisLabel: {
            // show :false,
            // formatter: "{name}-{value}-件",
            style: {
              fill: "#fff",
            },
          },
        },
        series: [
          {
            type: "radar",
            data: [111, 256, 178, 152, 266, 132, 200],
            animationCurve: "easeOutBack",

            label: {
              show: true,
              formatter: "{value}",
              style: {
              fill: "#FFDB5C",
            },
            },
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
  height: 100%;
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
      font-size: 15px;
      color: #b4dff3;
    }
    .head-year {
      font-size: 12px;
      display: flex;
    }
  }

  .right {
    height: 250px;
    margin-top: -30px;
  }
}
</style>
