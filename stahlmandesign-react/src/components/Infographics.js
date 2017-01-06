import React from 'react'
import { Link, browserHistory } from 'react-router'
import { API, urls } from '../libraries/global'

import Loading from './Loading'

// import './Infographics.css'

class Infographics extends React.Component {
  componentWillMount(){
    this.Index = this.context.ctxStore.Index; // get reference to master state
    this.localisation = this.Index.state.localisation;
  }
  componentDidMount(){

  }

  render() {
    return (
      <div className='Infographics'>
        <div className='container'>

            <h1>Infographics</h1>

        </div>
      </div>
   );
  }
}
Infographics.contextTypes = {
  ctxStore: React.PropTypes.object // so component receives relevant context
}
export default Infographics;
