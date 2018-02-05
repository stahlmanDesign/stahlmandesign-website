import React from 'react';
import SkillList from './SkillList.js';
class SkillsBox extends React.Component {
  render() {
    return (
      <div className="skills-box">
        <h3 className='head-type-of-section'>
          {this.props.lang === 'en' ? 'SKILLS' : 'CONNAISSANCES'}
        </h3>
        <SkillList
          skills={this.props.skills}
          dictionary={this.props.dictionary}
          lang={this.props.lang}/>
      </div>
    )
  }
}
export default SkillsBox
