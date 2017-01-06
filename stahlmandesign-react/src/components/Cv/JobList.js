import React from 'react';
import $ from 'jquery';
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
//
// for (var i in data.JobList) {
//
//   $("#JobList").append(
//     //'<li class="list-group-item">' +
//     '<h1 class="company-head">' + getNewCompany(data.JobList[i].company) + '</h1>' +
//     '<div class="parent-company-indent">' +
//     '<p class="division">' + getDivision(data.JobList[i].division) + '</p>' +
//     '<p class="title">' + data.JobList[i].title[lang] + '</p>' +
//     '<span class="dots">' + getYearsAndMonths(data.JobList[i].start, data.JobList[i].end, "dots") + '</span>' +
//     '<span class="yearsAndMonths">' + getYearsAndMonths(data.JobList[i].start, data.JobList[i].end, "text") + '</span>' +
//     '<span class="dates"> (' + getDates(data.JobList[i].start, data.JobList[i].end, lang) + ')</span>' +
//     '<p class="description">' + data.JobList[i].description[lang] + '</p>' +
//     '<ul class="accomplishments">' + getAccomplishments(data.JobList[i].accomplishments[lang]) + '</ul>' +
//     '<div class="tags">' + getTags(data.JobList[i].tags) + '</div>' +
//     '<hr>' +
//     '</div>'
//     //'</li>'
//     //"<li><strong>" + data.JobList[i].end + "</strong> — " + data.JobList[i].title.fr + "</li></br>" + data.JobList[i].description.fr + "</br></br>")
//   )
// }
