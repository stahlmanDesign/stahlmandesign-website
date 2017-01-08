import React from 'react';


import CertificationList from './CertificationList.js'
class CertificationBox extends React.Component {
  render() {
    return <div className="certification-box">
      <h3 className='head-type-of-section'>
        {this.props.lang === 'en' ? 'CERTIFICATIONS' : 'CERTIFICATIONS'}
      </h3>
      <CertificationList certifications={this.props.certifications} lang={this.props.lang}/>

  </div>
  }
}

export default CertificationBox
