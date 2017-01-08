import React from 'react'
// import { Link, browserHistory} from 'react-router'
// import { API, urls } from '../libraries/global'

// import './Home.css'

class Home extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {

    return (
      <div className='Home '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>Stahlman Design</h1>
      			<div id="main-image"></div>
      			{/* 16:9 aspect ratio --> */}
      			<div className="embed-responsive embed-responsive-16by9">
      				<iframe className="embed-responsive-item" src="https://player.vimeo.com/video/121525054?color=ff0179" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      			</div>

      			<p><a href="http://www.thedreamsong.com/">{ 'The Dreamsong' }</a>{ ' is a retro-style game, and requires a keyboard (not optimized for touch screens)' }</p>
      		</div>
      	</div>

      </div>

  );
  }
}
Home.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Home;
