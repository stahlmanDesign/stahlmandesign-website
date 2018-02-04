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
        url: '/',
        subMenuItems: []
      },
      { localisationKey: 'Code',
        url: null,
        subMenuItems: [{
          localisationKey: 'ReactNodeJs',
          url: '/web'
        },{
          localisationKey: 'FlashInteractiveAs3',
          url: '/flash'
        }]
      },
      { localisationKey: 'Games',
        url: '/games',
        subMenuItems: []
      },
      { localisationKey: 'Infographics',
        url: '/infographics',
        subMenuItems: [{
          localisationKey: 'NewsGraphics',
          url: '/newsgraphics',
        },{
          localisationKey: 'En5Minutes',
          url: '/en5minutes'
        }]
      },
      { localisationKey: 'Animation',
        url: '/animation',
        subMenuItems: []
      },
      { localisationKey: 'Illustration',
        url: '/illustration',
        subMenuItems: []
      },
      { localisationKey: 'Music',
        url: '/music',
        subMenuItems: []
      },
      { localisationKey: 'Blog',
        url: '//blog.stahlmandesign.com',
        target: '_blank',
        subMenuItems: []
      },
      { localisationKey: 'CV',
        url: '/cv',
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
                <Link to={ subMenuItem.url || '/' }
                  target={ subMenuItem.target || '' }
                  className={ 'sd-dark' }> { subMenuItem.localisationKey } </Link>
              </MenuItem>
            </div>
            )
          }
        </ContextMenu>
        </Fragment>
        : <Link key={ i } to={ mi.url || '/' }
            target={ mi.target || '' }
            className={ 'menu-item sd-light' }> { mi.localisationKey } </Link>
      )}

      <div className='menu-item sd-light ml-auto'><ChooseLanguage/></div>
    </div>
  }
}


NavigationMenu.contextTypes ={
  ctxStore: PropTypes.object
}
export default NavigationMenu
