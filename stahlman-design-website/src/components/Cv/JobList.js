import React from 'react';

import Job from './Job.js';
class JobList extends React.Component {
  render() {
    let prevParentCompany = "";
    let showParentCompany = true;
    // TODO parent company and division showing up incorrectly. fix logic, maybe data structure
    var jobNodes = this.props.jobs.map((job, i) => {
      if (prevParentCompany === job.company) {
        prevParentCompany = job.company;
        showParentCompany = false
      } else {
        prevParentCompany = job.company;
        showParentCompany = true
      }
      return (
        <Job
          job={job}
          showParentCompany={showParentCompany}
          lang={this.props.lang}
          jobId={'jobId-' + i}
          key={'job-company-' + i}>
        </Job>
      )
    });
    return (
      <div className="job-list">
        {jobNodes}
      </div>
    )
  }
}
export default JobList
