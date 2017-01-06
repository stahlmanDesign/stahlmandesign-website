import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr } from '../libraries/utilities'

// import './Flash.css'

class Flash extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {
    const { era } = this.props;

    return (
      <div className='Flash '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>Flash</h1>
      			<p>Before HTML5, the mobile web and responsive design, interactive graphics were almost always created in Flash and Actionscript. These interactives were created between 2008-2011.</p>
      		</div>
      	</div>

      	<div className="container">
      		{/* 16:9 aspect ratio */}
      		<div className="embed-responsive embed-responsive-4by3">
      			<iframe className="embed-responsive-item" src="http://www.canoe.ca/FlashInfo/home.php?lang=fr" scrolling="yes" allowFullScreen></iframe>
      		</div>
      	</div>
      </div>

  );
  }
}
Flash.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Flash;
