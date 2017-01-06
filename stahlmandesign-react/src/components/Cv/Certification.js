import React from 'react';
import CertificationAccomplishments from './CertificationAccomplishments.js';

class Certification extends React.Component {
    render() {
        return <div className="job">
            <h2 className="certification-authority" dangerouslySetInnerHTML={{
                __html: this.props.certification.authority,
                sanitize: true
            }}></h2>
          <ul>
            <CertificationAccomplishments certificationId={this.props.certificationId} certifications={this.props.certification.certifications} lang={this.props.lang}/>
          </ul>
      </div>
    }
}
export default Certification
  //<CertificationAccomplishments id={this.props.certificationId} certifications={this.props.certification.certifications} lang={this.props.lang}/>
