import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

import $ from 'jquery'
import Header from './Header'
import JobBox from './JobBox'
// import LangButtonGroup from './LangButtonGroup'
import CertificationBox from './CertificationBox'
import SkillsBox from './SkillsBox'
import cvdata from './cv.json'

class Cv extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: cvdata,
      lang: 'en'
    }
  }
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  componentDidMount() {
    // this._loadDataFromServer()  // load ASAP !
    // setInterval( ()=> {this._loadDataFromServer()},10000) // polling every 10 x seconds
  }
  // _loadDataFromServer() {
  //   $.ajax({
  //     url: process.env.PUBLIC_URL + '/cv.json',
  //     dataType: 'json',
  //     success: (data) => {
  //       //console.log('success')
  //       this.setState({data: data})
  //     },
  //     error: (xhr, status, err) => {
  //       console.error(this.props.url, status, err.toString())
  //     }
  //   })
  // }
  // _setLang(enOrFr) {
  //   this.setState({lang: enOrFr})
  // }
  render() {
    if (this.state.data === null) {
      return <div>
        <img
          src='load.gif'
          alt='Waiting for data to load'/>
      </div>
    }
    return <div className='Cv st-pad-top container'>

      <Header
        data={this.state.data}
        lang={this.APP.state.lang}/>
      <div className='row'>
        <div className='col-xs-12 col-sm-7 col-md-5'>
          <CertificationBox
            certifications={this.state.data.certifications}
            lang={this.state.lang}/>
          <SkillsBox
            skills={this.state.data.skills}
            dictionary={this.state.data.dictionary}
            lang={this.state.lang}/>
        </div>
      </div>
      <JobBox
        jobs={this.state.data.jobs}
        lang={this.state.lang}/>
    </div>
  }
}
Cv.contextTypes ={
  ctxStore: PropTypes.object
}
export default Cv
