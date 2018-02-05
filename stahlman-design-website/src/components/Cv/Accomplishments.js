import React from 'react';
class Accomplishments extends React.Component {
  render() {
    var accomplishmentNodes = this.props.accomplishments[this.props.lang].map((accomplishment, i) => {
      return (
        <li
          className='accomplishment-item'
          key={this.props.jobId + i}>
          {accomplishment}
        </li>
      )
    });
    return <div className="job">
      {accomplishmentNodes}
    </div>
  }
}
export default Accomplishments
