import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入vue-video-player

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

//引入路由
import VueRouter from 'vue-router'

// 引入store
import store from './store'

Vue.use(VueRouter)


Vue.use(dataV)
Vue.use(ElementUI);
new Vue({
    store,
    render: h => h(App)
}).$mount('#app')