import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import LazyLoad from 'react-lazyload'
import _ from 'lodash'

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
  componentDidMount( ) {
    UT.getFlickr("72157600073936574", null, ( images ) => {
      this.setState({ images })
    })
  }
  getImagesMarkup( images ) {
    return images.map(( image, i ) => {
      return <li key={i} className='photo-container'>
				<Link to={image.urlBig} target='_blank' id={'desc-' + image.index}>

						<img className={'unveil-img'} src={image.urlSmall} alt='flickr'/>

					<p className={'photo-title'}>{image.title} </p>
				</Link>
			</li>
    })
  }

  render() {
    const APP = this.APP
    if ( !this.state.images ) return <div></div>
    return (
      <div className='Journalism sd-pad-top'>
        <div className="jumbotron">
      		<div className="container">
      			<h1>Journalism</h1>
      			<p>Most of these infographics were published in <em>The San Antonio Express-News, The Montreal Gazette, Toronto Star, Le Soleil, La Presse,</em> and the book <em>The Rescue of Jerusalem</em>, by Henri Aubin.</p>
      		</div>
      	</div>
        <div className="container">
					<div className="main-content">
						<ul>
							{this.getImagesMarkup( this.state.images )}</ul>
						<div className="gallery"></div>
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
