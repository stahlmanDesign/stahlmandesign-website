import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import LazyLoad from 'react-lazyload'
import _ from 'lodash'

import './styles.css'

class JavaScript extends Component {
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
          <img className={''} src={ image.urlSmall } alt='flickr'/>
        </Link>
        <Link to={image.descUrl} target='_blank'>
          <p className={'photo-title'}>{ image.title } <i className="fa fa-external-link" aria-hidden="true"></i></p>
        </Link>
      </li>
    })
  }

  render() {
    const APP = this.APP
    if ( !this.state.images ) return <div></div>

    return (
      <div className='JavaScript sd-pad-top'>
        <div className="jumbotron">
          <div className="container">
            <h1>{ UT.localise('JavaScript', APP) }</h1>
            <p>{ UT.localise('TheseInteractiveGraphicsAndDataVisualisations_ETC', APP) }</p>
          </div>
        </div>
        <div className="container">
          <div className="main-content">
            <ul>
              { this.getImagesMarkup(this.state.images) }</ul>
            <div className="gallery"></div>
          </div>
        </div>
      </div>

    )
  }
}

JavaScript.contextTypes ={
  ctxStore: PropTypes.object
}
export default JavaScript
