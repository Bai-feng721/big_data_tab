<template>
  <!-- <dv-border-box-12> -->
  <div class="top-chart-1">
    <div class="rc1-header">
      <div class="head-title alltitle">应用系统累计使用量</div>
    </div>

    <div class="rc1-chart-container">
      <dv-charts class="right" :option="option" />
      <!-- <dv-capsule-chart :config="config" style="width: 400px; height: 150px" /> -->
    </div>
    <div class="boxfoot"></div>
  </div>
  <!-- </dv-border-box-12> -->
</template>

<script>
// 引入chart
import Charts from "@jiaminghi/charts";

export default {
  name: "leftChart1",
  data() {
    return {
      option: {
        xAxis: {
          data: [
            "网络空间",
            "活动组织",
            "智慧校园",
            "备课工具",
            "备课工具",
           
          ],
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
            data: [
              3022,
              2433,
              4366,
              3022,
              5433,
            ],
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
              "#FF9F7F",
              "#92b579",
              "#4A4DF0",
              "#67e0e3",
              "#FFDB5C",
              "#fff",
              "#fb7373",
              "#df75ee",
              "#ec1b1b",
              "#5fe853",
              "#4ee4e8",
              "#e4e33e",
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

  // .rc1-chart-container {
  //   flex: 1;
  //   display: flex;
  // }

  .right {
    // flex: 1;
    // padding-bottom: 20px;
    // padding-right: 20px;
    // box-sizing: border-box;
    height: 350px;
    margin-top: -100px;
  }
}
</style>
