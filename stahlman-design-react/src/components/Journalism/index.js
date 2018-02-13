import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import ImagesMarkup from '../GeneralShared/ImagesMarkup'
// import LazyLoad from 'react-lazyload'
// import _ from 'lodash'

import './styles.css'

class Journalism extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      images: null
    }
  }
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  componentDidMount() {
    const flickrCode = '72157600073936574' // news graphics
    UT.getFlickr(flickrCode, null, ( images ) => {
      this.setState({ images })
    })
  }
  render() {
    if ( !this.state.images ) return <div></div>
    const APP = this.APP
    const imagesMarkupProps = {
      images: this.state.images,
      titleAccessor: 'title',
      imageThumbnailAccessor: 'urlSmall',
      imageLinkAccessor: 'urlBig',
      titleLinkAccessor: 'urlBig' //'descUrl'
    }
    return (
      <div className='Journalism sd-pad-top'>
        <div className='jumbotron'>
      		<div className='container'>
      			<h1>{ UT.localise('Journalism', APP) }</h1>
      			<p>Most of these infographics were published in <em>The San Antonio Express-News, The Montreal Gazette, Toronto Star, Le Soleil, La Presse,</em> and the book <em>The Rescue of Jerusalem</em>, by Henri Aubin.</p>
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

Journalism.contextTypes ={
  ctxStore: PropTypes.object
}
export default Journalism
