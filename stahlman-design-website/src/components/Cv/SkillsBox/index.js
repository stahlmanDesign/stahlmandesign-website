import React from 'react'
import SkillCategory from './SkillCategory'

class SkillsBox extends React.Component {
  render() {
    return (
      <div className="skills-box">
        <h3 className='head-type-of-section'>
          {this.props.lang === 'en' ? 'SKILLS' : 'CONNAISSANCES'}
        </h3>


        { this.props.skills.map((skill, i) =>

            <SkillCategory
              className='skill-list'
              category={skill.category}
              skills={skill.skills}
              dictionary={this.props.dictionary}
              lang={this.props.lang}
              skillCategoryId={'skillCategoryId-' + i}
              key={'skillCategoryId-' + i}
            />

        ) }
      </div>
    )
  }
}
export default SkillsBox
