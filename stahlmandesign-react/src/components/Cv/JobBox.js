import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import JobList from './JobList.js'
class JobBox extends React.Component {
  render() {
    return <div className="JobBox col-xs-12 col-sm-5 col-md-7">
      <h3 className='head-type-of-section'>
        {this.props.lang === 'en' ? 'EXPERIENCE' : 'EXPÉRIENCE'}
      </h3>
      <JobList jobs={this.props.jobs} lang={this.props.lang}/>
    </div>
  }
}

export default JobBox
