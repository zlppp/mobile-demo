import vue from 'vue'
import vuex from 'vuex'
import state from './state'
import mutations from './mutation'

export default new vuex.Store({
  state,
  mutations,
})
