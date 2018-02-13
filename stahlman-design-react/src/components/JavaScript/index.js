import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import ImagesMarkup from '../GeneralShared/ImagesMarkup'
// import LazyLoad from 'react-lazyload'
// import _ from 'lodash'

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
    UT.getFlickr('72157640089367186', null, ( images ) => {
      console.log('images',images)
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
      titleLinkAccessor: 'descUrl'
    }
    return (
      <div className='JavaScript sd-pad-top'>
        <div className='jumbotron'>
          <div className='container'>
            <h1>{ UT.localise('JavaScript', APP) }</h1>
            <p>{ UT.localise('TheseInteractiveGraphicsAndDataVisualisations_ETC', APP) }</p>
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

JavaScript.contextTypes ={
  ctxStore: PropTypes.object
}
export default JavaScript
