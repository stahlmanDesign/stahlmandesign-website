import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class AboutThisCv extends React.Component {
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    const lang = this.APP.state.lang
    const { about, stack, name } = this.props
    return <div className='AboutThisCv'>

      {/*<em className='small'>
        { about.desc[lang] }
      </em>*/}
      <p className='pt-2'>
        <strong>
        { about.stack.title[lang]}
        </strong>
      </p>
      <div className=''>
        { about.stack.list.map((item, i) =>
          <li key={ i }>
            { '• ' +  item.name[lang] }
            <span dangerouslySetInnerHTML={{__html:': ' + item.type[lang]}}></span>
          </li>
        )}
      </div>
    </div>
  }

}
AboutThisCv.contextTypes ={
  ctxStore: PropTypes.object
}
export default AboutThisCv
