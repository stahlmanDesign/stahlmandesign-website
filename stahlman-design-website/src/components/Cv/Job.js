import React from 'react';
import Accomplishments from './Accomplishments.js';
import moment from 'moment'

class Job extends React.Component {
  render() {
    var tags = this.props.job.tags.map((tag, i) => {
      return (
        <span key={this.props.jobId+i}>
          {" "}
          <span
            className='label label-danger'>
            {tag}
          </span>
        </span>
      )
    });
    let parentCompany = "";
    if (this.props.showParentCompany) {
      parentCompany =
      <h2 className="parent-company">
        <span dangerouslySetInnerHTML={{ __html: this.props.job.company, sanitize: true }}></span>
      </h2>
    }
    return <div className="job">
      {parentCompany}
      <h2 className='company-division'>
        <span dangerouslySetInnerHTML={{ __html: this.props.job.division, sanitize: true }}></span>
      </h2>
      <p className='job-title'>
        {this.props.job.title[this.props.lang]}
      </p>
      <span className='month-bars'>
        {this._getYearsAndMonths(this.props.job.start,this.props.job.end,"units",this.props.lang) + " "}
      </span>
      <span className='years-and-months'>
        {this._getYearsAndMonths(this.props.job.start,this.props.job.end,"text",this.props.lang) + " "}
      </span>
      <span className='month-year-to-month-year'>
        {this._getDates(this.props.job.start,this.props.job.end,this.props.lang)}
      </span>
        <p>
          <span dangerouslySetInnerHTML={{ __html: this.props.job.description[this.props.lang], sanitize: true }}></span>
        </p>
        <ul>
          <Accomplishments
            jobId={this.props.jobId}
            accomplishments={this.props.job.accomplishments}
            lang={this.props.lang}/>
        </ul>
        <p>
          {tags}
        </p>
        <hr/>
      </div>
    }
    _getYearsAndMonths(startDate, endDate, textOrunits, lang) {
      var start = new Date(startDate);
      var end = new Date(endDate);
      if (endDate === "today") end = new Date(); // change this to a date that can be parsed
      if (start === "Invalid Date" || end === "Invalid Date") return "";

      var a = moment(start);
      var b = moment(end);
      var totalDays = b.diff(a, 'days'); //[days, years, months, seconds, ...]
      var totalMonths = b.diff(a, 'months'); //[days, years, months, seconds, ...]
      var totalYears = b.diff(a, 'years'); //[days, years, months, seconds, ...]
      var remainingDays = (totalDays % 365);
      var remainingMonths = Math.round(remainingDays / 30);
      var res = {
        years: totalYears,
        months: remainingMonths
      }
      var text = {
        "en": {
          years: " years",
          months: " months"
        },
        "fr": {
          years: " ans",
          months: " mois"
        }
      }
      if (res.years === 1) {
        text.en.years = " year";
        text.fr.years = " an";
      }
      if (res.months === 1) {
        text.en.months = " month";
        text.fr.months = " mois";
      }

      if (textOrunits === "text") {
        if (res.years !== 0) return (res.years + text[lang].years + ", " + res.months + text[lang].months)
        if (res.years === 0) return (res.months + text[lang].months)
      }

      if (textOrunits === "units") {
        var monthUnits = "|"; // •
        for (var i = 0; i < totalMonths; i++) {
          monthUnits += "|"
        }
        return monthUnits;
      }
    }
    _getDates(startDate, endDate, lang) {
      moment.locale(lang); // set to en or fr
      var start = new Date(startDate);
      var end = new Date(endDate);
      if (endDate === "today")
      end = new Date(); // change this to a date that can be parsed
      if (start === "Invalid Date" || end === "Invalid Date")
      return "";
      var momentStart = moment(start).format("MMM YYYY");
      var momentEnd = moment(end).format("MMM YYYY");
      return <span>({momentStart + " — " + momentEnd})</span>
    }
  }
  export default Job
