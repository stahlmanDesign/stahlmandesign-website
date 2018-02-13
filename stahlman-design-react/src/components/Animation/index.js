import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
// import LazyLoad from 'react-lazyload'
// import _ from 'lodash'

import './styles.css'

class Animation extends Component {

  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    const APP = this.APP
    return (
      <div className='Animation sd-pad-top'>
        <div className='jumbotron'>
      		<div className='container'>
      			<h1>{ UT.localise('Animation', APP) }</h1>
      			<p>I made these animated cartoons from 1998 to 2003. Only the first three are finished. The other videos are collections of sketches, ideas and unfinished portions.</p>
      		</div>
      	</div>

      	<div className='container'>
      	  <div className='row'>
      	  	<div className='col-md-6'>
      	  		{/* 16:9 aspect ratio */}
      	  		<div className='embed-responsive embed-responsive-16by9'>
      	  			<iframe className='embed-responsive-item' src='https://player.vimeo.com/video/84733869' scrolling='no' allowFullScreen></iframe>
      	  		</div>
      	  		<p><a href='http://vimeo.com/84733869'>Ange Terrestre trouve ses ailes</a> — <a href='http://vimeo.com/stahlmandesign'>Justin Stahlman</a></p>
      	  	</div>
      	  	<div className='col-md-6'>
      	  		{/* 16:9 aspect ratio */}
      	  		<div className='embed-responsive embed-responsive-16by9'>
      	  			<iframe className='embed-responsive-item' src='https://player.vimeo.com/video/84733354' scrolling='no' allowFullScreen></iframe>
      	  		</div>
      	  		<p><a href='http://vimeo.com/84733354'>Ange Terrestre et les abeilles</a> — <a href='http://vimeo.com/stahlmandesign'>Justin Stahlman</a></p>
      	  	</div>
      	  	<div className='col-md-6'>
      	  		{/* 16:9 aspect ratio */}
      	  		<div className='embed-responsive embed-responsive-16by9'>
      	  			<iframe className='embed-responsive-item' src='https://player.vimeo.com/video/84643209' scrolling='no' allowFullScreen></iframe>
      	  		</div>
      	  		<p><a href='http://vimeo.com/84643209'>Ange Terrestre et l’oiseau qui a faim</a> — <a href='http://vimeo.com/stahlmandesign'>Justin Stahlman</a></p>
      	  	</div>
      	  	<div className='col-md-6'>
      	  		{/* 16:9 aspect ratio */}
      	  		<div className='embed-responsive embed-responsive-16by9'>
      	  			<iframe className='embed-responsive-item' src='https://player.vimeo.com/video/84734301' scrolling='no' allowFullScreen></iframe>
      	  		</div>
      	  		<p><a href='http://vimeo.com/84734301'>Boy oh Boil</a> — <a href='http://vimeo.com/stahlmandesign'>Justin Stahlman</a></p>
      	  	</div>
      	  	<div className='col-md-6'>
      	  		{/* 16:9 aspect ratio */}
      	  		<div className='embed-responsive embed-responsive-16by9'>
      	  			<iframe className='embed-responsive-item' src='https://player.vimeo.com/video/132043969' scrolling='no' allowFullScreen></iframe>
      	  		</div>
      	  		<p><a href='http://vimeo.com/132043969'>Le Robot Rebelle</a> — <a href='http://vimeo.com/stahlmandesign'>Justin Stahlman</a></p>
      	  	</div>
      	  </div>
      	</div>
      </div>
    )
  }
}

Animation.contextTypes ={
  ctxStore: PropTypes.object
}
export default Animation
