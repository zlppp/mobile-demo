import * as types from './mutaion-types.js'

export default {
  [types.NEW_NOTE](state, note) {
    let new_note = {
      id: '',
      data: new Date().Format('yyyy-mm-dd'),
      content: '',
    }
    state.note.push(new_note)
  },
  [types.nickName](state, nickName) {
    state.nickName = nickName
  }
}
