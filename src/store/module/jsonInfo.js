const jsonInfo = {
    state: {
        jsonInfo: ''
    },
    mutations: {
      ADD_JSONINFO: (state, jsonInfo) => {
        state.jsonInfo=jsonInfo
      }
    },
    actions: {
      addJsoninfo({
        commit
      }, log) {
        commit('ADD_JSONINFO', jsonInfo)
      }
    }
  }
  
  export default jsonInfo
  