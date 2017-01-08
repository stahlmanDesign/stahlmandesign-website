import React from 'react'
import { Link } from 'react-router'
// import { API, urls } from '../libraries/global'
// import { UT, getFlickr } from '../libraries/utilities'
import albumCover from '../images/DECEMBER.png'
// import './December.css'

class December extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {

    return (
      <div className='December '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>Brandon Stahlman - December</h1>
      			<p className="click"><Link to={ process.env.PUBLIC_URL + '/_december/december.zip' } target='_blank'>Click to download the album for free(60 MB)</Link></p>
      		</div>
      	</div>

      	<div className="container text-center">
      		<img className="image" src={ albumCover } alt='album'/>
      		<p>&nbsp;</p>
      		<iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3245617&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

        </div>
      </div>

  );
  }
}
December.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default December;
