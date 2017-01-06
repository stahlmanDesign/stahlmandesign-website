import React from 'react';
// import { loadingAnimationIcon } from './Global.js'

class Loading extends React.Component {
  render(){
    return <div className='text-center'>
      <br/>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <p>{this.props.message || ''}</p>
    </div>
  }
}

export default Loading
