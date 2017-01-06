import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr } from '../libraries/utilities'

// import './En5Minutes.css'

class En5Minutes extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){
    const { era } = this.props;
    if (era === '2005-2008') getFlickr("72157600047687564"); // 2005-2008
    if (era === '2006-2016') getFlickr("72157649406297688"); // 2006-2015
  }

  render() {
    const { era } = this.props;

    return (
      <div className='En5Minutes '>
        <div className="jumbotron">
      		<div className="container">
      			<h1>En 5 minutes - { era }</h1>
      			<p>The page « En 5 minutes » began as a full-page, stand-alone infographic published daily in <em>Le Journal de Montréal</em>. Collections were republished and distributed in schools in 2008.</p>
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
En5Minutes.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default En5Minutes;
