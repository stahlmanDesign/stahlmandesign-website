import React from 'react';

import Certification from './Certification.js';
class CertificationList extends React.Component {
  render() {
    var certificationNodes = this.props.certifications.map((certification, i) => {
      return (
        <Certification
          certification={certification}
          lang={this.props.lang}
          certificationId={'certificationId-' + i}
          key={'certification-key-' + i}>
        </Certification>
      )
    });
    return (
      <div className="certification-list">
        {certificationNodes}
      </div>
    )
  }
}
export default CertificationList
