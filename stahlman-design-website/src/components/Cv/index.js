import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

import $ from 'jquery'
import Header from './Header'
import GitHubActivity from './GitHubActivity'

import JobBox from './JobBox'
import AboutThisCv from './AboutThisCv'
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

    return (
      <div className='Cv pt-5 container'>

        <div className='row pt-5'>
          <div className='col-md-5'>
            <AboutThisCv { ...cvdata }/>
          </div>

          <div className='col-md-7'>
            <Header { ...cvdata }/>
          </div>
        </div>

        <div className='row pt-3'>
          <div className='col'>
            <h4>
              <a href='https://github.com/stahlmanDesign'>GitHub</a>
              {lang === 'en'
                ? ' contributions over the last year'
                : ' contributions depuis un an'}
            </h4>
            <GitHubActivity lang={lang} />
          </div>

        </div>

        <div className='row pt-3'>
          <div className='col-md-5'>
            <CertificationBox
              certifications={ cvdata.certifications }
              lang={ lang }
            />
          </div>

          <div className='col'>
            <SkillsBox
              skills={ cvdata.skills }
              dictionary={ cvdata.dictionary }
              lang={ lang }
            />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <JobBox
              jobs={ cvdata.jobs }
              lang={ lang }
            />
          </div>
        </div>

      </div>
    )
  }
}
Cv.contextTypes ={
  ctxStore: PropTypes.object
}
export default Cv
