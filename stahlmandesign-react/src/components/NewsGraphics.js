import React from 'react'
import { Link } from 'react-router'
// import { API, urls } from '../libraries/global'
import { getFlickr } from '../libraries/utilities'
import LazyLoad from 'react-lazyload';
// import $ from 'jquery'
import ReactGA from 'react-ga'; // https://www.npmjs.com/package/react-ga
ReactGA.initialize('UA-25169855-1'); //Unique Google Analytics tracking number

import './NewsGraphics.css'

class NewsGraphics extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      images: null
    }
  }
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){
    getFlickr("72157600073936574", null, ( images ) => {
			this.setState({ images: images })
		})
  }
  getImagesMarkup( images ) {
		return images.map(( image, i ) => {
			return <li key={i} className='photo-container'>

					<Link to={image.urlBig} target='_blank' id={'desc-' + image.index}>
						<LazyLoad height={200} offset={-100} overflow={true}>
							<img className={'unveil-img'} src={image.urlSmall} alt='flickr'/>
						</LazyLoad>
						<p className={'photo-title'}>{image.title} </p>
					</Link>

			</li>
		})
	}
  render() {
		if ( !this.state.images ) return <div></div>
    return (
      <div className='NewsGraphics '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>News graphics</h1>
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

  );
  }
}
NewsGraphics.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default NewsGraphics;
