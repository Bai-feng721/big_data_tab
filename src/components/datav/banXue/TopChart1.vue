<template>
  <div class="top-chart-1">
    <div class="rc1-header">
      <div class="head-title alltitle">学校分布</div>
      <div class="head-year" @click="handleClick($event)">
        <p :class="[activeIndex == '1' ? 'active-style' : '']" data-index="1">
          幼儿园&nbsp;&nbsp;
        </p>
        <p :class="[activeIndex == '2' ? 'active-style' : '']" data-index="2">
          小学&nbsp;&nbsp;
        </p>
        <p :class="[activeIndex == '3' ? 'active-style' : '']" data-index="3">
          初中&nbsp;&nbsp;
        </p>
        <p :class="[activeIndex == '4' ? 'active-style' : '']" data-index="4">
          完全中学&nbsp;&nbsp;
        </p>
        <p :class="[activeIndex == '5' ? 'active-style' : '']" data-index="5">
          一贯制&nbsp;&nbsp;
        </p>
        <p :class="[activeIndex == '6' ? 'active-style' : '']" data-index="6">
          高中&nbsp;&nbsp;
        </p>
        <!-- <p :class="[activeIndex == '7' ? 'active-style' : '']" data-index="7">
          大学&nbsp;&nbsp;
        </p> -->
      </div>
    </div>

    <div class="rc1-chart-container">
      <div class="right" id="container2" />
      <!-- <dv-charts class="right" :option="option" /> -->
    </div>
    <div class="boxfoot"></div>
  </div>
</template>

<script>
// 引入chart
import Charts from "@jiaminghi/charts";
export default {
  name: "TopChart1",
  data() {
    return {
      activeIndex: "1",
      option: {
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
            data: [200, 160, 40, 200, 160, 40, 160, 40],
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
              "#4ee4e8",
              "#0396FF",
              "#fb7373",
              "#5fe853",
              "#FF9F7F",
              "#92b579",
              "#e25353",
              "#67e0e3",
              "#FFDB5C",
              "#fff",
              "#fb7373",
              "#df75ee",
              "#ec1b1b",
              "#5fe853",
              "#e4e33e",
            ],
          },
        ],
      },
      
      myChart: "",
      timer: "",
    };
  },
  mounted() {
    this.loadSafe();
    this.timeActive();
  },
  methods: {
    loadSafe() {
      const container = document.getElementById("container2");
      this.myChart = new Charts(container);
      this.myChart.setOption(this.option);
    },
    timeActive() {
      this.timer = setInterval(() => {
        this.activeIndex = +this.activeIndex + 1;
        if (this.activeIndex == 7) {
          this.activeIndex = 1;
        }
        this.handleClick1();
      }, 5000);
    },
    handleClick1() {
      if (this.activeIndex == "1") {
        this.option.series[0].data = [100, 120, 140, 20, 60, 90, 160, 40];
      } else if (this.activeIndex == "2") {
        this.option.series[0].data = [200, 120, 140, 70, 160, 90, 60, 70];
      } else if (this.activeIndex == "3") {
        this.option.series[0].data = [30, 120, 140, 20, 60, 90, 160, 40];
      } else if (this.activeIndex == "4") {
        this.option.series[0].data = [19, 120, 120, 120, 160, 40, 160, 120];
      } else if (this.activeIndex == "5") {
        this.option.series[0].data = [130, 120, 140, 20, 60, 90, 10, 140];
      } else if (this.activeIndex == "6") {
        this.option.series[0].data = [30, 120, 140, 20, 60, 90, 110, 140];
      }
      this.myChart.setOption(this.option);
    },
    handleClick(e) {
      this.activeIndex = e.target.dataset.index;
      if (this.activeIndex == "1") {
        this.option.series[0].data = [100, 120, 140, 20, 60, 90, 160, 40];
      } else if (this.activeIndex == "2") {
        this.option.series[0].data = [200, 120, 140, 70, 160, 90, 60, 70];
      } else if (this.activeIndex == "3") {
        this.option.series[0].data = [30, 120, 140, 20, 60, 90, 160, 40];
      } else if (this.activeIndex == "4") {
        this.option.series[0].data = [19, 120, 120, 120, 160, 40, 160, 120];
      } else if (this.activeIndex == "5") {
        this.option.series[0].data = [130, 120, 140, 20, 60, 90, 10, 140];
      } else if (this.activeIndex == "6") {
        this.option.series[0].data = [30, 120, 140, 20, 60, 90, 110, 140];
      } 
      this.myChart.setOption(this.option);
    },
  },
  // destroyed(){
  //   clearInterval(this.timer);
  // }
};
</script>

<style lang="less" scoped>
.top-chart-1 {
  height: 100%;
  // padding: 6px ;
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
      padding-left: 10px;
      p {
        cursor: pointer;
      }
      .active-style {
        color: #44bef7;
      }
    }
  }

  .right {
    height: 300px;
    margin-top: -70px;
    pointer-events: none;
  }
}
</style>
