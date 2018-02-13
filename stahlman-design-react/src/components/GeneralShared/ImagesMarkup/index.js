import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { UT } from '../../libraries/utilities'
// import LazyLoad from 'react-lazyload'
// import _ from 'lodash'

import './styles.css'

class ImagesMarkup extends Component {
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    const APP = this.APP
    const {
      images,
      titleAccessor,
      imageThumbnailAccessor,
      imageLinkAccessor,
      titleLinkAccessor
    } = this.props

    if ( !images ) return <ul></ul>

    const imagesMarkup = images.map(( image, i ) =>
        <li key={ i } className='photo-container'>
          <Link to={ image[imageLinkAccessor] } target='_blank' id={ 'desc-' + i }>
            <img className={ 'unveil-img' } src={ image[imageThumbnailAccessor] } alt='flickr'/>
          </Link>
          <Link to={ image[titleLinkAccessor] } target='_blank'>
            <p className={ 'photo-title' }>
              { image[titleAccessor] + ' ' }
              <i className='fa fa-external-link' aria-hidden='true'/>
            </p>
          </Link>
        </li>
      )

    return (
      <ul className='ImagesMarkup'>
        { imagesMarkup }
      </ul>
    )
  }
}

ImagesMarkup.contextTypes ={
  ctxStore: PropTypes.object
}
export default ImagesMarkup
