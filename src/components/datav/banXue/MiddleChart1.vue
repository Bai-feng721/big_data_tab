<template>
  <!-- <dv-border-box-12> -->
  <div class="top-chart-1">
    <div class="rc1-header">
      <div class="head-title alltitle">教学资源年级分布</div>
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
  name: "TopChart1",
  data() {
    return {
      option: {
        xAxis: {
          data: [
            "一年级",
            "二年级",
            "三年级",
            "四年级",
            "五年级",
            "六年级",
            "初一",
            "初二",
            "初三",
            "高一",
            "高二",
            "高三",
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
              8433,
              4366,
              3022,
              5433,
              4366,
              5433,
              4366,
              5433,
              4366,
              5433,
              4366,
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
      config: {
        data: [
          {
            name: "一年级",
            value: 167,
          },
          {
            name: "二年级",
            value: 123,
          },
          {
            name: "三年级",
            value: 98,
          },
          {
            name: "四年级",
            value: 75,
          },
          {
            name: "五年级",
            value: 66,
          },
           {
            name:  "六年级",
            value: 66,
          },
           {
            name:  "初一",
            value: 66,
          },
           {
            name:  "初二",
            value: 66,
          },
           {
            name:"初三",
            value: 66,
          },
           {
            name: "高一",
            value: 66,
          },
          {
            name: "高二",
            value: 66,
          },
           {
            name: "高三",
            value: 66,
          },
          
        ],
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "单位",
        showValue: true,
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
    height: 380px;
    margin-top: -145px;
  }
}
</style>
