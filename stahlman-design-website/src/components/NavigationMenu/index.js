import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import ChooseLanguage from '../ChooseLanguage'

import './styles.css'

class NavigationMenu extends Component {

  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    const APP = this.APP

    const menuItems = [
      { localisationKey: 'StahlmanDesign',
        path: '/',
        subMenuItems: []
      },
      { localisationKey: 'Code',
        path: null,
        subMenuItems: [{
          localisationKey: 'JavaScriptReactNode',
          path: '/javascript'
        },{
          localisationKey: 'ActionScriptFlash',
          path: '/flash'
        }]
      },
      { localisationKey: 'Games',
        path: null,
        subMenuItems: [{
          localisationKey: 'RetroPixelGames',
          path: '/games'
        }]
      },
      { localisationKey: 'Infographics',
        path: null,
        subMenuItems: [{
          localisationKey: 'Journalism',
          path: '/journalism',
        },{
          localisationKey: 'En5MinutesOld',
          path: '/en5minutes/1'
        },{
          localisationKey: 'En5MinutesNew',
          path: '/en5minutes/2'
        }]
      },
      { localisationKey: 'Animation',
        path: '/animation',
        subMenuItems: []
      },
      { localisationKey: 'Illustration',
        path: '/illustration',
        subMenuItems: []
      },
      { localisationKey: 'Music',
        path: '/music',
        subMenuItems: []
      },
      { localisationKey: 'Blog',
        path: '//blog.stahlmandesign.com',
        target: '_blank',
        subMenuItems: []
      },
      { localisationKey: 'CV',
        path: '/cv',
        subMenuItems: []
      },
    ]
    return <div className='NavigationMenu d-flex pl-3 pr-3'>

      { menuItems.map((mi, i) =>
        mi.subMenuItems && mi.subMenuItems.length > 0
        ?
        <Fragment key={ i }>
        <ContextMenuTrigger id={ 'context-menu-uid-' + mi.localisationKey } holdToDisplay={ 0 /* ms */ }>
          <div className={ 'menu-item sd-light' }> { UT.localise(mi.localisationKey, APP) } <i className='fa fa-caret-down'/></div>
        </ContextMenuTrigger>
        <ContextMenu id={ 'context-menu-uid-' + mi.localisationKey }>
          { mi.subMenuItems.map( (subMenuItem,ii)=>
            <div key={ ii }>
              { ii > 0 ? <MenuItem divider/> : '' }
              <MenuItem key={ i } className='subMenuItem'
                onClick={ ()=>{} }>
                <Link to={ subMenuItem.path || '/' }
                  target={ subMenuItem.target || '' }
                  className={ 'sd-dark' }> { UT.localise(subMenuItem.localisationKey, APP)  } </Link>
              </MenuItem>
            </div>
            )
          }
        </ContextMenu>
        </Fragment>
        : <Link key={ i } to={ mi.path || '/' }
            target={ mi.target || '' }
            className={ 'menu-item sd-light' }> { UT.localise(mi.localisationKey, APP) } </Link>
      )}

      <div className='menu-item sd-light ml-auto'><ChooseLanguage/></div>
    </div>
  }
}


NavigationMenu.contextTypes ={
  ctxStore: PropTypes.object
}
export default NavigationMenu
