import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import LazyLoad from 'react-lazyload'
import _ from 'lodash'

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
    const { era } = this.props;
    if (era === '2005-2008') {
      UT.getFlickr("72157600047687564", null, ( images ) => {
  			this.setState({ images: images })
  		})
    }
    if (era === '2006-2016') {
      UT.getFlickr("72157649406297688", null, ( images ) => {
  			this.setState({ images: images })
  		})
    }
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
    const { era } = this.props

		// if ( !this.state.images ) return <div></div>
    const images = this.getImagesMarkup( this.state.images || [] )
    return (
      <div className='En5Minutes sd-pad-top'>
        <div className="jumbotron">
      		<div className="container">
      			<h1>En 5 minutes — { era || '' }</h1>
      			<p>The page « En 5 minutes » began as a full-page, stand-alone infographic published daily in <em>Le Journal de Montréal</em>. Collections were republished and distributed in schools in 2008.</p>
      		</div>
      	</div>
        <div className="main-content">
          <ul> { images || [] } </ul>
        </div>
        <div className='container'>
          { !images || images.length === 0
            ? <i className='fa fa-spinner fa-2x fa-pulse'/>
            : ''
          }
        </div>
      </div>

    )
  }
}

En5Minutes.contextTypes ={
  ctxStore: PropTypes.object
}
export default En5Minutes
