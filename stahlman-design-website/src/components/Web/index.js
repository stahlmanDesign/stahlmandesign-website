import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import LazyLoad from 'react-lazyload'

import './styles.css'

class Web extends Component {
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
    UT.getFlickr("72157640089367186", null, ( images ) => {
      console.log('images',images)
      this.setState({ images })
    })
  }
  getImagesMarkup( images ) {
  return images.map(( image, i ) => {
    return <li key={i} className='photo-container'>

        <Link to={image.urlBig} target='_blank' id={'desc-' + image.index}>
          <LazyLoad height={200} offset={-100} overflow={true}>
            <img className={''} src={image.urlSmall} alt='flickr'/>
          </LazyLoad>
        </Link>
        <Link to={image.descUrl} target='_blank'>
          <p className={'photo-title'}>{image.title} <i className="fa fa-external-link" aria-hidden="true"></i></p>
        </Link>
    </li>
  })
}
render() {
  if ( !this.state.images ) return <div></div>
  return (
    <div className='Web '>
      <div className="jumbotron">
        <div className="container">
          <h1>JavaScript</h1>
          <p>These interactive graphics and data visualisations were done in JavaScript/CSS/Javascript using Bootstrap for responsive design. Data is loaded from CSV files or by querying Google Fusion Tables or any API that returns JSON/JSONP.</p>
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

);
}
}

Web.contextTypes ={
  ctxStore: PropTypes.object
}
export default Web
