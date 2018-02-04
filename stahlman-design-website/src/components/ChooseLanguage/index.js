import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UT } from '../../libraries/utilities'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import ReactTooltip from 'react-tooltip'
import '../../styles/react-contextmenu.css' // import css file for the context menu, copied from examples in node_modules

import moment from 'moment'
import './styles.css'

class ChooseLanguage extends Component {
  componentWillMount(){
    this.APP = this.context.ctxStore.APP // get reference to master state
  }
  render() {
    const APP = this.APP
    const lang = APP.state.lang
    const languageObject = this.getLanguageInfoById({ id: lang })
    return (
      <div className='ChooseLanguage'>
        <ContextMenuTrigger id={ 'language-context-menu' } holdToDisplay={ 0 /* ms */ }>
          <div className={ 'language-abbreviation' }> { languageObject.chosenLang.abbreviation }</div>
        </ContextMenuTrigger>
        <ContextMenu id={ 'language-context-menu' }>
          { languageObject.allLanguages.map( (langItem,i)=>
            <div key={ i }>
              { i > 0 ? <MenuItem divider/> : '' }
              <MenuItem key={ i } className='list-group-item'
                onClick={ this.selectLanguage({ id: langItem.id}) }>
                { UT.localise(langItem.name, APP) }
              </MenuItem>
            </div>
            )
          }
        </ContextMenu>
      </div>
    )
  }
  selectLanguage = ({ id })=>(e)=>{
    let lang = id || 'en' // if no passed value default to English
    this.APP.setState({ lang }, ()=>{ // change the language in the component App whose state all other components can access
      moment.locale(lang) // change all date units to selected language or English if unknown
      // LS.saveLanguage(this.APP.state.lang) // save language preference in local storage
    })
  }
  getLanguageInfoById =({ id })=>{
    const allLanguages = [
      {'id': 'en', 'abbreviation':'EN', 'name':'English'},
      {'id': 'fr', 'abbreviation':'FR', 'name':'French'},
      {'id': 'es', 'abbreviation':'ES', 'name':'Spanish'}
    ]
    const chosenLang = allLanguages.find(langItem => langItem.id === id) || 'en'
    return { allLanguages, chosenLang }
  }
}

ChooseLanguage.contextTypes ={
  ctxStore: PropTypes.object
}
export default ChooseLanguage
