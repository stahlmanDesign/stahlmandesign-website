import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UT } from '../../libraries/utilities'
import './styles.css'

class Footer extends Component {
  componentWillMount(){
    this.APP = this.context.ctxStore.APP
  }
  render() {
    const APP = this.APP
    const onlinePresence = [
      { url: 'https://www.linkedin.com/in/justinstahlman',
        label: 'LinkedIn'
      },
      { url: 'https://github.com/stahlmanDesign',
        label: 'GitHub'
      },
      { url: 'http://stackoverflow.com/users/5045055/stahlmandesign',
        label: 'StackOverflow'
      },
      { url: 'http://impactjs.com/forums/user/stahlmanDesign',
        label: 'ImpactJS'
      },
      { url: 'http://www.meetup.com/fr/members/96407332',
        label: 'Meetup'
      },
      { url: 'https://www.quora.com/Justin-Stahlman',
        label: 'Quora'
      },
      { url: 'https://3dwarehouse.sketchup.com/by/stahlmandesign',
        label: '3D Warehouse'
      },
      { url: 'https://twitter.com/jstahlman',
        label: 'Twitter'
      },
      { url: 'http://www.flickr.com/people/stahlmandesign',
        label: 'Flickr'
      },
      { url: 'https://soundcloud.com/jstahlman',
        label: 'SoundCloud'
      },
      { url: 'https://vimeo.com/stahlmandesign',
        label: 'Vimeo'
      },
    ]
    return (
      <footer className='Footer'>
        <div className='container text-left'>
          <p className='small m-0 mb-1'>React, Node, Javascript, Infographics, 3D modelling, video games, animation, data visualisation</p>
          <p className='small m-0 mb-1'>Infographie, modélisation 3D, art, animation et visualisation des données</p>
          <p className='small m-0 mb-1'>Проекты, 3Д-моделирование и анимация</p>
          <div className='small'>
            <strong>{ UT.localise('FindMeHere', APP) + ': ' }</strong>
            { onlinePresence.map((op,i) =>
              <Link key={ i } to={ op.url } target='_blank'>
                <span className=''>{ op.label + (i < onlinePresence.length-1 ? ', ' : '') }</span>
              </Link>
            )}
            {/*<p>I accept Bitcoin: <strong>1CZM6wQrtt4biuomqNiv2zNEbFhyRjftuB</strong></p>*/}
          </div>
          <p>
            <Link to='https://en.wikipedia.org/wiki/Single-page_application' target='_blank'>
              { UT.localise('ThisSiteIsASPA', APP) }
            </Link>
          </p>

          <p>© 2004-2018 Justin Stahlman</p>
        </div>

      </footer>
    )
  }
}

Footer.contextTypes ={
  ctxStore: PropTypes.object
}
export default Footer
