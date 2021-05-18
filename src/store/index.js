import Vue from 'vue'
import Vuex from 'vuex'

import leftchart1 from './module/leftchart1'
import jsonInfo from './module/jsonInfo'

//挂载Vuex
Vue.use(Vuex)



const store = new Vuex.Store({
    modules: {
        leftchart1,
        jsonInfo
    },
})

export default store