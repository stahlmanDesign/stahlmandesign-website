import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './Header.js';
import JobBox from './JobBox.js';
import LangButtonGroup from './LangButtonGroup.js';
import CertificationBox from './CertificationBox.js';
import SkillsBox from './SkillsBox.js';


class Cv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      lang: 'en'
    };
  }
  componentDidMount() {
    this._loadDataFromServer();  // load ASAP !
    // setInterval( ()=> {this._loadDataFromServer()},10000); // polling every 10 x seconds
  }
  _loadDataFromServer() {
    $.ajax({
      url: process.env.PUBLIC_URL + '/cv.json',
      dataType: 'json',
      success: (data) => {
        //console.log('success')
        this.setState({data: data})
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  _setLang(enOrFr) {
    this.setState({lang: enOrFr})
  }
  render() {
    if (this.state.data === null) {
      return <div>
        <img
          src='load.gif'
          alt='Waiting for data to load'/>
      </div>
    }
    return <div className="main container">
      <LangButtonGroup
        lang={this.state.lang}
        about={this.state.data.about}
        stack={this.state.data.stack}
        setLang={this._setLang.bind(this)}/>
      <Header
        data={this.state.data}
        lang={this.state.lang}/>
      <div className="row">
      </div>
      <div className="col-xs-12 col-sm-7 col-md-5">
        <CertificationBox
          certifications={this.state.data.certifications}
          lang={this.state.lang}/>
        <SkillsBox
          skills={this.state.data.skills}
          dictionary={this.state.data.dictionary}
          lang={this.state.lang}/>
      </div>
      <JobBox
        jobs={this.state.data.jobs}
        lang={this.state.lang}/>
    </div>
  }
}

export default Cv
