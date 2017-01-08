import React from 'react'
import { Link } from 'react-router'
// import { API, urls } from '../libraries/global'
import { getFlickr } from '../libraries/utilities'
import LazyLoad from 'react-lazyload';
import './Illustration.css'

class Illustration extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			images: null
		}
	}
	componentWillMount( ) {
		this.Index = this.context.ctxStore.Index; // get reference to master state
		this.localisation = this.Index.state.localisation;
	}
	componentDidMount( ) {
		getFlickr("72157639954127264", null, ( images ) => {
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
	render( ) {
		if ( !this.state.images ) return <div></div>
		return (
			<div className='Illustration '>
				<div className="jumbotron">
					<div className="container">
						<h1>Illustration</h1>
						<p>Most of these are from a long time ago. In university days, I drew the places where I lived.</p>
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
Illustration.contextTypes = {
	ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Illustration;
