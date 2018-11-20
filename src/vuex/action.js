import * as types from './mutaion-types.js'

export const newNote = ({ commit }) => {
  commit(types.NEW_NOTE)
}
