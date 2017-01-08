import React from 'react'
import { Link } from 'react-router'
// import { API, urls } from '../libraries/global'
import { getFlickr } from '../libraries/utilities'
import LazyLoad from 'react-lazyload';

import './JavaScript.css'

class JavaScript extends React.Component {
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
  componentDidMount( ) {
		getFlickr("72157640089367186", null, ( images ) => {
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
      <div className='JavaScript '>
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
JavaScript.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default JavaScript;
