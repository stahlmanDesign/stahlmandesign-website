import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Auth from '../../Auth/Auth'
import history from '../../history'
import Home from '../Home'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'

import './styles.css'

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
  console.log(JSON.stringify(nextState))
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class Callback extends Component {
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    return (
      <div className='Callback'>
        <div className='pt-5'>
          <i className='fa fa-spinner fa-pulse fa-fw'/>
        </div>

        <Router history={history} component={Home}>
          <div>
            <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
          </div>
        </Router>

      </div>
    )
  }
}

Callback.contextTypes ={
  ctxStore: PropTypes.object
}
export default Callback
