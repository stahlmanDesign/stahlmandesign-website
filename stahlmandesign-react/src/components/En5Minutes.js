import React from 'react'
import { Link } from 'react-router'
// import { API, urls } from '../libraries/global'
import { getFlickr } from '../libraries/utilities'
import LazyLoad from 'react-lazyload';

import './En5Minutes.css'

class En5Minutes extends React.Component {
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
    const { era } = this.props;
    if (era === '2005-2008') {
      getFlickr("72157600047687564", null, ( images ) => {
  			this.setState({ images: images })
  		})
    }
    if (era === '2006-2016') {
      getFlickr("72157649406297688", null, ( images ) => {
  			this.setState({ images: images })
  		})
    }
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
    const { era } = this.props;
		if ( !this.state.images ) return <div></div>
    return (
      <div className='En5Minutes '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>En 5 minutes - { era }</h1>
      			<p>The page « En 5 minutes » began as a full-page, stand-alone infographic published daily in <em>Le Journal de Montréal</em>. Collections were republished and distributed in schools in 2008.</p>
      		</div>
      	</div>
        <div className="main-content">
          <ul>
            {this.getImagesMarkup( this.state.images )}</ul>
          <div className="gallery"></div>
        </div>
      </div>
  );
  }
}
En5Minutes.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default En5Minutes;
