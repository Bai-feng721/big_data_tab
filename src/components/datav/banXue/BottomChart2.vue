<template>
  <!-- <dv-border-box-8 :reverse="true"> -->
    <div class="top-chart-1">
      <div class="rc1-header alltitle">
        <div class="head-title ">学生数量分布</div>
        <div class="tab" @click="tabData($event)">
          <div class="tab-btn" :class="[activeIndex == '1'?'active-style':'']" data-index="1">区县分布</div>
          <div class="tab-btn" :class="[activeIndex == '2'?'active-style':'']" data-index="2">年龄分布</div>
        </div>
      </div>

      <div class="rc1-chart-container">
        <div class="left">
          <div >全市学生分布</div>
          <dv-charts class="left-chart" :option="option" />
        </div>
        <div class="right" id="container1" />
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
      activeIndex:'1',
      option: {
        xAxis: {
          data: ["市直", "崆峒"],
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
            data: [3022, 4433],
            type: "bar",
            barWidth: "60",
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
            independentColors: [ ["#a4d9ff", "#0d9bff"], ["#0f11d0", "#f99d06"]],
          },
        ],
      },

      option1: {
        xAxis: {
          data: [
            "市直",
            "崆峒",
            "静宁",
            "华亭",
            "泾川",
            "庄浪",
            "崇信",
            "灵台",
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
            data: [3022, 4433, 6366, 3022, 5433, 6366, 5433, 4366],
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
            independentColors: [["#5cbbff","#FF9F7F"],["#37a2da", "#67e0e3"],["#4A4DF0","#92b579"],["#FFDB5C","#92b579"],["#FF9F7F","#92b579"],["#fff","#4A4DF0"]],
          },
        ],
      },

      option2: {
        xAxis: {
          data: [
            "29岁及以下",
            "30-34岁",
            "35-39岁",
            "40-44岁",
            "45-49岁",
            "50-54岁",
            "55岁及以上",
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
            data: [22, 84, 466, 22, 54, 466, 54],
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
            independentColors: [["#5cbbff","#FF9F7F"],["#37a2da", "#67e0e3"],["#4A4DF0","#92b579"],["#FFDB5C","#92b579"],["#FF9F7F","#92b579"],["#4A4DF0","#fff"]],
          },
        ],
      },

      myChart: "",
    };
  },
  mounted() {
    this.loadSafe();
    this.timeActive();
  },
  methods: {
    loadSafe() {
      const container = document.getElementById("container1");
      this.myChart = new Charts(container);
      this.myChart.setOption(this.option1);
    },
    tabData(e) {
     this.activeIndex = e.target.dataset.index;
      if(this.activeIndex == '1'){
        this.myChart.setOption(this.option1);
      }else  if(this.activeIndex == '2'){
        this.myChart.setOption(this.option2);
      }
    },
    tabData1() {
      if(this.activeIndex == '1'){
        this.myChart.setOption(this.option1);
      }else  if(this.activeIndex == '2'){
        this.myChart.setOption(this.option2);
      }
    },
    timeActive() {
      this.timer = setInterval(() => {
        this.activeIndex = +this.activeIndex + 1;
        if (this.activeIndex == 3) {
          this.activeIndex = 1;
        }
        this.tabData1();
      }, 5000);
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
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    .head-title {
       height: 30px;
      line-height: 30px;
      color: #b4dff3;
    }
    .tab {
      display: flex;
      .tab-btn {
        padding: 2px;
        font-size: 12px;
        margin-right: 8px;
        border: 2px solid #92b579;
        border-radius: 4px;
        cursor: pointer;
      }
      .active-style{
        color: #44bef7;
      }
    }
  }

  .rc1-chart-container {
    display: flex;
    .left {
      width:30%;
      display: flex;
      flex-direction:column;
      justify-content:center;
      font-size:12px;
      .left-chart{
        height: 260px;
        margin-top: -90px;
      }
    }
    .right {
      // flex: 1;
      // padding-bottom: 20px;
      // padding-right: 20px;
      // box-sizing: border-box;
      height: 320px;
      width:70%;
      margin-top: -80px;
      pointer-events: none;
    }
  }
}
</style>
