import vue from 'vue'
import vuex from 'vuex'
import Format from '../libs/dateFormat'
import {EDIT_NOTE} from "./mutation-types"; // 时间

vue.use(vuex)

export default new vuex.Store({
  state: {
    show: true,
    count: 0,
    note: [], // 新便签
    isNoteList: [],
    activeNote: '', // 编辑的便签
    search: '', // 搜索内容
    isCheck: false, // 是否长按选中
    deleteNote: [] // 删除的便签
  },
  mutations: {
    addNum(state, n) {
      state.count = state.count + n
    },
    // 新建便签 官方建议muctaions类型用大写常量表示
    NEWNOTE(state, content) {
      let note_content = {
        id: 0,
        time : new Date().Format('yyyy-MM-dd hh:mm'),
        content: content,
        done: false
      }
      state.activeNote = note_content.content
      state.note.push(note_content)
    },
    // 编辑便签
    EDIT_NOTE(state, content) {
      state.activeNote = content
    },
    // 删除便签
    DELETE_NOTE(state, note) {
      state.note.splice(1, 1);
     
    }
  },
  actions: {
    newNote ({ commit }, content){
      commit("NEWNOTE", content);
    },
    editNote({ commit }, content) {
      commit("EDIT_NOTE", content)
    },
    deleteNote({ commit }, note) {
      commit('DELETE_NOTE', note)
    }
    
  },
  getters: {
    isNoteList: state => {
      if (state.search !== '' && state.note.length > 0) {
        return state.note.filter(note => note.content && note.content.indexOf(state.search) > -1)
      } else {
        return state.note.filter(note => note.content)
      }
    },
    newSearch: state => {
      state.note.map((note, searchVal) => {
        if (note.content.search(searchVal) !== -1) {
          state.note.push(note)
        }
      })
    }
  }

  
})
