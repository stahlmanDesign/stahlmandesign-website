import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UT } from '../libraries/utilities'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from '../components/Home'
import JavaScript from '../components/JavaScript'
import Flash from '../components/Flash'
import Games from '../components/Games'
import Journalism from '../components/Journalism'
import En5Minutes from '../components/En5Minutes'
import Animation from '../components/Animation'
import Illustration from '../components/Illustration'
import Music from '../components/Music'
import Cv from '../components/Cv'
import NavigationMenu from '../components/NavigationMenu'
import Footer from '../components/Footer'
import localisation from '../libraries/localisation.json'

import './styles.css'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      APP: this, // NOTE add a reference to component's self so all child components can access its state and use it like a poor man's redux store
      lang: 'en', // if never logged in, and or changed preference, default to this
      localisation: { 'ready': false }, // wait for language data to load before displaying. this object will contain readt: true in addition to all the loaded language data
    }
  }
  // NOTE used internally by React so other components can find props passed down from this component even if it is not the direct parent
  getChildContext = () => ({ ctxStore: this.state }) // store that is passed to APP just once

  componentWillMount(){
    this.setState({ localisation },()=>{
      // this.initLoadSequence()
      // intercom.init() // Once your app initializes, call this function to connect to Intercom and load the Messenger
      this.setState({ loadingMessage: UT.localise('Initialization', this) })
    })
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <NavigationMenu/>
        </header>

        <Switch>
          {/* put /users/create before /users because router will match shorter link first */}
          {/* Alternatively, use 'exact' param to put in the order you wish */}
          {/* https://css-tricks.com/react-router-4/ */}
          <Route exact path={ '/' } component={ Home }/>
          <Route exact path={ '/home' } component={ Home }/>
          <Route exact path={ '/javascript' } component={ JavaScript }/>
          <Route exact path={ '/flash' } component={ Flash }/>
          <Route exact path={ '/games' } component={ Games }/>
          <Route exact path={ '/journalism' } component={ Journalism }/>
          <Route exact path={ '/en5minutes/1' } component={() => (<En5Minutes era='2005-2008' />)}/>
          <Route exact path={ '/en5minutes/2' } component={() => (<En5Minutes era='2009-2016' />)}/>
          <Route exact path={ '/animation' } component={ Animation }/>
          <Route exact path={ '/illustration' } component={ Illustration }/>
          <Route exact path={ '/music' } component={ Music }/>
          <Route exact path={ '/cv' } component={ Cv }/>

          <Route render={ () => <div>404</div> } />

        </Switch>
        <Footer/>
      </div>
    )
  }
}

// NOTE notice that this is an exception: app.childContextTypes
//In all other components that want to access this component
// it is simply MyComponent.contextTypes
App.childContextTypes = {
  ctxStore: PropTypes.object // so component receives relevant context
}
export default withRouter(App)
