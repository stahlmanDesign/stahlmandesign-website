import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr } from '../libraries/utilities'

// import './Cv.css'

class Cv extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {
    const { era } = this.props;

    return (
      <div className='Cv '>
        <div class="container">
        	<div class="container embed-responsive embed-responsive-4by3 iframe-cv">
        	<iframe class="embed-responsive-item " src="http://www.justinstahlman.com/cv"></iframe>
        </div>
        </div>
      </div>

  );
  }
}
Cv.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Cv;
