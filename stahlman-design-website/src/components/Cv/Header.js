import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import GitHubActivity from './GitHubActivity.js'

class Header extends React.Component {
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    const APP = this.APP
    const { dictionary, name, note, title, email, website, phone, about, aboutThisCv, stack, certifications, skills, jobs } = this.props
    const lang = APP.state.lang
    return <div className="Header col-sm-9">
      <h1 id="name">
        { name }
      </h1>
      <div
        className="lead adjust-title-style"
        >
        <span dangerouslySetInnerHTML={{
          __html: title[lang],
          sanitize: true
        }}></span>
      </div>
      <strong>
        <span id="email">
          <Link to={"mailto:" + email.code}>
            { email.appearance}
          </Link>&nbsp;&nbsp;</span>
      </strong>
      <strong>
        <span id="phone">
          <Link to={"tel:" + phone.code}>
            <span dangerouslySetInnerHTML={{
              __html: phone.appearance,
              sanitize: true
            }}></span>

          </Link>
          &nbsp;&nbsp;
        </span>
      </strong>
      <strong>
        <span id="website">
          <Link to={ website.code}>
            <span dangerouslySetInnerHTML={{
              __html: website.appearance,
              sanitize: true
            }}></span>
          </Link>
          &nbsp;&nbsp;
        </span>
      </strong>
      <p id="note" className="note" >
        <span dangerouslySetInnerHTML={{
          __html: note[lang],
          sanitize: true
        }}></span>
      </p>
      <h4>
        <a href='https://github.com/stahlmanDesign'>GitHub</a>
        {lang === 'en'
          ? ' contributions over the last year'
          : ' contributions depuis un an'}
      </h4>
    <GitHubActivity lang={lang} />
  </div>
  }
}
Header.contextTypes ={
  ctxStore: PropTypes.object
}
export default Header
