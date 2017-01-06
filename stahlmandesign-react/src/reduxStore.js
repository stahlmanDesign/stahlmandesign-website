// redux store
import { createStore /*, compose */ } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the route reducer
import rootReducer from './reducers/index'

// default data
//import {}

const defaultState = {
  lang: 'fr'//, // same as posts:posts
  //sidebarIsOpen:false
}

const reduxStore = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export const reduxHistory = syncHistoryWithStore( browserHistory, reduxStore )

export default reduxStore;
