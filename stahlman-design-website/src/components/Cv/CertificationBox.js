import React from 'react';
import Certification from './Certification'

class CertificationBox extends React.Component {
  render() {
    return <div className="certification-box">
      <h3 className='head-type-of-section'>
        {this.props.lang === 'en' ? 'CERTIFICATIONS' : 'CERTIFICATIONS'}
      </h3>
      { this.props.certifications.map((certification, i)=>
        <Certification
          certification={certification}
          lang={this.props.lang}
          certificationId={'certificationId-' + i}
          key={'certification-key-' + i}>
        </Certification>
      ) }

  </div>
  }
}

export default CertificationBox
