<template>
  <!-- <dv-border-box-12> -->
  <div class="top-chart-1">
    <div class="rc1-header">
      <div class="head-title alltitle">资源分布情况</div>
    </div>

    <div class="rc1-chart-container">
      <dv-charts class="left" :option="option" />
      <dv-charts class="right" :option="option1" />
    </div>
    <div class="boxfoot"></div>
  </div>
  <!-- </dv-border-box-12> -->
</template>

<script>
// 引入chart
import Charts from "@jiaminghi/charts";

export default {
  name: "middleChart3",
  data() {
    return {
      option: {
        xAxis: {
          data: ["备课资源", "试题资源"],
          axisLabel: {
            style: {
              fill: "white",
              fontSize: 10,
              rotate: 0,
            },
          },
        },
        yAxis: {
          data: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
            style: {
              stroke: "white",
              lineWidth: 1,
              color: "white",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            style: {
              fill: "white",
              fontSize: 10,
              rotate: 0,
            },
          },
          nameTextStyle: {
            fill: "#333",
            fontSize: 10,
          },
        },
        series: [
          {
            data: [80, 160],
            type: "bar",
            barWidth: "40",
            // gradient: {
            //   color: ["#37a2da", "#67e0e3"],
            // },
            label: {
              show: true,
              position: "top",
              style: {
                fontSize: 12,
                fill: "#fff",
              },
            },
            independentColor: true,
            independentColors: [
              ["#FF9F7F", "#92b579"],
              ["#4A4DF0", "#67e0e3"],
              ["#4A4DF0", "#92b579"],
              ["#FFDB5C", "#92b579"],
              ["#", "#92b579"],
              ["#fff", "#4A4DF0"],
            ],
          },
        ],
      },
      option1: {
        title: {
          text: "",
        },
        series: [
          {
            type: "pie",
            data: [
              { name: "名校课堂", value: 61 },
              { name: "名师课题", value: 32 },
              { name: "专递课堂", value: 65 },
            ],
            insideLabel: {
              show: true,
              // formatter:(dataItem) => (dataItem.name)
            },
            outsideLabel: {
              formatter: "{name}-{value}-个",
              labelLineBendGap: "15%",
              labelLineEndLength: 10,
            },
          },
        ],
      },
    };
  },
  created() {
    // this.loadSafe();
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
      color: #b4dff3;
      font-size: 15px;
    }
    .head-year {
      font-size: 12px;
      display: flex;
    }
  }

  .rc1-chart-container {
    display: flex;

    .left {
      height: 330px;
      margin-top: -110px;
      width: 35%;
    }
    .right {
      // flex: 1;
      // padding-bottom: 20px;
      // padding-right: 20px;
      // box-sizing: border-box;
      height: 330px;
      margin-top: -80px;
      width: 65%;
    }
  }
}
</style>
