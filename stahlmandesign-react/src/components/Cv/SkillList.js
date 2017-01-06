import React from 'react';
import $ from 'jquery';
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


// constructor() {
//   super();
//   this.state = {
//     skills: [
//       {
//         "category": {
//           "en": "",
//           "fr": ""
//         },
//         "skills": [
//           {
//             "skill": {
//               "en": "",
//               "fr": ""
//             },
//             "score": 0,
//             "trending": ""
//           }
//         ]
//       }, {
//         "category": {
//           "en": "",
//           "fr": ""
//         },
//         "skills": [
//           {
//             "skill": {
//               "en": "",
//               "fr": ""
//             },
//             "score": 0,
//             "trending": ""
//           }
//         ]
//       }, {
//         "category": {
//           "en": "",
//           "fr": ""
//         },
//         "skills": [
//           {
//             "skill": {
//               "en": "",
//               "fr": ""
//             },
//             "score": 0,
//             "trending": ""
//           }
//         ]
//       }
//     ]
//   }
// }
