import React from 'react';
class CertificationAccomplishments extends React.Component {
  render() {
    var nodes = this.props.certifications.map((item, i) => {
      return (
        <li
          className='certification-accomplishment-item'
          key={this.props.certificationId + i}
          dangerouslySetInnerHTML={{__html:item.certification,sanitize:true}}>
        </li>
      )
    });
    return <div className="certification-accomplishment">
      {nodes}
    </div>
  }
}
export default CertificationAccomplishments
