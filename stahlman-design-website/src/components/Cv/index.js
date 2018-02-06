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

  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }

  render() {
    const APP = this.APP
    const lang = APP.state.lang

    return <div className='Cv sd-pad-top container'>
      <div className='pt-5'></div>
      <Header { ...cvdata }/>
      <div className='row'>
        <div className='col-xs-12 col-sm-7 col-md-5'>
          <CertificationBox
            certifications={ cvdata.certifications }
            lang={ lang }/>
          <SkillsBox
            skills={ cvdata.skills }
            dictionary={ cvdata.dictionary }
            lang={ lang }/>
        </div>
      </div>
      <JobBox
        jobs={ cvdata.jobs }
        lang={ lang }/>
    </div>
  }
}
Cv.contextTypes ={
  ctxStore: PropTypes.object
}
export default Cv
