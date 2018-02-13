import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
// import LazyLoad from 'react-lazyload'
// import _ from 'lodash'

import './styles.css'

class Music extends Component {

  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    const APP = this.APP
    return (
      <div className='Music sd-pad-top'>
        <div className='jumbotron'>
          <div className='container'>
            <h1>{ UT.localise('Music', APP) }</h1>
            <p>These are solo albums from 1997-present, which are on <a href='https://itunes.apple.com/us/artist/justin-stahlman/id99486623'>iTunes</a> and some on <a href='https://soundcloud.com/jstahlman/sets'>SoundCloud</a></p>
          </div>
        </div>

        <div className='container text-center'>
          <div className='row'>

            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='https://itunes.apple.com/us/album/gods-and-men/id1071866498'>
                <img className='artwork' alt='Gods and Men, Justin Stahlman'
                  src='http://a2.mzstatic.com/us/r30/Music69/v4/39/6f/a3/396fa318-7da8-59f8-3b90-50f51590010f/cover340x340.jpeg'/></a>
              <a href='https://itunes.apple.com/us/album/gods-and-men/id1071866498' className='album'>
                <br/>
                <span className='album'>Gods and Men</span></a>
              <br/>
              <span className='year'>2015</span>
            </div>

            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='https://itunes.apple.com/ca/album/capricornucopia-volume-3-volume/id916557420'>
                <img className='artwork' alt='Capricornucopia Vol. 3, Justin Stahlman'
                  src='http://is3.mzstatic.com/image/thumb/Music4/v4/9a/8a/23/9a8a2340-655c-2c6b-4003-c029f1e5eb3f/source/340x340bb.jpg'/></a>
              <a href='https://itunes.apple.com/ca/album/capricornucopia-volume-3-volume/id916557420' className='album'>
                <br/>
                <span className='album'>Capricornucopia Vol. 3</span></a>
              <br/>
              <span className='year'>2014</span>
            </div>

            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='https://itunes.apple.com/ca/album/god-of-love-ep/id666112858'>
                <img className='artwork' alt='Passions Convene, Justin Stahlman'
                  src='http://is4.mzstatic.com/image/thumb/Music4/v4/3e/25/bd/3e25bd32-0ef8-cab6-8f5a-2b022c60dd13/source/340x340bb.jpg'/></a>
              <a href='https://itunes.apple.com/ca/album/god-of-love-ep/id666112858' className='album'>
                <br/>
                <span className='album'>God of Love</span></a>
              <br/>
              <span className='year'>2013</span>
            </div>

            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='https://itunes.apple.com/ca/album/capricornucopia-volume-2-volume/id513827605'>
                <img className='artwork' alt='Capricornucopia Vol. 2, Justin Stahlman'
                  src='https://is1-ssl.mzstatic.com/image/thumb/Music/v4/c6/c7/96/c6c7961c-518f-942c-ec17-20605b511356/capricornucopia2cover.jpg/340x340bb.jpg'/></a>
              <a href='https://itunes.apple.com/ca/album/capricornucopia-volume-2-volume/id513827605' className='album'>
                <br/>
                <span className='album'>Capricornucopia Vol. 2</span></a>
              <br/>
              <span className='year'>2012</span>
            </div>

            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='http://itunes.apple.com/us/album/capricornucopia-volume-1-volume/id436564730'>
                <img className='artwork' alt='Passions Convene, Justin Stahlman'
                  src='http://is5.mzstatic.com/image/thumb/Music/v4/13/81/e5/1381e510-a8a6-cc51-5a6a-938ceb593601/source/340x340bb.jpg'/></a>
              <a href='http://itunes.apple.com/us/album/capricornucopia-volume-1-volume/id436564730' className='album'>
                <br/>
                <span className='album'>Capricornucopia Vol. 1</span></a>
              <br/>
              <span className='year'>2011</span>
            </div>
            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='http://itunes.apple.com/us/album/passions-convene/id347232120'>
                <img className='artwork' alt='Passions Convene, Justin Stahlman'
                  src='http://is4.mzstatic.com/image/thumb/Music/v4/0f/3c/7c/0f3c7caf-33a8-d9eb-f5aa-f81c5611d9f5/source/340x340bb.jpg'/></a>
              <a href='http://itunes.apple.com/us/album/passions-convene/id347232120' className='album'>
                <br/>
                <span className='album'>Passions Convene</span></a>
              <br/>
              <span className='year'>2009</span>
            </div>
            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='http://itunes.apple.com/us/album/heroes-change/id268660337'>
                <img className='artwork' alt='Heroes Change, Justin Stahlman'
                  src='https://is4-ssl.mzstatic.com/image/thumb/Music/32/a7/18/mzi.cfkrsyju.jpg/340x340bb.jpg'/></a>
              <a href='http://itunes.apple.com/us/album/heroes-change/id268660337' className='album'>
                <br/>
                <span className='album'>Heroes Change</span></a>
              <br/>
              <span className='year'>2007</span>
            </div>

            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='http://itunes.apple.com/us/album/sucker/id251356377'>
                <img className='artwork' alt='Sucker, Justin Stahlman'
                  src='https://is2-ssl.mzstatic.com/image/thumb/Music/c6/7a/79/mzi.augwznci.jpg/340x340bb.jpg'/></a>
              <a href='http://itunes.apple.com/us/album/sucker/id251356377' className='album'>
                <br/>
                <span className='album'>Sucker</span></a>
              <br/>
              <span className='year'>2004</span>
            </div>
            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='http://itunes.apple.com/us/album/the-expatriate/id250907207'>
                <img className='artwork' alt='The Expatriate, Justin Stahlman'
                  src='https://is1-ssl.mzstatic.com/image/thumb/Music/cd/cb/7a/mzi.mykljaqa.jpg/340x340bb.jpg'/></a>
              <a href='http://itunes.apple.com/us/album/the-expatriate/id250907207' className='album'>
                <br/>
                <span className='album'>The Expatriate</span></a>
              <br/>
              <span className='year'>2003</span>
            </div>
            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='http://itunes.apple.com/us/album/heart-soul-control/id163982990'>
                <img className='artwork' alt='Heart &amp; Soul Control, Justin Stahlman'
                  src='https://is4-ssl.mzstatic.com/image/thumb/Music/b9/5f/c4/mzi.vgnipkml.tif/340x340bb.jpg'/></a>
              <a href='http://itunes.apple.com/us/album/heart-soul-control/id163982990' className='album'>
                <br/>
                <span className='album'>Heart &amp; Soul Control</span></a>
              <br/>
              <span className='year'>2000</span>
            </div>

            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='http://itunes.apple.com/us/album/injustice-of-beauty/id111790682'>
                <img className='artwork' alt='Injustice of Beauty, Justin Stahlman'
                  src='https://is3-ssl.mzstatic.com/image/thumb/Music/bf/02/e0/mzi.uyhatflh.jpg/340x340bb.jpg'/></a>
              <a href='http://itunes.apple.com/us/album/injustice-of-beauty/id111790682' className='album'>
                <br/>
                <span className='album'>Injustice of Beauty</span></a>
              <br/>
              <span className='year'>1999</span>
            </div>
            <div className='col-sm-6 col-md-4 col-xs-12 padding-bottom'>
              <a href='http://itunes.apple.com/us/album/sweet-s-a/id99487950'>
                <img className='artwork' alt='Sweet S.A., Justin Stahlman'
                  src='http://is5.mzstatic.com/image/thumb/Music/v4/f5/47/1b/f5471b7a-f2df-090a-2b79-6dc50f1b1216/source/340x340bb.jpg'/></a>
              <a href='http://itunes.apple.com/us/album/sweet-s-a/id99487950' className='album'>
                <br/>
                <span className='album'>Sweet S.A.</span></a>
              <br/>
              <span className='year'>1997</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Music.contextTypes ={
  ctxStore: PropTypes.object
}
export default Music
