// react
import React from 'react'
import ReactDOM from 'react-dom'

// react-router
import { Router /*, browserHistory */ } from 'react-router'
import routes from './routes.js'

// redux
import { Provider } from 'react-redux' // this is not the Index on Index, this is for future redux implementation
import reduxStore, { reduxHistory } from './reduxStore' // for future redux
// import thunk from 'redux-thunk';

// app-specific
import localisation from './libraries/localisation.json'
import {
  newLoginDefault,
  newTagDefault,
  newTokenDefault,
  newMemberDefault,
  newCompanyDefault,
  newWorkInstructionDefault
 } from './libraries/defaults'

// stats
import { intercom } from './libraries/statistics'
import ReactGA from 'react-ga'; // https://www.npmjs.com/package/react-ga
ReactGA.initialize('UA-83796779-1'); //Unique Google Analytics tracking number

import { urls /*, membersLogout */ } from './libraries/global'
import { LS } from './libraries/localStorage'

import { NumberIsIntegerPolyfill } from './libraries/utilities'
NumberIsIntegerPolyfill()
// styles
import './styles/index.css'

// NOTE the below libraries are imported with <script> tag because not yet working with import modules
// import bootstrap from 'bootstrap'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import bootstrap from 'bootstrap'
// require('bootstrap')

let thisComponent; // declare outside of Index class scope so it can be passed to all other components in router

const consoleOriginal= {
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error
};
console.enable = ()=> {
  console.log = consoleOriginal.log;
  console.info = consoleOriginal.info;
  console.warn = consoleOriginal.warn;
  console.error = consoleOriginal.error;
};
console.disable = ()=> {
  console.log = ()=>{};
  console.info = ()=>{};
  console.warn = ()=>{};
  console.error = ()=>{};
};


class Index extends React.Component{
  constructor(props){
    super(props)

    // NOTE poor-man's store, called ctxStore, not using Redux, but one master component with state
    thisComponent = this; // add a reference to this component to its own state so all can access one master state
    this.state = {
      Index: thisComponent, // a refrence to the master component inside itself in order to set master state
      lang: 'fr', // if never logged in, and or changed preference, default to this
      age: 40,
      weeksAlive: 2080,
      lifeExpectancy: 90,
      alive: true,
      childhood: false,
      parenthood: false,
      jobs: false,
      circle:{width:2,height:2,marginLeft:3,marginTop:2,paddingLeft:1}
    }
  }

  componentWillMount(){
      this.setState({ localisation:localisation })
      // console.log(this.props.reduxStore.getState()) // redux store
  }

  // used by other components to find props passed down
  getChildContext(){
    return {
      ctxStore: this.state // store that is passed to Index just once
    }
  }
  render(){
    return this.props.children; // provide props to all
  }
}

// this is required in each component to allow access to ctxStore
Index.childContextTypes = {
  ctxStore: React.PropTypes.object
};

// https://web-design-weekly.com/2016/07/08/adding-google-analytics-react-application/
function fireTracking() {
    ReactGA.pageview(window.location.pathname);
    intercom.viewOrRouteChange();
}

// finally render the routes wrapped in the master Index component which serves to provide one master state until moving to redux
ReactDOM.render(
  <Provider store={reduxStore}>
    <Index>
      <Router
        history={ reduxHistory }
        onUpdate={fireTracking}
        routes={routes}
      />
    </Index>
  </Provider>,
  document.getElementById('root')
);
