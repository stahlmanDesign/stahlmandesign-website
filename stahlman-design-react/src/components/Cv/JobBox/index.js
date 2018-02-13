import React from 'react';

import JobList from './JobList'
class JobBox extends React.Component {
  render() {
    return <div className="JobBox">
      <div className='col'>
        <h3 className='head-type-of-section'>
          {this.props.lang === 'en' ? 'EXPERIENCE' : 'EXPÉRIENCE'}
        </h3>
        <JobList jobs={this.props.jobs} lang={this.props.lang}/>
      </div>
    </div>
  }
}

export default JobBox
