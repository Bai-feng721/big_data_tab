<template>
  <div class="box-item">
    <li
      :class="{ 'number-item': !isNaN(item), 'mark-item': !isNaN(item) }"
      v-for="(item, index) in orderNum"
      :key="index"
    >
      <span v-if="!isNaN(item)">
        <i ref="numberItem">0123456789</i>
      </span>
      <span class="comma" v-else>{{ item }}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "hChartNum",
  props: {
    // num: {
    //   type: Number,
    //   default: 301123,
    // },
  },
  data() {
    return {
      num: 123000,
      orderNum: ["0", "0", "0", "0", "0", "0", "0", "0"], // 默认订单总数
      websock: null,
      timeout: 300000, //毫秒
      timeoutObj: null,
      serverTimeoutObj: null,
      lockReconnect: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.toOrderNum(this.num); // 这里输入数字即可调用
    }, 500);
    this.openSocket();
  },
  destroyed() {
    //当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。\
    this.websocket.close();
  },
  methods: {
    openSocket() {
      if (typeof WebSocket == "undefined") {
        alert("不支持 websocket，请安装最新的谷歌浏览器");
      } else {
        //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
        try {
          var socketUrl = "ws://pljy.plzhjy.cn/operate/websocket";
          this.websock = new WebSocket(socketUrl);
          this.init();
        } catch (e) {
          console.log("catch");
          this.reconnet(); //注释重连
        }
      }
    },

    init() {
      this.websock.onopen = this.websocketonopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },

    websocketonopen() {
      console.log("WebSocket连接成功");
      let self = this;
      self.reset();
      self.start();
    },

    websocketonmessage(e) {
      this.reset();
      this.start();
      var obj = JSON.parse(e.data);
      // console.log('obj=======',obj)
      if (obj.data == "heartBeat") {
        //心跳机制
        console.log("heartBeat|" + obj.appId);
      } else if (obj.type == "connect") {
        //websocket连接成功的话，后台会向前端发送数据type为connet的标志位
        // this.toOrderNum(this.num + 2);
        // this.num = this.num+2;

        // console.log("connect|" + obj.appId);
      } else if (obj.type == "send") {
        //后端发送数据接收
        console.log("send|" + obj.appId);
        this.toOrderNum(this.num + 1);
        this.num = this.num + 1;
      }
    },

    websocketonerror(e) {
      console.log("error");
      this.reconnet(); // 连接失败后尝试重新连接
    },
    //关闭连接
    websocketclose(e) {
      console.log("close");
      this.reconnet();
    },

    reconnet() {
      var that = this;
      if (that.lockReconnect) return;
      that.lockReconnect = true;
      //没连接上会一直重连，设置延迟避免请求过多
      setTimeout(function () {
        that.openSocket();
        console.log("reconnect时间" + new Date());
        that.lockReconnect = false;
      }, 5000);
    },

    reset() {
      clearTimeout(this.timeoutObj);
      clearTimeout(this.serverTimeoutObj);
      return this;
    },
    start() {
      var self = this;
      this.timeoutObj = setTimeout(function () {
        //这里发送一个心跳，后端收到后，返回一个心跳消息，
        //onmessage拿到返回的心跳就说明连接正常
        websocket.send('{"data":"HeartBeat"}');
        self.serverTimeoutObj = setTimeout(function () {
          //如果超过一定时间还没重置，说明后端主动断开了
          self.websocket.close(); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
        }, self.timeout);
      }, self.timeout);
    },

    // 设置文字滚动
    setNumberTransform() {
      const numberItems = this.$refs.numberItem; // 拿到数字的ref，计算元素数量
      const numberArr = this.orderNum.filter((item) => !isNaN(item));
      // 结合css，让文字滚动起来
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index];
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
      }
    },

    // 处理订单数字
    toOrderNum(num) {
      num = num.toString();
      if (num.length < 8) {
        num = "0" + num; // 未满8位，补零
        this.toOrderNum(num); // 递归添加"0"补位
      } else if (num.length == 8) {
        this.orderNum = num.split("");
      } else {
        // 数据量超过8位
        this.$message.error("数据量过大");
      }
      this.setNumberTransform();
    },
  },
};
</script>

<style scoped lang="less">
.box-item {
  position: relative;
  width: 100%;
  height: 80px;
  font-size: 40px;
  line-height: 41px;
  text-align: center;
  list-style: none;
  color: #00e4ff;
  font-weight: bold;
  writing-mode: vertical-lr;
  text-orientation: upright;

  -moz-user-select: none;
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}

/*默认逗号设置*/
.number-item {
  width: 10px;
  height: 100px;
  margin-right: 5px;
  line-height: 10px;
  font-size: 48px;
  position: relative;
  & > span {
    position: absolute;
    width: 100%;
    bottom: 0;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}

/*滚动数字设置*/
.number-item {
  width: 12%;
  height: 75px;
  background: url("../img/big.png") no-repeat center center;
  background-size: 100% 100%;
  list-style: none;
  margin-right: 0.5%;
  border-radius: 4px;
  & > span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    & > i {
      font-style: normal;
      position: absolute;
      top: 11px;
      left: 50%;
      transform: translate(-50%, 0);
      transition: transform 1s ease-in-out;
      letter-spacing: 10px;
    }
  }
}
.number-item:last-child {
  margin-right: 0;
}
</style>