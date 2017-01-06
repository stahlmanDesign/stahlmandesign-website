import React from 'react';
import GitHubActivity from './GitHubActivity.js'
class Header extends React.Component {
  render() {
    return <div className="Header col-sm-9">
      <h1 id="name">
        {this.props.data.name}
      </h1>
      <div
        className="lead adjust-title-style"
        dangerouslySetInnerHTML={{
          __html: this.props.data.title[this.props.lang],
          sanitize: true
        }}>
      </div>
      <strong>
        <span id="email">
          <a href={"mailto:" + this.props.data.email.code}>
            {this.props.data.email.appearance}
          </a>&nbsp;&nbsp;</span>
      </strong>
      <strong>
        <span id="phone">
          <a
            href={"tel:" + this.props.data.phone.code}
            dangerouslySetInnerHTML={{
              __html: this.props.data.phone.appearance,
              sanitize: true
            }}>
          </a>
          &nbsp;&nbsp;
        </span>
      </strong>
      <strong>
        <span id="website">
          <a
            href={this.props.data.website.code}
            dangerouslySetInnerHTML={{
              __html: this.props.data.website.appearance,
              sanitize: true
            }}>
          </a>
          &nbsp;&nbsp;
        </span>
      </strong>
      <p
        id="note"
        className="note"
        dangerouslySetInnerHTML={{
          __html: this.props.data.note[this.props.lang],
          sanitize: true
        }}>
      </p>
      <h4>
        <a href='https://github.com/stahlmanDesign'>GitHub</a>
        {this.props.lang == 'en'
          ? ' contributions over the last year'
          : ' contributions depuis un an'}
      </h4>
    <GitHubActivity lang={this.props.lang} />
  </div>
  }
}
export default Header
