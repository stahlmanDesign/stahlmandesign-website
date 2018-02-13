import React from 'react';
class CertificationAccomplishments extends React.Component {
  render() {
    var nodes = this.props.certifications.map((item, i) => {
      return (
        <li key={ i }>
          <span dangerouslySetInnerHTML={{__html:item.certification,sanitize:true}}></span>
        </li>
      )
    });
    return <div className="certification-accomplishment">
      {nodes}
    </div>
  }
}
export default CertificationAccomplishments
