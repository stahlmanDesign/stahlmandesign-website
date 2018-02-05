import React from 'react';

import SkillCategory from './SkillCategory.js';
class SkillList extends React.Component {
  render() {
    var nodes = this.props.skills.map((skill, i) => {
      return (
        <SkillCategory
          className='skill-list'
          category={skill.category}
          skills={skill.skills}
          dictionary={this.props.dictionary}
          lang={this.props.lang}
          skillCategoryId={'skillCategoryId-' + i}
          key={'skillCategoryId-' + i}
        />
      )
    });
    return (
      <div className="skill-list">
        {nodes}
      </div>
    )
  }
}
export default SkillList
