import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr } from '../libraries/utilities'

// import './Animation.css'

class Animation extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {
    const { era } = this.props;

    return (
      <div className='Animation '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>Animation</h1>
      			<p>I made these animated cartoons from 1998 to 2003. Only the first three are finished. The other videos are collections of sketches, ideas and unfinished portions. It takes a lot of time and energy, and realistically a whole team.</p>
      		</div>
      	</div>

      	<div className="container">
      		<div className="col-md-6">
      			{/* 16:9 aspect ratio */}
      			<div className="embed-responsive embed-responsive-16by9">
      				<iframe className="embed-responsive-item" src="https://player.vimeo.com/video/84733869" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      			</div>
      			<p><a href="http://vimeo.com/84733869">Ange Terrestre trouve ses ailes</a> — <a href="http://vimeo.com/stahlmandesign">Justin Stahlman</a></p>
      		</div>
      		<div className="col-md-6">
      			{/* 16:9 aspect ratio */}
      			<div className="embed-responsive embed-responsive-16by9">
      				<iframe className="embed-responsive-item" src="https://player.vimeo.com/video/84733354" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      			</div>
      			<p><a href="http://vimeo.com/84733354">Ange Terrestre et les abeilles</a> — <a href="http://vimeo.com/stahlmandesign">Justin Stahlman</a></p>
      		</div>
      		<div className="col-md-6">
      			{/* 16:9 aspect ratio */}
      			<div className="embed-responsive embed-responsive-16by9">
      				<iframe className="embed-responsive-item" src="https://player.vimeo.com/video/84643209" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      			</div>
      			<p><a href="http://vimeo.com/84643209">Ange Terrestre et l’oiseau qui a faim</a> — <a href="http://vimeo.com/stahlmandesign">Justin Stahlman</a></p>
      		</div>
      		<div className="col-md-6">
      			{/* 16:9 aspect ratio */}
      			<div className="embed-responsive embed-responsive-16by9">
      				<iframe className="embed-responsive-item" src="https://player.vimeo.com/video/84734301" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      			</div>
      			<p><a href="http://vimeo.com/84734301">Boy oh Boil</a> — <a href="http://vimeo.com/stahlmandesign">Justin Stahlman</a></p>
      		</div>
      		<div className="col-md-6">
      			{/* 16:9 aspect ratio */}
      			<div className="embed-responsive embed-responsive-16by9">
      				<iframe className="embed-responsive-item" src="https://player.vimeo.com/video/132043969" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      			</div>
      			<p><a href="http://vimeo.com/132043969">Le Robot Rebelle</a> — <a href="http://vimeo.com/stahlmandesign">Justin Stahlman</a></p>
      		</div>
      	</div>
      </div>

  );
  }
}
Animation.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Animation;
