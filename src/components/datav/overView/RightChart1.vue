<template>
  <!-- <dv-border-box-8> -->
    <div class="top-chart-1">
      <div class="rc1-header ">
        <!-- <div class="head-title ">师资力量分布</div> -->
        <div class="tab" @click="tabData($event)">
          <div class="tab-btn" :class="[activeIndex == '1'?'active-style':'']" data-index="1">录播</div>
          <div class="tab-btn" :class="[activeIndex == '2'?'active-style':'']" data-index="2">直播</div>
          <div class="tab-btn" :class="[activeIndex == '3'?'active-style':'']" data-index="3">校园安防</div>
          <!-- <div class="tab-btn" :class="[activeIndex == '4'?'active-style':'']" data-index="4">职称分布</div>
          <div class="tab-btn" :class="[activeIndex == '5'?'active-style':'']" data-index="5">学科分布</div> -->
        </div>
        
      </div>

      <div class="rc1-chart-container">
        <div class="video">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>
      </div>
          <div class="boxfoot"></div>

    </div>
  <!-- </dv-border-box-8> -->
</template>

<script>
export default {
  name: "rightChart1",
  data() {
    return {
      activeIndex:'1',
     playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src:
              "http://118.180.51.126:9990/vodfiles/sharefiles/live/9680cfad77fdc4c90178d5111b7411d5/202104/16100107/b88a1f1c-ebe5-448b-bd40-e64f9a582360.mp4", //url地址
          },
        ],
        // poster:"https://pic.netbian.com/uploads/allimg/210317/001935-1615911575642b.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
      myChart: "",
    };
  },
   computed: {
    $video() {
      return this.$refs.vueMiniPlayer.$video;
    },
  },
  mounted() {
  },
  methods: {
   
    tabData(e) {
      this.activeIndex = e.target.dataset.index;
      if(this.activeIndex == '1'){
        this.playerOptions.sources[0].src =
         "http://118.180.51.126:9990/vodfiles/sharefiles/live/9680cfad77fdc4c90178d5111b7411d5/202104/16100107/b88a1f1c-ebe5-448b-bd40-e64f9a582360.mp4";
      }else  if(this.activeIndex == '2'){
        this.playerOptions.sources[0].src =
          "http://118.180.51.126:9990/vodfiles/sharefiles/live/9680cdba77fdbea701787da90de774de/202103/31110105/f22667b0-2e5a-4d7f-99a2-f671697aa0ac.mp4";
      }else  if(this.activeIndex == '3'){
       
      }else  if(this.activeIndex == '4'){
      }else  if(this.activeIndex == '5'){
      }
    },
   
    timeActive() {
      this.timer = setInterval(() => {
        this.activeIndex = +this.activeIndex + 1;
        if (this.activeIndex == 6) {
          this.activeIndex = 1;
        }
        this.tabData1();
      }, 4800);
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
    z-index: 999;
    .head-title {
       height: 30px;
      line-height: 30px;
      color: #b4dff3;
    }
    .tab {
      display: flex;
      margin-left: 20px;
      .tab-btn {
        padding: 2px;
        font-size: 12px;
        margin-right: 8px;
        // border: 2px solid #92b579;
        border-radius: 4px;
        cursor: pointer;
      }
      .active-style{
        color: #44bef7;
      }
    }
    
  }

  .rc1-chart-container {
    width: 100%;
    height: 100%;
    .video{
        width: 100%;
        height: 100%;
        margin-top: 12px;
        .video-player{
          width: 100%;
          height: 100px;
        }
        .vjs-poster {
        background-color: #00000000 !important;
        }
        .video-js {
          background-color: #00000000 !important;
        }

        .video-js .vjs-control-bar {
          bottom: 29% !important;
        }
        .video-js .vjs-tech {
          top: -5% !important;
          height: 76% !important;
        }
        .vjs-custom-skin > .video-js .vjs-big-play-button {
          font-size: 2.5em !important;
          top: 35% !important;
        }
    }
  }
}
</style>
