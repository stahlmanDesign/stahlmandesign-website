import React from 'react';
class SkillCategory extends React.Component {
  render() {
    var skillNodes = this.props.skills.map((skill, i) => {
        return (
          <p
            className='skill-category-skill-item'
            key={this.props.skillCategoryId + i}>
            {(this.props.skills[i].skill.en)}
          </p>
        )

    });
    var trendNodes = this.props.skills.map((skill, i) => {
        return (
          <p
            className='skill-category-skill-item'
            key={this.props.skillCategoryId + ' rating-' +i}>
            <span className="skill-units-gray">
            {this._getSkillBarTrending(this.props.skills[i].trending)}
            </span>
          </p>
        )
    });
    var ratingNodes = this.props.skills.map((skill, i) => {
        return (
          <p
            className='skill-rating-bars'
            key={this.props.skillCategoryId + ' rating-' +i}>
          <span className='month-bars'>
            {this._getRatingBars(this.props.skills[i].score) + " " + this.props.skills[i].score}
          </span>
          </p>
        )
    });
    return <div className="skill-category-skill">
    <h3>{this.props.category[this.props.lang]}</h3>
    <div className="skills-text col-xs-7">
      <span className="skills-header skills-header-right uppercase">{this.props.dictionary.skill[this.props.lang]}</span>
      {skillNodes}</div>
    <div className="skill-trend col-xs-1">
      <span className="skills-header skills-header-margin-left uppercase">{this.props.dictionary.trend[this.props.lang]}</span>
      {trendNodes}</div>
    <div className="skill-score col-xs-3">
      <span className="skills-header skills-header-nudge-right uppercase">{this.props.dictionary.rating[this.props.lang]}</span>
      {ratingNodes}</div>
    <div className='row'></div>
    <hr/>
    </div>
  }
  _getRatingBars(score){
    let res = "|";
    for (let i = 0; i < score ; i++){
      res += "|"
    }
    return res;
  }
  _getSkillBarTrending(trend) {
    if (trend === "up") return '↗';
    if (trend === "stable") return '…';
    if (trend === "down") return '↘';
  }
}
export default SkillCategory
