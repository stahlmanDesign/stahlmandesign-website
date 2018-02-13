import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'

import './styles.css'

class Home extends Component {
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    return (
      <div className='Home sd-pad-top'>
        <div className='jumbotron'>
      		<div className='container'>
      			<h1>Stahlman Design</h1>
      			<div className='embed-responsive embed-responsive-16by9'>
      				<iframe className='embed-responsive-item' src='https://player.vimeo.com/video/121525054?color=ff0179' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      			</div>

      			<p><Link to='http://www.thedreamsong.com/' target='_blank'>{ 'The Dreamsong' }</Link>{ ' is a retro-style game, and requires a keyboard (not optimized for touch screens)' }</p>
      		</div>
      	</div>

      </div>
    )
  }
}

Home.contextTypes ={
  ctxStore: PropTypes.object
}
export default Home
