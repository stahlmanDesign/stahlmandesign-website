import React from 'react'
import { Link, browserHistory} from 'react-router'
import { API, urls } from '../libraries/global'
import { UT, getFlickr } from '../libraries/utilities'

// import './NytLinks.css'

class NytLinks extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {
    const { era } = this.props;

    return (
      <div className='NytLinks '>
        <div className="container">
      		put link history here TODO
      	</div>
      </div>

  );
  }
}
NytLinks.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default NytLinks;
