<template>
  <!-- <dv-border-box-12> -->
  <div class="top-chart-1">
    <div class="rc1-header">
      <div class="head-title alltitle">教学资源类型分布</div>
    </div>

    <div class="rc1-chart-container">
      <dv-charts class="right" :option="option" />
      <!-- <dv-decoration-9 style=""> -->
      <div class="cricle">名校课堂<br />666</div>
      <!-- </dv-decoration-9> -->
      <div>
        <!-- <dv-decoration-9 style=""> -->
        <div class="cricle1">专递课堂<br />234</div>
        <!-- </dv-decoration-9> -->
        <!-- <dv-decoration-9 > -->
        <div class="cricle2">名师课堂<br />465</div>
        <!-- </dv-decoration-9> -->
      </div>
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

    .right {
      // flex: 1;
      // padding-bottom: 20px;
      // padding-right: 20px;
      // box-sizing: border-box;
      height: 330px;
      margin-top: -110px;
      width: 35%;
    }
    .cricle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      // border: 1px solid silver;
      background: radial-gradient(
        #29b3e5 45%,
        #196386 45%,
        #196386 60%,
        #0e2e46 40%
      );
    }
    .cricle1 {
      font-size:12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 80px;
      height: 80px;
      margin-left: 30px;
      border-radius: 50%;
      // border: 1px solid silver;
      background: radial-gradient(
        #d47b36 45%,
        #6e4930 45%,
        #6e4930 60%,
        #24232b 40%
      );
    }
    .cricle2 {
      font-size:12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      // border: 1px solid silver;
      background: radial-gradient(
        #d54de4 45%,
        #723289 45%,
        #723289 60%,
        #2e204a 40%
      );
    }
  }
}
</style>
