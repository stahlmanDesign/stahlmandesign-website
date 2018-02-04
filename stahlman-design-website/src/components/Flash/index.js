import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
// import LazyLoad from 'react-lazyload'
// import _ from 'lodash'

import './styles.css'

class Flash extends Component {
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }

  render() {
    const APP = this.APP
    // if ( !this.state.images ) return <div></div>

    return (
      <div className='Flash sd-pad-top'>
        <div className="jumbotron">
      		<div className="container">
      			<h1>Flash</h1>
      			<p>Before HTML5, the mobile web and responsive design, interactive graphics were almost always created in Flash and Actionscript. These interactives were created between 2008-2011.</p>
      		</div>
      	</div>

      	<div className="container">
      		{/* 16:9 aspect ratio */}
      		<div className="embed-responsive embed-responsive-4by3">
            <span className="fa-stack fa-lg">
              <i className="fa fa-camera fa-stack-1x"></i>
              <i className="fa fa-ban fa-stack-2x text-danger"></i>
            </span>
            <span>These graphics appear to no longer be hosted on canoe.ca. One day I will host my original files.</span>
      			<iframe className="embed-responsive-item" src="http://www.canoe.ca/FlashInfo/home.php?lang=fr" scrolling="yes" allowFullScreen></iframe>
      		</div>
      	</div>
      </div>

    )
  }
}

Flash.contextTypes ={
  ctxStore: PropTypes.object
}
export default Flash
