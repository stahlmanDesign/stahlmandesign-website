import React from 'react';
import { Link } from 'react-router-dom';
import GitHubActivity from './GitHubActivity.js'
class Header extends React.Component {
  render() {
    return <div className="Header col-sm-9">
      <h1 id="name">
        {this.props.data.name}
      </h1>
      <div
        className="lead adjust-title-style"
        >
        <span dangerouslySetInnerHTML={{
          __html: this.props.data.title[this.props.lang],
          sanitize: true
        }}></span>
      </div>
      <strong>
        <span id="email">
          <Link to={"mailto:" + this.props.data.email.code}>
            {this.props.data.email.appearance}
          </Link>&nbsp;&nbsp;</span>
      </strong>
      <strong>
        <span id="phone">
          <Link to={"tel:" + this.props.data.phone.code}>
            <span dangerouslySetInnerHTML={{
              __html: this.props.data.phone.appearance,
              sanitize: true
            }}></span>

          </Link>
          &nbsp;&nbsp;
        </span>
      </strong>
      <strong>
        <span id="website">
          <Link to={this.props.data.website.code}>
            <span dangerouslySetInnerHTML={{
              __html: this.props.data.website.appearance,
              sanitize: true
            }}></span>
          </Link>
          &nbsp;&nbsp;
        </span>
      </strong>
      <p id="note" className="note" >
        <span dangerouslySetInnerHTML={{
          __html: this.props.data.note[this.props.lang],
          sanitize: true
        }}></span>
      </p>
      <h4>
        <a href='https://github.com/stahlmanDesign'>GitHub</a>
        {this.props.lang === 'en'
          ? ' contributions over the last year'
          : ' contributions depuis un an'}
      </h4>
    <GitHubActivity lang={this.props.lang} />
  </div>
  }
}
export default Header
