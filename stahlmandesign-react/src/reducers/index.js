import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import lang from './lang'
import sidebarIsOpen from './sidebarIsOpen'

const rootReducer = combineReducers({
  lang, //, // same as language:language
  sidebarIsOpen, // same as sidebarIsOpen:sidebarIsOpen
  routing: routerReducer // here key is different
});

export default rootReducer

// import { SHOW_MODAL, HIDE_MODAL, SET_NAME } from '../actions/actions'


// redux tutorial

// a reducer takes in:
// 1. the action (data what happened)
// 2. copy of current state


// function modals( state = {
//   isShowing: false,
//   message: ''
// }, action) {
//   switch (action.type) {
//     case SHOW_MODAL:
//       return Object.assign({}, state, {
//         isShowing: true,
//         message: action.message
//       })
//     case HIDE_MODAL:
//       return Object.assign({}, state, {
//         isShowing: false
//       })
//     default:
//       return state
//   }
// }
//
// function name(state = null, action) {
//   switch (action.type){
//     case SET_NAME:
//       return action.name
//     default:
//       return state
//   }
// }
//
// export default combineReducers({
//   modals,
//   name
// })
