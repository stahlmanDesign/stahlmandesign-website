import React from 'react'
import _ from 'lodash'
import './styles.css'

class SkillCategory extends React.Component {
  render() {

    return <div className='SkillCategory'>
    <h3 className='pt-3'>{this.props.category[this.props.lang]}</h3>
    <div className='row'>
      <div className='col'>
        <span className=''>
          <strong>{ this.props.dictionary.skill[this.props.lang] }</strong>
        </span>
        { this.props.skills.map((skill, i) =>
          <p className=''
            key={this.props.skillCategoryId + i}>
            { this.props.skills[i].skill.en }
          </p>
        ) }
      </div>
      <div className='col-2'>
        <span className=''>
          <strong>{ this.props.dictionary.trend[this.props.lang] }</strong>
        </span>
        { this.props.skills.map((skill, i) =>
          <p className=''
            key={this.props.skillCategoryId + ' rating-' +i}>
            <span className='skill-units-gray'>
            { this._getSkillBarTrending(this.props.skills[i].trending) }
            </span>
          </p>
        ) }
      </div>
      <div className='col-3'>
        <span className=''>
          <strong>{ this.props.dictionary.rating[this.props.lang] }</strong>
        </span>
        { this.props.skills.map((skill, i) =>
          <p className=''
            key={this.props.skillCategoryId + ' rating-' +i}>
          <span className=''>
            { _.times(this.props.skills[i].score, ()=>'|').join('') + ' ' + this.props.skills[i].score }
          </span>
          </p>
        ) }
      </div>

      </div>
    </div>
  }

  _getSkillBarTrending(trend) {
    if (trend === 'up') return '↗';
    if (trend === 'stable') return '…';
    if (trend === 'down') return '↘';
  }
}
export default SkillCategory
