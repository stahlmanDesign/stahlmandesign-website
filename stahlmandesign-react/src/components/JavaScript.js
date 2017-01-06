import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr } from '../libraries/utilities'

// import './JavaScript.css'

class JavaScript extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){
    getFlickr("72157640089367186", true); // true means call function useFlickrDescAsUrl
  }

  render() {
    const { era } = this.props;

    return (
      <div className='JavaScript '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>JavaScript</h1>
      			<p>These interactive graphics and data visualisations are done in JavaScript/CSS/Javascript using Bootstrap for responsive design. Data is loaded from CSV files or by querying Google Fusion Tables or any API that returns JSON/JSONP.</p>
      		</div>
      	</div>

      	<div className="container">
      		<div className="main-content">
      			<img className="loader" src="../img/loader.gif" />
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
