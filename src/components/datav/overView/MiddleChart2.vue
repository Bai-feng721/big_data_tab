<template>
  <div class="center-cmp">
    <div class="head-title alltitle">区县实时访问量情况</div>
    <!-- 内容域 -->
    <div id="enchart_map" v-show="mapShow"></div>
    <!-- 学校 -->
    <!-- <div id="enchart_map1" v-show="tableShow">
      <vue-seamless-scroll
        :data="schoolList"
        class="seamless-warp"
        :class-option="classOption"
      >
        <div
          class="school-div"
          v-for="(item, index) in schoolList"
          :key="index"
        >
          <div>
            <img :src="item.logo" />
          </div>
          <p class="p-div">{{ item.name }}</p>
        </div>
      </vue-seamless-scroll>
    </div> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import $ from "jquery"; //在需要使用的页面中

// 引入

export default {
  name: "middleChart2",
  components: {},
  data() {
    return {
      //学校列表显示
      tableShow: false,
      //地图显示
      mapShow: true,
      //区县地图对象
      nameMap: null,
      // 学校列表
      schoolList: [],
      num: 301254,
      level: 1, //执行级别
      timer: null,
      plmap: require("../json/plmap.json"),
      cxmap: require("../json/cxmap.json"),
      htmap: require("../json/htmap.json"),
      jcmap: require("../json/jcmap.json"),
      jnmap: require("../json/jnmap.json"),
      ktmap: require("../json/ktmap.json"),
      ltmap: require("../json/ltmap.json"),
      zlmap: require("../json/zlmap.json"),
      mapname: this.plmap,
      mapJson: [
        {
          name: "静宁县",
          json: this.jnmap,
        },
        {
          name: "庄浪县",
          json: this.zlmap,
        },
        {
          name: "华亭市",
          json: this.htmap,
        },
        {
          name: "崆峒区",
          json: this.ktmap,
        },
        {
          name: "崇信县",
          json: this.cxmap,
        },
        {
          name: "泾川县",
          json: this.jcmap,
        },
        {
          name: "灵台县",
          json: this.ltmap,
        },
      ],
      mapDate: [
        {
          name: "静宁县",
          title: [105.73, 35.51, 29999],
          value: "jn",
        },
        {
          name: "庄浪县",
          title: [106.06, 35.2, 29999],
          value: "zl",
        },
        {
          name: "华亭市",
          title: [106.65, 35.21, 29999],
          value: "ht",
        },
        {
          name: "崆峒区",
          title: [106.68, 35.51, 29999],
          value: "kt",
        },
        {
          name: "崇信县",
          title: [107.05, 35.27, 29999],
          value: "cx",
        },
        {
          name: "泾川县",
          title: [107.38, 35.31, 29999],
          value: "jc",
        },
        {
          name: "灵台县",
          title: [107.61, 35.1, 29999],
          value: "lt",
        },
      ],
      isShow: false,
      myInitChart: null,
    };
  },
  computed: {
    classOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 8, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {
    this.loadMiddleData(this.level);
    this.mapname = this.plmap;
  },
  methods: {
    //加载地图
    loadMap() {
      if (this.myInitChart != null) {
        this.myInitChart.dispose();
      }
      var myChart = echarts.init(document.getElementById("enchart_map"));
      this.myInitChart = myChart;
      echarts.registerMap("hanzhou", this.mapname, {});
      myChart.setOption({
        title: {
          top: 20,
          subtext: "",
          x: "center",
          textStyle: {
            color: "#ccc",
          },
        },
        geo: {
          map: "hanzhou",
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#013C62",
              shadowColor: "#182f68",
              shadowOffsetX: 0,
              shadowOffsetY: 5,
            },
            emphasis: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
              color: "green",
              label: {
                show: false,
                position: "top",
              },
            },
          },
        },
        series: [
          {
            type: "map",
            roam: true,
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
              emphasis: {
                textStyle: {
                  color: "#fff",
                },
              },
            },

            itemStyle: {
              normal: {
                // borderColor: "#2ab8ff", 
                // borderWidth: 1.5,
                areaColor: "#4c60ff",
              },
              emphasis: {
                areaColor: "#2AB8FF",
                borderWidth: 0,
                color: "green",
              },
            },
            zoom: 1.1,
            roam: false,
            map: "hanzhou", //使用
            // data: this.difficultData //热力图数据   不同区域 不同的底色
            markPoint: {
              symbol: "image://" + require("../img/bj.png"), // 自定义图片路径
              symbolSize: [60, 60], // 图片大小
              label: {
                show: true,
                 position: ['40%', '40%'],
                color: "#ffc000",
              },
              // coord数组存放地址坐标
              data: [
                { name: "庄浪县", coord: [106.06, 35.2], value: "78" },
                { name: "华亭县", coord: [106.65, 35.21], value: "92" },
                { name: "静宁县", coord: [105.73, 35.51], value: "21" },
                { name: "崆峒区", coord: [106.68, 35.51], value: "37" },
                { name: "崇信县", coord: [107.05, 35.27], value: "50" },
                { name: "泾川县", coord: [107.38, 35.31], value: "66" },
                { name: "灵台县", coord: [107.61, 35.1], value: "50" },
              ],
            },
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            effectType: "ripple",
            showEffectOn: "render",
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: "fill",
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: "#ffff",
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            data: this.mapDate,
          },
        ],
      });

      let t = this;
      myChart.on("click", function (e) {
        // t.clickLoadMap(e);
      });
      let index = -1;
      this.timer = setInterval(function () {
        // 隐藏提示框
        myChart.dispatchAction({
          type: "hideTip",
          seriesIndex: 0,
          dataIndex: index,
        });
        // 显示提示框
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: index + 1,
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: index,
        });
        // 高亮指定的数据图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: index + 1,
        });
        index++;
        if (index > 6) {
          index = -1;
        }
      }, 2000);

      myChart.on("mousemove", function (e) {
        // clearInterval(this.timer);
        // myChart.dispatchAction({
        //   type: "downplay",
        //   seriesIndex: 0,
        // });
        // myChart.dispatchAction({
        //   type: "highlight",
        //   seriesIndex: 0,
        //   dataIndex: e.dataIndex,
        // });
        // myChart.dispatchAction({
        //   type: "showTip",
        //   seriesIndex: 0,
        //   dataIndex: e.dataIndex,
        // });
      }); //---------------------------------------------鼠标移入静止播放

      myChart.on("mouseout", function (e) {
        clearInterval(this.timer);
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: e.dataIndex,
        }); //鼠标移出后先把上次的高亮取消
        this.timer = setInterval(function () {
          // 隐藏提示框
          myChart.dispatchAction({
            type: "hideTip",
            seriesIndex: 0,
            dataIndex: index,
          });
          // 显示提示框
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: index + 1,
          });
          // 取消高亮指定的数据图形
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: index,
          });
          // 高亮指定的数据图形
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: index + 1,
          });
          index++;
          if (index > 6) {
            index = -1;
          }
        }, 2000);
      });
    },
    //点击加载地图
    clickLoadMap(e) {
      this.isShow = true;
      this.nameMap = this.loadCountryName(e.name);
      this.mapname = this.nameMap;
      console.log(this.mapname, "选择地图");

      this.mapDate = [];
      this.level++;

      this.loadMiddleData(this.level);
    },

    //加载区县名
    loadCountryName(countryName) {
      let name = null;
      if (countryName == "静宁县") {
        name = this.jnmap;
      }
      if (countryName == "庄浪县") {
        name = this.zlmap;
      }
      if (countryName == "华亭市") {
        name = this.htmap;
      }
      if (countryName == "崆峒区") {
        name = this.ktmap;
      }
      if (countryName == "崇信区") {
        name = this.cxmap;
      }
      if (countryName == "泾川县") {
        name = this.jcmap;
      }
      if (countryName == "灵台县") {
        name = this.ltmap;
      }
      return name;
    },
    //返回地图第一层
    gobackMap() {
      // debugger;
      this.level--;
      // 加载市级地图
      if (this.level === 1) {
        this.goCityMap();
      }
      //县级
      if (this.level === 2) {
        this.goCountryMap();
      }
    },
    //加载市级地图
    goCityMap() {
      this.isShow = false;
      this.mapname = this.plmap;
      this.mapDate = [
        {
          name: "静宁县",
          title: [105.73, 35.51, 29999],
          value: "jn",
        },
        {
          name: "庄浪县",
          title: [106.06, 35.2, 29999],
          value: "zl",
        },
        {
          name: "华亭市",
          title: [106.65, 35.21, 29999],
          value: "ht",
        },
        {
          name: "崆峒区",
          title: [106.68, 35.51, 29999],
          value: "kt",
        },
        {
          name: "崇信县",
          title: [107.05, 35.27, 29999],
          value: "cx",
        },
        {
          name: "泾川县",
          title: [107.38, 35.31, 29999],
          value: "jc",
        },
        {
          name: "灵台县",
          title: [107.61, 35.1, 29999],
          value: "lt",
        },
      ];
      this.loadMiddleData(this.level);
    },
    //加载区县地图
    goCountryMap() {
      this.isShow = true;
      this.mapname = this.nameMap;
      console.log(this.mapname, "选择地图");

      this.mapDate = [];
      this.mapShow = true;
      this.tableShow = false;

      this.loadMiddleData(this.level);
    },
    //加载中部数据
    loadMiddleData(level) {
      //加载学校
      if (level === 3) {
        this.loadSchool();
      } else {
        setTimeout(this.loadMap, 500);
      }
    },
    //加载学校列表
    loadSchool() {
      this.schoolList = [
        {
          logo:
            "https://www.cnlogo8.com/d/file/2017-05-08/8ad0bc3a7e43d985ff557c6bce16552c.jpg",
          name: "平凉一中",
        },
        {
          logo: "https://www.cnlogo8.com/img/201606/cnlogo8ytongu4e2xz.png",
          name: "静宁县治平初级中学",
        },
        {
          logo: "https://www.cnlogo8.com/img/201606/cnlogo8avsicmo4zgr.png",
          name: "	华亭县安口初级中学",
        },
        {
          logo: "https://www.cnlogo8.com/img/201606/cnlogo8uak2r11rkh4.png",
          name: "华亭二中",
        },
        {
          logo: "https://www.cnlogo8.com/img/201606/cnlogo8bwt35l4brry.png",
          name: "崇信县第一中学",
        },
        {
          logo: "https://www.cnlogo8.com/img/201606/cnlogo8m3osbzv4ftt.png",
          name: "新集九年制学校",
        },
        {
          logo: "https://www.cnlogo8.com/img/201606/cnlogo8ctu2qvuglay.png",
          name: "	泾川县陇川中学",
        },
        {
          logo:
            "https://www.cnlogo8.com/d/file/2014-03-06/07aa65bd9b3b76a784893a08201be6db.jpg",
          name: "	平凉市丰收机械厂职工子弟学校",
        },
        {
          logo: "https://www.cnlogo8.com/img/201606/cnlogo8wo1wylob1p4.png",
          name: "	平凉市第五中学",
        },
        {
          logo: "https://www.cnlogo8.com/img/201606/cnlogo8ng10mo4yuab.png",
          name: "庄浪县南湖小学",
        },
      ];
      this.mapShow = false;
      this.tableShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
#enchart_map {
  height: 80%;
}
#enchart_map1 {
  height: 76%;
}
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  .head-title {
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    color: #b4dff3;
  }
}
.num-div {
  margin-top: 20px;
}
.vister {
  font-size: 17px;
  text-align: center;
  padding-top: 10px;
}
.school-div {
  height: 40%;
  background-color: #12235c;
  width: 23%;
  border-radius: 10px;
  float: left;
  margin-left: 1%;
  margin-bottom: 10px;
  margin-top: 10px;

  div {
    text-align: center;
    img {
      height: 70px;
      border-radius: 50%;
      width: 70px;
    }

    p {
      text-align: center;
    }
  }
}

.school-div:hover {
  background-color: #1a5896;
}
.p-div {
  text-align: center;
  font-size: 20px;
  overflow: hidden; // 溢出隐藏
  text-overflow: ellipsis; // 显示省略号
  white-space: nowrap; // 不换行
  width: 90%;
  margin-left: 5%;
}
.seamless-warp {
  width: 100%;
  height: calc(100% - 16px);
  overflow: hidden;
}
</style>
