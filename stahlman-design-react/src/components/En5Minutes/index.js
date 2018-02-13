import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import ImagesMarkup from '../GeneralShared/ImagesMarkup'
// import LazyLoad from 'react-lazyload'
// import _ from 'lodash'

import './styles.css'

class En5Minutes extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      images: null
    }
  }
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  componentDidMount(){
    const { era } = this.props
    const flickrCode = era === '2005-2008'
      ? '72157600047687564' // '2005-2008'
      : '72157649406297688' // '2009-2016'
    UT.getFlickr(flickrCode, null, ( images ) => {
  		this.setState({ images })
  	})
  }
  render() {
    if ( !this.state.images ) return <div></div>
    const APP = this.APP
    const { era } = this.props
    const imagesMarkupProps = {
      images: this.state.images,
      titleAccessor: 'title',
      imageThumbnailAccessor: 'urlSmall',
      imageLinkAccessor: 'urlBig',
      titleLinkAccessor: 'urlBig' //'descUrl'
    }
    return (
      <div className='En5Minutes sd-pad-top'>
        <div className='jumbotron'>
      		<div className='container'>
      			<h1>{ UT.localise('In5Minutes', APP) + ' — '  + (era || '') }</h1>
      			<p>The page « En 5 minutes » began as a full-page, stand-alone infographic published daily in <em>Le Journal de Montréal</em>. Collections were republished and distributed in schools in 2008.</p>
      		</div>
      	</div>
        <div className='container'>
					<div className='main-content'>
						<ImagesMarkup { ...imagesMarkupProps } />
					</div>
				</div>
      </div>
    )
  }
}

En5Minutes.contextTypes ={
  ctxStore: PropTypes.object
}
export default En5Minutes
